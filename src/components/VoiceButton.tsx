import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getSpeechLangCode } from '../utils/speech';

interface VoiceButtonProps {
  onResult: (transcript: string) => void;
  className?: string;
  showLabelOnListening?: boolean;
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  onResult,
  className = '',
  showLabelOnListening = false
}) => {
  const { language, t } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // ignore cleanup errors
        }
      }
    };
  }, []);

  // Localized error messages
  const getLocalizedError = (errType: string): string => {
    if (errType === 'not-allowed' || errType === 'permission-denied') {
      if (language === 'MR') return "मायक्रोफोन परवानगी नाकारली आहे. कृपया परवानगी द्या.";
      if (language === 'HI') return "माइक्रोफ़ोन की अनुमति अस्वीकृत है। कृपया अनुमति दें।";
      return "Microphone permission was denied. Please allow microphone access.";
    }
    if (errType === 'no-speech') {
      if (language === 'MR') return "कोणताही आवाज आढळला नाही. कृपया स्पष्टपणे बोला.";
      if (language === 'HI') return "कोई आवाज़ नहीं सुनी गई। कृपया स्पष्ट बोलें।";
      return "No speech detected. Please speak clearly into your microphone.";
    }
    if (errType === 'not-supported') {
      return t.chatbot.voiceNotSupported || (
        language === 'MR' ? "या ब्राउझरमध्ये व्हॉइस इनपुट समर्थित नाही." :
        language === 'HI' ? "इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है।" :
        "Voice input is not supported in this browser."
      );
    }
    if (errType === 'network') {
      if (language === 'MR') return "नेटवर्क त्रुटीमुळे ध्वनी ओळख अयशस्वी झाली.";
      if (language === 'HI') return "नेटवर्क त्रुटि के कारण ध्वनि पहचान विफल रही।";
      return "Network error occurred during speech recognition.";
    }
    return language === 'MR' ? "ध्वनी ओळखण्यात त्रुटी आली. कृपया पुन्हा प्रयत्न करा." :
           language === 'HI' ? "ध्वनि पहचान में त्रुटि हुई। कृपया पुनः प्रयास करें।" :
           "Speech recognition encountered an issue. Please try again.";
  };

  const toggleListening = () => {
    setErrorMessage(null);

    const SpeechRecognition =
      typeof window !== 'undefined' &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognition) {
      setErrorMessage(getLocalizedError('not-supported'));
      setTimeout(() => setErrorMessage(null), 4500);
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // ignore
        }
      }
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      // Automatically configure speech recognition language:
      // English -> en-IN, Marathi -> mr-IN, Hindi -> hi-IN
      recognition.lang = getSpeechLangCode(language);

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        if (event.results && event.results[0] && event.results[0][0]) {
          const transcript = event.results[0][0].transcript;
          if (transcript && transcript.trim()) {
            onResult(transcript.trim());
          }
        }
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error event:', event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setErrorMessage(getLocalizedError('not-allowed'));
        } else if (event.error === 'no-speech') {
          setErrorMessage(getLocalizedError('no-speech'));
        } else if (event.error === 'network') {
          setErrorMessage(getLocalizedError('network'));
        } else {
          setErrorMessage(getLocalizedError(event.error));
        }
        setIsListening(false);
        setTimeout(() => setErrorMessage(null), 4500);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      setIsListening(false);
      setErrorMessage(getLocalizedError('not-supported'));
      setTimeout(() => setErrorMessage(null), 4500);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        id="voice-input-btn"
        onClick={toggleListening}
        aria-label={isListening ? t.chatbot.listening : t.chatbot.voiceInput}
        title={isListening ? t.chatbot.listening : t.chatbot.voiceInput}
        className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center justify-center gap-1.5 focus:outline-hidden cursor-pointer ${
          isListening
            ? 'bg-red-600 text-white animate-pulse shadow-lg shadow-red-500/40 ring-4 ring-red-300 scale-105'
            : 'bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 border border-blue-100/80 shadow-2xs hover:scale-105 active:scale-95'
        } ${className}`}
      >
        {isListening ? (
          <>
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping shrink-0" />
            <MicOff className="w-5 h-5 shrink-0" />
            {showLabelOnListening && (
              <span className="text-xs font-bold whitespace-nowrap pl-0.5">
                {t.chatbot.listening}
              </span>
            )}
          </>
        ) : (
          <Mic className="w-5 h-5 shrink-0" />
        )}
      </button>

      {errorMessage && (
        <div className="absolute bottom-full mb-2 right-0 sm:left-1/2 sm:-translate-x-1/2 w-64 sm:w-72 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-2xl z-50 flex items-start gap-2.5 border border-slate-700 animate-in fade-in zoom-in-95">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span className="leading-tight font-medium">{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
