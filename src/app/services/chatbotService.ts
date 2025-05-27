// Chatbot Service for handling message responses
// This service supports both mock responses and Gemini AI integration

import { GoogleGenAI } from "@google/genai";

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
        if (!GEMINI_API_KEY) {
            throw new Error("Gemini API key not found");
        }

        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        // Get minimal conversation history
        let conversationMessages: ChatMessage[] = [];
        if (conversationId) {
            conversationMessages = getConversationHistory(conversationId);
        }

        // Build minimal context for API call
        const contents: { role: string; parts: { text: string }[] }[] = [];

        // Only include system instructions for the first message or when history is empty
        const isFirstMessage = conversationMessages.length === 0;

        if (isFirstMessage) {
            // Compact system instructions included only in first message
            const compactSystemPrompt = `You are Maria, SJSFI's virtual assistant. Be helpful, warm, professional. SJSFI info: Fairview QC, (02) 8693 5661, Nursery-SHS programs.`;

            contents.push({
                role: "user",
                parts: [{ text: `${compactSystemPrompt}\n\nUser: ${userMessage}` }],
            });
        } else {
            // Include only recent conversation history (last 4 messages max)
            const recentMessages = conversationMessages.slice(-4);

            recentMessages.forEach((msg) => {
                if (msg.role !== "system") {
                    contents.push({
                        role: msg.role === "user" ? "user" : "model",
                        parts: [{ text: msg.content }],
                    });
                }
            });

            // Add current user message
            contents.push({
                role: "user",
                parts: [{ text: userMessage }],
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-exp",
            contents: contents,
        });

        return (
            response.text ||
            "I'm sorry, I couldn't process that. Please call (02) 8693 5661."
        );
    } catch (error) {
        console.error("Gemini AI Error:", error);
        return getMockResponse(userMessage); // Fallback to mock response
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
 * Main chatbot response function with minimal token usage
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
        // If no conversation ID provided, start a new conversation
        let activeConversationId = conversationId;
        if (!activeConversationId) {
            activeConversationId = startNewConversation();
        }

        const response = await simulateApiCall(
            userMessage,
            config,
            activeConversationId
        );
        return response;
    } catch (error) {
        return {
            success: false,
            message: "Technical difficulties. Please call (02) 8693 5661.",
            error: error instanceof Error ? error.message : "Service unavailable",
            conversationId,
        };
    }
};

/**
 * Function to handle streaming responses with conversation history
 */
export const getChatbotResponseStream = async (
    userMessage: string,
    onChunk: (chunk: string) => void,
    customConfig?: Partial<ChatbotConfig>,
    conversationId?: string
): Promise<ChatbotResponse> => {
    const response = await getChatbotResponse(
        userMessage,
        customConfig,
        conversationId
    );

    if (response.success) {
        // Simulate streaming by sending the message in chunks
        const words = response.message.split(" ");
        for (let i = 0; i < words.length; i++) {
            setTimeout(() => {
                onChunk(words.slice(0, i + 1).join(" "));
            }, i * 100);
        }
    }

    return response;
};

/**
 * Reset conversation history
 */
export const resetConversation = (conversationId: string): boolean => {
    const deleted = conversationHistories.delete(conversationId);
    return deleted;
};

/**
 * Get conversation summary
 */
export const getConversationSummary = (
    conversationId: string
): {
    messageCount: number;
    startTime: Date | null;
    lastActivity: Date | null;
} => {
    const conversation = conversationHistories.get(conversationId);
    if (!conversation) {
        return { messageCount: 0, startTime: null, lastActivity: null };
    }

    return {
        messageCount: conversation.messages.length,
        startTime: conversation.startedAt,
        lastActivity: conversation.lastActivity,
    };
};

/**
 * Update system instructions dynamically
 */
export const updateSystemInstructions = (
    conversationId: string,
    newInstructions: Partial<SystemInstructions>
): boolean => {
    const conversation = conversationHistories.get(conversationId);
    if (!conversation || conversation.messages.length === 0) {
        return false;
    }

    const updatedInstructions = { ...SYSTEM_INSTRUCTIONS, ...newInstructions };
    const systemMessage = conversation.messages[0];

    if (systemMessage.role === "system") {
        systemMessage.content = `${updatedInstructions.persona
            }\n\nGuidelines:\n${updatedInstructions.guidelines.join(
                "\n"
            )}\n\nResponse Style: ${updatedInstructions.responseStyle}\n\n${updatedInstructions.knowledgeBase
            }`;
        return true;
    }

    return false;
};

/**
 * Health check function to verify service availability
 */
export const checkChatbotHealth = async (): Promise<boolean> => {
    try {
        const response = await getChatbotResponse("health check", {
            responseDelay: 500,
        });
        return response.success;
    } catch {
        return false;
    }
};

// Export configuration and system instructions for external use
export { DEFAULT_CONFIG, SYSTEM_INSTRUCTIONS };
