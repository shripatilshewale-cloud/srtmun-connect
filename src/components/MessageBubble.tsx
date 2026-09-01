import React, { useState } from 'react';
import { Bot, User, Volume2, Square, Copy, Check, Play, VolumeX } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';
import { detectLanguage } from '../utils/speech';

export interface ChatMessageItem {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
}

interface MessageBubbleProps {
  message: ChatMessageItem;
  isSpeaking: boolean;
  onToggleSpeak: (msgId: string, text: string) => void;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isSpeaking,
  onToggleSpeak
}) => {
  const { t } = useLanguage();
  const [isCopied, setIsCopied] = useState(false);
  const isBot = message.sender === 'assistant';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Determine detected language tag for assistive preview
  const detected = isBot ? detectLanguage(message.text) : 'en';
  const langBadge = detected === 'mr' ? 'मराठी' : detected === 'hi' ? 'हिंदी' : 'English';

  return (
    <div className={`flex gap-3 sm:gap-4 ${isBot ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-1 duration-200`}>
      {isBot && (
        <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 font-bold text-xs mt-1">
          <Bot className="w-5 h-5" />
        </div>
      )}

      <div className={`max-w-[88%] sm:max-w-[82%] space-y-1.5 ${isBot ? 'items-start' : 'items-end'}`}>
        {/* Message Bubble Card */}
        <div
          id={`chat-bubble-${message.id}`}
          className={`rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xs text-sm leading-relaxed transition-all ${
            isBot
              ? isSpeaking
                ? 'bg-white text-slate-800 border-2 border-blue-500 shadow-md shadow-blue-500/10'
                : 'bg-white text-slate-800 border border-slate-200/90'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
          }`}
        >
          {isBot ? (
            <div className="prose prose-sm max-w-none text-slate-800 space-y-2">
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          ) : (
            <p className="whitespace-pre-wrap font-medium">{message.text}</p>
          )}
        </div>

        {/* Bottom Actions Strip: Time, Voice Controls, Speaking Indicator, Copy */}
        <div className={`flex items-center gap-3 text-[11px] text-slate-400 px-2 flex-wrap ${isBot ? 'justify-start' : 'justify-end'}`}>
          <span>{message.timestamp}</span>

          {isBot && (
            <div className="flex items-center gap-2 flex-wrap">
              {/* Language Pill */}
              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-semibold">
                {langBadge}
              </span>

              {/* Complete Voice Readout / Text-to-Speech (TTS) Button */}
              {isSpeaking ? (
                /* Active Speaking Indicator + Stop Button */
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-bold animate-pulse shadow-2xs">
                  {/* Equalizer Soundwave Animation */}
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2.5 bg-red-500 rounded-full animate-bounce" />
                    <span className="w-0.5 h-3.5 bg-red-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                    <span className="w-0.5 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>

                  <span className="text-[11px]">{t.chatbot.listening ? 'बोलत आहे...' : 'Speaking...'}</span>

                  <button
                    type="button"
                    id={`tts-stop-btn-${message.id}`}
                    onClick={() => onToggleSpeak(message.id, message.text)}
                    title={t.chatbot.stop}
                    className="ml-1 p-1 hover:bg-red-100 text-red-700 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Square className="w-3 h-3 fill-current text-red-600" />
                    <span className="text-[11px] underline">{t.chatbot.stop}</span>
                  </button>
                </div>
              ) : (
                /* Play Button */
                <button
                  type="button"
                  id={`tts-play-btn-${message.id}`}
                  onClick={() => onToggleSpeak(message.id, message.text)}
                  title={t.chatbot.speak}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-700 border border-blue-200/60 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current text-blue-600" />
                  <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{t.chatbot.speak}</span>
                </button>
              )}

              {/* Copy Response Button */}
              <button
                type="button"
                id={`copy-btn-${message.id}`}
                onClick={handleCopy}
                className="p-1 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                title="Copy text"
              >
                {isCopied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {!isBot && (
        <div className="w-9 h-9 rounded-2xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-xs mt-1">
          <User className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};
