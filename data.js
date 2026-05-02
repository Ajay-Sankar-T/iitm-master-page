// ============================================================
//  IITM CENTRAL — DATA FILE
//  All portals, departments, research centres categorised
// ============================================================

const PORTALS = [
  // ── ACADEMICS ──────────────────────────────────────────────
  {
    id: "moodle",
    name: "Moodle LMS",
    desc: "Course management, assignments, grades & material for on-campus students.",
    url: "https://courses.iitm.ac.in",
    cat: "academics",
    icon: "📚",
    tag: "LMS"
  },
  {
    id: "moodle-old",
    name: "Moodle (Archive)",
    desc: "Past three semesters' course archives.",
    url: "https://oldcourses.iitm.ac.in",
    cat: "academics",
    icon: "🗃️",
    tag: "Archive"
  },
  {
    id: "bs-degree",
    name: "BS Degree Online",
    desc: "World's first BS in Data Science & Applications. Foundation to BS levels.",
    url: "https://onlinedegree.iitm.ac.in",
    cat: "academics",
    icon: "🎓",
    tag: "Online"
  },
  {
    id: "study-portal",
    name: "Study Portal (BS)",
    desc: "Academics, fees, schedules for BS Degree learners.",
    url: "https://study.iitm.ac.in",
    cat: "academics",
    icon: "💻",
    tag: "BS"
  },
  {
    id: "nptel",
    name: "NPTEL",
    desc: "National Programme on Technology Enhanced Learning — free video courses from IITs & IISc.",
    url: "https://nptel.ac.in",
    cat: "academics",
    icon: "▶️",
    tag: "Free Courses"
  },
  {
    id: "mtech-adm",
    name: "MTech Admissions",
    desc: "GATE-based M.Tech & M.A. admissions portal for IIT Madras.",
    url: "https://mtechadm.iitm.ac.in",
    cat: "academics",
    icon: "📝",
    tag: "Admissions"
  },
  {
    id: "phd-adm",
    name: "PhD Admissions",
    desc: "Direct PhD & MS (Research) applications and fellowship info.",
    url: "https://www.iitm.ac.in/phd",
    cat: "academics",
    icon: "🔬",
    tag: "Admissions"
  },
  {
    id: "code-iitm",
    name: "CODE — Outreach & Digital",
    desc: "Centre for Outreach and Digital Education — certifications and online learning.",
    url: "https://code.iitm.ac.in",
    cat: "academics",
    icon: "🌐",
    tag: "Outreach"
  },
  {
    id: "academics-main",
    name: "Academic Programmes",
    desc: "Full catalogue of B.Tech, Dual Degree, MSc, MBA programmes at IITM.",
    url: "https://www.iitm.ac.in/academics",
    cat: "academics",
    icon: "🏫",
    tag: "Info"
  },
  {
    id: "bs-placement",
    name: "BS Placement Portal",
    desc: "Placement cell for IIT Madras online degree learners.",
    url: "https://placements.study.iitm.ac.in",
    cat: "academics",
    icon: "💼",
    tag: "BS"
  },

  // ── STUDENT LIFE ───────────────────────────────────────────
  {
    id: "ssp",
    name: "Student Services Portal",
    desc: "Central hub — course registration, fee payment, official communication.",
    url: "https://ssp.iitm.ac.in",
    cat: "student",
    icon: "🏛️",
    tag: "Core"
  },
  {
    id: "placement",
    name: "Placement Portal",
    desc: "Campus placements for final-year students. Companies register here.",
    url: "https://placement.iitm.ac.in",
    cat: "student",
    icon: "🤝",
    tag: "Careers"
  },
  {
    id: "internship",
    name: "Internship Portal",
    desc: "Pre-final year campus internship drive across all sectors and domains.",
    url: "https://internship.iitm.ac.in",
    cat: "student",
    icon: "🏢",
    tag: "Careers"
  },
  {
    id: "hostel",
    name: "Hostel Portal",
    desc: "Hostel allocation, fee payment, council of wardens — 17 hostels managed here.",
    url: "https://www.iitm.ac.in/hostel",
    cat: "student",
    icon: "🏠",
    tag: "Campus"
  },
  {
    id: "wellness",
    name: "Wellness Centre",
    desc: "Student mental health, counselling, and psychological support services.",
    url: "https://www.iitm.ac.in/wellness",
    cat: "student",
    icon: "💚",
    tag: "Health"
  },
  {
    id: "freshie",
    name: "Freshie Website",
    desc: "Onboarding guide for new joiners — procedures, campus map, FAQs.",
    url: "https://freshie.iitm.ac.in",
    cat: "student",
    icon: "👋",
    tag: "New Students"
  },
  {
    id: "t5e",
    name: "The Fifth Estate (T5E)",
    desc: "Official student media body — campus journalism, news, opinion.",
    url: "https://t5e.org",
    cat: "student",
    icon: "📰",
    tag: "Media"
  },
  {
    id: "nss",
    name: "NSS — IIT Madras",
    desc: "National Service Scheme chapter — community outreach and social initiatives.",
    url: "https://www.iitm.ac.in/nss",
    cat: "student",
    icon: "🌱",
    tag: "Service"
  },
  {
    id: "secc",
    name: "SECC",
    desc: "Students' Entrepreneurship & Career Club — events, skill workshops.",
    url: "https://secc.iitm.ac.in",
    cat: "student",
    icon: "🚀",
    tag: "Club"
  },
  {
    id: "ivil",
    name: "IVIL",
    desc: "Inclusive Vision for Inclusive Learning — supports students with disabilities.",
    url: "https://ivil.iitm.ac.in",
    cat: "student",
    icon: "♿",
    tag: "Inclusive"
  },
  {
    id: "womens-forum",
    name: "Women's Forum",
    desc: "Student body dedicated to gender equity and women's welfare on campus.",
    url: "https://www.iitm.ac.in/womens-forum",
    cat: "student",
    icon: "👩‍🎓",
    tag: "Forum"
  },
  {
    id: "tensors",
    name: "Tensors — AI Club",
    desc: "Student AI & ML club under CFI — workshops, projects, competitions.",
    url: "https://tensors.iitm.ac.in",
    cat: "student",
    icon: "🤖",
    tag: "Club"
  },
  {
    id: "avanti",
    name: "Avanti Fellows",
    desc: "Coaching and mentorship for first-generation learners at IITM.",
    url: "https://www.avantifellows.org",
    cat: "student",
    icon: "✨",
    tag: "Fellowship"
  },

  // ── CAREERS ────────────────────────────────────────────────
  {
    id: "pio",
    name: "Placement & Internship Office",
    desc: "Official PIO — nodal contact for all campus recruiters and job offers.",
    url: "https://placement.iitm.ac.in",
    cat: "careers",
    icon: "🎯",
    tag: "Office"
  },
  {
    id: "global-engagement",
    name: "Global Engagement Office",
    desc: "International internships, exchange programmes, and foreign student services.",
    url: "https://ge.iitm.ac.in",
    cat: "careers",
    icon: "🌍",
    tag: "International"
  },
  {
    id: "alumni-corp",
    name: "Alumni & Corporate Relations",
    desc: "Connecting IITM alumni, donors, and corporate partners worldwide.",
    url: "https://alumni.iitm.ac.in",
    cat: "careers",
    icon: "🤝",
    tag: "Alumni"
  },
  {
    id: "chennai36",
    name: "Chennai36",
    desc: "IITM Alumni Association — global network of graduates and events.",
    url: "https://chennai36.com",
    cat: "careers",
    icon: "🌐",
    tag: "Alumni"
  },

  // ── RESEARCH ───────────────────────────────────────────────
  {
    id: "research-park",
    name: "IITM Research Park",
    desc: "India's first university-based research park. DRDO, BHEL, Saint-Gobain and 200+ startups.",
    url: "https://respark.iitm.ac.in",
    cat: "research",
    icon: "🏗️",
    tag: "Industry"
  },
  {
    id: "pravartak",
    name: "IITM Pravartak (TIH)",
    desc: "Technology Innovation Hub on Sensors, Networking, Actuators & Control Systems.",
    url: "https://iitmpravartak.org.in",
    cat: "research",
    icon: "⚡",
    tag: "DST Funded"
  },
  {
    id: "incubation",
    name: "IIT Madras Incubation Cell",
    desc: "IITMIC — supporting 200+ startups. Seed funding, mentoring, infrastructure.",
    url: "https://iitmic.in",
    cat: "research",
    icon: "💡",
    tag: "Startups"
  },
  {
    id: "gdcii",
    name: "Deshpande Center (GDCII)",
    desc: "Gopalakrishnan–Deshpande Centre for Innovation & Entrepreneurship.",
    url: "https://gdcii.iitm.ac.in",
    cat: "research",
    icon: "🔭",
    tag: "Innovation"
  },
  {
    id: "icsr",
    name: "ICSR",
    desc: "Industrial Consultancy & Sponsored Research — industry-funded R&D at IITM.",
    url: "https://www.iitm.ac.in/icsr",
    cat: "research",
    icon: "🧪",
    tag: "R&D"
  },
  {
    id: "bioincubator",
    name: "Bio Incubator",
    desc: "IITM's biotech & life-sciences incubation facility for deep-tech startups.",
    url: "https://bioincubator.iitm.ac.in",
    cat: "research",
    icon: "🧬",
    tag: "Biotech"
  },

  // ── OUTREACH & EVENTS ──────────────────────────────────────
  {
    id: "saarang",
    name: "Saarang",
    desc: "IITM's annual cultural festival — one of India's largest, drawing 100k+ footfall.",
    url: "https://saarang.org",
    cat: "outreach",
    icon: "🎨",
    tag: "Cultural Fest"
  },
  {
    id: "shaastra",
    name: "Shaastra",
    desc: "Asia's largest student-run techno-managerial festival, held every January.",
    url: "https://shaastra.org",
    cat: "outreach",
    icon: "⚙️",
    tag: "Tech Fest"
  },
  {
    id: "cfi",
    name: "Centre for Innovation (CFI)",
    desc: "Student maker space — electronics, robotics, coding, and project labs.",
    url: "https://cfi.iitm.ac.in",
    cat: "outreach",
    icon: "🛠️",
    tag: "Maker Space"
  },
  {
    id: "nirmaan",
    name: "Nirmaan",
    desc: "Student NGO working on rural education, infrastructure, and social impact.",
    url: "https://nirmaan.iitm.ac.in",
    cat: "outreach",
    icon: "🏗️",
    tag: "Social"
  },
  {
    id: "ecell",
    name: "Entrepreneurship Cell",
    desc: "E-Cell hosts E-Summit, startup boot camps, and connects founders with VCs.",
    url: "https://ecell.iitm.ac.in",
    cat: "outreach",
    icon: "🦄",
    tag: "Startup"
  },
  {
    id: "techsoc",
    name: "Technical Society",
    desc: "Umbrella body for all technical clubs and competitions at IITM.",
    url: "https://techsoc.iitm.ac.in",
    cat: "outreach",
    icon: "🏆",
    tag: "Tech"
  },

  // ── ADMIN ──────────────────────────────────────────────────
  {
    id: "directory",
    name: "IITM Directory",
    desc: "Faculty, staff and student contact directory — @iitm.ac.in emails.",
    url: "https://www.iitm.ac.in/directory",
    cat: "admin",
    icon: "📇",
    tag: "Directory"
  },
  {
    id: "fee-payment",
    name: "Fee Payment (Tuition)",
    desc: "Tuition fee payment portal for on-campus students.",
    url: "https://fee.iitm.ac.in",
    cat: "admin",
    icon: "💳",
    tag: "Finance"
  },
  {
    id: "hostel-fee",
    name: "Hostel Fee Payment",
    desc: "Hostel charges, electricity, and mess fee payment portal.",
    url: "https://hostelfee.iitm.ac.in",
    cat: "admin",
    icon: "🏠",
    tag: "Finance"
  },
  {
    id: "email-webmail",
    name: "IITM Webmail",
    desc: "Institute email — smail.iitm.ac.in for students, iitm.ac.in for faculty.",
    url: "https://mail.iitm.ac.in",
    cat: "admin",
    icon: "📧",
    tag: "Email"
  },
  {
    id: "vpn",
    name: "IITM VPN",
    desc: "Access intranet resources from off-campus via institute VPN.",
    url: "https://vpn.iitm.ac.in",
    cat: "admin",
    icon: "🔒",
    tag: "IT Services"
  },
  {
    id: "ccw",
    name: "Council of Wardens",
    desc: "CCW — hostel administration, student welfare, and residential affairs.",
    url: "https://www.iitm.ac.in/ccw",
    cat: "admin",
    icon: "🏡",
    tag: "Hostel"
  },

  // ── ZANZIBAR ───────────────────────────────────────────────
  {
    id: "iitmz",
    name: "IITM Zanzibar",
    desc: "IIT Madras's first overseas campus — BS & MTech in Data Science & AI.",
    url: "https://www.iitm.ac.in/zanzibar",
    cat: "zanzibar",
    icon: "🌍",
    tag: "Overseas"
  },
  {
    id: "iitmz-adm",
    name: "Zanzibar Admissions",
    desc: "Admissions process and programme details for IITM Zanzibar campus.",
    url: "https://www.iitm.ac.in/zanzibar/admissions",
    cat: "zanzibar",
    icon: "📝",
    tag: "Admissions"
  }
];

// ── DEPARTMENTS ──────────────────────────────────────────────
const DEPARTMENTS = [
  { name: "Aerospace Engineering", abbr: "AE", url: "https://ae.iitm.ac.in", year: 1969 },
  { name: "Applied Mechanics & Biomedical Engg.", abbr: "AM", url: "https://aml.iitm.ac.in", year: 1959 },
  { name: "Biotechnology", abbr: "BT", url: "https://biotech.iitm.ac.in", year: 2004 },
  { name: "Chemical Engineering", abbr: "CH", url: "https://che.iitm.ac.in", year: 1959 },
  { name: "Chemistry", abbr: "CY", url: "https://chem.iitm.ac.in", year: 1959 },
  { name: "Civil Engineering", abbr: "CE", url: "https://civil.iitm.ac.in", year: 1959 },
  { name: "Computer Science & Engg.", abbr: "CS", url: "https://cse.iitm.ac.in", year: 1973 },
  { name: "Electrical Engineering", abbr: "EE", url: "https://ee.iitm.ac.in", year: 1959 },
  { name: "Engineering Design", abbr: "ED", url: "https://ed.iitm.ac.in", year: 2006 },
  { name: "Humanities & Social Sciences", abbr: "HS", url: "https://hss.iitm.ac.in", year: 1959 },
  { name: "Management Studies", abbr: "MS", url: "https://dms.iitm.ac.in", year: 2004 },
  { name: "Mathematics", abbr: "MA", url: "https://math.iitm.ac.in", year: 1959 },
  { name: "Mechanical Engineering", abbr: "ME", url: "https://mech.iitm.ac.in", year: 1959 },
  { name: "Metallurgical & Materials Engg.", abbr: "MM", url: "https://mme.iitm.ac.in", year: 1959 },
  { name: "Ocean Engineering", abbr: "OE", url: "https://oe.iitm.ac.in", year: 1977 },
  { name: "Physics", abbr: "PH", url: "https://physics.iitm.ac.in", year: 1959 },
  { name: "Data Science & AI (IDDeA)", abbr: "DA", url: "https://iddeaa.iitm.ac.in", year: 2020 },
  { name: "Energy Systems", abbr: "ES", url: "https://www.iitm.ac.in/research/energy", year: 2018 },
];

// ── RESEARCH CENTRES ─────────────────────────────────────────
const RESEARCH = [
  {
    name: "IITM Research Park",
    desc: "India's first university-based research park. Houses DRDO, BHEL, Saint-Gobain, Forbes Marshall and 200+ companies.",
    url: "https://respark.iitm.ac.in",
    icon: "🏗️",
    highlight: "First in India"
  },
  {
    name: "Pravartak TIH",
    desc: "Technology Innovation Hub funded by DST. Focus on Sensors, Networking, Actuators & Control Systems (SNACS).",
    url: "https://iitmpravartak.org.in",
    icon: "⚡",
    highlight: "DST Funded"
  },
  {
    name: "IITM Incubation Cell",
    desc: "IITMIC has supported over 200 startups, contributing significantly to India's startup ecosystem.",
    url: "https://iitmic.in",
    icon: "💡",
    highlight: "200+ Startups"
  },
  {
    name: "Deshpande Center (GDCII)",
    desc: "Established 2017. Bridges gap between academic research and real-world innovation and entrepreneurship.",
    url: "https://gdcii.iitm.ac.in",
    icon: "🔭",
    highlight: "Est. 2017"
  },
  {
    name: "ICSR",
    desc: "Industrial Consultancy & Sponsored Research — channelling industry funding into cutting-edge R&D programmes.",
    url: "https://www.iitm.ac.in/icsr",
    icon: "🧪",
    highlight: "Industry R&D"
  },
  {
    name: "Bio Incubator",
    desc: "Dedicated biotech & life-sciences incubation. State-of-the-art lab infrastructure for deep-tech founders.",
    url: "https://bioincubator.iitm.ac.in",
    icon: "🧬",
    highlight: "Biotech Focus"
  },
];

// ── CAMPUS / STUDENT LIFE ────────────────────────────────────
const CAMPUS = [
  {
    name: "Saarang",
    desc: "Annual cultural extravaganza — music, dance, drama, and literary events drawing 100k+ visitors.",
    url: "https://saarang.org",
    icon: "🎨",
    color: "#FF6B6B"
  },
  {
    name: "Shaastra",
    desc: "Asia's largest student-run techno-managerial fest. Robotics, coding, quizzes, and expert talks.",
    url: "https://shaastra.org",
    icon: "⚙️",
    color: "#4ECDC4"
  },
  {
    name: "Centre for Innovation (CFI)",
    desc: "Student maker-space with electronics lab, 3D printers, robotics arena, and project funding.",
    url: "https://cfi.iitm.ac.in",
    icon: "🛠️",
    color: "#45B7D1"
  },
  {
    name: "Entrepreneurship Cell",
    desc: "Hosts E-Summit, connects student founders with VCs, and runs startup bootcamps year-round.",
    url: "https://ecell.iitm.ac.in",
    icon: "🦄",
    color: "#96CEB4"
  },
  {
    name: "Nirmaan",
    desc: "Student-run NGO focused on rural education and community development across Tamil Nadu.",
    url: "https://nirmaan.iitm.ac.in",
    icon: "🏗️",
    color: "#FFEAA7"
  },
  {
    name: "The Fifth Estate",
    desc: "IITM's independent student newspaper and media body — campus news, investigative reports.",
    url: "https://t5e.org",
    icon: "📰",
    color: "#DDA0DD"
  },
];

// ── ROLE-BASED QUICK LINKS ───────────────────────────────────
const ROLE_LINKS = {
  student: [
    { label: "Moodle LMS", icon: "📚", url: "https://courses.iitm.ac.in", desc: "Courses & assignments" },
    { label: "Student Portal (SSP)", icon: "🏛️", url: "https://ssp.iitm.ac.in", desc: "Registration & records" },
    { label: "Hostel Portal", icon: "🏠", url: "https://www.iitm.ac.in/hostel", desc: "Hostel fee & allocation" },
    { label: "Placement Portal", icon: "💼", url: "https://placement.iitm.ac.in", desc: "Campus placements" },
    { label: "Internship Portal", icon: "🏢", url: "https://internship.iitm.ac.in", desc: "Internship drive" },
    { label: "Wellness Centre", icon: "💚", url: "https://www.iitm.ac.in/wellness", desc: "Counselling support" },
    { label: "Webmail", icon: "📧", url: "https://mail.iitm.ac.in", desc: "Institute email" },
    { label: "IITM VPN", icon: "🔒", url: "https://vpn.iitm.ac.in", desc: "Off-campus access" },
  ],
  faculty: [
    { label: "Moodle LMS", icon: "📚", url: "https://courses.iitm.ac.in", desc: "Course management" },
    { label: "ICSR", icon: "🧪", url: "https://www.iitm.ac.in/icsr", desc: "Sponsored research" },
    { label: "Research Park", icon: "🏗️", url: "https://respark.iitm.ac.in", desc: "Industry collaboration" },
    { label: "NPTEL", icon: "▶️", url: "https://nptel.ac.in", desc: "Online courses" },
    { label: "Directory", icon: "📇", url: "https://www.iitm.ac.in/directory", desc: "Contact directory" },
    { label: "Webmail", icon: "📧", url: "https://mail.iitm.ac.in", desc: "Institute email" },
    { label: "Pravartak TIH", icon: "⚡", url: "https://iitmpravartak.org.in", desc: "Innovation hub" },
    { label: "Deshpande Center", icon: "🔭", url: "https://gdcii.iitm.ac.in", desc: "Entrepreneurship" },
  ],
  parent: [
    { label: "IITM Main Website", icon: "🏫", url: "https://www.iitm.ac.in", desc: "Official institute site" },
    { label: "Academic Calendar", icon: "📅", url: "https://www.iitm.ac.in/academic-calendar", desc: "Semester schedule" },
    { label: "Hostels Information", icon: "🏠", url: "https://www.iitm.ac.in/hostel", desc: "Housing & facilities" },
    { label: "Fee Payment", icon: "💳", url: "https://fee.iitm.ac.in", desc: "Tuition fee portal" },
    { label: "Wellness Centre", icon: "💚", url: "https://www.iitm.ac.in/wellness", desc: "Student support" },
    { label: "Placement Stats", icon: "📊", url: "https://placement.iitm.ac.in", desc: "Employment outcomes" },
    { label: "Student Portal", icon: "🏛️", url: "https://ssp.iitm.ac.in", desc: "Academic records" },
    { label: "Contact Directory", icon: "📇", url: "https://www.iitm.ac.in/directory", desc: "Reach faculty & admin" },
  ],
  alumni: [
    { label: "Alumni Portal", icon: "🤝", url: "https://alumni.iitm.ac.in", desc: "Stay connected" },
    { label: "Chennai36", icon: "🌐", url: "https://chennai36.com", desc: "Alumni association" },
    { label: "Alumni & Corp. Relations", icon: "🏢", url: "https://acr.iitm.ac.in", desc: "Corporate partnerships" },
    { label: "Research Park", icon: "🏗️", url: "https://respark.iitm.ac.in", desc: "Industry collaboration" },
    { label: "Incubation Cell", icon: "💡", url: "https://iitmic.in", desc: "Startup ecosystem" },
    { label: "NPTEL", icon: "▶️", url: "https://nptel.ac.in", desc: "Lifelong learning" },
    { label: "Donate / Endow", icon: "❤️", url: "https://www.iitm.ac.in/donate", desc: "Support the institute" },
    { label: "IITM News", icon: "📰", url: "https://www.iitm.ac.in/news", desc: "Latest updates" },
  ],
  recruiter: [
    { label: "Placement Portal", icon: "💼", url: "https://placement.iitm.ac.in", desc: "Register as recruiter" },
    { label: "Internship Portal", icon: "🏢", url: "https://internship.iitm.ac.in", desc: "Hire interns" },
    { label: "BS Placement Portal", icon: "🎓", url: "https://placements.study.iitm.ac.in", desc: "Online degree talent" },
    { label: "Alumni & Corp. Relations", icon: "🤝", url: "https://acr.iitm.ac.in", desc: "Partnership office" },
    { label: "Research Park", icon: "🏗️", url: "https://respark.iitm.ac.in", desc: "R&D collaboration" },
    { label: "Incubation Cell", icon: "💡", url: "https://iitmic.in", desc: "Startup investments" },
    { label: "ICSR", icon: "🧪", url: "https://www.iitm.ac.in/icsr", desc: "Sponsored research" },
    { label: "Faculty Directory", icon: "📇", url: "https://www.iitm.ac.in/directory", desc: "Expert faculty contacts" },
  ],
  visitor: [
    { label: "About IITM", icon: "🏫", url: "https://www.iitm.ac.in/about", desc: "Institute overview" },
    { label: "NPTEL Free Courses", icon: "▶️", url: "https://nptel.ac.in", desc: "Learn for free" },
    { label: "BS Degree Online", icon: "🎓", url: "https://onlinedegree.iitm.ac.in", desc: "Enrol anytime" },
    { label: "Research Park", icon: "🏗️", url: "https://respark.iitm.ac.in", desc: "Industry ecosystem" },
    { label: "Shaastra", icon: "⚙️", url: "https://shaastra.org", desc: "Tech fest" },
    { label: "Saarang", icon: "🎨", url: "https://saarang.org", desc: "Cultural fest" },
    { label: "Contact IITM", icon: "📞", url: "https://www.iitm.ac.in/contact", desc: "Get in touch" },
    { label: "IITM Zanzibar", icon: "🌍", url: "https://www.iitm.ac.in/zanzibar", desc: "Overseas campus" },
  ]
};
