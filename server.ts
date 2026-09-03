import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const app = express();

const PORT = Number(process.env.PORT) || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

import { fileURLToPath } from "url";
const __dirname = process.cwd();

// --------------------------------------------------
// Middleware
// --------------------------------------------------

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "1mb" }));

// --------------------------------------------------
// Gemini configuration
// --------------------------------------------------

let ai: GoogleGenAI | null = null;

if (GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
  });

  console.log("[SRTMUN CONNECT] Gemini API configured");
} else {
  console.warn(
    "[SRTMUN CONNECT] GEMINI_API_KEY is missing. AI requests will fail."
  );
}

// --------------------------------------------------
// Language configuration
// --------------------------------------------------

type Language = "en" | "mr" | "hi";

function normalizeLanguage(language: unknown): Language {
  if (language === "mr") return "mr";
  if (language === "hi") return "hi";
  return "en";
}

function languageName(language: Language): string {
  switch (language) {
    case "mr":
      return "Marathi";
    case "hi":
      return "Hindi";
    default:
      return "English";
  }
}

// --------------------------------------------------
// System instruction
// --------------------------------------------------

function createSystemInstruction(language: Language): string {
  const selectedLanguage = languageName(language);

  return `
You are "SRTMUN Connect", an AI information assistant for
Swami Ramanand Teerth Marathwada University (SRTMUN),
Vishnupuri, Nanded, Maharashtra, India.

Your job is to help students, parents, faculty, staff and visitors
with information about the university.

You can answer questions about:

- SRTMUN
- Schools
- Courses
- BCA
- MCA
- B.Sc.
- M.Sc.
- M.Com.
- MBA
- B.Pharm.
- Admission
- Eligibility
- Fees
- Departments
- Campus
- Hostel
- Sports
- Digital services
- Academic calendar
- University information
- Student guidance
- Course career opportunities

IMPORTANT LANGUAGE RULE:

The user's selected language is:
${selectedLanguage}

If selected language is Marathi:
- Answer completely in natural Marathi.
- Use Devanagari script.
- English technical terms such as BCA, MCA, HTML, JavaScript, etc. may remain in English when appropriate.

If selected language is Hindi:
- Answer completely in natural Hindi.
- Use Devanagari script.
- English technical terms may remain in English when appropriate.

If selected language is English:
- Answer completely in English.

VERY IMPORTANT:
Always answer the complete question.
Do not give only keywords.
Do not give only the course name.
Do not shorten the answer unnecessarily.

If exact university-specific information is not available,
say clearly that the information should be verified from the official
SRTMUN source.

Do not invent exact fees, dates, admission rules, phone numbers,
or official notices.

Keep answers useful and easy to understand.
`;
}

// --------------------------------------------------
// Health check
// --------------------------------------------------

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    status: "ok",
    service: "SRTMUN CONNECT API",
    university:
      "Swami Ramanand Teerth Marathwada University, Nanded",
    geminiConfigured: Boolean(GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// --------------------------------------------------
// AI Chat API
// --------------------------------------------------

app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message, language } = req.body;

    if (
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return res.status(400).json({
        success: false,
        error: "Message is required.",
      });
    }

    const selectedLanguage = normalizeLanguage(language);

    if (!ai) {
      return res.status(503).json({
        success: false,
        error:
          selectedLanguage === "mr"
            ? "AI सेवा सध्या उपलब्ध नाही. GEMINI_API_KEY तपासा."
            : selectedLanguage === "hi"
            ? "AI सेवा अभी उपलब्ध नहीं है। GEMINI_API_KEY जांचें।"
            : "AI service is unavailable. Please check GEMINI_API_KEY.",
      });
    }

    console.log(
      `[SRTMUN CONNECT] AI request | language=${selectedLanguage}`
    );

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: message.trim(),
      config: {
        systemInstruction:
          createSystemInstruction(selectedLanguage),
        temperature: 0.4,
        maxOutputTokens: 1500,
      },
    });

    const answer = response.text?.trim() || "";

    if (!answer) {
      return res.status(502).json({
        success: false,
        error:
          selectedLanguage === "mr"
            ? "AI कडून उत्तर मिळाले नाही."
            : selectedLanguage === "hi"
            ? "AI से कोई उत्तर प्राप्त नहीं हुआ।"
            : "No response was received from AI.",
      });
    }

    return res.json({
      success: true,
      message: message.trim(),
      language: selectedLanguage,
      answer,
      reply: answer,
    });
  } catch (error) {
    console.error(
      "[SRTMUN CONNECT] Gemini error:",
      error
    );

    const language = normalizeLanguage(
      req.body?.language
    );

    let errorMessage =
      "AI service is temporarily unavailable.";

    if (language === "mr") {
      errorMessage =
        "AI सेवा सध्या तात्पुरती उपलब्ध नाही. कृपया काही वेळाने पुन्हा प्रयत्न करा.";
    }

    if (language === "hi") {
      errorMessage =
        "AI सेवा अभी अस्थायी रूप से उपलब्ध नहीं है। कृपया कुछ समय बाद फिर से प्रयास करें।";
    }

    return res.status(500).json({
      success: false,
      error: errorMessage,
    });
  }
});

// --------------------------------------------------
// API 404 handler
// --------------------------------------------------

app.use("/api", (_req, res) => {
  res.status(404).json({
    success: false,
    error: "API endpoint not found.",
  });
});

// --------------------------------------------------
// Serve React frontend
// --------------------------------------------------

const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

// React SPA fallback
app.use((_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// --------------------------------------------------
// Start server
// --------------------------------------------------

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `[SRTMUN CONNECT] Server running on http://0.0.0.0:${PORT}`
  );

  console.log(
    `[SRTMUN CONNECT] Open: http://localhost:${PORT}`
  );
});