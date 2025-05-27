"use client";
import { useState } from "react";
import Image from "next/image";

interface Message {
    id: number;
    text: string;
    isBot: boolean;
    timestamp: Date;
}

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello, welcome to SJSFI! How can I help you today?",
            isBot: true,
            timestamp: new Date(),
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");

    const quickResponses = [
        "Admission Requirements",
        "School Programs",
        "Contact Information",
        "School Fees",
        "Enrollment Process",
    ];

    const handleSendMessage = () => {
        if (inputMessage.trim() === "") return;

        const newMessage: Message = {
            id: messages.length + 1,
            text: inputMessage,
            isBot: false,
            timestamp: new Date(),
        };

        setMessages([...messages, newMessage]);
        setInputMessage("");

        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: messages.length + 2,
                text: getBotResponse(inputMessage),
                isBot: true,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    const getBotResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes("admission") || lowerMessage.includes("enroll")) {
            return "For admission inquiries, please visit our 'Be a Josephian' page or contact our admissions office at (02) 987-6543.";
        } else if (
            lowerMessage.includes("program") ||
            lowerMessage.includes("course")
        ) {
            return "We offer comprehensive programs from Nursery to Senior High School. Visit our 'What We Offer' page for detailed information.";
        } else if (
            lowerMessage.includes("contact") ||
            lowerMessage.includes("phone")
        ) {
            return "You can reach us at (02) 987-6543 or email us at info@sjsfi.edu.ph. We're located in Fairview, Quezon City.";
        } else if (
            lowerMessage.includes("fee") ||
            lowerMessage.includes("tuition")
        ) {
            return "For detailed information about school fees and payment options, please contact our finance office or visit the school for a consultation.";
        } else if (
            lowerMessage.includes("career") ||
            lowerMessage.includes("job")
        ) {
            return "We're always looking for passionate educators! Check our Careers page for current openings or send your resume to hr@sjsfi.edu.ph.";
        } else {
            return "Thank you for your message. For specific inquiries, please contact our office at (02) 987-6543 or visit us in person.";
        }
    };

    const handleQuickResponse = (response: string) => {
        setInputMessage(response);
    };

    return (
        <div className="fixed bottom-5 right-5 z-[9999]">
            {/* Chat Window */}
            {open && (
                <div className="absolute bottom-16 right-0 w-80 h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-2">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#800000] to-red-800 text-white p-3 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                <Image
                                    src="/assets/school-logo.webp"
                                    alt="SJSFI Logo"
                                    width={35}
                                    height={35}
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">SJSFI Assistant</h3>
                                <div className="flex items-center space-x-1">
                                    <svg
                                        className="w-2 h-2 text-green-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <circle cx="10" cy="10" r="10" />
                                    </svg>
                                    <p className="text-xs text-red-100">Online now</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white/80 hover:text-white text-lg"
                        >
                            x
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.isBot ? "justify-start" : "justify-end"
                                    }`}
                            >
                                <div
                                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${message.isBot
                                            ? "bg-white text-gray-800 shadow-sm border"
                                            : "bg-[#800000] text-white"
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Responses */}
                    <div className="px-4 py-2 bg-white border-t">
                        <div className="flex flex-wrap gap-1 mb-2">
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

                    {/* Input */}
                    <div className="p-4 bg-white border-t">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 px-3 py-2 text-black border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000]"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={inputMessage.trim() === ""}
                                className="px-3 py-2 bg-[#800000] text-white rounded-lg hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className={`bg-gradient-to-r from-[#800000] to-red-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ${open ? "rotate-180" : ""
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
