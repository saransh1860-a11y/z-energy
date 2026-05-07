import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are "ZenAI", the elite fitness assistant for Zenergy Fitness, a premium luxury gym located in Ambala, Haryana. 
Your tone is professional, motivating, elite, and helpful. You are an expert in fitness, nutrition, and performance.

Key Info about Zenergy Fitness Ambala:
- Location: Inco road, Luxmi Nagar, Ambala, Haryana 134003.
- Hours: 6:00 AM to 9:00 PM daily.
- Services: HIIT, CrossFit, Personal Training, Yoga, Weight Training, Nutrition Guidance.
- Atmosphere: Luxury, high-end equipment, professional environment.
- Special Features: Recovery zone with infrared saunas, cryotherapy, and elite coaching.

Your goals:
1. Answer fitness and nutrition questions with scientific accuracy but accessible language.
2. Promote Zenergy Fitness services when relevant.
3. Encourage users to book a free assessment session.
4. Be brief but impactful. Use emojis occasionally for a modern feel (🔥, 💪, ⚡).
5. Always represent Zenergy Fitness as the pinnacle of local fitness.`;

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to the elite circle. I am ZenAI. How can I assist your transformation today? 🔥" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });

      const assistantContent = response.text || "Forgive me, I encountered a minor disruption in my circuits. How else can I help your training?";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "The elite servers are a bit busy. Please try again or visit us at Luxmi Nagar! 💪" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] md:w-[400px] h-[550px] glass rounded-3xl mb-4 overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20"
          >
            {/* Header */}
            <div className="p-6 bg-linear-to-r from-primary-red/20 to-black border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-red rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,51,51,0.4)]">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-black uppercase italic tracking-widest">ZenAI Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Elite Support Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 hide-scrollbar"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    msg.role === 'assistant' ? "bg-primary-red/10 text-primary-red" : "bg-white/10 text-white"
                  )}>
                    {msg.role === 'assistant' ? <Sparkles size={16} /> : <User size={16} />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm",
                    msg.role === 'assistant' 
                      ? "bg-white/[0.03] border border-white/5 text-gray-300 rounded-tl-none" 
                      : "bg-primary-red text-white ml-auto rounded-tr-none"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 animate-pulse">
                  <div className="w-8 h-8 rounded-lg bg-primary-red/10 flex items-center justify-center">
                    <Loader2 size={16} className="text-primary-red animate-spin" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-500 rounded-tl-none text-xs font-black uppercase tracking-widest">
                    AI is thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-black/40 border-t border-white/10">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about training, diet, or Zenergy..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-14 text-sm font-medium focus:outline-hidden focus:border-primary-red/50 focus:ring-1 focus:ring-primary-red/50 transition-all placeholder:text-gray-600"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-3 bg-primary-red text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="mt-4 text-[9px] text-center text-gray-600 font-bold uppercase tracking-widest">
                High Performance AI Assistant by Zenergy
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group",
          isOpen 
            ? "bg-white text-black rotate-90" 
            : "bg-primary-red text-white shadow-[0_0_30px_rgba(255,51,51,0.5)]"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} className="group-hover:animate-bounce" />}
      </motion.button>
    </div>
  );
}
