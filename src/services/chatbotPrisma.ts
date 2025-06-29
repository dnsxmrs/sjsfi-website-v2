'use server';

import { prisma } from '@/services/prisma';

export async function fetchAllQueriesFromDB() {
    return await prisma.query.findMany({
        where: {
            isActive: true,
            deletedAt: null,
            NOT: { embedding: { isEmpty: true } }
        },
        include: { QueryTag: true }
    });
}

interface ChatbotInteractionData {
    // Assuming embedding is an array of numbers
    question: string;
    response: string;
    queryId: string;
    confidence: number;
}

export async function storeChatbotInteraction(data: ChatbotInteractionData) {
    try {
        const savedResponse = await prisma.response.create({
            data: {
                id: crypto.randomUUID(),
                userInput: data.question,
                reply: data.response,
                queryId: data.queryId,
                confidence: data.confidence,
                createdAt: new Date(),
            },
        });
        return { success: true, response: savedResponse };
    } catch (error) {
        console.error('Failed to store chatbot interaction:', error);
        return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
}
