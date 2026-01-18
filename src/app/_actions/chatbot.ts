'use server';

import { getChatbotResponse, ChatbotConfig } from '@/services/chatbotService';

export interface ChatbotActionResponse {
    success: boolean;
    message: string;
    error?: string;
    conversationId?: string;
}

export async function getChatbotResponseAction(
    userMessage: string,
    customConfig?: Partial<ChatbotConfig>,
    conversationId?: string
): Promise<ChatbotActionResponse> {
    try {
        const response = await getChatbotResponse(userMessage, customConfig, conversationId);
        return response;
    } catch (error) {
        console.error('Chatbot action error:', error);
        return {
            success: false,
            message: 'Sorry, I encountered an error. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}
