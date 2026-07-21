import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Globe,
  Award,
  Users2,
  Presentation,
  Briefcase,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import speakersData from "../../data/speakers2026.json"; // 13 final speakers

// -------------------------------
// Shared types
// -------------------------------
type StatItem = {
  icon: React.ReactNode;
  label: string;
  value: number | null;
  suffix?: string;
};

// -------------------------------
// ICAI 2026 actual achievements
// -------------------------------
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

// -------------------------------
// ICAI 2025 by the numbers
// -------------------------------
const achievements2025: StatItem[] = [
  { icon: <Users className="w-6 h-6" />, label: "Live Participants", value: 400, suffix: "+" },
  { icon: <Users2 className="w-6 h-6" />, label: "Student Ambassadors", value: 147 },
  { icon: <Globe className="w-6 h-6" />, label: "Countries Represented", value: 16 },
  { icon: <Briefcase className="w-6 h-6" />, label: "Collaboration Partners", value: 16 },
  { icon: <Presentation className="w-6 h-6" />, label: "Distinguished Speakers", value: 10 },
  { icon: <Clock className="w-6 h-6" />, label: "Virtual Congress Days", value: 2 },
  { icon: <Globe className="w-6 h-6" />, label: "Global IEEE Community Engagement", value: null },
];

// -------------------------------
// Combined ICAI Impact
// -------------------------------
const totalImpact: StatItem[] = [
  { icon: <Users className="w-6 h-6" />, label: "Total Live Participants", value: 700, suffix: "+" },
  { icon: <Users2 className="w-6 h-6" />, label: "Total Ambassadors", value: 207, suffix: "+" },
  { icon: <Award className="w-6 h-6" />, label: "Total Speakers", value: 23 },
  { icon: <Briefcase className="w-6 h-6" />, label: "Collaboration Partners", value: 32 },
  { icon: <Globe className="w-6 h-6" />, label: "Countries Represented", value: 30, suffix: "+" },
  { icon: <Presentation className="w-6 h-6" />, label: "Facebook Live Streams", value: 5, suffix: " days" },
  { icon: <Clock className="w-6 h-6" />, label: "Total Congress Days", value: 5 },
  { icon: <Globe className="w-6 h-6" />, label: "Global IEEE Community Engagement", value: null },
];

// Anonymous student quotes
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

// Partner data
const technicalPartners = [
  { name: "IEEE CS BDC", logo: "https://i.ibb.co.com/8D1ZG707/CS-BDC-LOGO-2023.png" },
  { name: "IEEE CIS BDC", logo: "https://i.ibb.co.com/992W7Zmf/ieeecisbdc.webp" },
];

const youthPartners = [
  { name: "IEEE CS BDC Team SPARK", logo: "https://i.ibb.co.com/mV8Ckx2t/SPARK-LOGO.png" },
];

const collaborationPartners = [
  { logo: "https://i.ibb.co.com/23RM1RvH/AI-Community-BUBT.png", name: "AI Community BUBT" },
  { logo: "https://i.ibb.co.com/4gtN47JV/IEEE-Computer-Society-Eastern-University-Student-Branch-Chapter.jpg", name: "IEEE Computer Society Eastern University Student Branch Chapter" },
  { logo: "https://i.ibb.co.com/RkSvW49M/IEEE-CS-SEU-SBC.png", name: "IEEE CS SEU SBC" },
  { logo: "https://i.ibb.co.com/LdCD6NF1/IEEE-GUB-SB-IEEE-Student-Branch-GUB.png", name: "IEEE GUB SB" },
  { logo: "https://i.ibb.co.com/TMrRPg0p/IEEE-SEU-Student-Branch.jpg", name: "IEEE SEU Student Branch" },
  { logo: "https://i.ibb.co.com/fztkJ6sH/IEEE-Southeast-University-Student-Branch-WIE-Affinity-Group.jpg", name: "IEEE Southeast University Student Branch WIE Affinity Group" },
  { logo: "https://i.ibb.co.com/YF3KC9FQ/IEEE-UAP-SB-Official-IEEE-UAP-Student-Branch.jpg", name: "IEEE UAP SB" },
  { logo: "https://i.ibb.co.com/bjMCgjBg/IEEE-UAP-SB-WIE-AG-IEEE-UAP-Student-Branch.jpg", name: "IEEE UAP SB WIE AG" },
  { logo: "https://i.ibb.co.com/FLGjwnjp/ieeeuiusb.png", name: "IEEE UIU SB" },
  { logo: "https://i.ibb.co.com/F40L4Hcg/JUKTI-LOGO.png", name: "JUKTI Logo" },
];

// Leadership messages (VC and Chairman only)
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

// General Chair message – separate, to be placed after Partners
const generalChairMessage = {
  name: "Md Mehedi Hasan",
  title: "General Chair, ICAI 2026",
  image: "https://i.ibb.co.com/vx5hPvmw/pp.png",
  heading: "A Message of Appreciation from the General Chair",
  body: "On behalf of the Organizing Committee of the 2nd International Congress on Artificial Intelligence (ICAI 2026), I extend my sincere gratitude to our distinguished speakers, participants, student ambassadors, volunteers, technical partners, collaboration partners, and the global IEEE community for making ICAI 2026 a remarkable success. Over the course of three inspiring days, we witnessed meaningful discussions, international collaboration, and the exchange of innovative ideas that reaffirmed the transformative potential of artificial intelligence. Your enthusiasm, dedication, and active participation have contributed to building a vibrant global community committed to advancing AI for the benefit of society. We are deeply grateful for your trust and support, and we look forward to welcoming you again to the next edition of ICAI as we continue this journey of innovation, collaboration, and excellence.",
  reverse: false,
};

// ============================================================
// Animated counter
// ============================================================
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

// ============================================================
// Global view counter
// ============================================================
const ViewCounter: React.FC = () => {
  const [views, setViews] = useState<number | null>(null);
  const [isGlobal, setIsGlobal] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const NAMESPACE = "icai2026global-x7k2";
    const KEY = "homepage";
    const COUNTER_KEY = `${NAMESPACE}_${KEY}`;
    const SESSION_FLAG = "icai2026_counted_this_session";

    const fetchWithTimeout = async (url: string, ms: number) => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), ms);
      try {
        return await fetch(url, { signal: controller.signal });
      } finally {
        clearTimeout(timeout);
      }
    };

    const readLocalFallback = () => {
      try {
        const stored = localStorage.getItem("icai2026_views");
        const current = stored ? parseInt(stored, 10) : 0;
        const newCount = current + 1;
        localStorage.setItem("icai2026_views", newCount.toString());
        return newCount;
      } catch {
        return 1;
      }
    };

    const fetchGlobalCount = async () => {
      try {
        let already = false;
        try {
          already = sessionStorage.getItem(SESSION_FLAG) === "1";
        } catch {}
        const action = already ? "get" : "hit";
        const res = await fetchWithTimeout(
          `https://countapi.mileshilliard.com/api/v1/${action}/${COUNTER_KEY}`,
          5000
        );
        if (!res.ok) throw new Error(`Counter API returned ${res.status}`);
        const data = await res.json();
        if (typeof data.value !== "number" && typeof data.value !== "string") {
          throw new Error("Unexpected response shape");
        }
        if (!already) {
          try {
            sessionStorage.setItem(SESSION_FLAG, "1");
          } catch {}
        }
        setViews(Number(data.value));
        setIsGlobal(true);
      } catch (err) {
        console.warn("Global counter unavailable, falling back to local count:", err);
        setViews(readLocalFallback());
        setIsGlobal(false);
      }
    };

    fetchGlobalCount();
  }, []);

  if (views === null) return null;

  return (
    <span className="text-white/80 text-sm tabular-nums">
      Total Page Views: {views.toLocaleString()}
      {!isGlobal && " (local)"}
    </span>
  );
};

// ============================================================
// Reusable stat card + grid
// ============================================================
const StatCard: React.FC<{ item: StatItem; delay: number }> = ({ item, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-gray-50 rounded-2xl shadow-sm ring-1 ring-black/5 p-6 flex flex-col items-center justify-center text-center
               transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary-200 min-h-[180px]"
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

// ============================================================
// Reusable transition paragraph between sections
// ============================================================
const SectionTransition: React.FC<{ bg: string; children: React.ReactNode }> = ({ bg, children }) => (
  <div className={`${bg} py-8`}>
    <div className="container text-center max-w-3xl mx-auto px-4">
      <p className="text-lg text-secondary-700">{children}</p>
    </div>
  </div>
);

// ============================================================
// Reusable logo tile (with consistent hover)
// ============================================================
const LogoTile: React.FC<{ src: string; alt: string; delay?: number }> = ({ src, alt, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group w-full p-4 bg-white rounded-xl shadow-sm ring-1 ring-black/5 hover:shadow-md hover:-translate-y-0.5 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
  >
    <div className="h-20 md:h-24 w-full flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  </motion.div>
);

// ============================================================
// Reusable message card (used for VC, Chairman, and General Chair)
// ============================================================
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
    } gap-6 md:gap-8 items-center md:items-start border border-gray-200 p-6 rounded-2xl shadow-sm
       bg-white transition-colors duration-300 hover:bg-primary-50`}
  >
    <div className="w-full md:w-1/3 flex flex-col items-center gap-3 shrink-0">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="h-40 w-40 rounded-full object-cover ring-4 ring-primary-100"
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

// ============================================================
// HOME COMPONENT
// ============================================================
const Home: React.FC = () => {
  return (
    <div>
      {/* =============== HERO: Successfully Concluded =============== */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-700 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="container relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
              2nd International Congress on
              <br />
              <span className="text-primary-300">Artificial Intelligence (ICAI 2026)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-secondary-200 font-medium">
              AI for Humanity: Research, Innovation, Industry, and Responsible Intelligence
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80">18–20 July 2026 • Virtual Congress</p>

            <div className="inline-flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-8 py-4 mb-8">
              <span className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold text-white">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary-300" aria-hidden="true" />
                Successfully Concluded with Global Participation
              </span>
              <span className="text-sm md:text-base text-primary-100">
                Thank you to all participants, speakers, and partners.
              </span>
            </div>

            <div>
              <ViewCounter />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionTransition bg="bg-gray-50">
        The successful conclusion of ICAI 2026 reflects the collective efforts of our distinguished speakers,
        participants, ambassadors, volunteers, and partners from around the world. Beyond a three‑day virtual
        congress, ICAI has evolved into a growing international platform that connects academia, industry, and the
        global IEEE community. The numbers below highlight the impact achieved across our first two editions.
      </SectionTransition>

      {/* =============== ICAI IMPACT =============== */}
      <section className="section bg-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">ICAI Impact – Across Editions</h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto mt-4">
              Since 2025, ICAI has brought together over 700 live participants, 207 ambassadors, 23 speakers, and 32
              collaboration partners from 30+ countries.
            </p>
          </motion.div>
          <StatsGrid items={totalImpact} />
        </div>
      </section>

      <SectionTransition bg="bg-white border-t">
        Behind every statistic is a shared commitment to advancing artificial intelligence through collaboration,
        education, and innovation. Discover the vision and mission that continue to shape ICAI as an international
        platform for researchers, professionals, students, and technology leaders.
      </SectionTransition>

      {/* =============== ABOUT ICAI =============== */}
      <section id="about" className="section bg-gray-50 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About ICAI 2026</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-secondary-700 mb-4">
                The 2nd International Congress on Artificial Intelligence (ICAI 2026), organized by the IEEE BUBT
                Student Branch, was a resounding success. Over three days (18–20 July 2026), the virtual event
                connected 13 distinguished speakers, 300+ participants, 60+ student ambassadors, and 16
                collaboration partners from across the globe.
              </p>
              <p className="text-lg text-secondary-700">
                Through keynote talks, live Q&amp;A, and Facebook Live streams, ICAI 2026 continued its mission to
                promote responsible AI research, innovation, and community building.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <Calendar className="h-6 w-6 text-primary-600" />, title: "Event Date", body: "18–20 July 2026 (Completed)" },
              { icon: <MapPin className="h-6 w-6 text-primary-600" />, title: "Location", body: "Virtual Congress" },
              { icon: <Users className="h-6 w-6 text-primary-600" />, title: "Participants", body: "300+ live attendees" },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card p-6 rounded-2xl shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full mr-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>
                <p className="text-secondary-700">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition bg="bg-gray-50">
        Guided by this vision, ICAI 2026 brought together experts and participants from diverse backgrounds to
        explore the latest developments in artificial intelligence. The congress featured keynote sessions,
        technical discussions, industry insights, and collaborative learning experiences that defined this year’s
        edition.
      </SectionTransition>

      {/* =============== ICAI 2026 HIGHLIGHTS =============== */}
      <section className="section bg-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">ICAI 2026 Highlights</h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto mt-4">
              The second edition brought together 13 distinguished speakers, 300+ participants, 60+ student
              ambassadors, and 16 collaboration partners across three days of cutting‑edge AI talks and Facebook
              Live streaming.
            </p>
          </motion.div>
          <StatsGrid items={achievements2026} />
        </div>
      </section>

      <SectionTransition bg="bg-white border-t">
        The success of ICAI 2026 was driven by the invaluable contributions of internationally recognized
        researchers, industry professionals, and IEEE leaders. Their expertise, experience, and thought leadership
        inspired meaningful discussions throughout the congress.
      </SectionTransition>

      {/* =============== DISTINGUISHED SPEAKERS =============== */}
      <section id="speakers" className="section bg-gray-50 px-2 md:px-10 py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">Our Distinguished Speakers</h2>
            <p className="text-lg text-center mb-10 text-gray-600">
              Gain insights from esteemed experts and thought leaders <br /> who made ICAI 2026 an unforgettable
              experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {speakersData.map((speaker: any) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 hover:shadow-xl overflow-hidden transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center p-6 h-full">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-100 shadow-sm mb-4 shrink-0">
                      <img src={speaker.image} alt={speaker.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 text-center mb-1">{speaker.name}</h3>
                    <p className="text-sm text-gray-600 text-center mb-3 leading-tight line-clamp-3 flex-1">
                      {speaker.title}
                    </p>
                    <Link
                      to={`/speakers/${speaker.id}`}
                      className="btn btn-primary border-none text-sm px-4 py-2 mt-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/speakers"
                className="btn btn-primary border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
              >
                View All Speakers
              </Link>
              <Link
                to="/schedule"
                className="btn btn-primary border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2"
              >
                Event Schedule
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============== PARTICIPANT VOICES =============== */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Voices from Our Participants</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto mt-4">
              Feedback from the ICAI 2026 community — anonymous voices that reflect the spirit of the congress.
            </p>
          </motion.div>
          <div className="relative w-full">
            <div className="flex gap-6 animate-scroll">
              {scrollingQuotes.map((quote, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80 bg-gray-50 rounded-xl shadow-sm ring-1 ring-primary-50 p-6 flex flex-col justify-center items-center text-center"
                >
                  <p className="italic text-gray-700 text-base leading-relaxed">“{quote}”</p>
                  <div className="mt-4 flex items-center gap-2 text-primary-500 text-sm font-medium">
                    <span className="inline-flex w-5 h-5 rounded-full bg-primary-100 items-center justify-center">
                      <Users2 className="w-3 h-3 text-primary-600" />
                    </span>
                    Anonymous Participant
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll {
              animation: none;
              overflow-x: auto;
            }
          }
        `}</style>
      </section>

      <SectionTransition bg="bg-gray-50">
        Building upon the strong foundation established during the inaugural edition, ICAI continues to expand its
        global reach and academic impact. Looking back at ICAI 2025 demonstrates the remarkable growth achieved in
        just one year.
      </SectionTransition>

      {/* =============== ICAI 2025 LEGACY =============== */}
      <section className="section bg-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">The Beginning of the ICAI Journey</h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto mt-4">
              The inaugural congress laid a strong foundation with over 400 live participants, 147 ambassadors, and
              10 distinguished speakers.
            </p>
          </motion.div>
          <StatsGrid items={achievements2025} />
        </div>
      </section>

      <SectionTransition bg="bg-white border-t">
        The continued growth and success of ICAI have been made possible through the guidance and encouragement of
        academic leaders and institutional supporters. Their messages reflect the importance of fostering
        innovation, research excellence, and international collaboration in artificial intelligence.
      </SectionTransition>

      {/* =============== MESSAGES FROM ADVISORS (VC & Chairman only) =============== */}
      <section className="section bg-secondary-50 mb-4 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {advisorMessages.map((msg) => (
              <MessageCard key={msg.name} {...msg} />
            ))}
          </motion.div>
        </div>
      </section>

      <SectionTransition bg="bg-secondary-50">
        ICAI 2026 was made possible through the dedication and support of our organizing bodies, technical partners,
        youth partners, and collaboration partners. Their contributions played a vital role in delivering a
        successful international congress and strengthening the global AI community.
      </SectionTransition>

      {/* =============== PARTNERS =============== */}
      <section className="section bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Organized By / Co-Organized By / Supported By */}
            {[
              { title: "Organized By", src: "https://i.ibb.co.com/ZphFCFt5/balabubt.png", alt: "IEEE BUBT Student Branch" },
              { title: "Co-Organized By", src: "https://i.ibb.co.com/kgWCqpy9/bubtsbc.jpg", alt: "IEEE BUBT Student Branch Chapters" },
              { title: "Supported By", src: "https://i.postimg.cc/8PhtFvTZ/bubt-logo.png", alt: "BUBT" },
            ].map((block) => (
              <div className="mb-16" key={block.title}>
                <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">{block.title}</h3>
                <div className="flex justify-center items-center max-w-5xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-50"
                  >
                    <div className="h-36 md:h-40 flex items-center justify-center overflow-hidden rounded-xl">
                      <img
                        src={block.src}
                        alt={block.alt}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}

            {/* Technical Partners – hover:bg-primary-50 */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">Technical Partners</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Technical Partners contribute technical expertise, academic collaboration, and knowledge sharing to
                strengthen ICAI.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {technicalPartners.map((partner) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-6 flex flex-col items-center justify-center text-center
                               hover:shadow-lg hover:-translate-y-1 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="w-24 h-24 mb-3 flex items-center justify-center">
                      <img src={partner.logo} alt={partner.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                    </div>
                    <h4 className="font-semibold text-gray-700">{partner.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Youth Partners – hover:bg-primary-50 */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">Youth Partner</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Youth Partners contribute outreach, engagement, and student-driven collaboration to strengthen ICAI.
              </p>
              <div className="flex justify-center">
                {youthPartners.map((partner) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-6 flex flex-col items-center justify-center text-center
                               hover:shadow-lg hover:-translate-y-1 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="w-24 h-24 mb-3 flex items-center justify-center">
                      <img src={partner.logo} alt={partner.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                    </div>
                    <h4 className="font-semibold text-gray-700">{partner.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Collaboration Partners – LogoTile already with hover:bg-primary-50 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">Collaboration Partners</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch justify-items-stretch max-w-6xl mx-auto">
                {collaborationPartners.map((partner, index) => (
                  <LogoTile key={partner.name} src={partner.logo} alt={partner.name} delay={index * 0.05} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============== GENERAL CHAIR MESSAGE (after Partners) =============== */}
      <section className="section bg-white py-16">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MessageCard {...generalChairMessage} />
          </motion.div>
        </div>
      </section>

      {/* =============== IEEE vTools (placeholder) =============== */}
      <section className="py-16 bg-primary-800 text-white border-t border-white/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Official IEEE vTools Event Registration</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
              ICAI 2026 is officially listed on the IEEE vTools Events Platform. The IEEE event page will be
              available soon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                disabled
                aria-disabled="true"
                title="The IEEE event page will be announced soon"
                className="btn bg-white/10 text-white/70 cursor-not-allowed border border-white/30 px-6 py-2 rounded-lg"
              >
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============== JOIN ICAI 2027 =============== */}
      <section className="py-16 bg-primary-600 text-white border-t-4 border-primary-300">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Us in Shaping ICAI 2027</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
              As ICAI continues to grow, we remain committed to expanding opportunities for collaboration, knowledge
              sharing, and innovation. We warmly invite universities, IEEE entities, industry leaders, researchers,
              and students to join us in shaping the next edition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:mdmehedihasansr@gmail.com"
                className="btn bg-white text-primary-700 hover:bg-primary-100 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Contact us for ICAI 2027
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;