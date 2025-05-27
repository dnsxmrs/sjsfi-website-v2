# SJSFI Chatbot Service Documentation

## Overview

The SJSFI Chatbot Service is a modular response handling system designed to prepare for real AI integration while providing immediate functionality with mock responses. This service separates the chatbot logic from the UI component, making it easy to replace with actual AI APIs in the future.

## Architecture

### Files Structure

```bash
src/
├── app/
│   ├── components/
│   │   └── Chatbot.tsx           # Main chatbot UI component
│   └── services/
│       └── chatbotService.ts     # Response handling service
```

## Service Features

### 1. **Modular Design**

- Separated response logic from UI components
- Easy to replace with real AI integration
- Proper TypeScript interfaces for type safety

### 2. **Error Handling**

- Graceful error handling for failed responses
- Fallback error messages for users
- Logging support for debugging

### 3. **Configuration Options**

- Customizable response delay
- Typing indicator control
- Retry mechanism support

### 4. **Future-Ready**

- Async/await pattern ready for API calls
- Streaming response support (placeholder)
- Health check functionality

## API Reference

### Main Functions

#### `getChatbotResponse(userMessage: string, customConfig?: Partial<ChatbotConfig>): Promise<ChatbotResponse>`

Main function for getting chatbot responses.

**Parameters:**

- `userMessage`: The user's input message
- `customConfig`: Optional configuration overrides

**Returns:** Promise resolving to `ChatbotResponse`

**Example:**

```typescript
const response = await getChatbotResponse(
    "What are your admission requirements?"
);
if (response.success) {
    console.log(response.message);
} else {
    console.error(response.error);
}
```

#### `getChatbotResponseStream(userMessage: string, onChunk: (chunk: string) => void, customConfig?: Partial<ChatbotConfig>): Promise<ChatbotResponse>`

Placeholder for streaming responses (future AI integration).

#### `checkChatbotHealth(): Promise<boolean>`

Health check function to verify service availability.

### Interfaces

#### `ChatbotResponse`

```typescript
interface ChatbotResponse {
    success: boolean;
    message: string;
    error?: string;
}
```

#### `ChatbotConfig`

```typescript
interface ChatbotConfig {
    responseDelay: number; // Response delay in milliseconds
    enableTypingIndicator: boolean;
    maxRetries: number;
}
```

## Current Mock Responses

The service currently handles these keywords:

- **Admission/Enrollment**: Information about admission process
- **Programs/Courses**: Details about educational programs
- **Contact/Phone**: Contact information
- **Fees/Tuition**: Fee information
- **Careers/Jobs**: Career opportunities
- **Hello/Hi/Good**: Greeting responses
- **Thank/Thanks**: Acknowledgment responses
- **Location/Address/Where**: Location information
- **Schedule/Time/Hours**: Office hours
- **Default**: General contact fallback

## Integration with UI Component

The Chatbot component now uses the service with proper error handling:

```typescript
const handleSendMessage = async () => {
    // ... message setup ...

    try {
        const response: ChatbotResponse = await getChatbotResponse(
            userMessageText
        );
        // Handle response...
    } catch (error) {
        // Handle errors...
    } finally {
        setIsTyping(false);
    }
};
```

## Future AI Integration

To integrate with a real AI service (like OpenAI, Gemini, etc.), you only need to:

1. **Replace the `simulateApiCall` function** in `chatbotService.ts`
2. **Add your API configuration** (API keys, endpoints)
3. **Update error handling** for specific API errors
4. **Implement streaming** if needed

### Example AI Integration

```typescript
const getAIResponse = async (userMessage: string): Promise<ChatbotResponse> => {
    try {
        const response = await fetch("/api/ai-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        return {
            success: true,
            message: data.response,
        };
    } catch (error) {
        return {
            success: false,
            message: "AI service unavailable",
            error: error.message,
        };
    }
};
```

## Configuration

Default configuration can be customized:

```typescript
// Custom configuration example
const customConfig = {
    responseDelay: 1000, // 1 second delay
    enableTypingIndicator: true,
    maxRetries: 5,
};

const response = await getChatbotResponse(message, customConfig);
```

## Testing

The service includes a health check function for monitoring:

```typescript
const isHealthy = await checkChatbotHealth();
if (!isHealthy) {
    console.warn("Chatbot service is not responding");
}
```

## Benefits of This Architecture

1. **Maintainability**: Clear separation of concerns
2. **Testability**: Service can be unit tested independently
3. **Scalability**: Easy to add new features or responses
4. **Flexibility**: Simple to swap with different AI providers
5. **Error Resilience**: Proper error handling and fallbacks
6. **Type Safety**: Full TypeScript support

## Development Notes

- Response delay is currently set to 2 seconds for realistic user experience
- Typing indicator automatically shows/hides during response generation
- All responses include proper error handling and fallback messages
- Service is designed to be stateless for better performance
