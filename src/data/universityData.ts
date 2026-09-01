export interface CourseItem {
  id: string;
  name: string;
  code?: string;
  level: 'UG' | 'PG' | 'Diploma' | 'Certificate' | 'Doctoral';
  duration: string;
  eligibility: string;
  admissionMode: string;
  careerProspects: string[];
  description: string;
  intake?: string;
}

export interface SchoolData {
  id: string;
  name: string;
  marathiName?: string;
  hindiName?: string;
  icon: string;
  description: string;
  director?: string;
  courses: CourseItem[];
}

export interface UniversityInfo {
  name: string;
  shortName: string;
  fullName: string;
  marathiName: string;
  tagline: string;
  established: number;
  naacGrade: string;
  location: string;
  campusArea: string;
  jurisdiction: string[];
  chancellor: string;
  viceChancellor: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  history: string;
  vision: string;
  mission: string;
}

export const UNIVERSITY_INFO: UniversityInfo = {
  name: "SRTMUN",
  shortName: "SRTMUN CONNECT",
  fullName: "Swami Ramanand Teerth Marathwada University",
  marathiName: "स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ",
  tagline: "Jnana-Tirtha (The Sacred Place of Knowledge)",
  established: 1994,
  naacGrade: "A Grade (3rd Cycle)",
  location: "Vishnupuri, Nanded, Maharashtra - 431606, India",
  campusArea: "595+ Acres Lush Green Campus",
  jurisdiction: ["Nanded", "Latur", "Parbhani", "Hingoli"],
  chancellor: "Hon'ble Governor of Maharashtra",
  viceChancellor: "Prof. (Dr.) Prakash Mahanwar",
  phone: "+91-2462-229242 / 229243",
  email: "registrar@srtmun.ac.in / support@srtmunconnect.edu.in",
  website: "https://srtmun.ac.in",
  address: "Dnyanteerth, Vishnupuri, Nanded, Maharashtra 431606, India",
  history: "Established on September 17, 1994, by the Government of Maharashtra, the University is named after the revered freedom fighter, educationist, and visionary Swami Ramanand Teerth who led the historic Hyderabad Liberation Movement. The university caters to the educational and research aspirations of southern Marathwada covering four major districts: Nanded, Latur, Parbhani, and Hingoli.",
  vision: "Enlightened Society through Quality Higher Education, Research, and Value Orientation for sustainable regional and national development.",
  mission: "To impart student-centric education, foster innovative scientific and social research, preserve indigenous regional knowledge, and empower underprivileged communities through accessible academic programmes."
};

export const SCHOOLS_DATA: SchoolData[] = [
  {
    id: "chemical-sciences",
    name: "School of Chemical Sciences",
    marathiName: "रासायनिक शास्त्र प्रशाळा",
    hindiName: "रासायनिक विज्ञान संकाय",
    icon: "FlaskConical",
    description: "Renowned center of excellence for research in synthetic organic chemistry, analytical chemistry, polymer materials, and pharmaceuticals.",
    courses: [
      {
        id: "msc-organic-chemistry",
        name: "M.Sc. Organic Chemistry",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Sc. with Chemistry as one of the major optional subjects with minimum 50% marks (45% for reserved categories).",
        admissionMode: "Merit basis / University Common Entrance Test (CET) as per Directorate of Higher Education guidelines.",
        careerProspects: ["Pharmaceutical R&D Chemist", "Process Development Scientist", "Quality Assurance Analyst", "Higher Research / CSIR-NET / Ph.D.", "Chemical Plant Executive"],
        description: "Comprehensive postgraduate study focusing on advanced organic synthesis, reaction mechanisms, spectroscopic identification, asymmetric synthesis, and heterocyclic chemistry."
      },
      {
        id: "msc-industrial-chemistry",
        name: "M.Sc. Industrial Chemistry",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Sc. degree with Chemistry / Industrial Chemistry with at least 50% aggregate marks.",
        admissionMode: "University CET / Merit list.",
        careerProspects: ["Industrial Process Engineer", "Production Chemist", "Petrochemical Analyst", "Dyes & Polymer Specialist", "Quality Control Officer"],
        description: "Emphasizes large-scale chemical manufacturing processes, unit operations, catalysis, green chemistry technologies, safety and environmental standards."
      },
      {
        id: "msc-medicinal-chemistry",
        name: "M.Sc. Medicinal Chemistry",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Sc. in Chemistry / Biochemistry / B.Pharm with minimum 50% marks.",
        admissionMode: "University CET / Merit.",
        careerProspects: ["Drug Discovery Scientist", "Pharmacophore Analyst", "Medicinal Chemist in Pharma MNCs", "Clinical Research Associate"],
        description: "Specialized programme blending chemistry with pharmacology, drug design, molecular modeling, SAR analysis, and preclinical evaluation."
      },
      {
        id: "msc-polymer-chemistry",
        name: "M.Sc. Polymer Chemistry",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Sc. with Chemistry as principal/optional subject with min 50% marks.",
        admissionMode: "University Centralized Admission Process (CAP) / Merit.",
        careerProspects: ["Polymer Material Scientist", "Plastic & Rubber Industry Technologist", "Composites Specialist", "Packaging Materials R&D"],
        description: "Study of macromolecules, biopolymers, advanced composite materials, polymerization kinetics, characterization, and smart polymeric structures."
      },
      {
        id: "msc-analytical-chemistry",
        name: "M.Sc. Analytical Chemistry",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Sc. with Chemistry as one of the subjects with at least 50% marks.",
        admissionMode: "Merit / Entrance exam.",
        careerProspects: ["Senior Analytical Chemist", "HPLC/GC-MS Specialist", "Food & Drug Testing Officer", "Environmental Testing Analyst"],
        description: "Mastering chromatographic techniques, spectroscopy (NMR, FTIR, UV-Vis), electroanalytical methods, validation, and regulatory compliance standards."
      },
      {
        id: "msc-physical-chemistry",
        name: "M.Sc. Physical Chemistry",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Sc. with Chemistry and Mathematics/Physics as allied subjects with 50% marks.",
        admissionMode: "Merit based admission.",
        careerProspects: ["Computational Chemist", "Thermodynamics & Kinetics Specialist", "Academician / Lecturer", "Material Science Researcher"],
        description: "Covers quantum chemistry, chemical kinetics, statistical thermodynamics, electrochemistry, photochemistry, and molecular spectroscopy."
      }
    ]
  },
  {
    id: "commerce-management",
    name: "School of Commerce & Management Sciences",
    marathiName: "वाणिज्य आणि व्यवस्थापन शास्त्र प्रशाळा",
    hindiName: "वाणिज्य एवं प्रबंधन विज्ञान संकाय",
    icon: "Briefcase",
    description: "Fostering entrepreneurial leadership, fintech capabilities, business management strategies, and professional commerce acumen.",
    courses: [
      {
        id: "bba",
        name: "B.B.A.",
        level: "UG",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 (HSC) passed from any stream (Arts/Science/Commerce) with at least 45% marks.",
        admissionMode: "State MAH-BBA CET / University Merit List.",
        careerProspects: ["Business Development Executive", "Marketing Associate", "Operations Coordinator", "Human Resource Specialist", "Startup Founder"],
        description: "Foundational business administration training covering organizational behavior, marketing principles, financial accounting, human resources, and business analytics."
      },
      {
        id: "bcom-banking-taxation",
        name: "B.Com. Banking & Taxation",
        level: "UG",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 (Commerce/Science) with English and Mathematics/Book-keeping with minimum 45% marks.",
        admissionMode: "Merit based admission.",
        careerProspects: ["Tax Consultant", "Banking Officer", "Financial Auditor", "GST Practitioner", "Accounts Executive"],
        description: "Specialized undergraduate commerce degree emphasizing commercial banking, direct & indirect taxation, auditing, and corporate laws."
      },
      {
        id: "mcom",
        name: "M.Com.",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Com / BBA / BBM degree with minimum 50% marks.",
        admissionMode: "University Merit List.",
        careerProspects: ["Senior Accountant", "Financial Analyst", "Tax Advisor", "College Lecturer (with NET/SET)", "Corporate Controller"],
        description: "Advanced concepts in corporate accounting, financial management, strategic management, investment analysis, and research methodology in commerce."
      },
      {
        id: "mba",
        name: "M.B.A.",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "Bachelor's degree in any discipline with min 50% marks (45% for reserved) with valid MAH-MBA-CET / CMAT / CAT score.",
        admissionMode: "State CET Cell Maharashtra Centralized Admission Process (CAP).",
        careerProspects: ["Management Consultant", "Brand Manager", "Investment Banker", "Supply Chain Manager", "HR Business Partner"],
        description: "AICTE approved flagship management programme with dual specializations in Marketing, Finance, HR, Operations, and Business Analytics."
      },
      {
        id: "diploma-digital-marketing",
        name: "Diploma in Digital Marketing",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "10+2 or Graduation in any discipline.",
        admissionMode: "Direct Merit Admission.",
        careerProspects: ["SEO Specialist", "Social Media Manager", "Content Strategist", "Performance Marketing Executive"],
        description: "Hands-on training in search engine optimization, Google Ads, social media strategy, email funnels, affiliate marketing, and analytics."
      },
      {
        id: "diploma-stock-market",
        name: "Diploma in Stock Market Trading",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "10+2 or Graduation in any discipline.",
        admissionMode: "Direct Admission.",
        careerProspects: ["Equity Trader", "Technical Analyst", "Portfolio Assistant", "Mutual Fund Distributor"],
        description: "Practical curriculum covering equity markets, derivatives (futures & options), fundamental analysis, technical charting, and risk management."
      }
    ]
  },
  {
    id: "computational-sciences",
    name: "School of Computational Sciences",
    marathiName: "संगणकीय शास्त्र प्रशाळा",
    hindiName: "कंप्यूटर विज्ञान संकाय",
    icon: "Cpu",
    description: "Pioneering state-of-the-art computational infrastructure, AI research, cloud architecture, cybersecurity, and software engineering.",
    courses: [
      {
        id: "bca",
        name: "B.C.A.",
        level: "UG",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 (HSC) passed in Science/Commerce/Arts with Mathematics or Statistics as a subject with min 45% marks.",
        admissionMode: "MAH-BCA CET / Merit based CAP round.",
        careerProspects: ["Software Developer", "Full Stack Web Developer", "Database Administrator", "System Support Specialist", "UI/UX Designer"],
        description: "Industry-ready curriculum in object-oriented programming, data structures, database management systems (DBMS), cloud platforms, and full stack web development."
      },
      {
        id: "bsc-cs",
        name: "B.Sc. Computer Science",
        level: "UG",
        duration: "3 Years (6 Semesters)",
        eligibility: "10+2 passed in Science stream with Mathematics with at least 45% marks.",
        admissionMode: "Merit based admission.",
        careerProspects: ["Programmer Analyst", "Junior Data Scientist", "Network Engineer", "Application Developer"],
        description: "Strong theoretical and practical grounding in algorithms, operating systems, compiler design, discrete mathematics, and software architecture."
      },
      {
        id: "mca",
        name: "M.C.A.",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "BCA / B.Sc. (CS/IT) / B.Com / B.A. with Mathematics at 10+2 level or Graduate level with min 50% marks (45% for reserved) and valid MAH-MCA-CET score.",
        admissionMode: "State CET Cell Maharashtra CAP Rounds.",
        careerProspects: ["Senior Software Engineer", "Cloud Solutions Architect", "Machine Learning Engineer", "DevOps Engineer", "Project Lead"],
        description: "AICTE approved advanced computer application program focusing on cloud native engineering, enterprise Java/Python, AI/ML, DevOps, and mobile application frameworks."
      },
      {
        id: "msc-computer-sciences",
        name: "M.Sc. Computer Sciences",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Sc. Computer Science / BCA / BCS / B.E. (CSE/IT) with at least 50% marks.",
        admissionMode: "University CET / Merit List.",
        careerProspects: ["Software R&D Scientist", "Data Engineer", "Systems Architect", "Higher Academic Research / NET-SET"],
        description: "Rigorous study in distributed systems, artificial intelligence, deep learning, graph algorithms, big data frameworks, and modern compiler design."
      },
      {
        id: "msc-computer-application",
        name: "M.Sc. Computer Application",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "Bachelor's degree in Computer Science / IT / BCA with min 50% marks.",
        admissionMode: "University Department Entrance.",
        careerProspects: ["Enterprise Application Architect", "ERP Consultant", "Lead Developer", "Technical Product Manager"],
        description: "Tailored for practical application software development, service-oriented architecture, microservices, mobile architectures, and API platforms."
      },
      {
        id: "msc-computer-network",
        name: "M.Sc. Computer Network",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Sc. (CS/IT/Electronics) / BCA with 50% marks.",
        admissionMode: "Merit based CAP.",
        careerProspects: ["Network Security Architect", "Cybersecurity Analyst", "Cloud Network Administrator", "Infrastructure Engineer"],
        description: "Specialized postgraduate program in network security, routing protocols, ethical hacking, cyber defense, SDN, and IoT communication protocols."
      }
    ]
  },
  {
    id: "earth-sciences",
    name: "School of Earth Sciences",
    marathiName: "भूशास्त्र प्रशाळा",
    hindiName: "पृथ्वी विज्ञान संकाय",
    icon: "Globe",
    description: "Dedicated to geological explorations, geospatial technologies, environmental conservation, geophysics, and natural hazard management.",
    courses: [
      {
        id: "bsc-geography",
        name: "B.Sc. Geography",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed in Science stream with minimum 45% marks.",
        admissionMode: "Merit based.",
        careerProspects: ["Cartographer", "Town Planning Assistant", "GIS Mapping Technician", "Environmental Surveyor"],
        description: "Geomorphology, climatology, oceanography, cartography, remote sensing, and human geography."
      },
      {
        id: "msc-geology",
        name: "M.Sc. Geology",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. with Geology as one of the subjects with at least 50% marks.",
        admissionMode: "University Entrance / Merit.",
        careerProspects: ["Geologist in GSI/ONGC/Coal India", "Hydrogeologist", "Mining Geologist", "Petroleum Geoscientist"],
        description: "Structural geology, mineralogy, petrology, stratigraphy, paleontology, economic geology, and hydrogeology."
      },
      {
        id: "msc-environmental-science",
        name: "M.Sc. Environmental Science",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. in any science stream with min 50% marks.",
        admissionMode: "University Merit List.",
        careerProspects: ["Environmental Officer in MPCB/CPCB", "EIA Consultant", "Pollution Control Specialist", "Sustainability Manager"],
        description: "Ecology, environmental pollution control, waste management, EIA, biodiversity conservation, and environmental laws."
      },
      {
        id: "ma-msc-geography",
        name: "M.A. / M.Sc. Geography",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.A. or B.Sc. with Geography as a special/optional subject with min 50% marks.",
        admissionMode: "Merit basis.",
        careerProspects: ["Urban Planner", "Geographic Analyst", "Tourism Consultant", "Academic Lecturer"],
        description: "Advanced physical geography, socio-economic geography, regional planning, digital cartography, and spatial statistics."
      },
      {
        id: "msc-geophysics",
        name: "M.Sc. Geophysics",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. with Physics/Geology/Mathematics with 50% marks.",
        admissionMode: "Entrance examination.",
        careerProspects: ["Exploration Geophysicist", "Seismologist", "Groundwater Exploration Specialist", "Oil & Gas Surveyor"],
        description: "Seismic exploration, gravity & magnetic methods, electrical resistivity, borehole geophysics, and geothermal exploration."
      },
      {
        id: "pg-diploma-geo-informatics",
        name: "Post Graduate Diploma in Geo-Informatics",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "Graduate in Science/Engineering/Agriculture/Geography with min 45% marks.",
        admissionMode: "Direct Admission.",
        careerProspects: ["GIS Analyst", "Remote Sensing Executive", "Drone Surveying Specialist", "Smart City Mapping Executive"],
        description: "GIS software mastery (ArcGIS, QGIS), satellite remote sensing, photogrammetry, GPS survey, and spatial database modeling."
      }
    ]
  },
  {
    id: "educational-sciences",
    name: "School of Educational Sciences",
    marathiName: "शिक्षणशास्त्र प्रशाळा",
    hindiName: "शिक्षा शास्त्र संकाय",
    icon: "GraduationCap",
    description: "Empowering visionary educators, physical education directors, pedagogical researchers, and curriculum innovators.",
    courses: [
      {
        id: "bed",
        name: "B.Ed.",
        level: "UG",
        duration: "2 Years (4 Semesters)",
        eligibility: "Graduate/Postgraduate in Arts/Science/Commerce with minimum 50% marks (45% for reserved category) with MAH-B.Ed CET.",
        admissionMode: "State CET Cell Maharashtra Centralized Admission Process.",
        careerProspects: ["Secondary School Teacher", "TGT/PGT Educator", "Curriculum Designer", "Educational Counselor"],
        description: "NCTE recognized teacher training programme emphasizing educational psychology, pedagogy of school subjects, inclusive education, and ICT in education."
      },
      {
        id: "bped",
        name: "B.P.Ed.",
        level: "UG",
        duration: "2 Years",
        eligibility: "Bachelor's degree with Physical Education as an elective or participation in sports competitions + MAH-B.P.Ed CET.",
        admissionMode: "State CET Cell Maharashtra CAP + Sports Field Test.",
        careerProspects: ["Physical Education Director", "Sports Coach", "Fitness Trainer", "Athletics Coordinator"],
        description: "Comprehensive physical education pedagogy, sports biomechanics, exercise physiology, officiating, and sports management."
      },
      {
        id: "med",
        name: "M.Ed.",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Ed. / B.A.B.Ed. / B.Sc.B.Ed. with minimum 50% marks and valid MAH-M.Ed CET score.",
        admissionMode: "State CET Cell Maharashtra CAP.",
        careerProspects: ["Assistant Professor in B.Ed Colleges", "Educational Policy Researcher", "Teacher Educator", "Education Officer (DIET/SCERT)"],
        description: "Higher research in philosophy & sociology of education, advanced educational research methodology, teacher education systems, and policy analysis."
      },
      {
        id: "mped",
        name: "M.P.Ed.",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.P.Ed. with at least 50% marks and valid MAH-M.P.Ed CET score.",
        admissionMode: "State CET Cell Maharashtra CAP.",
        careerProspects: ["University Sports Director", "National Sports Team Coach", "High Performance Sports Scientist", "Fitness Consultant"],
        description: "Advanced sports medicine, biomechanics, athletic training methodologies, sports psychology, and tournament administration."
      }
    ]
  },
  {
    id: "fine-performing-arts",
    name: "School of Fine & Performing Arts",
    marathiName: "ललित व प्रयोगजीवी कला प्रशाळा",
    hindiName: "ललित एवं प्रदर्शन कला संकाय",
    icon: "Palette",
    description: "Nurturing cultural heritage, traditional theatre, Indian classical music, visual painting, sculpting, and cinematic excellence.",
    courses: [
      {
        id: "bpa",
        name: "Bachelor of Performing Art (BPA)",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed in any stream with talent aptitude.",
        admissionMode: "Department Audition & Interview.",
        careerProspects: ["Performing Artist", "Stage Actor", "Vocalist / Instrumentalist", "Cultural Officer", "Music Producer"],
        description: "Immersion in Indian classical vocal/instrumental music, Kathak/Bharatnatyam dance, and stage drama fundamentals."
      },
      {
        id: "bva",
        name: "Bachelor of Visual Art (BVA)",
        level: "UG",
        duration: "4 Years",
        eligibility: "10+2 with Elementary/Intermediate Drawing Grade Exam pass preferred.",
        admissionMode: "Practical Drawing Test & Merit.",
        careerProspects: ["Visual Artist / Painter", "Sculptor", "Art Director in Advertising", "Illustrator / Concept Artist"],
        description: "Painting, applied arts, sculpture, printmaking, history of Indian & Western art, and digital visual techniques."
      },
      {
        id: "bvoc-theatre",
        name: "B.Voc. Theatre & Acting",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed in any stream.",
        admissionMode: "Practical Aptitude Test.",
        careerProspects: ["Film & TV Actor", "Theatre Director", "Voice-over Artist", "Dramaturge"],
        description: "Skill-oriented degree covering Stanislavski acting methods, Natyashastra, voice modulation, body movement, scriptwriting, and production design."
      },
      {
        id: "ma-theatre-arts",
        name: "M.A. Theatre Arts & Films",
        level: "PG",
        duration: "2 Years",
        eligibility: "Bachelor's degree in any faculty with passion for theatre/cinema.",
        admissionMode: "Audition & Written Test.",
        careerProspects: ["Film Director", "Screenplay Writer", "Production Designer", "Drama Faculty"],
        description: "Direction, film appreciation, world cinema, Indian folk theatre forms, lighting design, and digital filmmaking."
      },
      {
        id: "ma-music",
        name: "M.A. Music",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.A. Music / BPA or Bachelor degree with Sangeet Visharad.",
        admissionMode: "Practical Performance Audition.",
        careerProspects: ["Classical Vocalist", "Music Composer", "Sangeet Visharad Tutor", "AIR/Doordarshan Grade Artist"],
        description: "Advanced Ragas, Khayal gayaki, Thumri, Natyasangeet, acoustics, musicology, and harmonium/tabla accompaniment."
      },
      {
        id: "diploma-theatre-arts",
        name: "Diploma in Theatre Arts",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "10+2 pass.",
        admissionMode: "Direct Admission.",
        careerProspects: ["Stage Performer", "Lighting Operator", "Drama Workshop Facilitator"],
        description: "Hands-on stagecraft, makeup, set construction, dialogue delivery, and one-act play productions."
      },
      {
        id: "diploma-folk-art",
        name: "Diploma in Folk Art",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "10+2 pass.",
        admissionMode: "Direct Admission.",
        careerProspects: ["Folk Artist", "Lavani / Gondhal Performer", "Cultural Researcher"],
        description: "Preserving Marathwada and Maharashtra folk traditions: Powada, Bharud, Gondhal, Lavani, and rural musical instruments."
      },
      {
        id: "cert-dance",
        name: "Certificate Course in Dance",
        level: "Certificate",
        duration: "6 Months",
        eligibility: "10th / 10+2 pass.",
        admissionMode: "Direct Admission.",
        careerProspects: ["Dance Performer", "Choreography Assistant"],
        description: "Basics of classical dance footwork, mudras, expressions (Bhavas), and rhythm."
      },
      {
        id: "cert-music",
        name: "Certificate Course in Music",
        level: "Certificate",
        duration: "6 Months",
        eligibility: "10th / 10+2 pass.",
        admissionMode: "Direct Admission.",
        careerProspects: ["Junior Vocalist", "Instrumental Hobbyist"],
        description: "Introduction to Swaras, Alankars, basic Ragas, and Taal rhythm cycles."
      }
    ]
  },
  {
    id: "language-literature",
    name: "School of Language, Literature & Culture Studies",
    marathiName: "भाषा, साहित्य व संस्कृती संशोधन प्रशाळा",
    hindiName: "भाषा, साहित्य एवं संस्कृति संकाय",
    icon: "BookOpen",
    description: "Promoting linguistic excellence, literary criticism, comparative culture studies, Marathi pride, English literature, and European foreign languages.",
    courses: [
      {
        id: "ma-english",
        name: "M.A. English",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.A. with English as a compulsory/optional subject with min 45% marks.",
        admissionMode: "University Merit List.",
        careerProspects: ["English Professor", "Content Editor", "Technical Writer", "Publishing Executive", "Civil Services Aspirant"],
        description: "British literature, American literature, Indian writing in English, postcolonial studies, linguistics, and literary theory."
      },
      {
        id: "ma-marathi",
        name: "M.A. Marathi",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.A. with Marathi as optional/special subject.",
        admissionMode: "Merit basis.",
        careerProspects: ["Marathi Professor", "Marathi Journalist", "Translator", "Author/Scriptwriter", "State Cultural Dept Officer"],
        description: "Ancient, medieval and modern Marathi literature, Saint literature (Sant Sahitya), Dalit literature, folk culture, and linguistics."
      },
      {
        id: "cert-spanish",
        name: "Certificate Course in Spanish",
        level: "Certificate",
        duration: "6 Months",
        eligibility: "10+2 in any stream.",
        admissionMode: "Direct Admission.",
        careerProspects: ["Junior Translator", "Spanish Tourist Guide", "BPO Customer Support"],
        description: "A1 level Spanish grammar, everyday conversation, pronunciation, and Hispanic cultural insights."
      },
      {
        id: "cert-french",
        name: "Certificate Course in French",
        level: "Certificate",
        duration: "6 Months",
        eligibility: "10+2 in any stream.",
        admissionMode: "Direct Admission.",
        careerProspects: ["French Language Associate", "Embassy Liaison Assistant", "Hospitality Executive"],
        description: "A1 level French phonetics, basic conversational fluency, vocabulary, and Francophone culture."
      },
      {
        id: "diploma-spanish",
        name: "Diploma Course in Spanish",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "Certificate in Spanish or equivalent qualification.",
        admissionMode: "Merit / Assessment.",
        careerProspects: ["Spanish Interpreter", "Language Specialist in IT/BPO MNCs"],
        description: "A2/B1 level Spanish, complex sentence structures, business communication, and translation techniques."
      },
      {
        id: "diploma-french",
        name: "Diploma Course in French",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "Certificate in French or equivalent qualification.",
        admissionMode: "Merit / Assessment.",
        careerProspects: ["French Bilingual Specialist", "Corporate Communications Executive"],
        description: "A2/B1 level French, written composition, French literature excerpts, and corporate French."
      },
      {
        id: "adv-diploma-french",
        name: "Advanced Diploma in French",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "Diploma in French.",
        admissionMode: "Merit / Interview.",
        careerProspects: ["Senior French Translator", "Diplomatic Translator", "Language Trainer"],
        description: "B2 level French mastery, literary translation, advanced syntax, and international relations context."
      },
      {
        id: "adv-diploma-spanish",
        name: "Advanced Diploma in Spanish",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "Diploma in Spanish.",
        admissionMode: "Merit / Interview.",
        careerProspects: ["Senior Spanish Interpreter", "International Trade Coordinator"],
        description: "B2 level Spanish fluency, technical and commercial translation, and Latin American studies."
      }
    ]
  },
  {
    id: "life-sciences",
    name: "School of Life Sciences",
    marathiName: "जीवनशास्त्र प्रशाळा",
    hindiName: "जीवन विज्ञान संकाय",
    icon: "Dna",
    description: "Cutting-edge biotechnology laboratories, microbiology culture centers, botany herbarium, zoological taxonomy, and pathology diagnostics.",
    courses: [
      {
        id: "bsc-biotechnology",
        name: "B.Sc. Biotechnology",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed in Science stream with Biology with min 45% marks.",
        admissionMode: "Merit based admission.",
        careerProspects: ["Biotech Lab Analyst", "QC Assistant in Biopharma", "Clinical Research Associate", "Tissue Culture Executive"],
        description: "Cell biology, genetics, molecular biology, immunology, recombinant DNA technology, and bioethics."
      },
      {
        id: "bsc-microbiology",
        name: "B.Sc. Microbiology",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 Science with Biology with 45% marks.",
        admissionMode: "Merit basis.",
        careerProspects: ["Microbiologist", "Food Safety Officer", "Diagnostic Lab Technician", "Fermentation Technologist"],
        description: "Bacteriology, virology, mycology, microbial physiology, immunology, and industrial microbiology."
      },
      {
        id: "msc-biotechnology",
        name: "M.Sc. Biotechnology",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. in Biotech/Microbiology/Botany/Zoology/Biochemistry with min 50% marks.",
        admissionMode: "University Entrance CET / GAT-B / Merit.",
        careerProspects: ["Senior Research Scientist", "Genomics Specialist", "Bioinformatics Analyst", "Bioprocess Engineer"],
        description: "Advanced genetic engineering, plant & animal biotechnology, proteomics, CRISPR gene editing, and bioprocess technology."
      },
      {
        id: "msc-microbiology",
        name: "M.Sc. Microbiology",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. Microbiology with at least 50% marks.",
        admissionMode: "University CET / Merit.",
        careerProspects: ["Lead Microbiologist", "Vaccine Development Scientist", "Quality Assurance Manager in Pharma"],
        description: "Advanced microbial genetics, medical microbiology, immunology, environmental biotechnology, and biostatistics."
      },
      {
        id: "msc-botany",
        name: "M.Sc. Botany",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. with Botany as optional/principal subject with 50% marks.",
        admissionMode: "University Merit List.",
        careerProspects: ["Botanical Survey Scientist", "Plant Pathologist", "Floriculture Specialist", "Agricultural Officer"],
        description: "Plant taxonomy, plant physiology, ethnobotany, plant tissue culture, ecology, and pharmacognosy."
      },
      {
        id: "msc-zoology",
        name: "M.Sc. Zoology",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. with Zoology as a subject with 50% marks.",
        admissionMode: "University Merit List.",
        careerProspects: ["Zoologist", "Wildlife Biologist", "Fisheries Development Officer", "Sericulture Specialist"],
        description: "Animal physiology, endocrinology, entomology, fisheries biology, developmental biology, and wildlife conservation."
      },
      {
        id: "pgd-mlt",
        name: "P.G. Diploma in Medical Laboratory Technology (PGDMLT)",
        level: "Diploma",
        duration: "1 Year",
        eligibility: "B.Sc. in Chemistry / Life Sciences / Biotech with min 45% marks.",
        admissionMode: "Merit basis.",
        careerProspects: ["Medical Lab Technologist in Hospitals", "Pathology Lab In-charge", "Diagnostic Consultant"],
        description: "Clinical biochemistry, hematology, blood banking, histopathology, medical microbiology, and automated analyzer operations."
      }
    ]
  },
  {
    id: "mathematical-sciences",
    name: "School of Mathematical Sciences",
    marathiName: "गणितीय शास्त्र प्रशाळा",
    hindiName: "गणितीय विज्ञान संकाय",
    icon: "Binary",
    description: "Nurturing abstract thinking, theoretical mathematics, actuarial science, applied statistics, and stochastic modeling.",
    courses: [
      {
        id: "bsc-mathematics",
        name: "B.Sc. Mathematics",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed with Mathematics with min 45% marks.",
        admissionMode: "Merit based.",
        careerProspects: ["Statistical Analyst", "Operations Analyst", "Banking Specialist", "Data Modeler"],
        description: "Calculus, differential equations, real analysis, abstract algebra, linear algebra, and numerical methods."
      },
      {
        id: "bsc-statistics",
        name: "B.Sc. Statistics",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed with Mathematics/Statistics.",
        admissionMode: "Merit based.",
        careerProspects: ["Junior Data Analyst", "Market Research Associate", "Quality Control Inspector"],
        description: "Descriptive statistics, probability theory, sampling distributions, statistical inference, and regression analysis."
      },
      {
        id: "ma-msc-mathematics",
        name: "M.A. / M.Sc. Mathematics",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.A. / B.Sc. with Mathematics with min 50% marks.",
        admissionMode: "University Merit List / CET.",
        careerProspects: ["Mathematician", "Algorithm Developer", "Quantitative Analyst in Finance", "Assistant Professor (NET/SET)"],
        description: "Advanced abstract algebra, complex analysis, topology, functional analysis, differential geometry, and mathematical physics."
      },
      {
        id: "ma-msc-statistics",
        name: "M.A. / M.Sc. Statistics",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.A. / B.Sc. with Statistics/Mathematics with min 50% marks.",
        admissionMode: "University Merit / CET.",
        careerProspects: ["Data Scientist", "Biostatistician", "Actuary Analyst", "Machine Learning Statistician", "Statistical Quality Officer"],
        description: "Multivariate analysis, stochastic processes, Bayesian inference, time series forecasting, design of experiments, and statistical computing with R/Python."
      }
    ]
  },
  {
    id: "media-studies",
    name: "School of Media Studies",
    marathiName: "माध्यम शास्त्र प्रशाळा",
    hindiName: "मीडिया अध्ययन संकाय",
    icon: "Video",
    description: "Equipped with HD broadcast television studio, digital sound recording suite, print media lab, and multimedia publishing centers.",
    courses: [
      {
        id: "ba-mass-comm",
        name: "B.A. Mass Communication & Journalism",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed in any stream with min 45% marks.",
        admissionMode: "Merit / Department Interview.",
        careerProspects: ["News Reporter", "Sub-editor", "Content Creator", "Photojournalist", "PR Coordinator"],
        description: "Print journalism, broadcast reporting, media ethics, photography, news writing, and digital media production."
      },
      {
        id: "ma-mass-comm",
        name: "M.A. Mass Communication & Journalism",
        level: "PG",
        duration: "2 Years",
        eligibility: "Bachelor's degree in any discipline with min 45% marks.",
        admissionMode: "University Merit / Entrance.",
        careerProspects: ["Senior Television News Anchor", "Investigative Journalist", "Corporate Communications Head", "Media Strategist"],
        description: "Investigative reporting, media management, international communication, development communication, media laws, and documentary filmmaking."
      },
      {
        id: "msc-ma-electronic-media",
        name: "M.Sc. / M.A. Electronics Media Studies",
        level: "PG",
        duration: "2 Years",
        eligibility: "Graduate in any stream.",
        admissionMode: "Department Entrance & Audition.",
        careerProspects: ["Video Editor", "Audio Engineer", "Radio Jockey (RJ)", "Motion Graphics Artist", "Digital Broadcast Producer"],
        description: "Studio television production, audio mixing, multi-camera operations, non-linear video editing (Premiere/FCP), and podcasting."
      },
      {
        id: "mlisc",
        name: "Master of Library & Information Science (M.L.I.Sc.)",
        level: "PG",
        duration: "1 Year / 2 Years Integrated",
        eligibility: "B.L.I.Sc. or Bachelor degree with min 45% marks.",
        admissionMode: "Merit based.",
        careerProspects: ["Chief University Librarian", "Information Scientist", "Digital Archivist", "Knowledge Manager in Corporate"],
        description: "Digital library software (KOHA, DSpace), cataloging standards, metadata management, information retrieval, and knowledge architecture."
      }
    ]
  },
  {
    id: "pharmacy",
    name: "School of Pharmacy",
    marathiName: "औषधनिर्माण शास्त्र प्रशाळा",
    hindiName: "फार्मेसी संकाय",
    icon: "ShieldAlert",
    description: "PCI and AICTE recognized premier pharmacy institute with advanced pilot plant, pharmacology laboratories, and animal house facility.",
    courses: [
      {
        id: "bpharm",
        name: "B.Pharm.",
        level: "UG",
        duration: "4 Years (8 Semesters)",
        eligibility: "10+2 passed with Physics, Chemistry and Biology/Mathematics with min 45% marks (40% for reserved) and valid MHT-CET / NEET score.",
        admissionMode: "State CET Cell Maharashtra Centralized Admission Process (CAP).",
        careerProspects: ["Registered Pharmacist", "Drug Inspector (MPSC)", "Formulation Scientist", "Pharma Marketing Executive", "Clinical Pharmacist"],
        description: "PCI approved undergraduate pharmacy curriculum covering pharmaceutics, pharmaceutical chemistry, pharmacology, pharmacognosy, and pharmaceutical jurisprudence."
      },
      {
        id: "mpharm-pharmaceutics",
        name: "M.Pharm. Pharmaceutics",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Pharm. with minimum 55% marks (50% for reserved) and valid GPAT score.",
        admissionMode: "State CET Cell CAP Rounds.",
        careerProspects: ["Senior Formulation Scientist", "Novel Drug Delivery Systems (NDDS) Researcher", "Production Manager in Pharma"],
        description: "Advanced biopharmaceutics, pharmacokinetics, formulation design, nanotechnology drug delivery, and regulatory filings."
      },
      {
        id: "mpharm-pharmaceutical-chemistry",
        name: "M.Pharm. Pharmaceutical Chemistry",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Pharm. with minimum 55% marks with valid GPAT score.",
        admissionMode: "State CET Cell CAP.",
        careerProspects: ["Synthetic Medicinal Chemist", "Process Chemistry Lead", "Drug Design Computational Scientist"],
        description: "Structure-activity relationship (SAR), computer-aided drug design (CADD), advanced organic chemistry, and chromatographic impurity profiling."
      },
      {
        id: "mpharm-pharmacology",
        name: "M.Pharm. Pharmacology",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Pharm. with min 55% marks with valid GPAT score.",
        admissionMode: "State CET Cell CAP.",
        careerProspects: ["Preclinical Pharmacologist", "Clinical Research Coordinator", "Pharmacovigilance Scientist", "Toxicologist"],
        description: "Molecular pharmacology, screening models, neuropharmacology, toxicology, clinical trials management, and pharmacovigilance."
      },
      {
        id: "mpharm-quality-assurance",
        name: "M.Pharm. Quality Assurance",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "B.Pharm. with min 55% marks with valid GPAT score.",
        admissionMode: "State CET Cell CAP.",
        careerProspects: ["Quality Assurance Manager", "Regulatory Affairs Specialist", "Analytical Method Validation Scientist", "GMP Auditor"],
        description: "Validation protocols, cGMP, regulatory compliance (USFDA, EMA, CDSCO), analytical method development, and quality by design (QbD)."
      }
    ]
  },
  {
    id: "physical-sciences",
    name: "School of Physical Sciences",
    marathiName: "भौतिक शास्त्र प्रशाळा",
    hindiName: "भौतिक विज्ञान संकाय",
    icon: "Atom",
    description: "Specializing in solid-state physics, nanoscience, solar energy materials, photonics, and condensed matter physics.",
    courses: [
      {
        id: "bsc-physics",
        name: "B.Sc. Physics",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed in Science stream with Physics and Mathematics with min 45% marks.",
        admissionMode: "Merit based.",
        careerProspects: ["Physics Lab Assistant", "Scientific Assistant in BARC/ISRO", "Optics Specialist", "Technical Officer"],
        description: "Mechanics, thermodynamics, optics, electromagnetism, quantum physics, atomic physics, and electronics."
      },
      {
        id: "msc-physics",
        name: "M.Sc. Physics",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. with Physics as principal/optional subject with min 50% marks.",
        admissionMode: "University CET / Merit.",
        careerProspects: ["Physicist", "Materials Scientist", "Semiconductor Engineer", "BARC / TIFR Research Scholar", "College Professor (NET/SET)"],
        description: "Classical mechanics, quantum mechanics, solid state physics, nuclear & particle physics, laser physics, and nanomaterials."
      },
      {
        id: "msc-energy-studies",
        name: "M.Sc. Energy Studies",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.Sc. with Physics/Chemistry/Electronics/Engineering with min 50% marks.",
        admissionMode: "University Merit List.",
        careerProspects: ["Solar Energy Engineer", "Renewable Energy Consultant", "Energy Auditor", "Battery Technology Specialist"],
        description: "Photovoltaic technology, solar thermal systems, bio-energy, wind energy, hydrogen storage, and energy conservation audits."
      }
    ]
  },
  {
    id: "social-sciences",
    name: "School of Social Sciences",
    marathiName: "सामाजिक शास्त्र प्रशाळा",
    hindiName: "सामाजिक विज्ञान संकाय",
    icon: "Users",
    description: "Dedicated to social welfare research, human rights advocacy, rural development, sociology, applied economics, and tribal empowerment.",
    courses: [
      {
        id: "ba-sociology",
        name: "B.A. Sociology",
        level: "UG",
        duration: "3 Years",
        eligibility: "10+2 passed in any stream.",
        admissionMode: "Merit basis.",
        careerProspects: ["Social Research Assistant", "NGO Program Coordinator", "Community Outreach Officer", "Civil Services Aspirant"],
        description: "Principles of sociology, Indian social structure, social change, rural & urban sociology, and social movements."
      },
      {
        id: "msw",
        name: "Master of Social Work (M.S.W.)",
        level: "PG",
        duration: "2 Years (4 Semesters)",
        eligibility: "Bachelor's degree in any discipline with min 45% marks.",
        admissionMode: "University Entrance CET + GD/PI.",
        careerProspects: ["Medical & Psychiatric Social Worker", "HR & Labour Welfare Officer", "Child Protection Officer", "NGO Executive Director", "CSR Manager"],
        description: "Social casework, group work, community organization, urban/rural community development, medical & psychiatric social work, and concurrent field work."
      },
      {
        id: "ma-sociology",
        name: "M.A. Sociology",
        level: "PG",
        duration: "2 Years",
        eligibility: "Bachelor's degree in any discipline with Sociology preference.",
        admissionMode: "Merit based.",
        careerProspects: ["Sociologist", "Public Policy Researcher", "Social Impact Evaluator", "Lecturer in Sociology"],
        description: "Theoretical sociology, methodology of social research, sociology of development, gender studies, and agrarian sociology."
      },
      {
        id: "ma-applied-economics",
        name: "M.A. Applied Economics",
        level: "PG",
        duration: "2 Years",
        eligibility: "B.A. Economics / B.Com / B.Sc. with Economics with min 45% marks.",
        admissionMode: "Merit based.",
        careerProspects: ["Economic Analyst", "Banking Economist", "Market Research Analyst", "Policy Analyst in NITI Aayog/Govt"],
        description: "Micro & macro economics, econometrics, agricultural economics, public finance, developmental economics, and Marathwada regional economic studies."
      },
      {
        id: "ma-human-rights",
        name: "M.A. Human Rights",
        level: "PG",
        duration: "2 Years",
        eligibility: "Bachelor's degree in any faculty with min 45% marks.",
        admissionMode: "Merit basis.",
        careerProspects: ["Human Rights Officer (NHRC/SHRC)", "Legal Aid Advocate Assistant", "UN & International NGO Specialist", "Child & Women Rights Activist"],
        description: "International human rights jurisprudence, Indian constitutional protections, rights of vulnerable groups, environmental justice, and human rights advocacy."
      }
    ]
  }
];

export const DIGITAL_SERVICES = [
  {
    id: "student-portal",
    title: "e-Suvidha Student Portal",
    marathiTitle: "ई-सुविधा विद्यार्थी पोर्टल",
    category: "Academic & Profile",
    description: "Centralized login for student profile, PRN generation, enrollment status, subject registration, and exam form submissions.",
    link: "https://srtmun.digitaluniversity.ac",
    badge: "Official Portal",
    icon: "UserCheck"
  },
  {
    id: "exam-services",
    title: "Examination Services & Hall Tickets",
    marathiTitle: "परीक्षा सेवा आणि प्रवेशपत्र",
    category: "Examinations",
    description: "Download online hall tickets, view semester exam timetables, submit exam application forms, and request center allocations.",
    link: "https://srtmun.ac.in/en/examination-section",
    badge: "Active",
    icon: "FileText"
  },
  {
    id: "results-portal",
    title: "Online Results & Marksheets",
    marathiTitle: "ऑनलाइन निकाल आणि गुणपत्रिका",
    category: "Examinations",
    description: "Instant access to semester end results, grade cards, photocopy requests, and online revaluation/verification applications.",
    link: "https://srtmun.ac.in/en/examination-results",
    badge: "Fast Track",
    icon: "Award"
  },
  {
    id: "online-applications",
    title: "Online Degree & Migration Certificates",
    marathiTitle: "पदवी व स्थलांतर प्रमाणपत्र अर्ज",
    category: "Certificates",
    description: "Apply for convocation degree certificate, duplicate marksheets, migration certificates, and transcript attestation with trackable status.",
    link: "https://srtmun.ac.in/en/online-certificates",
    badge: "Online Service",
    icon: "GraduationCap"
  },
  {
    id: "university-notices",
    title: "Official Circulars & Notifications",
    marathiTitle: "विद्यापीठ परिपत्रके व सूचना",
    category: "Notices",
    description: "Real-time updates on academic circulars, exam schedule revisions, tender notices, recruitment alerts, and university holidays.",
    link: "https://srtmun.ac.in/en/circulars-notices",
    badge: "Live Feed",
    icon: "Bell"
  },
  {
    id: "digital-resources",
    title: "KRC Digital Library & e-Journals",
    marathiTitle: "डिजिटल ग्रंथालय आणि ई-जर्नल्स",
    category: "Library Resources",
    description: "Access 10,000+ e-books, Shodhganga Ph.D. thesis repository, UGC-Infonet e-journals, Web of Science, and remote access catalogue.",
    link: "https://srtmun.ac.in/en/krc-library",
    badge: "24/7 Access",
    icon: "Library"
  }
];

export const ACADEMIC_CALENDAR_DATA = {
  academicYear: "2025 - 2026",
  semesters: [
    {
      term: "Odd Semester (Term I - Monsoons)",
      duration: "June 2025 – November 2025",
      events: [
        { date: "June 16, 2025", title: "Commencement of Academic Year & Teaching (UG & PG)", type: "academic" },
        { date: "July 10, 2025", title: "Last Date for First Year Admissions (Affiliated Colleges & Schools)", type: "admission" },
        { date: "August 15, 2025", title: "Independence Day Celebration on Campus", type: "holiday" },
        { date: "September 17, 2025", title: "SRTMUN University Foundation Day & Marathwada Mukti Sangram Din", type: "festival" },
        { date: "October 06 - 10, 2025", title: "Mid-Semester Internal Assessments & Tests", type: "exam" },
        { date: "October 20 - November 02, 2025", title: "Diwali Vacation Period", type: "holiday" },
        { date: "November 05, 2025", title: "Term End & Theory Exam Commencement (Winter 2025)", type: "exam" }
      ]
    },
    {
      term: "Even Semester (Term II - Winter/Spring)",
      duration: "December 2025 – May 2026",
      events: [
        { date: "December 08, 2025", title: "Commencement of Classes for Even Semester", type: "academic" },
        { date: "January 15 - 18, 2026", title: "Annual University Inter-Collegiate Youth Festival (Yuva Spandan)", type: "festival" },
        { date: "January 26, 2026", title: "Republic Day Parade & Sports Felicitation", type: "holiday" },
        { date: "February 20 - 24, 2026", title: "Annual Sports Meet & Inter-University Athletic Championship", type: "sports" },
        { date: "March 15 - 20, 2026", title: "Practical Examinations & Project Viva Voce", type: "exam" },
        { date: "April 06, 2026", title: "Commencement of Summer 2026 Theory Examinations", type: "exam" },
        { date: "May 02 - June 14, 2026", title: "Summer Vacation for Faculty and Students", type: "holiday" },
        { date: "May 31, 2026", title: "Declaration of Summer Semester Results", type: "academic" }
      ]
    }
  ]
};

export const CAMPUS_FACILITIES = [
  {
    title: "Knowledge Resource Centre (Central Library)",
    marathiTitle: "ज्ञान स्त्रोत केंद्र (मध्यवर्ती ग्रंथालय)",
    icon: "BookMarked",
    description: "Multi-storeyed modern library housing over 1,50,000+ printed volumes, 6,000+ reference encyclopedias, DelNet network, and air-conditioned reading halls accommodating 400+ scholars.",
    highlights: ["Shodhganga Repository Access", "OPAC automated kiosk", "Braille assistive computing lab", "High-speed internet lounge"]
  },
  {
    title: "Central Instrumentation Facility (CIF)",
    marathiTitle: "मध्यवर्ती उपकरण सुविधा (CIF)",
    icon: "Microscope",
    description: "High-end sophisticated analytical instrumentation center assisting Ph.D. scholars, faculties, and industry across Maharashtra.",
    highlights: ["500 MHz NMR Spectrometer", "FE-SEM with EDS", "Powder X-Ray Diffractometer (XRD)", "HPLC & GC-MS/MS"]
  },
  {
    title: "Smart ICT Classrooms & Campus LAN",
    marathiTitle: "स्मार्ट वर्गखोल्या व वाय-फाय परिसर",
    icon: "Laptop",
    description: "1 Gbps high-speed NKN (National Knowledge Network) optical fiber backbone connecting all 13 schools, multimedia classrooms, and interactive smartboards.",
    highlights: ["1 Gbps NKN Connectivity", "Dedicated Wi-Fi hot-spots", "Interactive digital podiums", "Virtual lecture recording studio"]
  },
  {
    title: "Health Centre & Medical Care",
    marathiTitle: "विद्यापीठ आरोग्य केंद्र",
    icon: "HeartPulse",
    description: "24x7 operational health center with resident medical officers, basic pathology screening, ambulance facility, and periodic health checkup camps.",
    highlights: ["Free general consultation", "Emergency first-aid & ambulance", "Routine blood testing", "Student health insurance assistance"]
  },
  {
    title: "Auditoriums & Open Air Theatres",
    marathiTitle: "सभागृह व मुक्त नाट्यगृह",
    icon: "Sparkles",
    description: "Majestic Senate Hall and 1,000-seater air-conditioned Main University Auditorium for convocations, national symposiums, and cultural festivals.",
    highlights: ["Acoustically treated auditorium", "HD digital projection systems", "Amphitheatre for street plays", "Seminar halls in each school"]
  },
  {
    title: "Botanical Garden & Herbal Research",
    marathiTitle: "वनस्पती उद्यान व औषधी वनस्पती केंद्र",
    icon: "Trees",
    description: "Sprawling 15-acre botanical sanctuary cultivating rare Marathwada flora, medicinal herbs, butterfly garden, and experimental greenhouse.",
    highlights: ["300+ medicinal plant species", "Greenhouse propagation lab", "Drip-irrigated landscape", "Ecological research center"]
  }
];

export const HOSTEL_DATA = {
  overview: "SRTMUN provides affordable, secure, and well-maintained hostel accommodation within the lush green university campus in Vishnupuri, Nanded.",
  types: [
    {
      name: "Boys' Hostels (3 Blocks)",
      capacity: "550+ Students",
      features: ["Single & Twin sharing rooms", "Attached study tables & cupboards", "Solar water heaters", "Common recreational hall with LED TV"]
    },
    {
      name: "Girls' Hostels (3 Blocks)",
      capacity: "600+ Students",
      features: ["24/7 dedicated female security & CCTV", "Twin and triple sharing rooms", "In-house hygienic mess", "Gymnasium & indoor games room"]
    },
    {
      name: "Research Scholars' Hostel",
      capacity: "120+ Scholars",
      features: ["Single occupancy rooms for Ph.D. fellows", "LAN/Wi-Fi workstations", "Quiet study environment", "Guest faculty suites"]
    }
  ],
  amenities: [
    { title: "Pure Drinking Water", desc: "Commercial RO water purification plants in every hostel wing.", icon: "Droplets" },
    { title: "Hygienic Mess Facility", desc: "Student-run and university-supervised nutritious vegetarian food mess.", icon: "Utensils" },
    { title: "Round-the-Clock Security", desc: "Armed guards at checkpoints, electronic gate passes, and biometric entry.", icon: "ShieldCheck" },
    { title: "High Speed Internet", desc: "Wi-Fi coverage across all hostel blocks and common rooms.", icon: "Wifi" },
    { title: "Indoor Recreation", desc: "Table tennis, carrom, chess boards, daily newspapers, and periodicals.", icon: "Tv" },
    { title: "Medical Emergency Call", desc: "Ambulance on call and priority access to the Campus Health Centre.", icon: "Ambulance" }
  ],
  rules: [
    "Hostel admissions are allotted purely on academic merit and university reservation policies.",
    "Hostel gates close strictly at 9:00 PM for all residents; prior written permission is required for late entry.",
    "Ragging in any form is strictly prohibited and punishable under Maharashtra Anti-Ragging Act.",
    "Guests and day scholars are not permitted to stay in hostel rooms overnight without warden approval.",
    "Cleanliness of rooms and campus green ethos must be actively maintained."
  ],
  feeStructure: "Subsidized accommodation fee approx. ₹3,500 – ₹5,000 per academic year (caution deposit refundable). Mess charges operate on monthly sharing basis (approx. ₹2,200 – ₹2,800/month)."
};

export const SPORTS_DATA = {
  overview: "The Department of Physical Education & Sports at SRTMUN encourages all-round athletic prowess, sporting spirit, and participation in All India Inter-University Tournaments.",
  facilities: [
    {
      name: "Olympic Standard 400m Athletic Track",
      category: "Outdoor",
      description: "8-lane standard running track for sprints, hurdles, relay, long jump, shot put, javelin, and discus throw.",
      icon: "Activity"
    },
    {
      name: "Indoor Multipurpose Sports Complex",
      category: "Indoor",
      description: "Synthetic wooden badminton courts, international-standard table tennis arena, wrestling mats, and judo hall.",
      icon: "Dumbbell"
    },
    {
      name: "Central Cricket & Football Stadium",
      category: "Outdoor",
      description: "Lush green grass outfield with turf wickets for inter-collegiate tournaments, football ground, and pavilions.",
      icon: "Trophy"
    },
    {
      name: "Modern Gymnasium & Fitness Centre",
      category: "Fitness",
      description: "Equipped with motorized treadmills, cross-trainers, multi-station weight rigs, and certified fitness trainers.",
      icon: "Flame"
    },
    {
      name: "Basketball & Volleyball Courts",
      category: "Outdoor",
      description: "Floodlit concrete basketball court and dedicated volleyball courts for evening practice and university leagues.",
      icon: "Target"
    },
    {
      name: "Yoga & Mind-Body Wellness Hall",
      category: "Wellness",
      description: "Dedicated serene hall for daily yoga sessions, pranayama workshops, and mental conditioning for athletes.",
      icon: "Smile"
    }
  ],
  achievements: [
    "Winners & Runners-up at Maharashtra State Inter-University 'Krida Mahotsav'",
    "Representations at West Zone and All India Inter-University Tournaments",
    "Special cash incentives and grace marks for medalists at national/state level",
    "Annual Krida Ratna Awards for outstanding student athletes"
  ]
};
