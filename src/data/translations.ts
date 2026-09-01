export type LanguageCode = 'english' | 'marathi' | 'hindi';
export type Language = 'EN' | 'MR' | 'HI' | 'english' | 'marathi' | 'hindi';

export function normalizeLang(lang: string | null | undefined): 'EN' | 'MR' | 'HI' {
  if (!lang) return 'EN';
  const l = lang.toLowerCase();
  if (l === 'mr' || l === 'marathi' || l.includes('मराठी')) return 'MR';
  if (l === 'hi' || l === 'hindi' || l.includes('हिंदी')) return 'HI';
  return 'EN';
}

export function toStandardLangName(lang: Language): 'english' | 'marathi' | 'hindi' {
  const norm = normalizeLang(lang);
  if (norm === 'MR') return 'marathi';
  if (norm === 'HI') return 'hindi';
  return 'english';
}

export interface Translations {
  appName: string;
  assistantTitle: string;
  tagline: string;
  nav: {
    home: string;
    university: string;
    courses: string;
    campus: string;
    askSrtmun: string;
    admission: string;
    hostel: string;
    sports: string;
    services: string;
    calendar: string;
  };
  hero: {
    badge: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    askBtn: string;
    quickQuestions: string;
  };
  sectionTag: string;
  sectionHeading: string;
  sectionDesc: string;
  cards: {
    schoolsCourses: { title: string; desc: string };
    admission: { title: string; desc: string };
    campus: { title: string; desc: string };
    hostel: { title: string; desc: string };
    sports: { title: string; desc: string };
    services: { title: string; desc: string };
    calendar: { title: string; desc: string };
    university: { title: string; desc: string };
    exploreBtn: string;
  };
  chatbot: {
    title: string;
    subtitle: string;
    description: string;
    placeholder: string;
    send: string;
    clear: string;
    thinking: string;
    listening: string;
    voiceInput: string;
    voiceNotSupported: string;
    speak: string;
    stop: string;
    error: string;
    disclaimer: string;
    suggested: string;
    welcomeMsg: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactUs: string;
    rights: string;
    affiliation: string;
  };
  common: {
    back: string;
    explore: string;
    viewDetails: string;
    download: string;
    applyNow: string;
    contact: string;
    officialWebsite: string;
  };
}

export const TRANSLATIONS: Record<'EN' | 'MR' | 'HI', Translations> = {
  EN: {
    appName: "SRTMUN CONNECT",
    assistantTitle: "University Information Assistant",
    tagline: "Swami Ramanand Teerth Marathwada University, Vishnupuri, Nanded",
    nav: {
      home: "Home",
      university: "University",
      courses: "Courses",
      campus: "Campus",
      askSrtmun: "Ask SRTMUN",
      admission: "Admission",
      hostel: "Hostel",
      sports: "Sports",
      services: "Digital Services",
      calendar: "Academic Calendar"
    },
    hero: {
      badge: "SRTMUN Information Assistant",
      heading: "Welcome to SRTMUN Connect",
      subheading: "Your complete digital guide to Swami Ramanand Teerth Marathwada University, Vishnupuri, Nanded.",
      searchPlaceholder: "Ask anything about SRTMUN...",
      askBtn: "Ask SRTMUN",
      quickQuestions: "Quick questions:"
    },
    sectionTag: "SRTMUN • VISHNUPURI • NANDED",
    sectionHeading: "Everything you need to know, in one place.",
    sectionDesc: "SRTMUN Connect helps students, parents, faculty, staff and visitors quickly find useful information about the university.",
    cards: {
      schoolsCourses: {
        title: "Schools & Courses",
        desc: "Explore 13 distinct academic schools offering undergraduate, postgraduate, diploma & research programmes."
      },
      admission: {
        title: "Admission",
        desc: "Comprehensive guidelines on eligibility criteria, application process, documents, fees and schedules."
      },
      campus: {
        title: "Campus & Facilities",
        desc: "Discover the 595-acre campus, Central Library, Central Instrumentation Facility, and smart classrooms."
      },
      hostel: {
        title: "Hostel",
        desc: "Safe and comfortable on-campus accommodation for boys, girls, and research scholars with modern mess."
      },
      sports: {
        title: "Sports",
        desc: "Olympic standard 400m athletic track, indoor badminton stadium, cricket grounds, and modern gymnasium."
      },
      services: {
        title: "Digital Services",
        desc: "Access e-Suvidha student portal, exam timetables, hall tickets, online results, and certificates."
      },
      calendar: {
        title: "Academic Calendar",
        desc: "Detailed semester terms, examination timelines, admission cut-offs, festivals, and vacations."
      },
      university: {
        title: "University Information",
        desc: "History, vision, leadership, NAAC accreditation, affiliated colleges, and administration contact."
      },
      exploreBtn: "Explore"
    },
    chatbot: {
      title: "SRTMUN Connect",
      subtitle: "University Information Assistant",
      description: "Ask questions about SRTMUN in English, Marathi or Hindi.",
      placeholder: "Ask anything about SRTMUN...",
      send: "Send",
      clear: "Clear",
      thinking: "SRTMUN is thinking...",
      listening: "Listening... Speak now",
      voiceInput: "Voice input",
      voiceNotSupported: "Voice input is not supported in this browser.",
      speak: "Speak",
      stop: "Stop",
      error: "AI service is temporarily unavailable. Please try again.",
      disclaimer: "SRTMUN Connect AI provides informational assistance. For official notices, please verify on srtmun.ac.in.",
      suggested: "Suggested Questions",
      welcomeMsg: "Hello! I am **SRTMUN Connect AI Assistant**. How can I help you with Swami Ramanand Teerth Marathwada University (SRTMUN), Vishnupuri, Nanded? Ask me about courses, admission, hostel, sports, fees or digital services."
    },
    footer: {
      description: "Swami Ramanand Teerth Marathwada University, Vishnupuri, Nanded, Maharashtra - 431606, India.",
      quickLinks: "Quick Links",
      contactUs: "Contact Administration",
      rights: "All rights reserved.",
      affiliation: "State Public University recognized under UGC Act 12(B) & 2(f), NAAC 'A' Grade."
    },
    common: {
      back: "Back",
      explore: "Explore",
      viewDetails: "View Details",
      download: "Download",
      applyNow: "Apply Now",
      contact: "Contact",
      officialWebsite: "Official Website"
    }
  },
  MR: {
    appName: "SRTMUN कनेक्ट",
    assistantTitle: "विद्यापीठ माहिती सहाय्यक",
    tagline: "स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, विष्णुपूरी, नांदेड",
    nav: {
      home: "मुख्यपृष्ठ",
      university: "विद्यापीठ",
      courses: "अभ्यासक्रम",
      campus: "परिसर",
      askSrtmun: "SRTMUN ला विचारा",
      admission: "प्रवेश",
      hostel: "वसतिगृह",
      sports: "क्रीडा",
      services: "डिजिटल सेवा",
      calendar: "शैक्षणिक दिनदर्शिका"
    },
    hero: {
      badge: "SRTMUN माहिती सहाय्यक",
      heading: "SRTMUN कनेक्ट मध्ये आपले स्वागत आहे",
      subheading: "स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, विष्णुपूरी, नांदेड यांची संपूर्ण डिजिटल मार्गदर्शिका.",
      searchPlaceholder: "SRTMUN बद्दल काहीही विचारा...",
      askBtn: "SRTMUN ला विचारा",
      quickQuestions: "जलद प्रश्न:"
    },
    sectionTag: "एस.आर.टी.एम.यु.एन • विष्णुपूरी • नांदेड",
    sectionHeading: "आपल्याला हवी असलेली सर्व माहिती एकाच ठिकाणी.",
    sectionDesc: "SRTMUN कनेक्ट विद्यार्थी, पालक, प्राध्यापक आणि अभ्यागतांना विद्यापीठाची अचूक माहिती जलद शोधण्यास मदत करते.",
    cards: {
      schoolsCourses: {
        title: "प्रशाळा व अभ्यासक्रम",
        desc: "पदवी, पदव्युत्तर, पदविका आणि संशोधन अभ्यासक्रम उपलब्ध असलेल्या १३ विविध प्रशाळांचे अन्वेषण करा."
      },
      admission: {
        title: "प्रवेश",
        desc: "पात्रता निकष, अर्ज करण्याची पद्धत, आवश्यक कागदपत्रे, शुल्क आणि वेळापत्रकाविषयी सविस्तर माहिती."
      },
      campus: {
        title: "परिसर",
        desc: "५९५ एकर विस्तीर्ण हरित परिसर, मध्यवर्ती ग्रंथालय, अत्याधुनिक उपकरण केंद्र आणि स्मार्ट वर्गखोल्या."
      },
      hostel: {
        title: "वसतिगृह",
        desc: "मुले, मुली आणि संशोधक विद्यार्थ्यांसाठी सुरक्षित, स्वच्छ वसतिगृह आणि पौष्टिक भोजन व्यवस्था."
      },
      sports: {
        title: "क्रीडा",
        desc: "४०० मीटर धावपट्टी, इनडोअर स्टेडियम, क्रिकेट मैदान, बास्केटबॉल कोर्ट आणि आधुनिक व्यायामशाळा."
      },
      services: {
        title: "डिजिटल सेवा",
        desc: "ई-सुविधा पोर्टल, परीक्षा वेळापत्रक, हॉल तिकीट, ऑनलाइन निकाल आणि पदवी प्रमाणपत्र अर्ज."
      },
      calendar: {
        title: "शैक्षणिक दिनदर्शिका",
        desc: "सत्र कालावधी, परीक्षांचे वेळापत्रक, सुट्ट्या आणि महत्त्वाच्या शैक्षणिक उपक्रमांची माहिती."
      },
      university: {
        title: "विद्यापीठ",
        desc: "इतिहास, उद्दिष्टे, नेतृत्व, नॅक 'अ' दर्जा, संलग्न महाविद्यालये आणि संपर्क माहिती."
      },
      exploreBtn: "पहा"
    },
    chatbot: {
      title: "SRTMUN कनेक्ट",
      subtitle: "विद्यापीठ माहिती सहाय्यक",
      description: "SRTMUN बद्दल मराठी, इंग्रजी किंवा हिंदीमध्ये प्रश्न विचारा.",
      placeholder: "SRTMUN बद्दल काहीही विचारा...",
      send: "पाठवा",
      clear: "संभाषण पुसा",
      thinking: "SRTMUN विचार करत आहे...",
      listening: "ऐकत आहे... कृपया बोला",
      voiceInput: "ध्वनी इनपुट",
      voiceNotSupported: "या ब्राउझरमध्ये व्हॉइस इनपुट समर्थित नाही.",
      speak: "ऐका",
      stop: "थांबवा",
      error: "AI सेवा सध्या उपलब्ध नाही. कृपया पुन्हा प्रयत्न करा.",
      disclaimer: "SRTMUN Connect AI माहिती सहाय्य प्रदान करते. अधिकृत माहितीसाठी कृपया srtmun.ac.in तपासा.",
      suggested: "वारंवार विचारले जाणारे प्रश्न",
      welcomeMsg: "नमस्कार! मी **SRTMUN कनेक्ट AI सहाय्यक** आहे. स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, विष्णुपूरी, नांदेड बद्दल आपल्याला काय माहिती हवी आहे? आपण अभ्यासक्रम, प्रवेश पात्रता, वसतिगृह, क्रीडा किंवा डिजिटल सेवांविषयी विचारू शकता."
    },
    footer: {
      description: "स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, विष्णुपूरी, नांदेड, महाराष्ट्र - ४३१६०६, भारत.",
      quickLinks: "महत्वाच्या लिंक्स",
      contactUs: "विद्यापीठ संपर्क",
      rights: "सर्व हक्क राखीव.",
      affiliation: "यूजीसी १२(बी) व २(एफ) मान्यताप्राप्त राज्य विद्यापीठ, नॅक 'अ' श्रेणी."
    },
    common: {
      back: "मागे",
      explore: "अन्वेषण करा",
      viewDetails: "तपशील पहा",
      download: "डाउनलोड",
      applyNow: "आता अर्ज करा",
      contact: "संपर्क",
      officialWebsite: "अधिकृत संकेतस्थळ"
    }
  },
  HI: {
    appName: "SRTMUN कनेक्ट",
    assistantTitle: "विश्वविद्यालय सूचना सहायक",
    tagline: "स्वामी रामानंद तीर्थ मराठवाड़ा विश्वविद्यालय, विष्णुपुरी, नांदेड़",
    nav: {
      home: "होम",
      university: "विश्वविद्यालय",
      courses: "पाठ्यक्रम",
      campus: "परिसर",
      askSrtmun: "SRTMUN से पूछें",
      admission: "प्रवेश",
      hostel: "छात्रावास",
      sports: "खेल",
      services: "डिजिटल सेवाएं",
      calendar: "शैक्षणिक कैलेंडर"
    },
    hero: {
      badge: "SRTMUN सूचना सहायक",
      heading: "SRTMUN कनेक्ट में आपका स्वागत है",
      subheading: "स्वामी रामानंद तीर्थ मराठवाड़ा विश्वविद्यालय, विष्णुपुरी, नांदेड़ की संपूर्ण डिजिटल मार्गदर्शिका।",
      searchPlaceholder: "SRTMUN के बारे में कुछ भी पूछें...",
      askBtn: "SRTMUN से पूछें",
      quickQuestions: "त्वरित प्रश्न:"
    },
    sectionTag: "एस.आर.टी.एम.यू.एन • विष्णुपुरी • नांदेड़",
    sectionHeading: "आपकी ज़रूरत की हर जानकारी, एक ही स्थान पर।",
    sectionDesc: "SRTMUN कनेक्ट छात्रों, अभिभावकों, शिक्षकों और आगंतुकों को विश्वविद्यालय के बारे में उपयोगी जानकारी आसानी से खोजने में मदद करता है।",
    cards: {
      schoolsCourses: {
        title: "पाठ्यक्रम",
        desc: "13 विभिन्न संकायों में स्नातक, स्नातकोत्तर, डिप्लोमा और शोध कार्यक्रमों की खोज करें।"
      },
      admission: {
        title: "प्रवेश",
        desc: "पात्रता मानदंड, आवेदन प्रक्रिया, आवश्यक दस्तावेज, शुल्क और तिथियों की विस्तृत जानकारी।"
      },
      campus: {
        title: "परिसर",
        desc: "595 एकड़ का हरित परिसर, केंद्रीय पुस्तकालय, अत्याधुनिक उपकरण केंद्र और स्मार्ट क्लासरूम।"
      },
      hostel: {
        title: "छात्रावास",
        desc: "छात्रों, छात्राओं और शोधार्थियों के लिए सुरक्षित आवास एवं पौष्टिक भोजन व्यवस्था।"
      },
      sports: {
        title: "खेल",
        desc: "400 मीटर रनिंग ट्रैक, इंडोर स्टेडियम, क्रिकेट ग्राउंड, बास्केटबॉल कोर्ट और आधुनिक जिम।"
      },
      services: {
        title: "डिजिटल सेवाएं",
        desc: "ई-सुविधा पोर्टल, परीक्षा समय सारणी, हॉल टिकट, ऑनलाइन परिणाम और प्रमाण पत्र।"
      },
      calendar: {
        title: "शैक्षणिक कैलेंडर",
        desc: "सत्र की अवधि, परीक्षा कार्यक्रम, अवकाश और महत्वपूर्ण शैक्षणिक गतिविधियों का विवरण।"
      },
      university: {
        title: "विश्वविद्यालय",
        desc: "इतिहास, दृष्टि, नेतृत्व, नैक 'ए' ग्रेड मान्यता, संबद्ध कॉलेज और प्रशासनिक संपर्क।"
      },
      exploreBtn: "देखें"
    },
    chatbot: {
      title: "SRTMUN कनेक्ट",
      subtitle: "विश्वविद्यालय सूचना सहायक",
      description: "SRTMUN के बारे में हिंदी, अंग्रेजी या मराठी में प्रश्न पूछें।",
      placeholder: "SRTMUN के बारे में कुछ भी पूछें...",
      send: "भेजें",
      clear: "चैट साफ़ करें",
      thinking: "SRTMUN सोच रहा है...",
      listening: "सुन रहे हैं... कृपया बोलें",
      voiceInput: "ध्वनि इनपुट",
      voiceNotSupported: "इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है।",
      speak: "सुनें",
      stop: "रोकें",
      error: "AI सेवा अभी उपलब्ध नहीं है। कृपया फिर से प्रयास करें।",
      disclaimer: "SRTMUN Connect AI सूचनात्मक सहायता प्रदान करता है। आधिकारिक सूचनाओं के लिए srtmun.ac.in देखें।",
      suggested: "सुझाए गए प्रश्न",
      welcomeMsg: "नमस्ते! मैं **SRTMUN कनेक्ट AI सहायक** हूँ। स्वामी रामानंद तीर्थ मराठवाड़ा विश्वविद्यालय, विष्णुपुरी, नांदेड़ के बारे में आप क्या जानना चाहते हैं? आप पाठ्यक्रम, प्रवेश, छात्रावास या परीक्षा के बारे में पूछ सकते हैं।"
    },
    footer: {
      description: "स्वामी रामानंद तीर्थ मराठवाड़ा विश्वविद्यालय, विष्णुपुरी, नांदेड़, महाराष्ट्र - 431606, भारत।",
      quickLinks: "त्वरित लिंक्स",
      contactUs: "प्रशासनिक संपर्क",
      rights: "सर्वाधिकार सुरक्षित।",
      affiliation: "यूजीसी 12(B) एवं 2(f) द्वारा मान्यता प्राप्त राज्य विश्वविद्यालय, नैक 'A' ग्रेड।"
    },
    common: {
      back: "वापस",
      explore: "खोजें",
      viewDetails: "विवरण देखें",
      download: "डाउनलोड",
      applyNow: "अभी आवेदन करें",
      contact: "संपर्क",
      officialWebsite: "आधिकारिक वेबसाइट"
    }
  }
};
