import { motion } from "framer-motion";
import { useState } from "react";

// =============================================
// ICAI 2026 Schedule – All confirmed keynotes
// =============================================
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
      topic:
        "Artificial Intelligence at an Inflection Point: Recent Advances and the Research Frontiers Ahead",
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
    }
  ],
  day2: [
    {
      speaker: "Dr. Fida Hasan",
      topic:
        "Trust, the Weakest Link in AI: What Does It Mean for AI to Be 'Trustworthy'?",
      localTime: "09:00 PM – 09:20 PM",
      utcTime: "03:00 PM – 03:20 PM",
      duration: "20 minutes",
    },
  ],
  day3: [
    {
      speaker: "Dr. Tahera Hossain",
      topic:
        "Human Behavior Modeling for Human‑Centered AI: From Wearable Sensing to Real‑World Health and Wellbeing",
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
            <h1 className="text-4xl font-bold mb-4 text-white">
              Program Schedule
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              The official ICAI 2026 program schedule is now available. Check
              out the keynotes and technical sessions planned for each day.
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

        {/* Zoom & Passcode placeholder (update when details are available) */}
        <div className="flex justify-center gap-5 mt-5 mb-8">
          <div className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-md px-5 py-3 min-w-[140px]">
            <span className="font-semibold text-gray-600 text-sm">
              Zoom Details
            </span>
            <span className="text-gray-500 text-xs mt-1">Coming Soon</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-md px-5 py-3 min-w-[140px]">
            <span className="font-semibold text-gray-600 text-sm">
              Passcode
            </span>
            <span className="text-gray-500 text-xs mt-1">Coming Soon</span>
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
                (session, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">
                      {session.speaker || "To be announced"}
                    </td>
                    <td className="px-4 py-2">
                      {session.topic || "To be announced"}
                    </td>
                    <td className="px-4 py-2">{session.localTime}</td>
                    <td className="px-4 py-2">{session.utcTime}</td>
                    <td className="px-4 py-2">{session.duration}</td>
                  </motion.tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}