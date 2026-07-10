import React, { useEffect, useState } from "react";
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
} from "lucide-react";
import { Link } from "react-router-dom";

const ICAI_2026_DATE = "2026-07-18T20:00:00+06:00";
const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLScoeHfNTaWiEKTK3aE1lLrSxEomz2-rdU-SuYZH_FudqzA9bA/viewform";
const AMBASSADOR_REG_URL = "#"; // Placeholder for Ambassador Registration URL

const achievements = [
  { icon: <Users className="w-6 h-6" />, label: "Registered Participants", value: 1000, suffix: "+" },
  { icon: <Users2 className="w-6 h-6" />, label: "Live Participants", value: 400, suffix: "+" },
  { icon: <Globe className="w-6 h-6" />, label: "Countries Represented", value: 16 },
  { icon: <Award className="w-6 h-6" />, label: "Student Ambassadors", value: 147 },
  { icon: <Briefcase className="w-6 h-6" />, label: "Collaboration Partners", value: 16 },
  { icon: <Presentation className="w-6 h-6" />, label: "Distinguished Speakers", value: 10 },
  { icon: <Clock className="w-6 h-6" />, label: "Two-Day Virtual Congress", value: 2 },
  { icon: <Globe className="w-6 h-6" />, label: "Global IEEE Community Engagement", value: null },
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
  { icon: <Users2 className="w-8 h-8 text-primary-600" />, title: "International Speakers", description: "Hear from renowned AI researchers, industry leaders, and IEEE experts from across the globe." },
  { icon: <Laptop className="w-8 h-8 text-primary-600" />, title: "Technical Sessions", description: "Deep-dive sessions on cutting-edge AI topics, tools, and frameworks." },
  { icon: <BarChart3 className="w-8 h-8 text-primary-600" />, title: "AI Industry Talks", description: "Learn how AI is transforming businesses, startups, and large-scale enterprises." },
  { icon: <Presentation className="w-8 h-8 text-primary-600" />, title: "Panel Discussions", description: "Engaging debates with experts on the future of responsible AI and policy." },
  { icon: <Briefcase className="w-8 h-8 text-primary-600" />, title: "Career Development", description: "Insights into AI career paths, skills, and opportunities from top recruiters." },
  { icon: <Network className="w-8 h-8 text-primary-600" />, title: "Global Networking", description: "Connect with researchers, students, IEEE volunteers, and industry professionals worldwide." },
];

const technicalPartners = [
  { name: "IEEE CS BDC", logo: "https://i.ibb.co.com/8D1ZG707/CS-BDC-LOGO-2023.png" },
  { name: "IEEE CIS BDC", logo: "https://i.ibb.co.com/992W7Zmf/ieeecisbdc.webp" },
];

const youthPartners = [
  { name: "IEEE CS BDC Team SPARK", logo: "https://i.ibb.co.com/mV8Ckx2t/SPARK-LOGO.png", link: "https://ibb.co.com/Mx6DrXtp" },
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
  return <span>{count}</span>;
};

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
      {/* ========================================================== */}
      {/* HERO SECTION                                             */}
      {/* ========================================================== */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              2nd International Congress on
              <br />
              <span className="text-primary-300">Artificial Intelligence (ICAI 2026)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-secondary-200 font-medium">
              AI for Humanity: Research, Innovation, Industry, and Responsible Intelligence
            </p>
            <p className="text-lg md:text-xl mb-6 text-white/80">
              18-20 July 2026 &bull; Virtual Congress
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-flow-col gap-5 justify-center text-center auto-cols-max mb-6">
              {[
                { value: timeLeft.days, label: "days" },
                { value: timeLeft.hours, label: "hours" },
                { value: timeLeft.minutes, label: "min" },
                { value: timeLeft.seconds, label: "sec" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col p-2 bg-primary-600 rounded-box text-neutral-content">
                  <span className="countdown font-mono text-3xl md:text-5xl">
                    {item.value}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Register Now Button – added after countdown */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4"
            >
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-700 font-bold rounded-full shadow-lg hover:bg-primary-100 transition-colors duration-300 text-lg"
              >
                <Users2 className="w-5 h-5" />
                Register Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FEATURED SPEAKERS (Coming Soon Placeholder)                */}
      {/* ========================================================== */}
      <section id="speakers" className="section bg-gray-100 px-2 md:px-10">
        <div className="flex flex-col items-center">
          <div className="w-full lg:w-[70%] bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-10 flex flex-col items-center justify-center mb-6">
            <Presentation className="w-16 h-16 text-primary-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">ICAI 2026 Distinguished Speakers Coming Soon</h2>
            <p className="text-gray-600 text-center max-w-xl">
              International keynote speakers, researchers, industry experts, and IEEE leaders will be announced soon.
            </p>
          </div>
          <div>
            <h2 className="section-title mt-3 mb-3">Meet Our Distinguished Speakers</h2>
            <p className="text-lg text-center">
              Gain insights from esteemed experts and thought leaders <br /> at the forefront of Artificial Intelligence research and innovation.
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <Link to={"/speakers"} className="btn btn-primary border-none">View Speakers</Link>
              <Link to={"/schedule"} className="btn btn-primary border-none">Event Schedule</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* ABOUT ICAI 2026                                          */}
      {/* ========================================================== */}
      <section id="about" className="section bg-white">
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
                The 2nd International Congress on Artificial Intelligence (ICAI 2026) is a premier global virtual event
                organized by the IEEE Systems Council BUBT Student Branch Chapter. Building on the outstanding success of
                its inaugural edition, ICAI 2026 aims to bring together a vibrant community of researchers, students,
                IEEE volunteers, academia, startups, industry leaders, and technology innovators from across the globe.
              </p>
              <p className="text-lg text-secondary-700 text-justify">
                With a strong focus on Artificial Intelligence, Machine Learning, Generative AI, Data Science,
                Responsible AI, Intelligent Systems, and emerging technologies, the congress provides an inclusive
                platform for knowledge exchange, research collaboration, and professional networking. Through
                expert talks, interactive discussions, and community engagement, ICAI 2026 continues its mission
                to advance AI for the benefit of humanity.
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

      {/* ========================================================== */}
      {/* BUILDING ON THE SUCCESS OF ICAI 2025                      */}
      {/* ========================================================== */}
      <section className="section bg-gray-50">
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
              The inaugural International Congress on Artificial Intelligence (ICAI 2025) successfully brought together
              researchers, students, IEEE volunteers, academics, industry professionals, and innovators from around the world.
              Building on this strong foundation, ICAI 2026 aims to deliver an even larger, more impactful international
              platform for knowledge sharing, collaboration, innovation, and responsible Artificial Intelligence.
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
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-3 p-3 bg-primary-100 rounded-full">{item.icon}</div>
                {item.value !== null ? (
                  <div className="text-3xl font-bold text-primary-700">
                    {item.value > 0 ? <AnimatedNumber target={item.value} /> : item.value}
                    {item.suffix}
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-primary-700" />
                )}
                <p className="text-sm text-gray-600 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* ICAI 2025 HIGHLIGHTS                                     */}
      {/* ========================================================== */}
      <section className="section bg-white">
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
              <motion.button
                key={idx}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-primary-50 rounded-lg p-4 flex items-center justify-center text-center cursor-pointer shadow-sm hover:bg-primary-100 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 transition-all duration-200"
              >
                <span className="text-primary-700 font-bold text-sm transition-colors duration-200 group-hover:text-primary-800">
                  {item}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* CTA – BE PART OF ICAI 2026                               */}
      {/* ========================================================== */}
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
              Following the success of ICAI 2025, the second edition will offer even greater opportunities for
              learning, collaboration, networking, innovation, and global engagement in Artificial Intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-primary-700 hover:bg-primary-100">Register Now</a>
              <a href={AMBASSADOR_REG_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-primary-700 hover:bg-primary-100">Become an Ambassador</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* MESSAGES FROM ADVISORS                                    */}
      {/* ========================================================== */}
      <section className="section bg-secondary-50 mb-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row justify-center border p-5 rounded-md shadow-md mb-4 hover:bg-primary-50 duration-500">
              <div className="w-full md:w-1/3 flex flex-col justify-center items-center space-y-2">
                <img
                  src="https://i.ibb.co.com/0jVMjqzz/download-1.png"
                  alt="Prof. Dr. A B M Shawkat Ali"
                  className="h-40 w-40 rounded-full"
                />
                <div className="text-center">
                  <h3>Prof. Dr. A B M Shawkat Ali</h3>
                  <p>Vice Chancellor, BUBT</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2>Message From the Vice Chancellor of BUBT</h2>
                <p className="text-justify font-medium text-gray-500 hover:text-gray-700 !duration-0">
                  I am delighted to welcome you to the{" "}
                  <span className="text-gray-700 font-semibold">
                    2nd International Congress on Artificial Intelligence (ICAI 2026)
                  </span>
                  , organized by the IEEE Systems Council BUBT Student Branch Chapter. This prestigious global platform
                  continues to unite experts, researchers, and learners to foster collaboration, share transformative
                  AI insights, and inspire innovation. I commend the organizers for their vision and dedication, and I
                  wish all participants a highly engaging, inspiring, and impactful experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-center border p-5 rounded-md shadow-md hover:bg-primary-50 duration-500">
              <div className="w-full md:w-1/3 flex flex-col justify-center items-center space-y-2">
                <img
                  src="https://i.ibb.co.com/wN2PthKc/chairman.jpg"
                  alt="Prof. Dr. Md. Ahsan Habib"
                  className="h-40 w-40 rounded-full"
                />
                <div className="text-center">
                  <h3>Prof. Dr. Md. Ahsan Habib</h3>
                  <p>Chairman, Dept. of CSE, BUBT</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2>Message From the Chairman, Dept. of CSE, BUBT</h2>
                <p className="text-justify font-medium text-gray-500 hover:text-gray-700 !duration-0">
                  I am pleased to welcome you to the{" "}
                  <span className="text-gray-700 font-semibold">
                    2nd International Congress on Artificial Intelligence (ICAI 2026)
                  </span>
                  , organized by the IEEE Systems Council BUBT Student Branch Chapter. This distinguished platform
                  offers a unique opportunity to explore cutting-edge AI innovations and connect with a global network
                  of experts. I applaud the organizers&apos; dedication and wish all participants an inspiring,
                  collaborative, and impactful experience over these three transformative days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* IEEE vTOOLS REGISTRATION                                  */}
      {/* ========================================================== */}
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
              ICAI 2026 will be officially listed on the IEEE vTools Events Platform upon approval. The official
              IEEE registration page will be published here once available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                disabled
                className="btn bg-gray-400 text-white cursor-not-allowed opacity-70"
              >
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* WHY ATTEND ICAI 2026                                    */}
      {/* ========================================================== */}
      <section className="section bg-secondary-50">
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
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full mr-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-secondary-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* PARTNERS SECTIONS                                         */}
      {/* ========================================================== */}
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
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">Organized By</h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="https://i.ibb.co.com/ZphFCFt5/balabubt.png"
                      alt="IEEE BUBT Student Branch"
                      className="h-36 md:h-40 w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Co-Organized By */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">Co-Organized By</h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="https://i.ibb.co.com/kgWCqpy9/bubtsbc.jpg"
                      alt="IEEE BUBT Student Branch Chapters"
                      className="h-36 md:h-40 w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Supported By */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">Supported By</h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="https://i.postimg.cc/8PhtFvTZ/bubt-logo.png"
                      alt="BUBT"
                      className="h-36 md:h-40 w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Technical Partners */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">Technical Partners</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Technical Partners contribute technical expertise, academic collaboration, and knowledge sharing to strengthen ICAI 2026.
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
                      <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <h4 className="font-semibold text-gray-700">{partner.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Youth Partners */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">Youth Partner</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Youth Partners contribute outreach, engagement, and student-driven collaboration to strengthen ICAI 2026.
              </p>
              <div className="flex justify-center">
                {youthPartners.map((partner) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-24 h-24 mb-3 flex items-center justify-center">
                      <a href={partner.link} target="_blank" rel="noreferrer">
                        <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                      </a>
                    </div>
                    <h4 className="font-semibold text-gray-700">{partner.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Collaboration Partners */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-6">Collaboration Partners</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                ICAI 2026 welcomes collaboration from IEEE Student Branches, IEEE Chapters, universities, research
                laboratories, startups, innovation hubs, professional societies, and industry organizations worldwide.
              </p>
              <div className="mb-10">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-300"
                  onClick={(e) => e.preventDefault()}
                >
                  <Users2 className="w-5 h-5" />
                  Pending
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;