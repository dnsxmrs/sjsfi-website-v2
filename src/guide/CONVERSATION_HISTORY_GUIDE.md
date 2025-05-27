# Chatbot Conversation History & System Instructions Guide

## 🆕 New Features

### 1. **Conversational History**

- Chatbot now remembers previous messages in a conversation
- Maintains context across multiple exchanges
- Automatic cleanup of old conversations (30-minute timeout)
- Configurable history length (default: 20 messages)

### 2. **System Instructions & Persona**

- Defined chatbot personality: "Maria Santos" - friendly SJSFI assistant
- Clear behavioral guidelines and response style
- Comprehensive school knowledge base
- Dynamic instruction updates possible

### 3. **Session Management**

- Unique conversation IDs for each session
- Conversation summaries and analytics
- Manual conversation reset functionality

## 🚀 How to Use in React Components

### Basic Implementation

```typescript
import React, { useState, useEffect } from 'react';
import {
    getChatbotResponse,
    startNewConversation,
    getConversationHistory,
    getConversationSummary,
    resetConversation
} from '../services/chatbotService';

const ChatbotComponent = () => {
    const [conversationId, setConversationId] = useState<string | null>(null);
    const [messages, setMessages] = useState<Array<{role: string, content: string}>>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Initialize conversation on component mount
    useEffect(() => {
        const newConversationId = startNewConversation();
        setConversationId(newConversationId);
        
        // Add welcome message
        setMessages([{
            role: 'assistant',
            content: 'Hello! I\'m Maria, your virtual assistant for SJSFI. How can I help you today?'
        }]);
    }, []);

    const sendMessage = async () => {
        if (!userInput.trim() || !conversationId) return;

        const userMessage = userInput.trim();
        setUserInput('');
        setIsLoading(true);

        // Add user message to UI
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

        try {
            // Get chatbot response with conversation history
            const response = await getChatbotResponse(
                userMessage,
                { responseDelay: 1000 }, // Optional config
                conversationId
            );

            if (response.success) {
                // Add bot response to UI
                setMessages(prev => [...prev, { 
                    role: 'assistant', 
                    content: response.message 
                }]);
            } else {
                console.error('Chatbot error:', response.error);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const resetChat = () => {
        if (conversationId) {
            resetConversation(conversationId);
            const newConversationId = startNewConversation();
            setConversationId(newConversationId);
            setMessages([{
                role: 'assistant',
                content: 'Hello! I\'m Maria, your virtual assistant for SJSFI. How can I help you today?'
            }]);
        }
    };

    return (
        <div className="chatbot-container">
            {/* Chat messages */}
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        {msg.content}
                    </div>
                ))}
                {isLoading && <div className="typing-indicator">Maria is typing...</div>}
            </div>

            {/* Input area */}
            <div className="input-area">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    disabled={isLoading}
                />
                <button onClick={sendMessage} disabled={isLoading || !userInput.trim()}>
                    Send
                </button>
                <button onClick={resetChat} className="reset-btn">
                    New Chat
                </button>
            </div>
        </div>
    );
};

export default ChatbotComponent;
```

### Advanced Features

#### 1. Conversation Analytics

```typescript
const ConversationAnalytics = ({ conversationId }: { conversationId: string }) => {
    const [summary, setSummary] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (conversationId) {
            const convSummary = getConversationSummary(conversationId);
            const convHistory = getConversationHistory(conversationId);
            setSummary(convSummary);
            setHistory(convHistory);
        }
    }, [conversationId]);

    return (
        <div className="conversation-analytics">
            <h3>Conversation Analytics</h3>
            <p>Messages: {summary?.messageCount || 0}</p>
            <p>Started: {summary?.startTime?.toLocaleString()}</p>
            <p>Last Activity: {summary?.lastActivity?.toLocaleString()}</p>
            
            <details>
                <summary>Full History ({history.length} messages)</summary>
                {history.map((msg, index) => (
                    <div key={msg.id} className={`history-msg ${msg.role}`}>
                        <strong>{msg.role}:</strong> {msg.content}
                    </div>
                ))}
            </details>
        </div>
    );
};
```

#### 2. Dynamic Persona Switching

```typescript
import { updateSystemInstructions } from '../services/chatbotService';

const PersonaSwitcher = ({ conversationId }: { conversationId: string }) => {
    const personas = {
        default: {
            persona: "You are Maria Santos, a friendly virtual assistant for SJSFI...",
            responseStyle: "Warm and professional"
        },
        casual: {
            persona: "You are Alex, a casual and friendly assistant who uses modern language...",
            responseStyle: "Casual and friendly with emojis"
        },
        formal: {
            persona: "You are Dr. Rodriguez, a formal academic advisor...",
            responseStyle: "Very formal and academic"
        }
    };

    const switchPersona = (personaKey: string) => {
        if (conversationId && personas[personaKey]) {
            const success = updateSystemInstructions(conversationId, personas[personaKey]);
            if (success) {
                alert(`Switched to ${personaKey} persona!`);
            }
        }
    };

    return (
        <div className="persona-switcher">
            <h4>Chat Personality</h4>
            {Object.keys(personas).map(key => (
                <button key={key} onClick={() => switchPersona(key)}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
            ))}
        </div>
    );
};
```

## 🔧 Configuration Options

### ChatbotConfig Interface

```typescript
interface ChatbotConfig {
    responseDelay: number;        // Delay before response (ms)
    enableTypingIndicator: boolean; // Show typing indicator
    maxRetries: number;           // Max retry attempts
    useAI: boolean;              // Use Gemini AI vs mock responses
    maxHistoryLength: number;     // Max messages to remember
    sessionTimeout: number;       // Session timeout (minutes)
}
```

### System Instructions Interface

```typescript
interface SystemInstructions {
    persona: string;             // Chatbot personality description
    guidelines: string[];        // Behavioral guidelines
    responseStyle: string;       // How to respond
    knowledgeBase: string;       // School information
}
```

## 🔥 Key Benefits

1. **Context Awareness**: Chatbot remembers what you talked about
2. **Consistent Personality**: Maria Santos persona provides consistent experience
3. **Better Conversations**: Natural flow with reference to previous messages
4. **Flexible Configuration**: Easy to customize behavior and appearance
5. **Performance Optimized**: Automatic cleanup and memory management

## 🚨 Important Notes

- Conversations are stored in memory and will reset on server restart
- For production, consider implementing persistent storage (database)
- API keys should be properly secured in environment variables
- The 30-minute timeout helps prevent memory leaks

## 🔄 Migration from Previous Version

If you're updating from the previous chatbot version:

```typescript
// OLD WAY
const response = await getChatbotResponse("Hello");

// NEW WAY (with conversation history)
const conversationId = startNewConversation();
const response = await getChatbotResponse("Hello", undefined, conversationId);
```

The old way still works (creates new conversation automatically), but you won't get conversation memory benefits.
