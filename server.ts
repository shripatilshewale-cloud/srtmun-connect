import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import {
  SCHOOLS_DATA,
  UNIVERSITY_INFO,
  DIGITAL_SERVICES,
  ACADEMIC_CALENDAR_DATA,
  CAMPUS_FACILITIES,
  HOSTEL_DATA,
  SPORTS_DATA
} from "./src/data/universityData";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google Gemini Client lazily or safely
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// Helper to normalize language input
function normalizeLanguageInput(lang?: string): { code: 'mr' | 'hi' | 'en'; label: 'Marathi' | 'Hindi' | 'English' } {
  const l = (lang || '').toLowerCase().trim();
  if (l === 'mr' || l === 'marathi' || l.includes('मराठी')) {
    return { code: 'mr', label: 'Marathi' };
  }
  if (l === 'hi' || l === 'hindi' || l.includes('हिंदी')) {
    return { code: 'hi', label: 'Hindi' };
  }
  return { code: 'en', label: 'English' };
}

// ==========================================
// REST API ROUTES
// ==========================================

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "SRTMUN CONNECT API",
    university: "Swami Ramanand Teerth Marathwada University, Nanded",
    timestamp: new Date().toISOString()
  });
});

// 1. AI Chat Endpoint (POST /api/ai/chat)
app.post("/api/ai/chat", async (req, res) => {
  const { message, language } = req.body;

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  const userQuery = message.trim();
  const { label: targetLanguageName } = normalizeLanguageInput(language);

  // Exact system instruction structure requested
  const systemInstruction = `You are SRTMUN Connect, an AI university information assistant for Swami Ramanand Teerth Marathwada University, Vishnupuri, Nanded.

Answer questions about:
- SRTMUN
- Courses
- Schools
- Departments
- Admission
- Eligibility
- Fees
- Campus
- Hostel
- Sports
- Digital Services
- Academic Calendar
- University information

Always answer in the requested language.

Requested language:
English = English
Marathi = Marathi
Hindi = Hindi

If requested language is Marathi, answer completely in natural Marathi using Devanagari script.
If requested language is Hindi, answer completely in natural Hindi using Devanagari script.
If requested language is English, answer in English.

Do not unnecessarily mix languages.

If information is not available in the provided university data, clearly say that the information is not available and suggest checking the official SRTMUN website.

Do not invent university facts.

Current requested language: ${targetLanguageName}`;

  try {
    const ai = getGeminiClient();
    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: userQuery,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text;
      if (reply) {
        return res.json({ reply });
      }
    }

    // Fallback if API key not set or empty response returned
    const fallbackReply = generateRuleBasedResponse(userQuery, targetLanguageName);
    return res.json({ reply: fallbackReply });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    // Provide a smart rule-based fallback response rather than breaking the chat
    const fallbackReply = generateRuleBasedResponse(userQuery, targetLanguageName);
    return res.json({ reply: fallbackReply });
  }
});

// 2. University Information Endpoint
app.get("/api/university", (req, res) => {
  res.json({
    success: true,
    data: UNIVERSITY_INFO
  });
});

// 3. Courses Endpoint
app.get("/api/courses", (req, res) => {
  res.json({
    success: true,
    totalSchools: SCHOOLS_DATA.length,
    data: SCHOOLS_DATA
  });
});

// 4. Course Details by ID or Name
app.get("/api/courses/:id", (req, res) => {
  const { id } = req.params;
  let foundCourse = null;
  let foundSchool = null;

  for (const school of SCHOOLS_DATA) {
    const course = school.courses.find(
      (c) => c.id.toLowerCase() === id.toLowerCase() || c.name.toLowerCase() === id.toLowerCase()
    );
    if (course) {
      foundCourse = course;
      foundSchool = school;
      break;
    }
  }

  if (foundCourse && foundSchool) {
    res.json({
      success: true,
      course: foundCourse,
      school: {
        id: foundSchool.id,
        name: foundSchool.name,
        marathiName: foundSchool.marathiName,
        icon: foundSchool.icon
      }
    });
  } else {
    res.status(404).json({ success: false, message: "Course not found" });
  }
});

// 5. Campus & Facilities Endpoint
app.get("/api/campus", (req, res) => {
  res.json({
    success: true,
    data: CAMPUS_FACILITIES
  });
});

// 6. Hostel Information Endpoint
app.get("/api/hostel", (req, res) => {
  res.json({
    success: true,
    data: HOSTEL_DATA
  });
});

// 7. Sports Information Endpoint
app.get("/api/sports", (req, res) => {
  res.json({
    success: true,
    data: SPORTS_DATA
  });
});

// 8. Digital Services Endpoint
app.get("/api/services", (req, res) => {
  res.json({
    success: true,
    data: DIGITAL_SERVICES
  });
});

// 9. Academic Calendar Endpoint
app.get("/api/calendar", (req, res) => {
  res.json({
    success: true,
    data: ACADEMIC_CALENDAR_DATA
  });
});

// Helper for offline / fallback AI responses
function generateRuleBasedResponse(query: string, lang: 'Marathi' | 'Hindi' | 'English'): string {
  const q = query.toLowerCase();

  if (q.includes("bca") || q.includes("computer") || q.includes("कॉम्प्युटर") || q.includes("कंप्यूटर")) {
    if (lang === "Marathi") {
      return `**B.C.A. (बॅचलर ऑफ कॉम्प्युटर अ‍ॅप्लिकेशन) माहिती:**\n- **प्रशाळा:** संगणकीय शास्त्र प्रशाळा (School of Computational Sciences)\n- **कालावधी:** ३ वर्षे (६ सेमिस्टर्स)\n- **पात्रता:** १२ वी (विज्ञान/वाणिज्य/कला) गणित किंवा संख्याशास्त्रासह उत्तीर्ण (किमान ४५% गुण).\n- **प्रवेश प्रक्रिया:** राज्य सीईटी / विद्यापीठ गुणवत्ता यादी.\n- **करिअर:** सॉफ्टवेअर डेव्हलपर, वेब डिझायनर, डेटाबेस अ‍ॅडमिनिस्ट्रेटर.`;
    }
    if (lang === "Hindi") {
      return `**B.C.A. (बैचलर ऑफ कंप्यूटर एप्लीकेशन) विवरण:**\n- **संकाय:** संगणक विज्ञान संकाय (School of Computational Sciences)\n- **अवधि:** 3 वर्ष (6 सेमेस्टर)\n- **पात्रता:** 12वीं (विज्ञान/वाणिज्य/कला) गणित या सांख्यिकी के साथ न्यूनतम 45% अंकों से उत्तीर्ण।\n- **प्रवेश प्रक्रिया:** राज्य सीईटी / मेरिट सूची के आधार पर।\n- **करियर:** सॉफ्टवेयर डेवलपर, वेब डिजाइनर, डेटाबेस एडमिनिस्ट्रेटर।`;
    }
    return `**B.C.A. (Bachelor of Computer Applications) at SRTMUN:**\n- **School:** School of Computational Sciences\n- **Duration:** 3 Years (6 Semesters)\n- **Eligibility:** 10+2 passed in Science/Commerce/Arts with Mathematics or Statistics as a subject with min 45% marks.\n- **Admission:** MAH-BCA CET / Merit based CAP round.\n- **Career Scope:** Software Developer, Web Architect, System Analyst, IT Officer.`;
  }

  if (q.includes("mca")) {
    if (lang === "Marathi") {
      return `**M.C.A. (मास्टर ऑफ कॉम्प्युटर अ‍ॅप्लिकेशन) माहिती:**\n- **प्रशाळा:** संगणकीय शास्त्र प्रशाळा\n- **कालावधी:** २ वर्षे (४ सेमिस्टर्स)\n- **पात्रता:** बीसीए / बी.एस्सी (संगणक शास्त्र) किंवा पदवीधर गणित विषयांसह किमान ५०% गुणांसह उत्तीर्ण.\n- **प्रवेश:** महाराष्ट्र राज्य सामाईक प्रवेश परीक्षा (MAH-MCA-CET).\n- **अभ्यासक्रम:** क्लाउड कम्प्युटिंग, एआय/एमएल, फुल स्टॅक इंजिनिअरिंग.`;
    }
    if (lang === "Hindi") {
      return `**M.C.A. (मास्टर ऑफ कंप्यूटर एप्लीकेशन) विवरण:**\n- **संकाय:** संगणक विज्ञान संकाय\n- **अवधि:** 2 वर्ष (4 सेमेस्टर)\n- **पात्रता:** बीसीए / बीएससी (सीएस/आईटी) या स्नातक स्तर पर गणित के साथ 50% अंक।\n- **प्रवेश:** महाराष्ट्र राज्य सीईटी (MAH-MCA-CET) द्वारा。\n- **पाठ्यक्रम:** क्लाउड कंप्यूटिंग, एआई/एमएल, फुल स्टैक।`;
    }
    return `**M.C.A. (Master of Computer Applications) at SRTMUN:**\n- **School:** School of Computational Sciences\n- **Duration:** 2 Years (4 Semesters)\n- **Eligibility:** BCA / B.Sc (CS/IT) / Graduate with Mathematics at 10+2 or degree level with min 50% marks.\n- **Admission:** MAH-MCA-CET through Maharashtra State CET Cell CAP rounds.\n- **Curriculum:** Cloud Native Engineering, AI/ML, Enterprise Full Stack, DevOps.`;
  }

  if (q.includes("admission") || q.includes("apply") || q.includes("form") || q.includes("प्रवेश")) {
    if (lang === "Marathi") {
      return `**SRTMUN प्रवेश प्रक्रिया आढावा:**\n1. **पदवी व पदव्युत्तर:** विद्यापीठ प्रशाळांमधील प्रवेश गुणवत्ता यादी आणि प्रवेश परीक्षेद्वारे होतात.\n2. **व्यावसायिक अभ्यासक्रम (MBA, MCA, B.Pharm, B.Ed):** महाराष्ट्र राज्य सामाईक प्रवेश परीक्षा कक्ष (CET Cell CAP Rounds) द्वारे.\n3. **अधिकृत अर्ज पोर्टल:** srtmun.digitaluniversity.ac वर नोंदणी करावी लागते.\n4. **आवश्यक कागदपत्रे:** १०वी व १२वी गुणपत्रिका, पदवी गुणपत्रिका (PG साठी), जात व वैधता प्रमाणपत्र (लागू असल्यास), रहिवासी प्रमाणपत्र.`;
    }
    if (lang === "Hindi") {
      return `**SRTMUN प्रवेश प्रक्रिया विवरण:**\n1. **यूजी एवं पीजी:** विश्वविद्यालय संकायों में प्रवेश मेरिट सूची और प्रवेश परीक्षा के आधार पर होते हैं।\n2. **व्यावसायिक पाठ्यक्रम (MBA, MCA, B.Pharm):** महाराष्ट्र राज्य सीईटी सेल के माध्यम से。\n3. **आवेदन पोर्टल:** srtmun.digitaluniversity.ac पर पंजीकरण आवश्यक है।\n4. **आवश्यक दस्तावेज:** 10वीं, 12वीं एवं स्नातक अंकतालिका, जाति प्रमाण पत्र, डोमिसाइल प्रमाणपत्र।`;
    }
    return `**SRTMUN Admission Overview:**\n1. **Undergraduate & Postgraduate:** Admissions to on-campus university schools are conducted through Merit list and CET examination.\n2. **Professional Courses (MBA, MCA, B.Pharm, B.Ed, M.Ed, B.P.Ed):** Conducted through Maharashtra State CET Cell Centralized Admission Process (CAP).\n3. **Application Portal:** Students must register at SRTMUN Digital University Portal (srtmun.digitaluniversity.ac).\n4. **Important Documents:** 10th & 12th Marksheets, Graduation Marksheets (for PG), Caste & Validity Certificate (if applicable), Domicile/TC.`;
  }

  if (q.includes("hostel") || q.includes("accommodation") || q.includes("वसतिगृह") || q.includes("छात्रावास")) {
    if (lang === "Marathi") {
      return `**SRTMUN वसतिगृह सुविधा:**\n- **निवास व्यवस्था:** मुलांसाठी ३ वसतिगृहे (५५०+ क्षमता), मुलींसाठी ३ वसतिगृहे (६००+ क्षमता), आणि स्वतंत्र संशोधक वसतिगृह.\n- **सुविधा:** आरओ शुद्ध पेयजल, मोफत वाय-फाय, स्वच्छ मेस, २४/७ सुरक्षा आणि सीसीटीव्ही.\n- **वाटप:** गुणवत्ता आणि विद्यापीठ आरक्षण नियमांनुसार.\n- **शुल्क:** शासकीय नियमांनुसार अत्यंत माफक वार्षिक शुल्क.`;
    }
    if (lang === "Hindi") {
      return `**SRTMUN छात्रावास सुविधाएं:**\n- **आवास:** 3 छात्र छात्रावास (550+ क्षमता), 3 छात्रा छात्रावास (600+ क्षमता) और शोधार्थी छात्रावास।\n- **सुविधाएं:** आरओ फिल्टर पानी, वाई-फाई, स्वच्छ मेस, 24/7 सुरक्षा एवं सीसीटीवी निगरानी।\n- **आवंटन:** मेरिट और आरक्षण नियमानुसार।\n- **शुल्क:** न्यूनतम वार्षिक शुल्क।`;
    }
    return `**SRTMUN Hostel Facilities:**\n- **Accommodation:** 3 Boys Hostels (550+ capacity), 3 Girls Hostels (600+ capacity), and Research Scholars Hostel.\n- **Amenities:** Commercial RO purified water, Wi-Fi connectivity, hygienic mess, 24/7 security with CCTV, recreation rooms.\n- **Allotment:** On merit basis and university reservation policy.\n- **Fee:** Highly subsidized annual accommodation fee with monthly sharing mess.`;
  }

  if (q.includes("sports") || q.includes("gym") || q.includes("क्रीडा") || q.includes("खेल")) {
    if (lang === "Marathi") {
      return `**SRTMUN क्रीडा व शारीरिक शिक्षण विभाग:**\n- **क्रीडांगण:** ८-लेन ४०० मीटर आंतरराष्ट्रीय दर्जाची धावपट्टी, इनडोअर स्टेडियम (बॅडमिंटन, टेबल टेनिस, कुस्ती), क्रिकेट मैदान आणि सुसज्ज व्यायामशाळा.\n- **उपक्रम:** विद्यापीठ वार्षिक क्रीडा महोत्सव, पश्चिम विभागीय व अखिल भारतीय आंतरविद्यापीठ स्पर्धांमध्ये सहभाग.`;
    }
    if (lang === "Hindi") {
      return `**SRTMUN खेलकूद एवं शारीरिक शिक्षा:**\n- **सुविधाएं:** 8-लेन 400 मीटर ओलंपिक मानक एथलेटिक ट्रैक, इंडोर स्टेडियम, क्रिकेट मैदान, बास्केटबॉल कोर्ट और आधुनिक जिम।\n- **प्रतियोगिताएं:** वार्षिक क्रीड़ा महोत्सव और अंतर-विश्वविद्यालयीय चैंपियनशिप।`;
    }
    return `**SRTMUN Sports & Physical Education:**\n- **Facilities:** 8-Lane 400m Olympic standard athletic track, Indoor Sports Stadium (badminton, table tennis, wrestling), Central Cricket Ground, and Gym.\n- **Events:** University Annual Krida Mahotsav, participation in West Zone and All-India Inter-University Championships.`;
  }

  if (q.includes("location") || q.includes("where") || q.includes("address") || q.includes("पत्ता") || q.includes("पता")) {
    if (lang === "Marathi") {
      return `**SRTMUN विद्यापीठाचा पत्ता:**\nस्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ (SRTMUN)\nज्ञानतीर्थ, विष्णुपूरी, नांदेड, महाराष्ट्र - ४३१६०६, भारत.\n- **परिसर:** नांदेड-लातूर रस्त्यावर ५९५+ एकर निसर्गरम्य परिसर.\n- **संपर्क:** +९१-२४६२-२२९२४२ / २२९२४३ | registrar@srtmun.ac.in`;
    }
    if (lang === "Hindi") {
      return `**SRTMUN विश्वविद्यालय का पता:**\nस्वामी रामानंद तीर्थ मराठवाड़ा विश्वविद्यालय (SRTMUN)\nज्ञानतीर्थ, विष्णुपुरी, नांदेड़, महाराष्ट्र - 431606, भारत।\n- **परिसर:** नांदेड़-लातूर रोड पर 595+ एकड़ हरित परिसर।\n- **संपर्क:** +91-2462-229242 / 229243 | registrar@srtmun.ac.in`;
    }
    return `**SRTMUN University Location:**\nSwami Ramanand Teerth Marathwada University (SRTMUN)\nDnyanteerth, Vishnupuri, Nanded, Maharashtra - 431606, India.\n- **Campus:** 595+ Acres lush green campus on Nanded-Latur Road.\n- **Contact:** +91-2462-229242 / 229243 | registrar@srtmun.ac.in`;
  }

  if (lang === "Marathi") {
    return `**SRTMUN कनेक्ट** मध्ये आपले स्वागत आहे! स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ, विष्णुपूरी, नांदेड येथे विज्ञान, तंत्रज्ञान, वाणिज्य, कला, औषधनिर्माण आणि सामाजिक शास्त्रांच्या १३ प्रशाळा कार्यरत आहेत.\n\nआपण विचारू शकता:\n- **प्रशाळा व अभ्यासक्रम:** पदवी, पदव्युत्तर आणि पदविका तपशील.\n- **प्रवेश प्रक्रिया:** पात्रता, आवश्यक कागदपत्रे आणि प्रवेश परीक्षा.\n- **परिसर व सुविधा:** ग्रंथालय, वसतिगृह आणि क्रीडांगण.\n\nकोणत्याही विशिष्ट विषयाबद्दल निःसंकोचपणे विचारा!`;
  }

  if (lang === "Hindi") {
    return `**SRTMUN कनेक्ट** में आपका स्वागत है! स्वामी रामानंद तीर्थ मराठवाड़ा विश्वविद्यालय, विष्णुपुरी, नांदेड़ में 13 विशेष संकाय कार्यरत हैं।\n\nआप निम्न विषयों पर जानकारी प्राप्त कर सकते हैं:\n- **संकाय एवं पाठ्यक्रम:** यूजी, पीजी एवं डिप्लोमा की जानकारी।\n- **प्रवेश प्रक्रिया:** पात्रता, दस्तावेज एवं दिशानिर्देश।\n- **परिसर एवं सुविधाएं:** पुस्तकालय, छात्रावास एवं खेलकूद।\n\nकृपया अपना प्रश्न पूछें!`;
  }

  return `Welcome to **SRTMUN Connect**! Swami Ramanand Teerth Marathwada University (SRTMUN) in Vishnupuri, Nanded offers 13 specialized academic schools covering Science, Technology, Commerce, Arts, Pharmacy, and Social Sciences.\n\nYou can explore:\n- **Schools & Courses:** Complete list of UG, PG, and Diploma programmes.\n- **Admissions:** Eligibility, documents, and entrance details.\n- **Campus & Facilities:** Library, CIF lab, Hostels, and Sports.\n\nFeel free to ask specific questions about any course or facility!`;
}

// ==========================================
// VITE INTEGRATION / STATIC SERVING
// ==========================================

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: "0.0.0.0",
        port: PORT,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SRTMUN CONNECT] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
