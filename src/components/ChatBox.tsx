import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, Trash2, Sparkles, AlertCircle, Volume2, Info, ChevronDown, ChevronUp, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VoiceButton } from './VoiceButton';
import { LanguageSelector } from './LanguageSelector';
import { MessageBubble, ChatMessageItem } from './MessageBubble';
import { 
  speakFullResponse, 
  stopSpeaking, 
  detectLanguage, 
  getVoiceDiagnosticStatus, 
  VoiceStatus,
  getAllVoices
} from '../utils/speech';

interface ChatBoxProps {
  initialQuery?: string;
  className?: string;
}

export const ChatBox: React.FC<ChatBoxProps> = ({
  initialQuery = '',
  className = ''
}) => {
  const { language, standardLanguage, setLanguage, t } = useLanguage();
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const [activeError, setActiveError] = useState<string | null>(null);
  const [showVoiceDebug, setShowVoiceDebug] = useState(false);
  const [voiceDiagnostics, setVoiceDiagnostics] = useState<VoiceStatus | null>(null);

  const [messages, setMessages] = useState<ChatMessageItem[]>(() => [
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: t.chatbot.welcomeMsg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasAutoSubmitted = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Load and refresh available browser voices
  const refreshVoices = () => {
    const status = getVoiceDiagnosticStatus();
    setVoiceDiagnostics(status);
  };

  useEffect(() => {
    refreshVoices();

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        refreshVoices();
      };
    }

    return () => {
      stopSpeaking();
    };
  }, []);

  // Update initial welcome message when language changes if no conversation has taken place
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].id === 'msg-welcome') {
        return [
          {
            id: 'msg-welcome',
            sender: 'assistant',
            text: t.chatbot.welcomeMsg,
            timestamp: prev[0].timestamp
          }
        ];
      }
      return prev;
    });
  }, [language, t.chatbot.welcomeMsg]);

  // Handle initial query if passed as prop
  useEffect(() => {
    if (initialQuery && !hasAutoSubmitted.current) {
      hasAutoSubmitted.current = true;
      setInputMessage(initialQuery);
      handleSendMessage(initialQuery);
    }
  }, [initialQuery]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    stopSpeaking();
    setSpeakingMsgId(null);
    setActiveError(null);

    const userMsg: ChatMessageItem = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Determine query language or detect it
      let queryLang = standardLanguage;
      if (language === 'MR') queryLang = 'marathi';
      else if (language === 'HI') queryLang = 'hindi';
      else if (language === 'EN') queryLang = 'english';
      else {
        const detected = detectLanguage(textToSend);
        queryLang = detected === 'mr' ? 'marathi' : detected === 'hi' ? 'hindi' : 'english';
      }

fetch('https://srtmun-connect-1.onrender.com/api/ai/chat', {        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          language: queryLang
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned error ${res.status}`);
      }
      const data = await res.json();
      const botResponse =
data.reply ||  (language === 'MR'
    ? 'माहिती उपलब्ध नाही.'
    : language === 'HI'
    ? 'जानकारी उपलब्ध नहीं है।'
    : 'Information is currently unavailable.');

      const botMsg: ChatMessageItem = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const fallbackText = language === 'MR'
        ? "माफ करा, सर्व्हरशी संपर्क होऊ शकला नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा किंवा थेट विद्यापीठाशी संपर्क साधा."
        : language === 'HI'
        ? "क्षमा करें, सर्वर से संपर्क नहीं हो सका। कृपया कुछ समय बाद पुनः प्रयास करें या सीधे विश्वविद्यालय से संपर्क करें।"
        : "Sorry, I am unable to connect to the SRTMUN assistant server right now. Please try again in a moment.";

      const botMsg: ChatMessageItem = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setActiveError(t.chatbot.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    stopSpeaking();
    setSpeakingMsgId(null);
    setActiveError(null);

    const resetMsg: ChatMessageItem = {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: t.chatbot.welcomeMsg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([resetMsg]);
  };

  const handleVoiceInput = (transcript: string) => {
    setInputMessage(transcript);
    handleSendMessage(transcript);
  };

  const handleToggleSpeak = (msgId: string, text: string) => {
    if (speakingMsgId === msgId) {
      stopSpeaking();
      setSpeakingMsgId(null);
    } else {
      stopSpeaking();
      setActiveError(null);
      setSpeakingMsgId(msgId);
      
      // Determine language for complete voice output
      let langForSpeech = 'en-IN';
      if (language === 'MR' || standardLanguage === 'marathi') {
        langForSpeech = 'mr';
      } else if (language === 'HI' || standardLanguage === 'hindi') {
        langForSpeech = 'hi';
      } else {
        const detected = detectLanguage(text);
        langForSpeech = detected;
      }

      speakFullResponse(
        text,
        langForSpeech,
        () => setSpeakingMsgId(null),
        (err: any) => {
          setSpeakingMsgId(null);
          const errorMsg = typeof err === 'string' ? err : err?.message || String(err);
          setActiveError(errorMsg);
        }
      );
    }
  };

  // Multilingual quick questions based on requested specifications
  const quickQuestions = language === 'MR' ? [
    "BCA म्हणजे काय?",
    "कोणते अभ्यासक्रम उपलब्ध आहेत?",
    "प्रवेश प्रक्रिया काय आहे?",
    "वसतिगृहाबद्दल माहिती द्या.",
    "SRTMUN विद्यापीठाची स्थापना व पत्ता",
    "ऑनलाइन परीक्षा निकाल कसा पहावा?"
  ] : language === 'HI' ? [
    "BCA क्या है?",
    "कौन-कौन से पाठ्यक्रम उपलब्ध हैं?",
    "प्रवेश प्रक्रिया क्या है?",
    "हॉस्टल के बारे में जानकारी दें।",
    "SRTMUN विश्वविद्यालय का पता और स्थान",
    "ऑनलाइन परीक्षा परिणाम कैसे देखें?"
  ] : [
    "What is BCA?",
    "What courses are available?",
    "What is the admission process?",
    "Tell me about hostel facilities.",
    "Where is SRTMUN located in Nanded?",
    "How to check examination results online?"
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 shrink-0">
            <Bot className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display flex items-center gap-2">
              <span>🤖 {t.chatbot.title}</span>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {t.chatbot.subtitle} • {t.chatbot.description}
            </p>
          </div>
        </div>

        {/* Action Controls: Language Toggle, Voice Diagnostics & Clear Chat */}
        <div className="flex items-center gap-2 self-start md:self-center flex-wrap">
          <button
            type="button"
            id="voice-debug-toggle-btn"
            onClick={() => setShowVoiceDebug(prev => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 transition-colors"
            title="Inspect available browser speech voices"
          >
            <Volume2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Voice Diagnostic</span>
            {showVoiceDebug ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <LanguageSelector variant="segmented" />

          <button
            type="button"
            id="chat-clear-btn"
            onClick={handleClearChat}
            title={t.chatbot.clear}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.chatbot.clear}</span>
          </button>
        </div>
      </div>

      {/* Voice Diagnostic Debug Section */}
      {showVoiceDebug && (
        <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 border border-slate-800 shadow-lg space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-sm text-white">Browser Speech Synthesis Voices Diagnostic</h3>
            </div>
            <button
              type="button"
              onClick={refreshVoices}
              className="text-xs px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded-lg transition-colors"
            >
              Refresh Voices ({voiceDiagnostics?.totalVoices || 0} found)
            </button>
          </div>

          {/* Voice Detection Status Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className={`p-3 rounded-2xl border ${voiceDiagnostics?.marathiAvailable ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-rose-950/40 border-rose-800/60 text-rose-300'}`}>
              <div className="flex items-center justify-between mb-1 font-bold">
                <span>Marathi (मराठी mr-IN):</span>
                {voiceDiagnostics?.marathiAvailable ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
              </div>
              <p className="text-[11px] opacity-90 truncate">
                {voiceDiagnostics?.marathiVoiceName || 'Not installed in OS/browser'}
              </p>
            </div>

            <div className={`p-3 rounded-2xl border ${voiceDiagnostics?.hindiAvailable ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-amber-950/40 border-amber-800/60 text-amber-300'}`}>
              <div className="flex items-center justify-between mb-1 font-bold">
                <span>Hindi (हिंदी hi-IN):</span>
                {voiceDiagnostics?.hindiAvailable ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-amber-400" />}
              </div>
              <p className="text-[11px] opacity-90 truncate">
                {voiceDiagnostics?.hindiVoiceName || 'Not installed in OS/browser'}
              </p>
            </div>

            <div className={`p-3 rounded-2xl border ${voiceDiagnostics?.englishAvailable ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
              <div className="flex items-center justify-between mb-1 font-bold">
                <span>English (en-IN / en):</span>
                {voiceDiagnostics?.englishAvailable ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-slate-400" />}
              </div>
              <p className="text-[11px] opacity-90 truncate">
                {voiceDiagnostics?.englishVoiceName || 'Default browser voice'}
              </p>
            </div>
          </div>

          {/* List of Available Voices */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Available voices:</h4>
            <div className="max-h-48 overflow-y-auto bg-slate-950/80 rounded-2xl p-3 border border-slate-800 font-mono text-xs divide-y divide-slate-800/60">
              {voiceDiagnostics?.voicesList && voiceDiagnostics.voicesList.length > 0 ? (
                voiceDiagnostics.voicesList.map((v, i) => (
                  <div key={i} className="py-1.5 flex items-center justify-between gap-2">
                    <span className="text-slate-200 truncate">
                      {v.name} {v.isDefault && <span className="text-blue-400 text-[10px]">[Default]</span>}
                    </span>
                    <span className="text-slate-400 text-[11px] shrink-0 font-semibold px-2 py-0.5 bg-slate-800 rounded">
                      {v.lang}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic py-2">No speech voices loaded yet. Click 'Refresh Voices'.</p>
              )}
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-normal">
            💡 <strong>Tip for Marathi Voice:</strong> In Windows 10/11, go to <em>Settings &gt; Time &amp; Language &gt; Language &gt; Add a language &gt; Marathi (मराठी)</em> and ensure the <strong>Speech</strong> checkbox is checked. On Android/Chrome, install Google Speech Services with Marathi voice data.
          </p>
        </div>
      )}

      {/* Voice Warning Banner if active error occurred */}
      {activeError && (
        <div className="p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl text-xs sm:text-sm text-amber-900 flex items-start gap-3 shadow-xs animate-in fade-in duration-150">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">ध्वनी सूचना / Voice Notification:</p>
            <p className="leading-relaxed font-medium">{activeError}</p>
          </div>
        </div>
      )}

      {/* Suggested Quick Questions Strip */}
      <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-2xs space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{t.chatbot.suggested}</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              type="button"
              id={`suggested-q-${idx}`}
              onClick={() => handleSendMessage(q)}
              className="px-3.5 py-1.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-xl border border-slate-200/80 whitespace-nowrap font-semibold transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-2xs"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Box Frame */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md flex flex-col h-[580px] sm:h-[620px] overflow-hidden">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/50">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isSpeaking={speakingMsgId === msg.id}
              onToggleSpeak={handleToggleSpeak}
            />
          ))}

          {/* Typing Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 items-start justify-start animate-in fade-in duration-150">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex items-center gap-2.5">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="text-xs text-slate-600 font-semibold ml-1">
                  {t.chatbot.thinking}
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Controls Bar: [ microphone ] [ Type your question... ] [ Send ] */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 space-y-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 sm:gap-3"
          >
            {/* Voice Input Microphone Button */}
            <VoiceButton
              onResult={handleVoiceInput}
              showLabelOnListening={false}
              className="shrink-0"
            />

            {/* Main Text Input */}
            <input
              type="text"
              id="chatbot-input"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={t.chatbot.placeholder}
              disabled={isLoading}
              className="flex-1 py-3 px-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all disabled:opacity-50 font-medium"
            />

            {/* Send Query Button */}
            <button
              type="submit"
              id="chatbot-send-btn"
              disabled={!inputMessage.trim() || isLoading}
              className="p-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-2xl shadow-md shadow-blue-500/20 transition-all shrink-0 focus:outline-hidden flex items-center justify-center cursor-pointer"
              aria-label={t.chatbot.send}
              title={t.chatbot.send}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>

          <p className="text-[11px] text-slate-400 text-center">
            {t.chatbot.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};
