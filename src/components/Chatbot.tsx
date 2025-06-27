"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    getChatbotResponse,
    ChatbotResponse,
} from "../services/chatbotService";

interface Message {
    id: number;
    text: string;
    isBot: boolean;
    timestamp: Date;
}

export default function Chatbot() {
    const [inputMessage, setInputMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickResponses, setShowQuickResponses] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [conversationId, setConversationId] = useState<string | null>(null);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello, welcome to SJSFI! How can I help you today?",
            isBot: true,
            timestamp: new Date(),
        },
    ]);

    const quickResponses = [
        "Admission Requirements",
        "School Programs",
        "Contact Information",
        "School Fees",
        "Enrollment Process",
    ];

    const formatMessage = (text: string) => {
        // Split text by lines for better processing
        const lines = text.split("\n");

        return lines.map((line, lineIndex) => {
            // Process bold text (**text**)
            const parts = line.split(/(\*\*.*?\*\*)/);

            return (
                <span key={lineIndex}>
                    {parts.map((part, partIndex) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                            // Remove ** and make bold
                            const boldText = part.slice(2, -2);
                            return (
                                <strong key={partIndex} className="font-semibold">
                                    {boldText}
                                </strong>
                            );
                        }
                        return part;
                    })}
                    {lineIndex < lines.length - 1 && <br />}
                </span>
            );
        });
    };

    // Scroll to bottom function
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }; // Auto-scroll when messages change or chatbot opens
    useEffect(() => {
        if (open) {
            scrollToBottom();
        }
    }, [open, messages, isTyping]);

    const handleSendMessage = async () => {
        if (inputMessage.trim() === "") return;

        const userMessageText = inputMessage;
        const newMessage: Message = {
            id: messages.length + 1,
            text: userMessageText,
            isBot: false,
            timestamp: new Date(),
        };

        setMessages([...messages, newMessage]);
        setInputMessage("");
        setShowQuickResponses(false);
        setIsTyping(true);

        try {
            // Use the chatbot service to get response
            const response: ChatbotResponse = await getChatbotResponse(
                userMessageText,
                undefined, // Change from '' to null, or pass a proper config object
                conversationId || undefined // This will be null for first message, then contain the ID for subsequent messages
            );

            const botResponse: Message = {
                id: messages.length + 2,
                text: response.success ? response.message : response.message, // Use error message if failed
                isBot: true,
                timestamp: new Date(),
            };

            // Store the conversation ID from the response for future messages
            if (response.conversationId) {
                setConversationId(response.conversationId);
            }

            console.log('Conversation Id:', response.conversationId);
            console.log('Chatbot Response:' , botResponse.text);

            setMessages((prev) => [...prev, botResponse]);
        } catch (error) {
            // Handle unexpected errors
            const errorResponse: Message = {
                id: messages.length + 2,
                text: "I'm sorry, I'm experiencing technical difficulties. Please contact our office directly at (02) 987-6543.",
                isBot: true,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorResponse]);
            console.error("Chatbot error:", error);
        } finally {
            setIsTyping(false);
        }
    };
    const handleQuickResponse = (response: string) => {
        setInputMessage(response);
    };

    return (
        <div className="fixed bottom-5 right-5 z-[9999]">
            {/* Chat Window */}
            {open && (
                <div className="absolute bottom-16 right-0 w-80 h-[600px] bg-white rounded-lg shadow-2xl border border-gray-400 flex flex-col overflow-hidden mb-2">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#800000] to-red-800 text-white p-3 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                <Image
                                    src="/assets/school-logo.webp"
                                    alt="SJSFI Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium text-base">SJSFI Assistant</h3>
                            </div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white/80 hover:text-white text-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x-icon lucide-x"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex items-end ${message.isBot
                                    ? "justify-start space-x-1"
                                    : "justify-start space-x-reverse flex-row-reverse"
                                    }`}
                            >
                                {/* Avatar */}
                                <div className="">
                                    {message.isBot ? (
                                        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                                            <Image
                                                src="/assets/school-logo.webp"
                                                alt="SJSFI Bot"
                                                width={32}
                                                height={32}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : null}
                                </div>
                                {/* Message Bubble */}
                                <div
                                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${message.isBot
                                        ? "bg-white text-black shadow-sm border border-gray-300 rounded-bl-xs mb-1"
                                        : "bg-[#800000] text-white shadow-sm rounded-br-xs"
                                        }`}
                                >
                                    {message.isBot ? formatMessage(message.text) : message.text}
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex items-end justify-start space-x-1">
                                {/* Bot Avatar */}
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                                    <Image
                                        src="/assets/school-logo.webp"
                                        alt="SJSFI Bot"
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Typing Animation */}
                                <div className="bg-white text-black shadow-sm border border-gray-300 rounded-lg rounded-bl-sm px-4 py-3">
                                    <div className="flex items-center space-x-1">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Invisible div to scroll to */}
                        <div ref={messagesEndRef} />
                    </div>
                    {showQuickResponses && (
                        <div className="px-4 py-2 bg-white border-t">
                            <div className="flex flex-wrap gap-1">
                                {quickResponses.map((response, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuickResponse(response)}
                                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        {response}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="p-2 bg-white border-t">
                        <div className="flex space-x-2 items-center">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 min-w-0 px-3 py-2 text-black border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000]"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={inputMessage.trim() === ""}
                                className="flex-shrink-0 w-10 h-10 sm:w-auto sm:h-auto sm:px-3 sm:py-2 px-2 py-2 bg-[#800000] text-white rounded-lg hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-send-icon lucide-send sm:w-6 sm:h-6"
                                >
                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                    <path d="m21.854 2.147-10.94 10.939" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className={`bg-gradient-to-r from-[#800000] to-red-800 text-white p-4 rounded-full shadow-[0_0_40px_0_rgba(0,0,0,0.3)] hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ${open ? "rotate-180" : ""
                    }`}
            >
                {open ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}
