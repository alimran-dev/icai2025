import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Globe,
  Award,
  Laptop,
  BarChart3,
  Users2,
  Presentation,
  Network,
  Briefcase,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import speakersData from "../../data/speakers2026.json";

const ICAI_2026_DATE = "2026-07-18T20:00:00+06:00";
const ZOOM_LINK = "https://bdren.zoom.us/j/95062404702?pwd=tkay2GbiKLWHfcPGjtpHLygshaUeuQ.1";
const ZOOM_MEETING_ID = "950 6240 4702";
const ZOOM_PASSCODE = "icai";
// Ambassador registration isn't live yet — render this CTA as a disabled
// "coming soon" state instead of linking to "#", which previously opened a
// dead tab and looked broken.
const AMBASSADOR_REG_URL: string | null = null;

const achievements = [
  { icon: <Users className="w-6 h-6" />, label: "Registered Participants", value: 1000, suffix: "+" },
  { icon: <Users2 className="w-6 h-6" />, label: "Live Participants", value: 400, suffix: "+" },
  { icon: <Globe className="w-6 h-6" />, label: "Countries Represented", value: 16, suffix: "" },
  { icon: <Award className="w-6 h-6" />, label: "Student Ambassadors", value: 147, suffix: "" },
  { icon: <Briefcase className="w-6 h-6" />, label: "Collaboration Partners", value: 16, suffix: "" },
  { icon: <Presentation className="w-6 h-6" />, label: "Distinguished Speakers", value: 10, suffix: "" },
  { icon: <Clock className="w-6 h-6" />, label: "Two-Day Virtual Congress", value: 2, suffix: "" },
  { icon: <Globe className="w-6 h-6" />, label: "Global IEEE Community Engagement", value: null, suffix: "" },
];

const highlights = [
  "International Keynote Sessions",
  "Industry Expert Talks",
  "AI in Healthcare",
  "Generative AI",
  "AI Ethics",
  "Climate Technology",
  "Big Data & Analytics",
  "Research & Innovation",
  "Live Q&A Sessions",
  "Global Networking",
];

const whyAttend = [
  {
    icon: <Users2 className="w-8 h-8 text-primary-600" />,
    title: "International Speakers",
    description: "Hear from renowned AI researchers, industry leaders, and IEEE experts from across the globe.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-primary-600" />,
    title: "Technical Sessions",
    description: "Deep-dive sessions on cutting-edge AI topics, tools, and frameworks.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary-600" />,
    title: "AI Industry Talks",
    description: "Learn how AI is transforming businesses, startups, and large-scale enterprises.",
  },
  {
    icon: <Presentation className="w-8 h-8 text-primary-600" />,
    title: "Panel Discussions",
    description: "Engaging debates with experts on the future of responsible AI and policy.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary-600" />,
    title: "Career Development",
    description: "Insights into AI career paths, skills, and opportunities from top recruiters.",
  },
  {
    icon: <Network className="w-8 h-8 text-primary-600" />,
    title: "Global Networking",
    description: "Connect with researchers, students, IEEE volunteers, and industry professionals worldwide.",
  },
];

const technicalPartners = [
  { name: "IEEE CS BDC", logo: "https://i.ibb.co.com/8D1ZG707/CS-BDC-LOGO-2023.png" },
  { name: "IEEE CIS BDC", logo: "https://i.ibb.co.com/992W7Zmf/ieeecisbdc.webp" },
];

const youthPartners = [
  {
    name: "IEEE CS BDC Team SPARK",
    logo: "https://i.ibb.co.com/mV8Ckx2t/SPARK-LOGO.png",
    link: "https://ibb.co.com/Mx6DrXtp",
  },
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

const highlightedConferences = [
  {
    name: "IEEE CSDE 2026",
    logo: "https://i.ibb.co.com/LDYfxmTs/csde.jpg",
    link: "https://ieee-csde.org/",
    alt: "CSDE Conference",
    deadline: "Submission Deadline: 31 July 2026",
  },
  {
    name: "IEEE iCOSTE 2026",
    logo: "https://i.ibb.co.com/2pVHz3m/icoste.jpg",
    link: "https://i-coste.org/",
    alt: "iCOSTE Conference",
    deadline: "Submission Deadline: 31 July 2026",
  },
];

const AnimatedNumber = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target <= 0) return;
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);
  return <span className="tabular-nums">{count}</span>;
};

// ------------------------------------------------------------------
// GLOBAL VIEW COUNTER
// ------------------------------------------------------------------
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
        let alreadyCountedThisSession = false;
        try {
          alreadyCountedThisSession = sessionStorage.getItem(SESSION_FLAG) === "1";
        } catch {}

        const action = alreadyCountedThisSession ? "get" : "hit";
        const res = await fetchWithTimeout(
          `https://countapi.mileshilliard.com/api/v1/${action}/${COUNTER_KEY}`,
          5000
        );

        if (!res.ok) throw new Error(`Counter API returned ${res.status}`);

        const data = await res.json();
        if (typeof data.value !== "number" && typeof data.value !== "string") {
          throw new Error("Unexpected counter response shape");
        }

        if (!alreadyCountedThisSession) {
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

// Reusable, evenly-sized logo tile
const LogoTile: React.FC<{ src: string; alt: string; delay?: number }> = ({ src, alt, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group w-full p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
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

// ------------------------------------------------------------------
// HOME COMPONENT
// ------------------------------------------------------------------
const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(ICAI_2026_DATE).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
              2nd International Congress on
              <br />
              <span className="text-primary-300">Artificial Intelligence (ICAI 2026)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-secondary-200 font-medium">
              AI for Humanity: Research, Innovation, Industry, and Responsible Intelligence
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              18-20 July 2026 &bull; Virtual Congress
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-3 sm:gap-5 justify-center text-center max-w-md sm:max-w-lg mx-auto mb-8">
              {[
                { value: timeLeft.days, label: "days" },
                { value: timeLeft.hours, label: "hours" },
                { value: timeLeft.minutes, label: "min" },
                { value: timeLeft.seconds, label: "sec" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-1 py-3 px-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <span className="font-mono tabular-nums text-3xl md:text-5xl font-bold">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-wide text-white/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Global View Counter */}
            <div className="flex justify-center mb-8">
              <ViewCounter />
            </div>

            {/* Join Zoom Button (Zoom blue) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href={ZOOM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#2D8CFF] text-white font-bold rounded-full shadow-lg hover:bg-[#2681F2] transition-colors duration-300 text-lg"
              >
                <Video className="w-5 h-5" />
                Join Zoom Meeting
              </a>
              <p className="text-sm text-white/80 mt-2">
                Meeting ID: {ZOOM_MEETING_ID} | Passcode: {ZOOM_PASSCODE}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlighted Conferences */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Highlighted Conferences
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Explore these premier IEEE events happening alongside ICAI 2026.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlightedConferences.map((conf, idx) => (
              <motion.a
                key={conf.name}
                href={conf.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 w-full flex items-center justify-center bg-gray-50">
                  <img
                    src={conf.logo}
                    alt={conf.alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="px-4 pb-4 pt-3 text-center flex flex-col items-center gap-2">
                  <span className="inline-block bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium">
                    {conf.name}
                  </span>
                  <p className="text-red-600 font-semibold text-xs uppercase tracking-wide">
                    {conf.deadline}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers (real data) */}
      <section id="speakers" className="section bg-gray-100 px-2 md:px-10 py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
              Meet Our Distinguished Speakers
            </h2>
            <p className="text-lg text-center mb-10 text-gray-600">
              Gain insights from esteemed experts and thought leaders <br />
              at the forefront of Artificial Intelligence research and innovation.
            </p>

            {/* Speakers grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {speakersData.map((speaker) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
                >
                  <div className="flex flex-col items-center p-6 h-full">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-100 shadow-lg mb-4 shrink-0">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 text-center mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-3 leading-tight flex-1">
                      {speaker.title}
                    </p>
                    <Link
                      to={`/speakers/${speaker.id}`}
                      className="btn btn-primary border-none text-sm px-4 py-2 mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link to={"/speakers"} className="btn btn-primary border-none">
                View All Speakers
              </Link>
              <Link to={"/schedule"} className="btn btn-primary border-none">
                Event Schedule
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About ICAI 2026</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-secondary-700 mb-4 text-justify">
                The 2nd International Congress on Artificial Intelligence (ICAI 2026) is a premier
                global virtual event organized by the IEEE BUBT Student Branch.
                Building on the outstanding success of its inaugural edition, ICAI 2026 aims to bring
                together a vibrant community of researchers, students, IEEE volunteers, academia,
                startups, industry leaders, and technology innovators from across the globe.
              </p>
              <p className="text-lg text-secondary-700 text-justify">
                With a strong focus on Artificial Intelligence, Machine Learning, Generative AI, Data
                Science, Responsible AI, Intelligent Systems, and emerging technologies, the congress
                provides an inclusive platform for knowledge exchange, research collaboration, and
                professional networking. Through expert talks, interactive discussions, and community
                engagement, ICAI 2026 continues its mission to advance AI for the benefit of humanity.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Event Date</h3>
              </div>
              <p className="text-secondary-700">18-20 July 2026</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-secondary-700">Virtual Congress</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Participants</h3>
              </div>
              <p className="text-secondary-700">1000+ Expected Participants Worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Building on Success */}
      <section className="section bg-gray-50 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Building on the Success of ICAI 2025</h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              The inaugural International Congress on Artificial Intelligence (ICAI 2025) successfully
              brought together researchers, students, IEEE volunteers, academics, industry professionals,
              and innovators from around the world. Building on this strong foundation, ICAI 2026 aims to
              deliver an even larger, more impactful international platform for knowledge sharing,
              collaboration, innovation, and responsible Artificial Intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300 min-h-[180px]"
              >
                <div className="mb-3 p-3 bg-primary-100 rounded-full text-primary-600">{item.icon}</div>
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
            ))}
          </div>
        </div>
      </section>

      {/* ICAI 2025 Highlights */}
      <section className="section bg-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">ICAI 2025 Highlights</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-primary-50 rounded-lg p-4 flex items-center justify-center text-center shadow-sm"
              >
                <span className="text-primary-700 font-bold text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – Be Part (with Zoom-colored Join button) */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Be Part of ICAI 2026
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
              Following the success of ICAI 2025, the second edition will offer even greater
              opportunities for learning, collaboration, networking, innovation, and global engagement
              in Artificial Intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={ZOOM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#2D8CFF] text-white hover:bg-[#2681F2] border-none"
              >
                <Video className="w-5 h-5 inline mr-2" />
                Join Zoom Meeting
              </a>
              {AMBASSADOR_REG_URL ? (
                <a
                  href={AMBASSADOR_REG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-primary-700 hover:bg-primary-100"
                >
                  Become an Ambassador
                </a>
              ) : (
                <button
                  disabled
                  className="btn bg-white/40 text-white cursor-not-allowed border border-white/40"
                  title="Ambassador registration opens soon"
                >
                  Ambassador Registration - Closed
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Messages from Advisors */}
      <section className="section bg-secondary-50 mb-4 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start border p-6 rounded-md shadow-md bg-white hover:bg-primary-50 transition-colors duration-500">
              <div className="w-full md:w-1/3 flex flex-col items-center gap-3 shrink-0">
                <img
                  src="https://i.ibb.co.com/0jVMjqzz/download-1.png"
                  alt="Prof. Dr. A B M Shawkat Ali"
                  loading="lazy"
                  className="h-40 w-40 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800">Prof. Dr. A B M Shawkat Ali</h3>
                  <p className="text-sm text-gray-600">Vice Chancellor, BUBT</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Message From the Vice Chancellor of BUBT
                </h2>
                <p className="text-justify font-medium text-gray-500 hover:text-gray-700 transition-colors">
                  I am delighted to welcome you to the{" "}
                  <span className="text-gray-700 font-semibold">
                    2nd International Congress on Artificial Intelligence (ICAI 2026)
                  </span>
                  , organized by the IEEE BUBT Student Branch . This prestigious
                  global platform continues to unite experts, researchers, and learners to foster
                  collaboration, share transformative AI insights, and inspire innovation. I commend the
                  organizers for their vision and dedication, and I wish all participants a highly
                  engaging, inspiring, and impactful experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center md:items-start border p-6 rounded-md shadow-md bg-white hover:bg-primary-50 transition-colors duration-500">
              <div className="w-full md:w-1/3 flex flex-col items-center gap-3 shrink-0">
                <img
                  src="https://i.ibb.co.com/wN2PthKc/chairman.jpg"
                  alt="Prof. Dr. Md. Ahsan Habib"
                  loading="lazy"
                  className="h-40 w-40 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800">Prof. Dr. Md. Ahsan Habib</h3>
                  <p className="text-sm text-gray-600">Chairman, Dept. of CSE, BUBT</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Message From the Chairman, Dept. of CSE, BUBT
                </h2>
                <p className="text-justify font-medium text-gray-500 hover:text-gray-700 transition-colors">
                  I am pleased to welcome you to the{" "}
                  <span className="text-gray-700 font-semibold">
                    2nd International Congress on Artificial Intelligence (ICAI 2026)
                  </span>
                  , organized by the IEEE BUBT Student Branch . This distinguished
                  platform offers a unique opportunity to explore cutting-edge AI innovations and connect
                  with a global network of experts. I applaud the organizers&apos; dedication and wish all
                  participants an inspiring, collaborative, and impactful experience over these three
                  transformative days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IEEE vTools */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Official IEEE vTools Event Registration
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
              ICAI 2026 will be officially listed on the IEEE vTools Events Platform upon approval. The
              official IEEE registration page will be published here once available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                disabled
                className="btn bg-white/40 text-white cursor-not-allowed border border-white/40"
              >
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="section bg-secondary-50 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Why Attend ICAI 2026</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyAttend.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card p-6 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full mr-4 shrink-0">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-secondary-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Sections */}
      <section className="section bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Organized By */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">
                Organized By
              </h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                >
                  <div className="h-36 md:h-40 flex items-center justify-center overflow-hidden rounded-xl">
                    <img
                      src="https://i.ibb.co.com/ZphFCFt5/balabubt.png"
                      alt="IEEE BUBT Student Branch"
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Co-Organized By */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">
                Co-Organized By
              </h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                >
                  <div className="h-36 md:h-40 flex items-center justify-center overflow-hidden rounded-xl">
                    <img
                      src="https://i.ibb.co.com/kgWCqpy9/bubtsbc.jpg"
                      alt="IEEE BUBT Student Branch Chapters"
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Supported By */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">
                Supported By
              </h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                >
                  <div className="h-36 md:h-40 flex items-center justify-center overflow-hidden rounded-xl">
                    <img
                      src="https://i.postimg.cc/8PhtFvTZ/bubt-logo.png"
                      alt="BUBT"
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Technical Partners */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">
                Technical Partners
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Technical Partners contribute technical expertise, academic collaboration, and knowledge
                sharing to strengthen ICAI 2026.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {technicalPartners.map((partner) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-24 h-24 mb-3 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-700">{partner.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Youth Partners */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">
                Youth Partner
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Youth Partners contribute outreach, engagement, and student-driven collaboration to
                strengthen ICAI 2026.
              </p>
              <div className="flex justify-center">
                {youthPartners.map((partner) => (
                  <motion.a
                    key={partner.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-24 h-24 mb-3 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-700">{partner.name}</h4>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Collaboration Partners */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">
                Collaboration Partners
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch justify-items-stretch max-w-6xl mx-auto">
                {collaborationPartners.map((partner, index) => (
                  <LogoTile
                    key={partner.name}
                    src={partner.logo}
                    alt={partner.name}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;