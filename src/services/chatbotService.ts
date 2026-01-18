// Chatbot Service for handling message responses
// This service supports both mock responses and Gemini AI integration

// import { GoogleGenAI } from "@google/genai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "./prisma";
import { fetchAllQueriesFromDB, storeChatbotInteraction } from "./chatbotPrisma";

export interface ChatbotResponse {
    success: boolean;
    message: string;
    error?: string;
    conversationId?: string;
}

export interface ChatMessage {
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
    timestamp: Date;
}

export interface ConversationHistory {
    id: string;
    messages: ChatMessage[];
    startedAt: Date;
    lastActivity: Date;
}

export interface ChatbotConfig {
    responseDelay: number;
    enableTypingIndicator: boolean;
    maxRetries: number;
    useAI: boolean;
    maxHistoryLength: number; // Maximum number of messages to keep in history
    sessionTimeout: number; // Minutes before conversation expires
}

export interface SystemInstructions {
    persona: string;
    guidelines: string[];
    responseStyle: string;
    knowledgeBase: string;
}

// Token-optimized configuration
const DEFAULT_CONFIG: ChatbotConfig = {
    responseDelay: 1000,
    enableTypingIndicator: true,
    maxRetries: 3,
    useAI: true, // Set to true to use Gemini AI
    maxHistoryLength: 8, // Keep only last 6 messages (3 exchanges)
    sessionTimeout: 15, // Shorter timeout to reduce memory usage
};

// Minimal system instructions to reduce token usage
const SYSTEM_INSTRUCTIONS: SystemInstructions = {
    persona: "You are Maria, SJSFI's virtual assistant. Be helpful and friendly.",
    guidelines: [
        "Be warm and professional",
        "Help with school inquiries",
        "Direct to contacts if unsure",
    ],
    responseStyle: "Brief and helpful",
    knowledgeBase: "Saint Joseph School of Fairview Inc. (SJSFI): Phase 8, Atherton, Quezon City, 1121 Metro Manila, sjsfi96@gmail, (02) 8693 5661, Nursery-SHS programs",
};

// In-memory storage for conversation histories
const conversationHistories = new Map<string, ConversationHistory>();

/**
 * Conversation management functions
 */

// Generate unique conversation ID
const generateConversationId = (): string => {
    return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Generate unique message ID
const generateMessageId = (): string => {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Create new conversation with minimal system message
export const startNewConversation = (): string => {
    const conversationId = generateConversationId();

    conversationHistories.set(conversationId, {
        id: conversationId,
        messages: [], // Start empty to save tokens
        startedAt: new Date(),
        lastActivity: new Date(),
    });

    return conversationId;
};

// Add message to conversation
const addMessageToConversation = (
    conversationId: string,
    role: "user" | "assistant",
    content: string
): void => {
    const conversation = conversationHistories.get(conversationId);
    if (!conversation) return;

    const message: ChatMessage = {
        id: generateMessageId(),
        role,
        content,
        timestamp: new Date(),
    };
    conversation.messages.push(message);
    conversation.lastActivity = new Date();

    // Keep only recent messages to minimize token usage
    const maxLength = DEFAULT_CONFIG.maxHistoryLength;
    if (conversation.messages.length > maxLength) {
        conversation.messages = conversation.messages.slice(-maxLength);
    }
};

// Get conversation history
export const getConversationHistory = (
    conversationId: string
): ChatMessage[] => {
    const conversation = conversationHistories.get(conversationId);
    return conversation ? conversation.messages : [];
};

// Clean up expired conversations
const cleanupExpiredConversations = (): void => {
    const now = new Date();
    const timeoutMs = DEFAULT_CONFIG.sessionTimeout * 60 * 1000; // Convert minutes to milliseconds

    for (const [id, conversation] of conversationHistories.entries()) {
        if (now.getTime() - conversation.lastActivity.getTime() > timeoutMs) {
            conversationHistories.delete(id);
        }
    }
};

/**
 * Mock response function that simulates keyword-based responses
 * This will be replaced with actual AI API calls later
 */
const getMockResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("admission") || lowerMessage.includes("enroll")) {
        return "For admissions, contact us at (02) 8693 5661.";
    } else if (
        lowerMessage.includes("program") ||
        lowerMessage.includes("course")
    ) {
        return "We offer Nursery to Senior High School programs.";
    } else if (
        lowerMessage.includes("contact") ||
        lowerMessage.includes("phone")
    ) {
        return "Call us at (02) 8693 5661 or visit us in Fairview, QC.";
    } else if (lowerMessage.includes("fee") || lowerMessage.includes("tuition")) {
        return "For fees, please contact our finance office at (02) 8693 5661.";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hello! How can I help you with SJSFI today?";
    } else if (lowerMessage.includes("thank")) {
        return "You're welcome! Anything else I can help with?";
    } else {
        return "For specific inquiries, please call (02) 8693 5661.";
    }
};

/**
 * Token-optimized Gemini AI response function
 */
const getGeminiResponse = async (
    userMessage: string,
    conversationId?: string
): Promise<string> => {
    try {
        const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!GEMINI_API_KEY) throw new Error("Gemini API key not found");

        // FIXED: Correct class name
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

        // System instruction for the AI persona
        const systemInstruction = `You are Joselito, the official virtual assistant for Saint Joseph School of Fairview Inc. (SJSFI).

SJSFI Details:
- Full Name: Saint Joseph School of Fairview Inc. (SJSFI)
- Location: Phase 8, Atherton, North Fairview, Quezon City, 1121 Metro Manila
- Phone: (02) 8693 5661
- Email: sjsfi96@gmail.com
- Programs: Nursery to Senior High School

Your Role:
- Always assume questions are about SJSFI
- Be warm, professional, and helpful
- Provide accurate information about the school
- If you don't know something specific, direct them to contact the school
- Keep responses concise and friendly`;

        // Use gemini-2.5-flash with system instruction
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: systemInstruction
        });

        let conversationMessages: ChatMessage[] = [];
        if (conversationId) {
            conversationMessages = getConversationHistory(conversationId);
        }

        // Format history (Note: role must be 'user' or 'model')
        const history = conversationMessages.map(msg => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }],
        }));

        const chat = model.startChat({
            history: history,
            generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7,
            },
        });

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        return response.text();

    } catch (error) {
        console.error("Gemini AI Error:", error);
        return getMockResponse(userMessage);
    }
};

/**
 * Simulates AI API call delay and potential errors
 */
const simulateApiCall = async (
    userMessage: string,
    config: ChatbotConfig,
    conversationId?: string
): Promise<ChatbotResponse> => {
    return new Promise((resolve) => {
        setTimeout(async () => {
            try {
                let message: string;

                if (config.useAI) {
                    message = await getGeminiResponse(userMessage, conversationId);
                } else {
                    message = getMockResponse(userMessage);
                }

                // Add messages to conversation history if conversation ID is provided
                if (conversationId) {
                    addMessageToConversation(conversationId, "user", userMessage);
                    addMessageToConversation(conversationId, "assistant", message);
                }

                resolve({
                    success: true,
                    message,
                    conversationId,
                });
            } catch (error) {
                resolve({
                    success: false,
                    message:
                        "I'm having trouble right now. Please try again or call (02) 8693 5661.",
                    error: error instanceof Error ? error.message : "Unknown error",
                    conversationId,
                });
            }
        }, config.responseDelay);
    });
};

/**
 * Helper to fetch all queries from the database (server component)
 */

/**
 * Main chatbot response function using RAG flow
 */
export const getChatbotResponse = async (
    userMessage: string,
    customConfig?: Partial<ChatbotConfig>,
    conversationId?: string
): Promise<ChatbotResponse> => {
    const config = { ...DEFAULT_CONFIG, ...customConfig };

    // Clean up expired conversations periodically
    cleanupExpiredConversations();

    if (!userMessage || userMessage.trim().length === 0) {
        return {
            success: false,
            message: "Please enter a message.",
            error: "Empty message",
            conversationId,
        };
    }

    try {
        // 1. Generate embedding for user question
        const userEmbedding = await generateEmbeddingExternalCopy(userMessage);

        console.log("User embedding generated:", userEmbedding);

        // 2. Fetch all queries from DB
        const allQueries = await fetchAllQueriesFromDB();

        console.log(`Fetched ${allQueries.length} queries from database.`);

        // 3. Calculate similarities
        const similarities = allQueries.map(query => ({
            query,
            similarity: cosineSimilarityExternalCopy(userEmbedding, query.embedding as number[])
        }));
        similarities.sort((a, b) => b.similarity - a.similarity);

        console.log("Similarities calculated:", similarities);
        const bestMatch = similarities[0];
        console.log("Best match found:", bestMatch);

        const similarityThreshold = 0.7;
        let prompt;
        if (bestMatch && bestMatch.similarity >= similarityThreshold) {
            prompt = `This is the user question: ${userMessage}\nThis is the best answer based on my database: ${bestMatch.query.response}`;
        } else {
            prompt = `This is the user question: ${userMessage}\nI don't have a confident answer in my database. Please provide the best possible answer.`;
        }
        // 4. Pass prompt to Gemini for final answer
        const message = await simulateApiCall(prompt, config, conversationId).then(r => r.message);
        // 5. Return the Gemini response

        const data = {
            question: userMessage,
            response: message,
            queryId: bestMatch?.query.id,
            confidence: bestMatch?.similarity,
        };

        await storeChatbotInteraction(data);

        return {
            success: true,
            message,
            conversationId,
        };
    } catch (error) {
        return {
            success: false,
            message: "Technical difficulties. Please call (02) 8693 5661.",
            error: error instanceof Error ? error.message : "Service unavailable",
            conversationId,
        };
    }
};

// dont mind the errors below this comment
// export async function createQueryExternalCopy(data: CreateQueryData) {
//     try {
//         console.log('Creating query:', data);

//         // Generate embedding for the question
//         const embedding = await generateEmbeddingExternalCopy(data.question);
//         const embeddingModel = "text-embedding-004"; // Gemini's embedding model
//         const embeddingDimensions = embedding.length;

//         // Debug UTC time creation
//         const utcTime = new Date();
//         console.log(`🕐 Creating query - UTC Time being stored: ${utcTime.toISOString()}`);
//         console.log(`🕐 Creating query - PH Time for display: ${utcTime.toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}`);

//         // Save query to database with embedding
//         const savedQuery = await prisma.query.create({
//             data: {
//                 question: data.question,
//                 response: data.response,
//                 isActive: true,
//                 embedding: embedding, // Store embedding directly in Query
//                 createdAt: new Date(),
//                 updatedAt: new Date(),
//                 tags: {
//                     connect: processedTags.map(tag => ({ id: tag.id }))
//                 },
//                 // Also create detailed embedding record
//                 QueryEmbedding: {
//                     create: {
//                         embedding: embedding,
//                         model: embeddingModel,
//                         dimensions: embeddingDimensions
//                     }
//                 }
//             },
//             include: {
//                 tags: true,
//                 QueryEmbedding: true
//             }
//         });

//         console.log('Query saved to database with embeddings:', savedQuery.id);

//         // Revalidate the page
//         revalidatePath('/admin/query-form');
//         revalidatePath('/admin/query-repository');

//         return {
//             success: true,
//             data: {
//                 id: savedQuery.id,
//                 question: savedQuery.question,
//                 response: savedQuery.response,
//                 tags: savedQuery.tags.map(tag => tag.name),
//                 isActive: savedQuery.isActive,
//                 embeddingGenerated: true,
//                 embeddingDimensions: embeddingDimensions,
//                 createdAt: savedQuery.createdAt.toISOString(),
//                 updatedAt: savedQuery.updatedAt.toISOString()
//             },
//             message: 'Query created successfully with AI embeddings!',
//         };
//     } catch (error) {
//         console.error('Error creating query:', error);
//         return {
//             success: false,
//             error: 'Failed to create query. Please try again.',
//         };
//     }
// }

// Generate embedding for text using Gemini AI
async function generateEmbeddingExternalCopy(text: string): Promise<number[]> {
    try {
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!apiKey) throw new Error('GEMINI_API_KEY not found');

        // FIXED: Use GoogleGenerativeAI
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

        const result = await model.embedContent(text);
        const embedding = result.embedding;

        if (embedding && embedding.values) {
            return embedding.values;
        } else {
            throw new Error('Invalid embedding response');
        }
    } catch (error) {
        console.error('Error generating embedding:', error);
        return new Array(768).fill(0); // This is why you were getting 0 similarity
    }
}

// Calculate cosine similarity between two vectors
function cosineSimilarityExternalCopy(vecA: number[], vecB: number[]): number {
    if (vecA.length !== vecB.length) return 0;
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    if (magA === 0 || magB === 0) return 0;
    return dotProduct / (magA * magB);
}

// Get chatbot response using vector similarity
export async function getChatbotResponseExternalCopy(userQuestion: string) {
    try {
        // Generate embedding for user's question
        const userEmbedding = await generateEmbeddingExternalCopy(userQuestion);

        // Find similar queries using embeddings
        const allQueries = await prisma.query.findMany({
            where: {
                isActive: true,
                deletedAt: null,
                NOT: {
                    embedding: {
                        isEmpty: true
                    }
                }
            },
            include: { QueryEmbedding: true }
        });

        // Calculate similarities
        const similarities = allQueries.map(query => ({
            query,
            similarity: cosineSimilarityExternalCopy(userEmbedding, query.embedding as number[])
        }));

        // Sort by similarity (highest first)
        similarities.sort((a, b) => b.similarity - a.similarity);

        // Get best match
        const bestMatch = similarities[0];
        const similarityThreshold = 0.7; // 70% similarity threshold

        if (bestMatch && bestMatch.similarity >= similarityThreshold) {
            // Log the interaction
            // await prisma.response.create({
            //     data: {
            //         userInput: userQuestion,
            //         reply: bestMatch.query.response,
            //         queryId: bestMatch.query.id,
            //         confidence: bestMatch.similarity
            //     }
            // });

            console.log('Best match found:', {
                question: bestMatch.query.question,
                response: bestMatch.query.response,
                confidence: Math.round(bestMatch.similarity * 100)
            });

            return {
                success: true,
                response: bestMatch.query.response,
                confidence: Math.round(bestMatch.similarity * 100),
                sourceQuestion: bestMatch.query.question,
                matchedQueryId: bestMatch.query.id
            };
        } else {
            // No good match found
            const fallbackResponse = "I don't have specific information about that question. Please contact our office for assistance, or try rephrasing your question.";

            // Log the interaction without query match
            // await prisma.response.create({
            //     data: {
            //         userInput: userQuestion,
            //         reply: fallbackResponse,
            //         confidence: bestMatch ? bestMatch.similarity : 0
            //     }
            // });

            console.log('No good match found, using fallback response:', fallbackResponse);

            return {
                success: true,
                response: fallbackResponse,
                confidence: bestMatch ? Math.round(bestMatch.similarity * 100) : 0,
                matchedQueryId: null
            };
        }
    } catch (error) {
        console.error('Error generating chatbot response:', error);
        return {
            success: false,
            error: 'Failed to generate response',
            response: 'I apologize, but I\'m experiencing technical difficulties. Please try again later.'
        };
    }
}

// Export configuration and system instructions for external use
export { DEFAULT_CONFIG, SYSTEM_INSTRUCTIONS };


