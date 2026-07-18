import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import speakersData from "../../data/speakers2026.json";

const speakerMap = new Map<string, (typeof speakersData)[number]>();
speakersData.forEach((s) => {
  speakerMap.set(s.name, s);
});

const scheduleData = {
  day1: [
    {
      speaker: "Salheen Bakhet",
      topic: "Artificial Intelligence: A Global Perspective",
      localTime: "08:00 PM – 08:20 PM",
      utcTime: "02:00 PM – 02:20 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Dr. Md. Jakir Hossen",
      topic: "A Modified Adaptive Neuro-Fuzzy Inference Engine and Its Applications",
      localTime: "08:30 PM – 08:50 PM",
      utcTime: "02:30 PM – 02:50 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Muhammad Mostafa Monowar",
      topic: "Artificial Intelligence at an Inflection Point: Recent Advances and the Research Frontiers Ahead",
      localTime: "09:00 PM – 09:20 PM",
      utcTime: "03:00 PM – 03:20 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Dr. Tangina Sultana",
      topic: "Shaping the Future of Education: AI, Innovation, and Emerging Technologies",
      localTime: "09:30 PM – 09:50 PM",
      utcTime: "03:30 PM – 03:50 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Prof. Dr. Rahamatullah Khondoker",
      topic: "AI-based Solutions for Real World Cyber Security Challenges",
      localTime: "10:00 PM – 10:20 PM",
      utcTime: "04:00 PM – 04:20 PM",
      duration: "20 minutes",
    },
  ],
  day2: [
    {
      speaker: "Md Atiqur Rahman Ahad",
      topic: "AI & Healthcare: Few Examples",
      localTime: "08:00 PM – 08:20 PM",
      utcTime: "02:00 PM – 02:20 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Prof. Dr. Mohammad Shamsul Arefin",
      topic: "Green AI for Sustainable Education: Building Intelligent, Inclusive, and Energy-Efficient Learning Ecosystems",
      localTime: "08:30 PM – 08:50 PM",
      utcTime: "02:30 PM – 02:50 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Dr. Fida Hasan",
      topic: "Trust, the Weakest Link in AI: What Does It Mean for AI to Be 'Trustworthy'?",
      localTime: "09:00 PM – 09:20 PM",
      utcTime: "03:00 PM – 03:20 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Rashed Mazumder, Ph.D",
      topic: "The Future of Cybersecurity: Explainable AI and Federated Learning for Intelligent Threat Detection",
      localTime: "09:30 PM – 09:50 PM",
      utcTime: "03:30 PM – 03:50 PM",
      duration: "20 minutes",
    },
  ],
  day3: [
    {
      speaker: "Dr. Tahera Hossain",
      topic: "Human Behavior Modeling for Human‑Centered AI: From Wearable Sensing to Real‑World Health and Wellbeing",
      localTime: "08:00 PM – 08:20 PM",
      utcTime: "02:00 PM – 02:20 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Dr. Shashikant Patil",
      topic: "Agentic AI for Computer Networks",
      localTime: "08:30 PM – 08:50 PM",
      utcTime: "02:30 PM – 02:50 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Dr. Mohammad Polash",
      topic: "AI and Innovation",
      localTime: "09:00 PM – 09:20 PM",
      utcTime: "03:00 PM – 03:20 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Minhaz-Us-Salakeen Fahme",
      topic: "The Workforce of 2030: AI Analytics, Productivity Sweet Spots, and the End of the Eight-Hour Day",
      localTime: "09:30 PM – 09:50 PM",
      utcTime: "03:30 PM – 03:50 PM",
      duration: "20 minutes",
    },
    {
      speaker: "Ajmal Hinas",
      topic: "AI-First Software Engineering: Rethinking How We Build",
      localTime: "10:00 PM – 10:20 PM",
      utcTime: "04:00 PM – 04:20 PM",
      duration: "20 minutes",
    },
  ],
};

export default function Schedule() {
  const [activeTab, setActiveTab] = useState("day1");

  // Zoom details – same for all days
  const zoomLink = "https://bdren.zoom.us/j/95062404702?pwd=tkay2GbiKLWHfcPGjtpHLygshaUeuQ.1";
  const meetingId = "950 6240 4702";
  const passcode = "icai";

  return (
    <div className="pt-20">
      <section className="bg-primary-700 py-16 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 text-white">Program Schedule</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              The official ICAI 2026 program schedule is now available. Join us on Zoom for all sessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Time zone info */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <p className="text-center text-blue-800">
          <span className="font-semibold">Local Time:</span> Bangladesh (UTC+6)
          |<span className="font-semibold ml-2">International Time:</span> UTC
        </p>
      </div>

      <section className="max-w-6xl mx-auto py-6">
        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            className={`py-2 px-6 font-medium ${activeTab === "day1" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("day1")}
          >
            Day 1 (18 July 2026)
          </button>
          <button
            className={`py-2 px-6 font-medium ${activeTab === "day2" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("day2")}
          >
            Day 2 (19 July 2026)
          </button>
          <button
            className={`py-2 px-6 font-medium ${activeTab === "day3" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("day3")}
          >
            Day 3 (20 July 2026)
          </button>
        </div>

        {/* Zoom Details */}
        <div className="flex flex-col items-center gap-4 mt-5 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Join Zoom Meeting
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 bg-gray-100 rounded-lg px-6 py-3">
            <span><strong>Meeting ID:</strong> {meetingId}</span>
            <span className="border-l border-gray-300 pl-4"><strong>Passcode:</strong> {passcode}</span>
          </div>
        </div>

        {/* Schedule table */}
        <div className="container mx-auto px-4 overflow-x-auto mt-5">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">Speaker</th>
                <th className="px-4 py-2">Topic</th>
                <th className="px-4 py-2">BD Time</th>
                <th className="px-4 py-2">UTC Time</th>
                <th className="px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[activeTab as keyof typeof scheduleData].map(
                (session, index) => {
                  const speaker = speakerMap.get(session.speaker);
                  return (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-3">
                          {speaker?.image ? (
                            <img
                              src={speaker.image}
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
                          {speaker ? (
                            <Link
                              to={`/speakers/${speaker.id}`}
                              className="text-primary-700 hover:underline font-medium"
                            >
                              {session.speaker}
                            </Link>
                          ) : (
                            <span className="text-gray-800">
                              {session.speaker || "To be announced"}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-2 italic">{session.topic || "To be announced"}</td>
                      <td className="px-4 py-2">{session.localTime}</td>
                      <td className="px-4 py-2">{session.utcTime}</td>
                      <td className="px-4 py-2">{session.duration}</td>
                    </motion.tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}