import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const scheduleData = {
  day1: [
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Prof. Ashad Kabir",
      localTime: "08:10 PM - 08:30 PM",
      utcTime: "02:10 PM - 02:30 PM",
      duration: "20 minutes",
      topic: "Applications of Artificial Intelligence and Smartphone Apps in Health and Agriculture: Recent Advancements and Opportunities",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "",
      localTime: "08:35 PM - 08:55 PM",
      utcTime: "02:35 PM - 02:55 PM",
      duration: "20 minutes",
      topic: "",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Dr. Jia Uddin",
      localTime: "09:00 PM - 09:20 PM",
      utcTime: "03:00 PM - 03:20 PM",
      duration: "20 minutes",
      topic: "Industry 4.0: AI for Smart Factory",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Md. Fahim Hossain",
      localTime: "09:25 PM - 09:45 PM",
      utcTime: "03:25 PM - 03:45 PM",
      duration: "20 minutes",
      topic: "AI and Emerging Tech for Climate Action.",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Valentin Golovtchenko",
      localTime: "09:50 PM - 10:10 PM",
      utcTime: "03:50 PM - 04:10 PM",
      duration: "20 minutes",
      topic: "AI and Emerging Tech for Climate Action.",
    },
  ],
  day2: [
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "",
      localTime: "08:10 PM - 08:30 PM",
      utcTime: "02:10 PM - 02:30 PM",
      duration: "20 minutes",
      topic: "",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Md Imdadul Islam",
      localTime: "08:35 PM - 08:55 PM",
      utcTime: "02:35 PM - 02:55 PM",
      duration: "20 minutes",
      topic: "Leveraging AI for Professional Growth",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Dr. Shashikant Patil",
      localTime: "09:00 PM - 09:20 PM",
      utcTime: "03:00 PM - 03:20 PM",
      duration: "20 minutes",
      topic: "Gen AI and Agentic AI",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Dr. Md. Zulfiker Mahmud",
      localTime: "09:25 PM - 09:45 PM",
      utcTime: "03:25 PM - 03:45 PM",
      duration: "20 minutes",
      topic: "Genesis System: A Dual-Model AI Framework for Reverse Engineering Microstrip Patch Antennas",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Dr. Mohammad Firoz Mridha",
      localTime: "09:50 PM - 10:10 PM",
      utcTime: "03:50 PM - 04:10 PM",
      duration: "20 minutes",
      topic: "AI and Research Ethics: Opportunities and Responsibilities for Students",
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
              Check out the schedule for ICAI 2025 below.
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
        <div className="flex mb-6 border-b">
          <button
            className={`py-2 px-6 font-medium ${activeTab === "day1" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("day1")}
          >
            Day 1 (6 September 2025)
          </button>
          <button
            className={`py-2 px-6 font-medium ${activeTab === "day2" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("day2")}
          >
            Day 2 (7 September 2025)
          </button>
        </div>

        <div>
          {activeTab === "day1" ? <div className="flex gap-5">
            <Link to={"https://bdren.zoom.us/j/8801818241?pwd=SmZkFTHvRRc5mRsx2LV3zOuoxzkr3G.1&omn=93048135218"} className="bg-[#2C4EF7] px-5 py-1.5 rounded-md text-white font-semibold ml-5">Zoom Link</Link>
            <p className="font-semibold border-2 border-[#2C4EF7] rounded-md px-4 py-1.5">Passcode: icai</p>
          </div>:<div className="flex gap-5">
            <Link to={"https://bdren.zoom.us/j/8801818241?pwd=SmZkFTHvRRc5mRsx2LV3zOuoxzkr3G.1&omn=96640207975"} className="bg-[#2C4EF7] px-5 py-1.5 rounded-md text-white font-semibold ml-5">Zoom Link</Link>
            <p className="font-semibold border-2 border-[#2C4EF7] rounded-md px-4 py-1.5">Passcode: icai</p>
          </div>}
        </div>

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
                      {session?.speaker || "To be announced"}
                    </td>
                    <td className="px-4 py-2">
                      {session?.topic || "To be announced"}
                    </td>
                    <td className="px-4 py-2">{session.localTime}</td>
                    <td className="px-4 py-2">{session.utcTime}</td>
                    <td className="px-4 py-2">{session.duration}</td>
                  </motion.tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
