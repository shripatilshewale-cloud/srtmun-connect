/**
 * Robust Speech Synthesis (Text-to-Speech), Speech Recognition & Language Detection Utilities
 * for SRTMUN Connect (Swami Ramanand Teerth Marathwada University, Nanded)
 * Supports Marathi (mr-IN), Hindi (hi-IN), and English (en-IN)
 */

import { TextToSpeech } from '@capacitor-community/text-to-speech';
export type SupportedLang = 'en' | 'mr' | 'hi' | 'EN' | 'MR' | 'HI' | 'english' | 'marathi' | 'hindi';

export interface VoiceDiagnosticInfo {
  name: string;
  lang: string;
  isDefault: boolean;
  isLocalService: boolean;
}

export interface VoiceStatus {
  marathiAvailable: boolean;
  marathiVoiceName: string | null;
  hindiAvailable: boolean;
  hindiVoiceName: string | null;
  englishAvailable: boolean;
  englishVoiceName: string | null;
  totalVoices: number;
  voicesList: VoiceDiagnosticInfo[];
}

/**
 * Returns standard BCP-47 language tag for SpeechRecognition & SpeechSynthesis
 */
export function getSpeechLangCode(language: string): string {
  const l = (language || '').toLowerCase().trim();
  if (l === 'mr' || l === 'marathi' || l.includes('मराठी') || l === 'mr-in') return 'mr-IN';
  if (l === 'hi' || l === 'hindi' || l.includes('हिंदी') || l === 'hi-in') return 'hi-IN';
  return 'en-IN';
}

/**
 * Auto-detects whether text is Marathi, Hindi, or English based on script and vocabulary.
 */
export function detectLanguage(text: string): 'mr' | 'hi' | 'en' {
  if (!text || !text.trim()) return 'en';
  const clean = text.trim();

  // Check for Devanagari Unicode range (\u0900-\u097F)
  const devanagariRegex = /[\u0900-\u097F]/;
  const isDevanagari = devanagariRegex.test(clean);

  if (isDevanagari) {
    const marathiWords = [
      'आहे', 'आहेत', 'काय', 'कसे', 'कशी', 'कोणते', 'कोणती', 'प्रशाळा', 'वसतिगृह', 
      'विद्यापीठ', 'मध्ये', 'साठी', 'माहिती', 'द्या', 'सांगा', 'करा', 'करायचे', 
      'पात्रता', 'शुल्क', 'अभ्यासक्रम', 'निकाल', 'परीक्षा', 'प्रवेश', 'नांदेड', 'म्हणजे',
      'केले', 'जाते', 'येथे', 'शाखा', 'विभाग'
    ];
    const hindiWords = [
      'है', 'हैं', 'क्या', 'कैसे', 'कैसी', 'कौनसे', 'कौनसी', 'संकाय', 'छात्रावास', 
      'विश्वविद्यालय', 'में', 'के लिए', 'जानकारी', 'दीजिए', 'बताएं', 'करें', 'करना', 
      'योग्यता', 'फीस', 'पाठ्यक्रम', 'परिणाम', 'परीक्षा', 'प्रवेश', 'नांदेड़', 'अर्थात',
      'होता', 'जाता', 'यहाँ', 'शाखाएं'
    ];

    let mrScore = 0;
    let hiScore = 0;

    for (const w of marathiWords) {
      if (clean.includes(w)) mrScore += 2;
    }
    for (const w of hindiWords) {
      if (clean.includes(w)) hiScore += 2;
    }

    if (mrScore > hiScore) return 'mr';
    if (hiScore > mrScore) return 'hi';

    // Default to Marathi in SRTMUN context for Devanagari text
    return 'mr';
  }

  const lower = clean.toLowerCase();
  if (
    lower.includes('kya hai') || 
    lower.includes('kaise') || 
    lower.includes('batao') || 
    lower.includes('jaankari') || 
    lower.includes('chahiye') ||
    lower.includes('hai kya')
  ) {
    return 'hi';
  }
  if (
    lower.includes('mhanje') || 
    lower.includes('kay ahe') || 
    lower.includes('kase') || 
    lower.includes('sangaa') || 
    lower.includes('mahiti dya') ||
    lower.includes('madhe')
  ) {
    return 'mr';
  }

  return 'en';
}

/**
 * Clean markdown symbols, bullets, URLs, HTML tags, and code blocks
 * into plain clean text before speaking.
 * Preserves all Marathi, Hindi, and English words, numbers, and Devanagari script completely.
 */
export function cleanTextForSpeech(rawText: string): string {
  if (!rawText) return '';
  return rawText
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .replace(/```[\s\S]*?```/g, '') // remove code blocks
    .replace(/`([^`]+)`/g, '$1') // inline code
    .replace(/[*#_~>]/g, '') // bold, italics, headers, blockquotes
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // markdown links [text](url) -> text
    .replace(/https?:\/\/\S+/g, '') // URLs
    .replace(/[-•*]\s+/g, ' ') // bullets to spaces
    .replace(/[|]/g, ' ') // markdown tables
    .replace(/\r?\n/g, ' ') // newlines to single spaces
    .replace(/\s+/g, ' ') // collapse multiple spaces
    .trim();
}

/**
 * Get all available browser voices reliably
 */
export function getAllVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return [];
  }
  try {
    return window.speechSynthesis.getVoices() || [];
  } catch (e) {
    return [];
  }
}

/**
 * Check voice status and list for diagnostics / debug inspection
 */
export function getVoiceDiagnosticStatus(): VoiceStatus {
  const voices = getAllVoices();

  const marathiVoice = voices.find(v =>
    v.lang.toLowerCase() === 'mr-in' ||
    v.lang.toLowerCase().startsWith('mr') ||
    v.name.toLowerCase().includes('marathi') ||
    v.name.includes('मराठी')
  );

  const hindiVoice = voices.find(v =>
    v.lang.toLowerCase() === 'hi-in' ||
    v.lang.toLowerCase().startsWith('hi') ||
    v.name.toLowerCase().includes('hindi') ||
    v.name.includes('हिंदी') ||
    v.name.includes('हिन्दी')
  );

  const englishVoice = voices.find(v =>
    v.lang.toLowerCase() === 'en-in' ||
    v.lang.toLowerCase().startsWith('en')
  );

  return {
    marathiAvailable: Boolean(marathiVoice),
    marathiVoiceName: marathiVoice ? `${marathiVoice.name} (${marathiVoice.lang})` : null,
    hindiAvailable: Boolean(hindiVoice),
    hindiVoiceName: hindiVoice ? `${hindiVoice.name} (${hindiVoice.lang})` : null,
    englishAvailable: Boolean(englishVoice),
    englishVoiceName: englishVoice ? `${englishVoice.name} (${englishVoice.lang})` : null,
    totalVoices: voices.length,
    voicesList: voices.map(v => ({
      name: v.name,
      lang: v.lang,
      isDefault: Boolean(v.default),
      isLocalService: Boolean(v.localService)
    }))
  };
}

/**
 * Finds the proper voice for the requested language.
 * IMPORTANT: NEVER returns an English voice for Marathi or Hindi,
 * because English speech engines cannot pronounce Devanagari script and skip all Devanagari words.
 */
export function getVoice(language: string, voices?: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const allVoices = voices && voices.length > 0 ? voices : getAllVoices();
  if (allVoices.length === 0) return null;

  const langKey = (language || '').toLowerCase().trim();

  // 1. MARATHI (mr / mr-IN)
  if (langKey === 'mr' || langKey === 'mr-in' || langKey === 'marathi' || langKey.includes('मराठी')) {
    // 1a. Native Marathi voice
    const marathiVoice = allVoices.find(v =>
      v.lang.toLowerCase() === 'mr-in' ||
      v.lang.toLowerCase() === 'mr_in' ||
      v.lang.toLowerCase().startsWith('mr') ||
      v.name.toLowerCase().includes('marathi') ||
      v.name.includes('मराठी')
    );
    if (marathiVoice) return marathiVoice;

    // 1b. If no dedicated Marathi voice, check for a Hindi Devanagari voice
    // (Hindi voices share Devanagari phonetics and can pronounce Devanagari letters accurately)
    const hindiDevanagariFallback = allVoices.find(v =>
      v.lang.toLowerCase() === 'hi-in' ||
      v.lang.toLowerCase().startsWith('hi') ||
      v.name.toLowerCase().includes('hindi') ||
      v.name.includes('हिंदी') ||
      v.name.includes('हिन्दी') ||
      v.name.toLowerCase().includes('lekha') ||
      v.name.toLowerCase().includes('neerja') ||
      v.name.toLowerCase().includes('madhur') ||
      v.name.toLowerCase().includes('swara')
    );
    if (hindiDevanagariFallback) return hindiDevanagariFallback;

    // DO NOT return an English voice for Marathi!
    return null;
  }

  // 2. HINDI (hi / hi-IN)
  if (langKey === 'hi' || langKey === 'hi-in' || langKey === 'hindi' || langKey.includes('हिंदी')) {
    const hindiVoice = allVoices.find(v =>
      v.lang.toLowerCase() === 'hi-in' ||
      v.lang.toLowerCase() === 'hi_in' ||
      v.lang.toLowerCase().startsWith('hi') ||
      v.name.toLowerCase().includes('hindi') ||
      v.name.includes('हिंदी') ||
      v.name.includes('हिन्दी') ||
      v.name.toLowerCase().includes('lekha') ||
      v.name.toLowerCase().includes('neerja') ||
      v.name.toLowerCase().includes('madhur') ||
      v.name.toLowerCase().includes('swara')
    );
    if (hindiVoice) return hindiVoice;

    // Check for general Indian Devanagari voice
    const marathiDevanagari = allVoices.find(v =>
      v.lang.toLowerCase().startsWith('mr') ||
      v.name.toLowerCase().includes('marathi')
    );
    if (marathiDevanagari) return marathiDevanagari;

    // DO NOT return an English voice for Hindi!
    return null;
  }

  // 3. ENGLISH (en / en-IN)
  // Priority to Indian English, then any English voice
  const indianEnglish = allVoices.find(v =>
    v.lang.toLowerCase() === 'en-in' ||
    v.lang.toLowerCase() === 'en_in' ||
    (v.lang.toLowerCase().startsWith('en') && v.name.toLowerCase().includes('india'))
  );
  if (indianEnglish) return indianEnglish;

  const anyEnglish = allVoices.find(v => v.lang.toLowerCase().startsWith('en'));
  if (anyEnglish) return anyEnglish;

  return allVoices.find(v => v.default) || allVoices[0] || null;
}

// Global active speech tracking & keepalive timer for Chromium GC prevention
let speechKeepAliveInterval: any = null;
let currentSpeechSessionId = 0;
// Keep a module-level reference to utterances so Chrome's V8 GC does not collect them
const activeUtterancesRef: SpeechSynthesisUtterance[] = [];

/**
 * Stops any active speech synthesis and clears all timers and utterance queues immediately
 */
export function stopSpeaking(): void {
  if (speechKeepAliveInterval) {
    clearInterval(speechKeepAliveInterval);
    speechKeepAliveInterval = null;
  }
  currentSpeechSessionId++;
  activeUtterancesRef.length = 0;

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn('Error cancelling speech synthesis:', e);
    }
  }
}

/**
 * Robust function that speaks the ENTIRE AI response in the requested language
 * (Marathi mr-IN, Hindi hi-IN, or English en-IN) without premature stopping or cutoffs.
 *
 * Automatically:
 * 1. Cleans markdown while keeping full Devanagari and English content.
 * 2. Splits long responses into sequential chunks of <= 180 characters.
 * 3. Finds and selects the proper Marathi / Hindi / English voice.
 * 4. Detects if the browser lacks a Marathi/Hindi voice and shows the exact required user instruction.
 */
export function speakFullResponse(
  text: string,
  language: string = 'en',
  onEnd?: () => void,
  onError?: (err: Error | string) => void
): boolean {
  if (typeof window !== 'undefined' && (window as any).Capacitor?.isNativePlatform?.()) {
  TextToSpeech.speak({
    text: cleanTextForSpeech(text),
    lang: getSpeechLangCode(language),
    rate: 0.9,
    pitch: 1.0,
    volume: 1.0,
  })
    .then(() => {
      if (onEnd) onEnd();
    })
    .catch((err) => {
      console.error('Native Android TTS error:', err);
      if (onError) onError(err);
    });

  return true;
}
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    const errMsg = 'Speech synthesis is not supported in this browser environment.';
    console.warn(errMsg);
    if (onError) onError(new Error(errMsg));
    return false;
  }

  if (!text || !text.trim()) {
    if (onEnd) onEnd();
    return false;
  }

  // 1. Cancel previous speech immediately
  stopSpeaking();
  const sessionId = ++currentSpeechSessionId;

  // 2. Clean markdown to natural text
  const cleanText = cleanTextForSpeech(text);
  if (!cleanText) {
    if (onEnd) onEnd();
    return false;
  }

  // 3. Normalize requested language code
  let selectedLang = (language || '').toLowerCase().trim();
  if (selectedLang === 'mr' || selectedLang === 'mr-in' || selectedLang === 'marathi' || selectedLang.includes('मराठी')) {
    selectedLang = 'mr';
  } else if (selectedLang === 'hi' || selectedLang === 'hi-in' || selectedLang === 'hindi' || selectedLang.includes('हिंदी')) {
    selectedLang = 'hi';
  } else if (selectedLang === 'en' || selectedLang === 'en-in' || selectedLang === 'english') {
    selectedLang = 'en';
  } else {
    selectedLang = detectLanguage(cleanText);
  }

  // 4. Split long text into sequential chunks of <= 180 chars on word boundaries
  const rawChunks = cleanText.match(/.{1,180}(\s|$)/g);
  const chunks = (rawChunks && rawChunks.length > 0)
    ? rawChunks.map(c => c.trim()).filter(c => c.length > 0)
    : [cleanText];

  if (chunks.length === 0) {
    if (onEnd) onEnd();
    return false;
  }

  // 5. KeepAlive mechanism to prevent Chrome / Safari from pausing long speech
  speechKeepAliveInterval = setInterval(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }
  }, 8000);

  // 6. Sequential playback loop
  const executeSequentialSpeech = (voices: SpeechSynthesisVoice[]) => {
    if (sessionId !== currentSpeechSessionId) return;

    const voice = getVoice(selectedLang, voices);

    // CRITICAL: If Marathi was requested and no Marathi / Devanagari voice is found in browser
    if (selectedLang === 'mr' && !voice) {
      const mrNotice = "तुमच्या ब्राउझरमध्ये मराठी आवाज उपलब्ध नाही. कृपया Windows मध्ये Marathi language आणि Speech Pack install करा किंवा Marathi समर्थित browser voice वापरा.";
      console.warn(mrNotice);
      if (onError) onError(new Error(mrNotice));
      return;
    }

    // CRITICAL: If Hindi was requested and no Hindi voice is found in browser
    if (selectedLang === 'hi' && !voice) {
      const hiNotice = "आपके ब्राउज़र में हिंदी आवाज़ उपलब्ध नहीं है। कृपया Windows में Hindi language और Speech Pack install करें।";
      console.warn(hiNotice);
      if (onError) onError(new Error(hiNotice));
      return;
    }

    const defaultLangCode = selectedLang === 'mr' ? 'mr-IN' : selectedLang === 'hi' ? 'hi-IN' : 'en-IN';
    const langCodeToUse = voice ? voice.lang : defaultLangCode;

    let index = 0;

    const speakNext = () => {
      if (sessionId !== currentSpeechSessionId) return;

      if (index >= chunks.length) {
        // ENTIRE response finished speaking
        if (speechKeepAliveInterval) {
          clearInterval(speechKeepAliveInterval);
          speechKeepAliveInterval = null;
        }
        activeUtterancesRef.length = 0;
        if (onEnd) onEnd();
        return;
      }

      const chunkText = chunks[index];
      const utterance = new SpeechSynthesisUtterance(chunkText);
      
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = defaultLangCode;
      }

      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Retain utterance in global array to prevent Chrome V8 Garbage Collection bug
      activeUtterancesRef.push(utterance);

      utterance.onend = () => {
        if (sessionId !== currentSpeechSessionId) return;
        index++;
        speakNext();
      };

      utterance.onerror = (event) => {
        console.warn('SpeechSynthesis chunk event notice:', event);
        if (sessionId !== currentSpeechSessionId) return;
        index++;
        if (index < chunks.length) {
          speakNext();
        } else {
          if (speechKeepAliveInterval) {
            clearInterval(speechKeepAliveInterval);
            speechKeepAliveInterval = null;
          }
          activeUtterancesRef.length = 0;
          if (onEnd) onEnd();
        }
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (err: any) {
        console.error('window.speechSynthesis.speak error:', err);
        if (onError) onError(err);
      }
    };

    speakNext();
  };

  // Load voices and start playback
  const availableVoices = getAllVoices();
  if (availableVoices && availableVoices.length > 0) {
    executeSequentialSpeech(availableVoices);
  } else if (typeof window !== 'undefined' && 'speechSynthesis' in window && 'onvoiceschanged' in window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
      const loaded = getAllVoices();
      executeSequentialSpeech(loaded);
    };
  } else {
    executeSequentialSpeech([]);
  }

  return true;
}

/**
 * Alias export for backward compatibility
 */
export const speakText = speakFullResponse;
