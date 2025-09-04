import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-05T20:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg')",
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
              International Congress on
              <br />
              <span className="text-primary-300">
                Artificial Intelligence (ICAI)
              </span>
            </h1>
            <p className="text-xl md:text-3xl mb-6 text-secondary-200 font-semibold">
              September 6-7, 2025
            </p>

            {/* For TSX uncomment the commented types below */}
            <div className="grid grid-flow-col gap-5 justify-center text-center auto-cols-max mb-3">
              <div className="flex flex-col p-2 bg-primary-600 rounded-box text-neutral-content">
                <span className="countdown font-mono text-3xl md:text-5xl">
                  <span
                    style={{ "--value": timeLeft?.days } as React.CSSProperties}
                    aria-live="polite"
                    aria-label={`${timeLeft?.days}`}
                  >
                    {timeLeft?.days}
                  </span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-primary-600 rounded-box text-neutral-content">
                <span className="countdown font-mono text-3xl md:text-5xl">
                  <span
                    style={
                      { "--value": timeLeft?.hours } as React.CSSProperties
                    }
                    aria-live="polite"
                    aria-label={`${timeLeft?.hours}`}
                  >
                    {timeLeft?.hours}
                  </span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-primary-600 rounded-box text-neutral-content">
                <span className="countdown font-mono text-3xl md:text-5xl">
                  <span
                    style={
                      { "--value": timeLeft?.minutes } as React.CSSProperties
                    }
                    aria-live="polite"
                    aria-label={`${timeLeft?.minutes}`}
                  >
                    {timeLeft?.minutes}
                  </span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-primary-600 rounded-box text-neutral-content">
                <span className="countdown font-mono text-3xl md:text-5xl">
                  <span
                    style={
                      { "--value": timeLeft?.seconds } as React.CSSProperties
                    }
                    aria-live="polite"
                    aria-label={`${timeLeft?.seconds}`}
                  >
                    {timeLeft?.seconds}
                  </span>
                </span>
                sec
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeYlWXatwaXOicPfDS_qWU5V7yzd6Mw3qfPtyAuZjsHPBnREw/viewform"
                target="_blank"
                className="btn btn-primary border-none"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <a href="#about" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About The Congress</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-secondary-700 mb-6 text-justify">
                The International Congress on Artificial Intelligence (ICAI)
                2025 is a flagship two-day virtual event organized by the IEEE
                Systems Council BUBT Student Branch Chapter and proudly
                supported by the Bangladesh University of Business and
                Technology (BUBT). This global platform will bring together
                students, academics, industry experts, and innovators to explore
                the latest breakthroughs, trends, and ethical considerations in
                Artificial Intelligence. Through expert talks, live Q&A
                sessions, and interactive discussions, the congress will cover
                diverse themes such as AI in healthcare, autonomous systems,
                security and privacy, education, emerging trends, and
                responsible AI. By fostering collaboration and
                knowledge-sharing, ICAI 2025 aims to inspire innovation,
                strengthen professional networks, and highlight the role of AI
                in shaping a better future. The event will be held online from 6
                to 7 September 2025, offering participants the opportunity to
                connect, learn, and contribute to the advancement of AI on a
                global scale.
              </p>
              <p className="text-lg text-secondary-700"></p>
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
              <p className="text-secondary-700">September 6-7 , 2025</p>
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
              <p className="text-secondary-700">
                Online - Join from anywhere in the world
              </p>
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
              <p className="text-secondary-700">
                Expected 500+ attendees from academia and industry
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* message from advisors */}

      <section className="section bg-secondary-50 mb-4">
        <div className="container">
          {/* <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
          >
            <h2 className="section-title">Message from Advisors</h2>
          </motion.div> */}

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
                  alt="person"
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
                    International Congress on Artificial Intelligence (ICAI)
                    2025
                  </span>
                  , organized by the IEEE Systems Council BUBT Student Branch
                  Chapter. This prestigious global platform unites experts,
                  researchers, and learners to foster collaboration, share
                  transformative AI insights, and inspire innovation. I commend
                  the organizers for their vision and dedication, and I wish all
                  participants a highly engaging, inspiring, and impactful
                  experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-center border p-5 rounded-md shadow-md hover:bg-primary-50 duration-500">
              <div className="w-full md:w-1/3 flex flex-col justify-center items-center space-y-2">
                <img
                  src="https://i.ibb.co.com/NghXzQCr/download-2.png"
                  alt="person"
                  className="h-40 w-40 rounded-full"
                />
                <div className="text-center">
                  <h3>Md. Saifur Rahman</h3>
                  <p>Chairman, Dept. of CSE, BUBT</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2>Message From the Chairman, Dept. of CSE, BUBT</h2>
                <p className="text-justify font-medium text-gray-500 hover:text-gray-700 !duration-0">
                  I am pleased to welcome you to the{" "}
                  <span className="text-gray-700 font-semibold">
                    International Congress on Artificial Intelligence (ICAI)
                    2025
                  </span>{" "}
                  , organized by the IEEE Systems Council BUBT Student Branch
                  Chapter. This distinguished platform offers a unique
                  opportunity to explore cutting-edge AI innovations and connect
                  with a global network of experts. I applaud the
                  organizers&apos; dedication and wish all participants an
                  inspiring, collaborative, and impactful experience over these
                  two transformative days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              ICAI 2025 is officially listed on the IEEE vTools Events Platform, ensuring authenticity and global recognition within the IEEE community. Organized by IEEE Systems Council BUBT Student Branch Chapter (OU Code: SBC03252H).
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://events.vtools.ieee.org/m/499358"
                target="_blank"
                className="btn bg-[#F8961E] text-white hover:bg-[#c4a416]"
              >
                vTools Event Report
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Congress Highlights</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Keynote Speakers</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Distinguished speakers from leading universities and tech
                companies sharing insights on emerging technologies.
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Workshops</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Interactive workshops on cutting-edge technologies and
                methodologies led by industry experts.
              </p>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Panel Discussions</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Engaging discussions featuring experts debating current trends,
                challenges, and future directions in technology and research.
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Innovation Showcase</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Presentations and demonstrations of groundbreaking research,
                prototypes, and technological advancements.
              </p>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Career Opportunities</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Insights into career paths, job market trends, and recruitment
                opportunities from top companies and research institutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Networking</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Opportunities to connect with researchers, academics, and
                industry professionals from around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Join ICAI 2025?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
              Don&apos;t miss this opportunity to be part of the leading
              congress in AI. Register now to secure your spot!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeYlWXatwaXOicPfDS_qWU5V7yzd6Mw3qfPtyAuZjsHPBnREw/viewform"
                target="_blank"
                className="btn bg-white text-primary-700 hover:bg-primary-100"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* organized by & supported by */}

      {/* Organizers & Supporters Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Organizers */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">
                Organized By
              </h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                {[
                  {
                    logo: "https://ieeecsbdc.org/assets/logo-fd1b8824.png",
                  },
                ].map((org, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={"https://i.ibb.co.com/d0vnyxmH/bubt.png"}
                        alt="Organizer logo"
                        className="h-36 md:h-40 w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* supported by */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">
                Supported By
              </h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                {[
                  {
                    logo: "https://i.postimg.cc/8PhtFvTZ/bubt-logo.png",
                  },
                ].map((org, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={org?.logo}
                        alt="Organizer logo"
                        className="h-36 md:h-40 w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Supporters */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">
                Our Collaboration Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto">
                {[
                  {
                    logo: "https://i.postimg.cc/W33V9XTs/1-CS-Morsalin-Ahmed-Patwary.png",
                  },
                  {
                    logo: "https://i.postimg.cc/3JD85SpR/797-IEEE-AUST-STUDENT-BRANCH.jpg",
                  },
                  {
                    logo: "https://i.postimg.cc/L5GmgLd2/Asset-5-4x-Naimul-Haque.png",
                  },
                  {
                    logo: "https://i.postimg.cc/sg7gS6D8/FB-IMG-1755683384861-Zinat-Azim.jpg",
                  },
                  {
                    logo: "https://i.postimg.cc/Y2YrvkQY/386342557-122107142024057422-7179772533766904515-n.jpg",
                  },
                  {
                    logo: "https://i.postimg.cc/hjyDgNpJ/ieee-cs-jnu-sbc-Md-Abu-Saeed.png",
                  },
                  {
                    logo: "https://i.postimg.cc/tJp3QZvR/IEEE-DIU-SB-Computer-Society-Chapter-logo-AKIB-MAHMUD.png",
                  },
                  {
                    logo: "https://i.postimg.cc/Njqgg67x/IEEE-IAS-K-M-RUBAIYAT-HASAN-221-33-1767.png",
                  },
                  {
                    logo: "https://i.postimg.cc/9fBXgD9Y/IEEE-SB-GUB-Faysal-Hossain-Tomal.png",
                  },
                  {
                    logo: "https://i.postimg.cc/k4XJ07F3/IEEE-UAP-SB-Official-Md-Nahedul-Islam.jpg",
                  },
                  {
                    logo: "https://i.postimg.cc/T1KRPQ4t/ieee-diu-logo-new-Jose-C-Dishman.png",
                  },
                  {
                    logo: "https://i.postimg.cc/1zS5KG8z/inbound882344196217121997-Susmoy-Barua.jpg",
                  },
                  {
                    logo: "https://i.postimg.cc/Gtq7fWwz/367001074-718013033674426-1996992789129344167-n-1.jpg",
                  },
                  {
                    logo: "https://i.postimg.cc/Dz4mPGsj/IEEE-CS-UIU-color-Provat-Kundu.png",
                  },
                  {
                    logo: "https://i.postimg.cc/1txXCzr9/Whats-App-Image-2025-09-02-at-4-38-34-PM.jpg",
                  },
                  {
                    logo: "https://i.postimg.cc/rwPK4jdR/Whats-App-Image-2025-09-02-at-4-37-52-PM.jpg",
                  },
                ].map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group w-full p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={partner.logo}
                        alt="Supporter logo"
                        className="h-32 w-auto mx-auto object-contain transition-all duration-300 transform group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
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
