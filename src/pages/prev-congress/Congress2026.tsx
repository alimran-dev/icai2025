import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Clock,
  Globe,
  Award,
  Users2,
  Presentation,
  Briefcase,
  Search,
  X,
} from "lucide-react";

// ---------- 2026 data files ----------
import speakersData from "../../assets/pastCongress/2026/speakers2026.json";
import participantsData from "../../assets/pastCongress/2026/participants2026.json";
import ambassadorsData from "../../assets/pastCongress/2026/ambassadors2026.json";

// ---------- Types ----------
type StatItem = {
  icon: React.ReactNode;
  label: string;
  value: number | null;
  suffix?: string;
};

interface Participant {
  id: string;
  email: string;
  name: string;
  institute: string;
  country: string;
}

interface Ambassador {
  id: string;
  name: string;
  university: string;
}

// ---------- Committee data (same as the current committee page) ----------
const committeeData: Record<
  string,
  { name: string; role: string; image: string; affiliation?: string; email?: string; linkedin?: string; orcid?: string }[]
> = {
  "Advisory Panel": [
    {
      name: "Prof. Dr. A B M Shawkat Ali",
      role: "Vice Chancellor, BUBT",
      image: "https://i.ibb.co.com/0jVMjqzz/download-1.png",
    },
    {
      name: "Dr. Muhammad Aminur Rahaman",
      role: "Dean, Faculty of Computer Science & Artificial Intelligence, BUBT",
      image: "https://i.ibb.co.com/whw8FxfF/balaminurbala.jpg",
    },
    {
      name: "Prof. Dr. Md. Ahsan Habib",
      role: "Chairman, Dept. of CSE, BUBT",
      image: "https://i.ibb.co.com/wN2PthKc/chairman.jpg",
    },
    {
      name: "Shrabani Das",
      role: "Lecturer, Dept. of CSE, BUBT",
      image: "https://i.ibb.co/ZYbkQhy/Shrabani-Das-Shrabani-Das.jpg",
    },
  ],
  "General Chair": [
    {
      name: "Md Mehedi Hasan",
      role: "Research Assistant, Advanced Machine Intelligence Research Lab (AMIR Lab)",
      image: "https://i.ibb.co.com/vx5hPvmw/pp.png",
      linkedin: "https://www.linkedin.com/in/0mehedihasan/",
    },
  ],
  "Organizing Committee": [
    { name: "Maruf Billah Anas", role: "Organizing Chair (Operations)", image: "https://i.ibb.co.com/HpgyMWvw/inbound5648170297621318866-maruf-billah-anas.jpg" },
    { name: "Md Al Imran", role: "Organizing Chair (Technical)", image: "https://i.postimg.cc/Zn9sWD8t/Whats-App-Image-2025-08-10-at-9-35-00-PM.jpg" },
    { name: "Naimur Rahaman Rifat", role: "Organizing Co‑Chair (Operations)", image: "https://i.ibb.co.com/B5FpW5rp/8935-Naimur-Rahaman.jpg" },
    { name: "Mashfi Rejoan Saikat", role: "Organizing Co‑Chair (Technical)", image: "https://i.postimg.cc/N0X3zS3J/FP-cropped-Mashfi-Rejoan-Saikat.jpg" },
    { name: "Ashif Sheikh", role: "Organizing Secretary", image: "https://i.ibb.co.com/d4xH5jq8/Whats-App-Image-2026-07-04-at-1-57-59-AM-Ashif-Sheikh.jpg" },
    { name: "Adiba Azam Mati", role: "Master of Ceremonies", image: "https://i.ibb.co.com/PvqTWZwv/NHS06220-Adiba-Azam-Mati.jpg" },
    { name: "Shadida Khan", role: "Master of Ceremonies", image: "https://i.postimg.cc/3RWQZ1X9/IMG-5401-Shadida-Khan.jpg" },
  ],
  "Ambassador Committee": [
    { name: "Md. Sadik Mahmud Adive", role: "Ambassador Chair", image: "https://i.ibb.co.com/wZB58WRX/599677195-2702743066737038-3730406491581254218-n-Sm-Adive.jpg" },
  ],
  "Registration Committee": [
    { name: "Md. Sanjid Hosen", role: "Registration Chair", image: "https://i.ibb.co.com/5hg1wrnS/20260629-145816-Sanjid-Al-Mamun.jpg" },
    { name: "Jannathul Ferdousi Shoshi", role: "Registration Co‑Chair", image: "https://i.ibb.co.com/TqNRY5ft/inbound193459536612755663-jannathul-ferdaus.jpg" },
  ],
  "Presentation Program Committee": [
    { name: "Md Masudur Rahaman Nirob", role: "Presentation Program Chair", image: "https://i.ibb.co.com/N2XtnZt0/Gemini-Generated-Image-64q3d964q3d964q3.png" },
    { name: "Nur Uddin", role: "Presentation Program Co‑Chair", image: "https://i.ibb.co.com/FkT55DV8/inbound6867854119187620541-Nur.jpg" },
  ],
  "Design Committee": [
    { name: "Nusrat Jahan Tonmoy", role: "Design Chair", image: "https://i.ibb.co.com/vCvW57YB/IMG-20260102-WA0764-Nusrat-Jahan-Tonmoy.jpg" },
    { name: "Sarah", role: "Design Co‑Chair", image: "https://i.ibb.co.com/Hf1MYY9Y/IMG-20250814-WA0069-Original-Sarah.jpg" },
    { name: "Nazif Azad Maadol", role: "Design Co‑Chair", image: "https://i.ibb.co.com/vSnb2gr/66407-Nazif-Azad.jpg" },
  ],
  "Publication Committee": [
    { name: "Muhammad Nazmus Sakib Prachurjo", role: "Publication Chair", image: "https://i.ibb.co.com/jk1skQrC/IMG-20260417-001545-Muhammad-Nazmus-Sakib-Prachurjo.jpg" },
    { name: "Saidur Rahaman", role: "Publication Co‑Chair", image: "https://i.ibb.co.com/4wjTwww5/IMG-20251230-020047-591-Saidur-Rahaman.webp" },
  ],
  "Publicity Committee": [
    { name: "Kamrul Islam", role: "Publicity Chair", image: "https://i.ibb.co.com/HLLhS8Vb/Tuhin-Mia.jpg" },
    { name: "MD Tanvir Ahmmed", role: "Publicity Co‑Chair", image: "https://i.ibb.co.com/DHv14Wsv/IMG-20260619-213620-106-Tanvir-Ahmmed.jpg" },
  ],
};

// ---------- Schedule ----------
const scheduleData = {
  day1: [
    { speaker: "Salheen Bakhet", topic: "Artificial Intelligence: A Global Perspective", localTime: "08:00 PM – 08:20 PM", utcTime: "02:00 PM – 02:20 PM", duration: "20 minutes" },
    { speaker: "Dr. Md. Jakir Hossen", topic: "A Modified Adaptive Neuro-Fuzzy Inference Engine and Its Applications", localTime: "08:30 PM – 08:50 PM", utcTime: "02:30 PM – 02:50 PM", duration: "20 minutes" },
    { speaker: "Muhammad Mostafa Monowar", topic: "Artificial Intelligence at an Inflection Point: Recent Advances and the Research Frontiers Ahead", localTime: "09:00 PM – 09:20 PM", utcTime: "03:00 PM – 03:20 PM", duration: "20 minutes" },
    { speaker: "Dr. Tangina Sultana", topic: "Shaping the Future of Education: AI, Innovation, and Emerging Technologies", localTime: "09:30 PM – 09:50 PM", utcTime: "03:30 PM – 03:50 PM", duration: "20 minutes" },
    { speaker: "Prof. Dr. Rahamatullah Khondoker", topic: "AI-based Solutions for Real World Cyber Security Challenges", localTime: "10:00 PM – 10:20 PM", utcTime: "04:00 PM – 04:20 PM", duration: "20 minutes" },
  ],
  day2: [
    { speaker: "Md Atiqur Rahman Ahad", topic: "AI & Healthcare: Few Examples", localTime: "08:00 PM – 08:20 PM", utcTime: "02:00 PM – 02:20 PM", duration: "20 minutes" },
    { speaker: "Prof. Dr. Mohammad Shamsul Arefin", topic: "Green AI for Sustainable Education: Building Intelligent, Inclusive, and Energy-Efficient Learning Ecosystems", localTime: "08:30 PM – 08:50 PM", utcTime: "02:30 PM – 02:50 PM", duration: "20 minutes" },
    { speaker: "Dr. Fida Hasan", topic: "Trust, the Weakest Link in AI: What Does It Mean for AI to Be 'Trustworthy'?", localTime: "09:00 PM – 09:20 PM", utcTime: "03:00 PM – 03:20 PM", duration: "20 minutes" },
    { speaker: "Rashed Mazumder, Ph.D", topic: "The Future of Cybersecurity: Explainable AI and Federated Learning for Intelligent Threat Detection", localTime: "09:30 PM – 09:50 PM", utcTime: "03:30 PM – 03:50 PM", duration: "20 minutes" },
  ],
  day3: [
    { speaker: "Dr. Tahera Hossain", topic: "Human Behavior Modeling for Human‑Centered AI: From Wearable Sensing to Real‑World Health and Wellbeing", localTime: "08:00 PM – 08:20 PM", utcTime: "02:00 PM – 02:20 PM", duration: "20 minutes" },
    { speaker: "Dr. Shashikant Patil", topic: "Agentic AI for Computer Networks", localTime: "08:30 PM – 08:50 PM", utcTime: "02:30 PM – 02:50 PM", duration: "20 minutes" },
    { speaker: "Dr. Mohammad Polash", topic: "AI and Innovation", localTime: "09:00 PM – 09:20 PM", utcTime: "03:00 PM – 03:20 PM", duration: "20 minutes" },
    { speaker: "Minhaz-Us-Salakeen Fahme", topic: "The Workforce of 2030: AI Analytics, Productivity Sweet Spots, and the End of the Eight-Hour Day", localTime: "09:30 PM – 09:50 PM", utcTime: "03:30 PM – 03:50 PM", duration: "20 minutes" },
  ],
};

const speakerMap = new Map(speakersData.map((s: any) => [s.name, s]));

// ---------- Achievements (by the numbers) ----------
const achievements2026: StatItem[] = [
  { icon: <Users className="w-6 h-6" />, label: "Participants", value: 300, suffix: "+" },
  { icon: <Users2 className="w-6 h-6" />, label: "Student Ambassadors", value: 60, suffix: "+" },
  { icon: <Globe className="w-6 h-6" />, label: "Countries Represented", value: 12 },
  { icon: <Award className="w-6 h-6" />, label: "Distinguished Speakers", value: 13 },
  { icon: <Briefcase className="w-6 h-6" />, label: "Collaboration Partners", value: 16 },
  { icon: <Presentation className="w-6 h-6" />, label: "Facebook Live Streams", value: 3, suffix: " days" },
  { icon: <Clock className="w-6 h-6" />, label: "Virtual Congress Days", value: 3 },
  { icon: <Globe className="w-6 h-6" />, label: "Global IEEE Community Engagement", value: null },
];

// ---------- Quotes ----------
const participantQuotes = [
  "The keynote sessions were incredibly inspiring and gave me a new perspective on AI.",
  "I loved the opportunity to connect with researchers and industry experts from around the world.",
  "The congress was exceptionally well‑organized, and the live Q&A sessions were very engaging.",
  "As a student, I felt truly welcomed and encouraged to pursue AI research.",
  "The variety of topics covered, from healthcare to cybersecurity, broadened my understanding of AI.",
  "ICAI 2026 motivated me to explore explainable AI and responsible technology.",
  "The Facebook Live streaming made it easy to attend from anywhere – a fantastic experience!",
  "I gained valuable insights into how AI can be applied in real‑world scenarios.",
  "The international speaker lineup was outstanding; I learned something new in every session.",
  "ICAI 2026 showed me the importance of community and collaboration in AI development.",
];
const scrollingQuotes = [...participantQuotes, ...participantQuotes];

// ---------- Advisor messages ----------
const advisorMessages = [
  {
    name: "Prof. Dr. A B M Shawkat Ali",
    title: "Vice Chancellor, BUBT",
    image: "https://i.ibb.co.com/0jVMjqzz/download-1.png",
    heading: "Message From the Vice Chancellor of BUBT",
    body: "I am delighted to welcome you to the 2nd International Congress on Artificial Intelligence (ICAI 2026), organized by the IEEE BUBT Student Branch. This prestigious global platform continues to unite experts, researchers, and learners to foster collaboration, share transformative AI insights, and inspire innovation. I commend the organizers for their vision and dedication, and I wish all participants a highly engaging, inspiring, and impactful experience.",
    reverse: false,
  },
  {
    name: "Prof. Dr. Md. Ahsan Habib",
    title: "Chairman, Dept. of CSE, BUBT",
    image: "https://i.ibb.co.com/wN2PthKc/chairman.jpg",
    heading: "Message From the Chairman, Dept. of CSE, BUBT",
    body: "I am pleased to welcome you to the 2nd International Congress on Artificial Intelligence (ICAI 2026), organized by the IEEE BUBT Student Branch. This distinguished platform offers a unique opportunity to explore cutting-edge AI innovations and connect with a global network of experts. I applaud the organizers' dedication and wish all participants an inspiring, collaborative, and impactful experience over these three transformative days.",
    reverse: true,
  },
];

const generalChairMessage = {
  name: "Md Mehedi Hasan",
  title: "General Chair, ICAI 2026",
  image: "https://i.ibb.co.com/vx5hPvmw/pp.png",
  heading: "A Message of Appreciation from the General Chair",
  body: "On behalf of the Organizing Committee of the 2nd International Congress on Artificial Intelligence (ICAI 2026), I extend my sincere gratitude to our distinguished speakers, participants, student ambassadors, volunteers, technical partners, collaboration partners, and the global IEEE community for making ICAI 2026 a remarkable success. Over the course of three inspiring days, we witnessed meaningful discussions, international collaboration, and the exchange of innovative ideas that reaffirmed the transformative potential of artificial intelligence. Your enthusiasm, dedication, and active participation have contributed to building a vibrant global community committed to advancing AI for the benefit of society. We are deeply grateful for your trust and support, and we look forward to welcoming you again to the next edition of ICAI as we continue this journey of innovation, collaboration, and excellence.",
  reverse: false,
};

// ---------- Reusable components ----------
const AnimatedNumber: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target <= 0) return;
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(16, Math.abs(Math.floor(duration / target)));
    const timer = setInterval(() => {
      start += 1;
      setCount(Math.min(start, target));
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);
  return <span className="tabular-nums">{count}</span>;
};

const StatCard: React.FC<{ item: StatItem; delay: number }> = ({ item, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-gray-50 rounded-2xl shadow-sm ring-1 ring-black/5 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary-200 min-h-[180px]"
  >
    <div className="mb-3 p-3 bg-primary-100 rounded-full text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
      {item.icon}
    </div>
    <div className="flex-1 flex items-center justify-center">
      {item.value !== null ? (
        <div className="text-3xl font-bold text-primary-700">
          {item.value > 0 ? <AnimatedNumber target={item.value} /> : item.value}
          {item.suffix}
        </div>
      ) : (
        <div className="text-lg font-bold text-primary-700">Worldwide</div>
      )}
    </div>
    <p className="text-sm text-gray-600 mt-2">{item.label}</p>
  </motion.div>
);

const StatsGrid: React.FC<{ items: StatItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {items.map((item, idx) => (
      <StatCard key={item.label} item={item} delay={idx * 0.08} />
    ))}
  </div>
);

const MessageCard: React.FC<{
  name: string;
  title: string;
  image: string;
  heading: string;
  body: string;
  reverse: boolean;
}> = ({ name, title, image, heading, body, reverse }) => (
  <div
    className={`group flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } gap-6 md:gap-8 items-center md:items-start border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm bg-white transition-colors duration-300 hover:bg-primary-50/60 hover:border-primary-100`}
  >
    <div className="w-full md:w-1/3 flex flex-col items-center gap-3 shrink-0">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="h-40 w-40 rounded-full object-cover ring-4 ring-primary-100 transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
    <div className="w-full md:w-2/3">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{heading}</h2>
      <p className="text-left font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800 leading-relaxed">
        {body}
      </p>
    </div>
  </div>
);

// Reusable search input used by both the Participants and Ambassadors sections
const SearchBox: React.FC<{
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}> = ({ value, onChange, placeholder }) => (
  <div className="mb-6 max-w-2xl mx-auto relative">
    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
      <Search className="h-5 w-5 text-gray-400" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-10 text-gray-900 placeholder-gray-500 transition-shadow duration-200 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
    />
    {value && (
      <button
        type="button"
        onClick={() => onChange("")}
        aria-label="Clear search"
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 transition-colors hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 rounded-r-lg"
      >
        <X className="h-5 w-5" />
      </button>
    )}
  </div>
);

// Reusable pagination bar
const PaginationBar: React.FC<{
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}> = ({ page, totalPages, onChange }) => (
  <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
    <button
      onClick={() => onChange(Math.max(1, page - 1))}
      disabled={page === 1}
      className="px-4 py-2 rounded-md bg-white border border-gray-300 font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 disabled:opacity-40 disabled:pointer-events-none"
    >
      Previous
    </button>
    <span className="text-sm text-gray-600">
      Page {totalPages === 0 ? 0 : page} of {totalPages}
    </span>
    <button
      onClick={() => onChange(Math.min(totalPages, page + 1))}
      disabled={page === totalPages || totalPages === 0}
      className="px-4 py-2 rounded-md bg-white border border-gray-300 font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 disabled:opacity-40 disabled:pointer-events-none"
    >
      Next
    </button>
  </div>
);

// ---------- Main component ----------
const Congress2026 = () => {
  const [activeTab, setActiveTab] = useState("day1");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTermAmb, setSearchTermAmb] = useState("");
  const [debouncedSearchAmb, setDebouncedSearchAmb] = useState("");
  const [currentPageAmb, setCurrentPageAmb] = useState(1);
  const itemsPerPage = 50;

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(t);
  }, [searchTerm]);
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  const filteredParticipants = useMemo(() => {
    const term = debouncedSearch.toLowerCase().trim();
    if (!term) return participantsData as Participant[];
    return (participantsData as Participant[]).filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.institute.toLowerCase().includes(term) ||
        p.id.toLowerCase().includes(term) ||
        p.country.toLowerCase().includes(term)
    );
  }, [debouncedSearch]);

  const totalPages = Math.max(1, Math.ceil(filteredParticipants.length / itemsPerPage));
  const start = (currentPage - 1) * itemsPerPage;
  const currentParticipants = filteredParticipants.slice(start, start + itemsPerPage);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearchAmb(searchTermAmb), 300);
    return () => clearTimeout(t);
  }, [searchTermAmb]);
  useEffect(() => {
    setCurrentPageAmb(1);
  }, [debouncedSearchAmb]);

  const filteredAmbassadors = useMemo(() => {
    const term = debouncedSearchAmb.toLowerCase().trim();
    if (!term) return ambassadorsData as Ambassador[];
    return (ambassadorsData as Ambassador[]).filter(
      (a) =>
        a.name.toLowerCase().includes(term) ||
        a.university.toLowerCase().includes(term) ||
        a.id.toLowerCase().includes(term)
    );
  }, [debouncedSearchAmb]);

  const totalPagesAmb = Math.max(1, Math.ceil(filteredAmbassadors.length / itemsPerPage));
  const startAmb = (currentPageAmb - 1) * itemsPerPage;
  const currentAmbassadors = filteredAmbassadors.slice(startAmb, startAmb + itemsPerPage);

  const zoomLink = "https://bdren.zoom.us/j/95062404702?pwd=tkay2GbiKLWHfcPGjtpHLygshaUeuQ.1";

  const dayLabels: Record<string, string> = { day1: "18", day2: "19", day3: "20" };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-700 py-16 text-white">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              2nd International Congress on Artificial Intelligence (ICAI)
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">July 18–20, 2026 • Virtual Congress</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* ---- Committee ---- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Congress Committee</h2>
          <div className="space-y-10">
            {Object.entries(committeeData).map(([category, members]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 border-l-4 border-primary-500 pl-3">
                  {category}
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50 text-left">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">Name</th>
                        <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">Role</th>
                        <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">Photo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {members.map((m, i) => (
                        <tr key={i} className="transition-colors hover:bg-primary-50/60">
                          <td className="px-4 py-3 font-medium text-gray-800">{m.name}</td>
                          <td className="px-4 py-3 text-gray-600">{m.role}</td>
                          <td className="px-4 py-3">
                            <img
                              src={m.image}
                              alt={m.name}
                              loading="lazy"
                              className="h-10 w-10 rounded-full object-cover border border-gray-200 transition-transform duration-200 hover:scale-110"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Speakers Grid ---- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Distinguished Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {speakersData.map((speaker: any) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 hover:shadow-xl hover:ring-primary-200 overflow-hidden transition-shadow duration-300"
              >
                <div className="flex flex-col items-center p-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-100 shadow-sm mb-4">
                    <img src={speaker.image} alt={speaker.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 text-center mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-600 text-center leading-tight line-clamp-3">{speaker.title}</p>
                  <Link
                    to={`/speakers/${speaker.id}`}
                    className="btn btn-primary border-none text-sm px-4 py-2 mt-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---- Schedule ---- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Program Schedule</h2>
          <div className="mb-4 bg-blue-50 p-4 rounded-lg text-center text-blue-800">
            <span className="font-semibold">Local Time:</span> Bangladesh (UTC+6) |{" "}
            <span className="font-semibold">International Time:</span> UTC
          </div>
          <div className="flex mb-6 border-b border-gray-200">
            {(["day1", "day2", "day3"] as const).map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setActiveTab(day)}
                aria-pressed={activeTab === day}
                className={`py-2 px-6 font-medium transition-colors duration-200 border-b-2 -mb-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 rounded-t-md ${
                  activeTab === day
                    ? "text-primary-700 border-primary-600 bg-primary-50/70"
                    : "text-gray-500 border-transparent hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                Day {day.slice(-1)} ({dayLabels[day]} July 2026)
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href={zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2D8CFF] px-5 py-1.5 rounded-md text-white font-semibold transition-colors duration-200 hover:bg-[#1c73e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2"
            >
              Zoom Link
            </a>
            <span className="font-semibold border-2 border-[#2D8CFF] text-[#1c73e0] rounded-md px-4 py-1.5">
              Passcode: icai
            </span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wide">Speaker</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wide">Topic</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wide whitespace-nowrap">BD Time</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wide whitespace-nowrap">UTC Time</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wide">Duration</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {scheduleData[activeTab as keyof typeof scheduleData]?.map((session, idx) => {
                  const sp = speakerMap.get(session.speaker);
                  return (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="transition-colors hover:bg-primary-50/60"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {sp ? (
                            <img
                              src={(sp as any).image}
                              alt={session.speaker}
                              className="w-10 h-10 rounded-full object-cover border border-gray-200"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs">
                              {session.speaker
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .substring(0, 2)}
                            </div>
                          )}
                          <span className="font-medium text-gray-800">{session.speaker}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 italic text-gray-700 min-w-[220px]">{session.topic}</td>
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{session.localTime}</td>
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{session.utcTime}</td>
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{session.duration}</td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---- Advisor Messages ---- */}
        <section className="mb-16">
          <div className="space-y-6">
            {advisorMessages.map((msg) => (
              <MessageCard key={msg.name} {...msg} />
            ))}
          </div>
        </section>

        {/* ---- General Chair Message ---- */}
        <section className="mb-16">
          <MessageCard {...generalChairMessage} />
        </section>

        {/* ---- 2026 by the Numbers ---- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">ICAI 2026 – By the Numbers</h2>
          <StatsGrid items={achievements2026} />
        </section>

        {/* ---- Participant Voices ---- */}
        <section className="mb-16 overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Voices from Our Participants</h2>
          <div className="flex gap-6 animate-scroll">
            {scrollingQuotes.map((q, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 bg-gray-50 rounded-xl shadow-sm ring-1 ring-primary-50 p-6 flex flex-col justify-center items-center text-center transition-shadow duration-300 hover:shadow-md"
              >
                <p className="italic text-gray-700 text-base leading-relaxed">"{q}"</p>
                <div className="mt-4 flex items-center gap-2 text-primary-500 text-sm font-medium">
                  <Users2 className="w-4 h-4" /> Anonymous Participant
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-scroll { animation: scroll 30s linear infinite; width: max-content; }
            .animate-scroll:hover { animation-play-state: paused; }
            @media (prefers-reduced-motion: reduce) { .animate-scroll { animation: none; overflow-x: auto; } }
          `}</style>
        </section>

        {/* ---- Participants ---- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Participants</h2>
          <SearchBox
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by name, ID, institute, or country..."
          />
          <p className="text-center text-gray-600 mb-4">
            Found {filteredParticipants.length} participant{filteredParticipants.length !== 1 ? "s" : ""}
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">ID</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">Name</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">Institute</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">Country</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentParticipants.length > 0 ? (
                  currentParticipants.map((p) => (
                    <tr key={p.id} className="transition-colors hover:bg-primary-50/60">
                      <td className="px-4 py-3 font-medium text-gray-800">{p.id}</td>
                      <td className="px-4 py-3 text-gray-800">{p.name}</td>
                      <td className="px-4 py-3 text-gray-600">{p.institute}</td>
                      <td className="px-4 py-3 text-gray-600">{p.country}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                      No participants match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <PaginationBar page={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </section>

        {/* ---- Ambassadors ---- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ambassadors</h2>
          <SearchBox
            value={searchTermAmb}
            onChange={setSearchTermAmb}
            placeholder="Search by name, ID, or university..."
          />
          <p className="text-center text-gray-600 mb-4">
            Found {filteredAmbassadors.length} ambassador{filteredAmbassadors.length !== 1 ? "s" : ""}
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">ID</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">Name</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wide">University</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentAmbassadors.length > 0 ? (
                  currentAmbassadors.map((a) => (
                    <tr key={a.id} className="transition-colors hover:bg-primary-50/60">
                      <td className="px-4 py-3 font-medium text-gray-800">{a.id}</td>
                      <td className="px-4 py-3 text-gray-800">{a.name}</td>
                      <td className="px-4 py-3 text-gray-600">{a.university}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-4 py-6 text-center text-gray-500">
                      No ambassadors match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <PaginationBar page={currentPageAmb} totalPages={totalPagesAmb} onChange={setCurrentPageAmb} />
        </section>

        {/* ---- vTools ---- */}
        <section className="py-12 bg-primary-700 text-white rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Official IEEE vTools Event Registration</h2>
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            ICAI 2026 is officially listed on the IEEE vTools Events Platform. The IEEE event page will be available
            soon.
          </p>
          <button
            disabled
            className="btn bg-white/10 text-white/70 cursor-not-allowed border border-white/30 px-6 py-3 rounded-lg"
          >
            Coming Soon
          </button>
        </section>
      </div>
    </div>
  );
};

export default Congress2026;