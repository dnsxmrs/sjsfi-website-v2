'use client';
import { useState } from 'react';

export default function Chatbot() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button
                onClick={() => setOpen(!open)}
                className="bg-red-600 text-[white] p-4 rounded-full shadow-lg"
            >
                💬
            </button>

            {open && (
                <div className="absolute bottom-16 right-0 w-80 h-96 bg-white shadow-black shadow-2xl p-4">
                    <p className="text-black">Chatbot UI goes here...</p>
                </div>
            )}
        </div>
    );
}
