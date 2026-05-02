// ============================================================
//  IITM CENTRAL — DATA.JS  (Redesigned)
// ============================================================

const PORTALS = [
  // ── ACADEMICS ──────────────────────────────────────────────
  { id: "moodle",       name: "Moodle LMS",           desc: "Course management, assignments, grades & material for on-campus students.", url: "https://courses.iitm.ac.in",              cat: "academics", tag: "LMS" },
  { id: "moodle-old",   name: "Moodle Archive",        desc: "Past semesters' course archives for reference.",                           url: "https://oldcourses.iitm.ac.in",           cat: "academics", tag: "Archive" },
  { id: "bs-degree",    name: "BS Degree Online",      desc: "World's first BS in Data Science & Applications.",                         url: "https://onlinedegree.iitm.ac.in",         cat: "academics", tag: "Online" },
  { id: "study-portal", name: "Study Portal (BS)",     desc: "Academics, fees, schedules for BS Degree learners.",                       url: "https://study.iitm.ac.in",                cat: "academics", tag: "BS" },
  { id: "nptel",        name: "NPTEL",                 desc: "Free video courses from IITs & IISc — SWAYAM certified.",                  url: "https://nptel.ac.in",                     cat: "academics", tag: "Free Courses" },
  { id: "mtech-adm",    name: "MTech Admissions",      desc: "GATE-based M.Tech & M.A. admissions portal.",                             url: "https://mtechadm.iitm.ac.in",             cat: "academics", tag: "Admissions" },
  { id: "phd-adm",      name: "PhD Admissions",        desc: "Direct PhD & MS (Research) applications and fellowship info.",             url: "https://www.iitm.ac.in/phd",              cat: "academics", tag: "Admissions" },
  { id: "code-iitm",    name: "CODE — Digital Edu",    desc: "Centre for Outreach and Digital Education — certifications online.",       url: "https://code.iitm.ac.in",                 cat: "academics", tag: "Outreach" },

  // ── STUDENT SERVICES ───────────────────────────────────────
  { id: "ssp",          name: "Student Services (SSP)", desc: "Course registration, fee payment, official communication hub.",           url: "https://ssp.iitm.ac.in",                  cat: "student", tag: "Core" },
  { id: "ikollege",     name: "iKollege Portal",        desc: "Student administration, complaints, requests and approvals portal.",      url: "https://ikollege.iitm.ac.in",             cat: "student", tag: "Admin" },
  { id: "workflow",     name: "Workflow Portal",        desc: "Institute workflow — approvals, NOCs, leave requests and clearances.",    url: "https://workflow.iitm.ac.in",             cat: "student", tag: "Workflow" },
  { id: "placement",    name: "Placement Portal",       desc: "Campus placements for final-year students. Companies register here.",     url: "https://placement.iitm.ac.in",            cat: "student", tag: "Careers" },
  { id: "internship",   name: "Internship Portal",      desc: "Pre-final year campus internship drive across all sectors.",              url: "https://internship.iitm.ac.in",           cat: "student", tag: "Careers" },
  { id: "hostel",       name: "Hostel Portal",          desc: "Hostel allocation, fee payment, council of wardens — 17 hostels.",        url: "https://www.iitm.ac.in/hostel",           cat: "student", tag: "Campus" },
  { id: "wellness",     name: "Wellness Centre",        desc: "Student mental health, counselling, and psychological support.",          url: "https://www.iitm.ac.in/wellness",         cat: "student", tag: "Health" },
  { id: "freshie",      name: "Freshie Website",        desc: "Onboarding guide for new joiners — procedures, campus map, FAQs.",       url: "https://freshie.iitm.ac.in",              cat: "student", tag: "New Students" },
  { id: "webmail",      name: "Webmail",                desc: "Official institute email for students and staff.",                        url: "https://mail.iitm.ac.in",                 cat: "student", tag: "Email" },
  { id: "vpn",          name: "IITM VPN",               desc: "Off-campus secure access to institute resources.",                        url: "https://vpn.iitm.ac.in",                  cat: "student", tag: "IT" },

  // ── RESEARCH ───────────────────────────────────────────────
  { id: "respark",      name: "Research Park",          desc: "India's first university-based research park. 200+ companies.",           url: "https://respark.iitm.ac.in",              cat: "research", tag: "Park" },
  { id: "pravartak",    name: "Pravartak TIH",          desc: "DST-funded Technology Innovation Hub — SNACS focus.",                    url: "https://iitmpravartak.org.in",            cat: "research", tag: "Innovation" },
  { id: "iitmic",       name: "Incubation Cell",        desc: "IITMIC — 200+ startups incubated, India's leading university incubator.", url: "https://iitmic.in",                       cat: "research", tag: "Startup" },
  { id: "gdcii",        name: "Deshpande Center",       desc: "Bridges academic research and real-world innovation since 2017.",         url: "https://gdcii.iitm.ac.in",                cat: "research", tag: "Entrepreneurship" },
  { id: "icsr",         name: "ICSR",                   desc: "Industrial Consultancy & Sponsored Research — industry-funded R&D.",      url: "https://www.iitm.ac.in/icsr",             cat: "research", tag: "Consultancy" },
  { id: "bioincubator", name: "Bio Incubator",          desc: "Dedicated biotech & life-sciences incubation with lab infrastructure.",   url: "https://bioincubator.iitm.ac.in",         cat: "research", tag: "Biotech" },

  // ── ADMIN ──────────────────────────────────────────────────
  { id: "fee",          name: "Fee Payment",            desc: "Tuition fee, hostel fee payment portal.",                                 url: "https://fee.iitm.ac.in",                  cat: "admin", tag: "Finance" },
  { id: "acr",          name: "Alumni & Corp. Relations", desc: "Corporate partnerships, sponsored chairs, collaborations.",            url: "https://acr.iitm.ac.in",                  cat: "admin", tag: "Relations" },
  { id: "alumni",       name: "Alumni Portal",          desc: "Stay connected with the IITM alumni network.",                           url: "https://alumni.iitm.ac.in",               cat: "admin", tag: "Alumni" },
  { id: "directory",    name: "Contact Directory",      desc: "Faculty, staff and department contact directory.",                        url: "https://www.iitm.ac.in/directory",         cat: "admin", tag: "Directory" },

  // ── ZANZIBAR ───────────────────────────────────────────────
  { id: "iitmz",        name: "IITM Zanzibar",          desc: "IIT Madras's first overseas campus — BS & MTech in Data Science & AI.",  url: "https://www.iitm.ac.in/zanzibar",         cat: "zanzibar", tag: "Overseas" },
  { id: "iitmz-adm",   name: "Zanzibar Admissions",    desc: "Admissions process and programme details for IITM Zanzibar.",            url: "https://www.iitm.ac.in/zanzibar/admissions", cat: "zanzibar", tag: "Admissions" },
];

// ── PORTAL SECTIONS (for collapsible view) ──────────────────
const PORTAL_SECTIONS = [
  { id: "academics", label: "Academics & Learning",   ids: ["moodle","moodle-old","bs-degree","study-portal","nptel","mtech-adm","phd-adm","code-iitm"] },
  { id: "student",   label: "Student Services",        ids: ["ssp","ikollege","workflow","placement","internship","hostel","wellness","freshie","webmail","vpn"] },
  { id: "research",  label: "Research & Innovation",   ids: ["respark","pravartak","iitmic","gdcii","icsr","bioincubator"] },
  { id: "admin",     label: "Administration",          ids: ["fee","acr","alumni","directory"] },
  { id: "zanzibar",  label: "IITM Zanzibar",           ids: ["iitmz","iitmz-adm"] },
];

// ── DEPARTMENTS ──────────────────────────────────────────────
const DEPARTMENTS = [
  { name: "Aerospace Engineering",              abbr: "AE", url: "https://ae.iitm.ac.in",      year: 1969 },
  { name: "Applied Mechanics & Biomedical",     abbr: "AM", url: "https://aml.iitm.ac.in",     year: 1959 },
  { name: "Biotechnology",                      abbr: "BT", url: "https://biotech.iitm.ac.in", year: 2004 },
  { name: "Chemical Engineering",               abbr: "CH", url: "https://che.iitm.ac.in",     year: 1959 },
  { name: "Chemistry",                          abbr: "CY", url: "https://chem.iitm.ac.in",    year: 1959 },
  { name: "Civil Engineering",                  abbr: "CE", url: "https://civil.iitm.ac.in",   year: 1959 },
  { name: "Computer Science & Engg.",           abbr: "CS", url: "https://cse.iitm.ac.in",     year: 1973 },
  { name: "Electrical Engineering",             abbr: "EE", url: "https://ee.iitm.ac.in",      year: 1959 },
  { name: "Engineering Design",                 abbr: "ED", url: "https://ed.iitm.ac.in",      year: 2006 },
  { name: "Humanities & Social Sciences",       abbr: "HS", url: "https://hss.iitm.ac.in",     year: 1959 },
  { name: "Management Studies",                 abbr: "MS", url: "https://dms.iitm.ac.in",     year: 2004 },
  { name: "Mathematics",                        abbr: "MA", url: "https://math.iitm.ac.in",    year: 1959 },
  { name: "Mechanical Engineering",             abbr: "ME", url: "https://mech.iitm.ac.in",    year: 1959 },
  { name: "Metallurgical & Materials Engg.",    abbr: "MM", url: "https://mme.iitm.ac.in",     year: 1959 },
  { name: "Ocean Engineering",                  abbr: "OE", url: "https://oe.iitm.ac.in",      year: 1977 },
  { name: "Physics",                            abbr: "PH", url: "https://physics.iitm.ac.in", year: 1959 },
  { name: "Data Science & AI (IDDeA)",          abbr: "DA", url: "https://iddeaa.iitm.ac.in",  year: 2020 },
  { name: "Energy Systems",                     abbr: "ES", url: "https://www.iitm.ac.in/research/energy", year: 2018 },
];

// ── RESEARCH CENTRES ─────────────────────────────────────────
const RESEARCH = [
  { name: "IITM Research Park",    desc: "India's first university-based research park. 200+ companies including DRDO, BHEL, Saint-Gobain.", url: "https://respark.iitm.ac.in",     highlight: "First in India" },
  { name: "Pravartak TIH",         desc: "Technology Innovation Hub funded by DST. Focus on Sensors, Networking, Actuators & Control.",      url: "https://iitmpravartak.org.in",   highlight: "DST Funded" },
  { name: "Incubation Cell",       desc: "IITMIC has supported 200+ startups, contributing significantly to India's startup ecosystem.",      url: "https://iitmic.in",              highlight: "200+ Startups" },
  { name: "Deshpande Center",      desc: "Bridges academic research and real-world innovation and entrepreneurship since 2017.",              url: "https://gdcii.iitm.ac.in",       highlight: "Est. 2017" },
  { name: "ICSR",                  desc: "Industrial Consultancy & Sponsored Research — channelling industry funding into R&D.",              url: "https://www.iitm.ac.in/icsr",    highlight: "Industry R&D" },
  { name: "Bio Incubator",         desc: "Dedicated biotech & life-sciences incubation with state-of-the-art lab infrastructure.",            url: "https://bioincubator.iitm.ac.in", highlight: "Biotech Focus" },
];

// ── CLUBS (accordion, with sub-clubs) ────────────────────────
const CLUBS = [
  {
    id: "student-bodies",
    category: "Student Bodies & Fests",
    clubs: [
      { name: "Shaastra", desc: "Asia's largest student-run techno-managerial fest.", url: "https://shaastra.org",
        sub: [{ name: "Shaastra Quiz", url: "https://shaastra.org/quiz" }, { name: "Shaastra Robotics", url: "https://shaastra.org/robotics" }, { name: "Shaastra Coding", url: "https://shaastra.org/coding" }] },
      { name: "Saarang", desc: "Annual cultural extravaganza — music, dance, drama, literary events.", url: "https://saarang.org",
        sub: [{ name: "Saarang Music", url: "https://saarang.org" }, { name: "Saarang Dance", url: "https://saarang.org" }, { name: "Saarang Literary", url: "https://saarang.org" }] },
      { name: "CFI — Centre for Innovation", desc: "Student maker-space with electronics lab, 3D printers, robotics arena.", url: "https://cfi.iitm.ac.in",
        sub: [{ name: "Tensors (AI/ML)", url: "https://tensors.iitm.ac.in" }, { name: "AERO (Aeromodelling)", url: "https://cfi.iitm.ac.in" }, { name: "ERC (Electronics)", url: "https://cfi.iitm.ac.in" }, { name: "IBOT (Robotics)", url: "https://cfi.iitm.ac.in" }, { name: "Team Abhiyaan (Self-drive)", url: "https://cfi.iitm.ac.in" }] },
      { name: "E-Cell", desc: "Entrepreneurship Cell — E-Summit, startup bootcamps, VC connects.", url: "https://ecell.iitm.ac.in",
        sub: [{ name: "E-Summit", url: "https://ecell.iitm.ac.in" }, { name: "Startup Bootcamp", url: "https://ecell.iitm.ac.in" }] },
      { name: "Nirmaan", desc: "Student-run NGO focused on rural education and community development.", url: "https://nirmaan.iitm.ac.in",
        sub: [{ name: "Teach India", url: "https://nirmaan.iitm.ac.in" }, { name: "Rural Outreach", url: "https://nirmaan.iitm.ac.in" }] },
    ]
  },
  {
    id: "cultural",
    category: "Cultural Clubs",
    clubs: [
      { name: "Music Club", desc: "Western and Indian classical music — bands, open mics, jam sessions.", url: "https://www.iitm.ac.in/music",
        sub: [{ name: "Western Music", url: "#" }, { name: "Indian Classical", url: "#" }, { name: "Band of IITM", url: "#" }] },
      { name: "Dance Club", desc: "Classical, contemporary, western and folk dance forms.", url: "https://www.iitm.ac.in/dance",
        sub: [{ name: "Classical Dance", url: "#" }, { name: "Western Dance", url: "#" }, { name: "Fusion Group", url: "#" }] },
      { name: "Dramatics Club", desc: "Street plays, stage performances, improv and scriptwriting.", url: "https://www.iitm.ac.in/dramatics",
        sub: [{ name: "Street Play Wing", url: "#" }, { name: "Stage Theatre", url: "#" }] },
      { name: "Literary Club", desc: "Quizzing, creative writing, debates, and oratory events.", url: "https://www.iitm.ac.in/literary",
        sub: [{ name: "Quiz Club", url: "#" }, { name: "Creative Writing", url: "#" }, { name: "Debate Society", url: "#" }] },
      { name: "Fine Arts Club", desc: "Painting, sculpture, photography, and visual arts.", url: "https://www.iitm.ac.in/finearts",
        sub: [{ name: "Painting Wing", url: "#" }, { name: "Photography Club", url: "#" }] },
    ]
  },
  {
    id: "sports",
    category: "Sports & Competitive Teams",
    clubs: [
      { name: "Sports Council", desc: "Governing body for all inter-IIT and intra-IITM sports events.", url: "https://www.iitm.ac.in/sports",
        sub: [{ name: "Cricket", url: "#" }, { name: "Football", url: "#" }, { name: "Basketball", url: "#" }, { name: "Volleyball", url: "#" }, { name: "Badminton", url: "#" }, { name: "Athletics", url: "#" }] },
      { name: "Team Anveshak", desc: "Student team building Mars Rover for international competitions.", url: "https://teamanveshak.com",
        sub: [{ name: "Rover Science", url: "#" }, { name: "Rover Mechanics", url: "#" }, { name: "Rover Electronics", url: "#" }] },
      { name: "Team Abhiyaan", desc: "Autonomous ground vehicle team under CFI.", url: "https://cfi.iitm.ac.in",
        sub: [{ name: "Perception Team", url: "#" }, { name: "Planning Team", url: "#" }] },
      { name: "Aero Club", desc: "Aeromodelling, drones, UAVs — competes in SAE Aero and other contests.", url: "https://cfi.iitm.ac.in",
        sub: [{ name: "Fixed Wing", url: "#" }, { name: "Multirotor", url: "#" }] },
      { name: "SAE India Collegiate Club", desc: "Formula student, BAJA SAE, and other automotive design events.", url: "https://www.iitm.ac.in/sae",
        sub: [{ name: "Formula Student", url: "#" }, { name: "BAJA Team", url: "#" }] },
    ]
  },
  {
    id: "technical",
    category: "Technical Chapters",
    clubs: [
      { name: "IEEE Student Branch", desc: "Largest technical professional society — workshops, conferences, projects.", url: "https://ieeesb.iitm.ac.in",
        sub: [{ name: "IEEE CS Chapter", url: "#" }, { name: "IEEE RAS (Robotics)", url: "#" }, { name: "IEEE WIE (Women)", url: "#" }] },
      { name: "ACM Student Chapter", desc: "Association for Computing Machinery — coding, algorithms, systems.", url: "https://acm.iitm.ac.in",
        sub: [{ name: "ACM-W", url: "#" }, { name: "ACM ICPC Team", url: "#" }] },
      { name: "Tensors — AI/ML Club", desc: "Artificial intelligence and machine learning projects and workshops.", url: "https://tensors.iitm.ac.in",
        sub: [{ name: "Research Wing", url: "#" }, { name: "Kaggle Team", url: "#" }] },
      { name: "Web Club", desc: "Full-stack development, open source, hackathons and dev workshops.", url: "https://www.iitm.ac.in/webclub",
        sub: [{ name: "Frontend Wing", url: "#" }, { name: "Backend Wing", url: "#" }, { name: "Open Source Wing", url: "#" }] },
      { name: "Astronomy Club", desc: "Stargazing sessions, astrophotography, telescope observations on campus.", url: "https://www.iitm.ac.in/astro",
        sub: [{ name: "Observation Wing", url: "#" }, { name: "Astrophotography", url: "#" }] },
    ]
  },
];

// ── ROLE-BASED QUICK LINKS ───────────────────────────────────
const ROLE_LINKS = {
  student: [
    { label: "Moodle LMS",        url: "https://courses.iitm.ac.in",       desc: "Courses & assignments" },
    { label: "Student Portal (SSP)", url: "https://ssp.iitm.ac.in",        desc: "Registration & records" },
    { label: "iKollege",          url: "https://ikollege.iitm.ac.in",       desc: "Admin & requests" },
    { label: "Workflow Portal",   url: "https://workflow.iitm.ac.in",       desc: "Approvals & NOCs" },
    { label: "Hostel Portal",     url: "https://www.iitm.ac.in/hostel",     desc: "Hostel fee & allocation" },
    { label: "Placement Portal",  url: "https://placement.iitm.ac.in",     desc: "Campus placements" },
    { label: "Wellness Centre",   url: "https://www.iitm.ac.in/wellness",   desc: "Counselling support" },
    { label: "Webmail",           url: "https://mail.iitm.ac.in",           desc: "Institute email" },
  ],
  faculty: [
    { label: "Moodle LMS",        url: "https://courses.iitm.ac.in",        desc: "Course management" },
    { label: "Workflow Portal",   url: "https://workflow.iitm.ac.in",        desc: "Approvals & leave" },
    { label: "ICSR",              url: "https://www.iitm.ac.in/icsr",        desc: "Sponsored research" },
    { label: "Research Park",     url: "https://respark.iitm.ac.in",         desc: "Industry collaboration" },
    { label: "NPTEL",             url: "https://nptel.ac.in",                desc: "Online courses" },
    { label: "Directory",         url: "https://www.iitm.ac.in/directory",   desc: "Contact directory" },
    { label: "Webmail",           url: "https://mail.iitm.ac.in",            desc: "Institute email" },
    { label: "Pravartak TIH",     url: "https://iitmpravartak.org.in",       desc: "Innovation hub" },
  ],
  parent: [
    { label: "IITM Main Website", url: "https://www.iitm.ac.in",            desc: "Official institute site" },
    { label: "Academic Calendar", url: "https://www.iitm.ac.in/academic-calendar", desc: "Semester schedule" },
    { label: "Fee Payment",       url: "https://fee.iitm.ac.in",            desc: "Tuition fee portal" },
    { label: "Hostel Info",       url: "https://www.iitm.ac.in/hostel",     desc: "Housing & facilities" },
    { label: "Wellness Centre",   url: "https://www.iitm.ac.in/wellness",   desc: "Student support" },
    { label: "Placement Stats",   url: "https://placement.iitm.ac.in",     desc: "Employment outcomes" },
    { label: "Student Portal",    url: "https://ssp.iitm.ac.in",           desc: "Academic records" },
    { label: "Contact Directory", url: "https://www.iitm.ac.in/directory", desc: "Reach faculty & admin" },
  ],
  alumni: [
    { label: "Alumni Portal",     url: "https://alumni.iitm.ac.in",        desc: "Stay connected" },
    { label: "Chennai36",         url: "https://chennai36.com",             desc: "Alumni association" },
    { label: "Corp. Relations",   url: "https://acr.iitm.ac.in",           desc: "Corporate partnerships" },
    { label: "Research Park",     url: "https://respark.iitm.ac.in",       desc: "Industry collaboration" },
    { label: "Incubation Cell",   url: "https://iitmic.in",                desc: "Startup ecosystem" },
    { label: "NPTEL",             url: "https://nptel.ac.in",              desc: "Lifelong learning" },
    { label: "Donate / Endow",    url: "https://www.iitm.ac.in/donate",    desc: "Support the institute" },
    { label: "IITM News",         url: "https://www.iitm.ac.in/news",      desc: "Latest updates" },
  ],
  recruiter: [
    { label: "Placement Portal",  url: "https://placement.iitm.ac.in",             desc: "Register as recruiter" },
    { label: "Internship Portal", url: "https://internship.iitm.ac.in",            desc: "Hire interns" },
    { label: "BS Placements",     url: "https://placements.study.iitm.ac.in",      desc: "Online degree talent" },
    { label: "Corp. Relations",   url: "https://acr.iitm.ac.in",                  desc: "Partnership office" },
    { label: "Research Park",     url: "https://respark.iitm.ac.in",              desc: "R&D collaboration" },
    { label: "Incubation Cell",   url: "https://iitmic.in",                       desc: "Startup investments" },
    { label: "ICSR",              url: "https://www.iitm.ac.in/icsr",             desc: "Sponsored research" },
    { label: "Faculty Directory", url: "https://www.iitm.ac.in/directory",        desc: "Expert contacts" },
  ],
  visitor: [
    { label: "About IITM",        url: "https://www.iitm.ac.in/about",            desc: "Institute overview" },
    { label: "NPTEL Free Courses",url: "https://nptel.ac.in",                     desc: "Learn for free" },
    { label: "BS Degree Online",  url: "https://onlinedegree.iitm.ac.in",         desc: "Enrol anytime" },
    { label: "Research Park",     url: "https://respark.iitm.ac.in",              desc: "Industry ecosystem" },
    { label: "Shaastra",          url: "https://shaastra.org",                    desc: "Tech fest" },
    { label: "Saarang",           url: "https://saarang.org",                     desc: "Cultural fest" },
    { label: "IITM Zanzibar",     url: "https://www.iitm.ac.in/zanzibar",         desc: "Overseas campus" },
    { label: "Contact IITM",      url: "https://www.iitm.ac.in/contact",          desc: "Get in touch" },
  ]
};
