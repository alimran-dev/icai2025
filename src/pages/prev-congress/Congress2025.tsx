import speakersImage from "../../assets/pastCongress/2025/speakers2025.jpg";
import { CommitteeMember, ICommittee } from "../interfaces/Committe";
import committee2025 from "../../assets/pastCongress/2025/committee2025.json";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import bothDayData from "../../assets/pastCongress/2025/both_day.json";
import day1Data from "../../assets/pastCongress/2025/day1.json";
import day2Data from "../../assets/pastCongress/2025/day2.json";
import ambassadorsData from "../../assets/pastCongress/2025/ambassadors.json";
import { Participant } from "../interfaces/Participant";
import { Ambassador } from "../interfaces/Ambassadors";
const typedCommittee: ICommittee = committee2025;

const scheduleData = {
  day1: [
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Prof. Ashad Kabir",
      localTime: "08:10 PM - 08:30 PM",
      utcTime: "02:10 PM - 02:30 PM",
      duration: "20 minutes",
      topic:
        "Applications of Artificial Intelligence and Smartphone Apps in Health and Agriculture: Recent Advancements and Opportunities",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Dr. Gaurav Kumar Bharti",
      localTime: "08:35 PM - 08:55 PM",
      utcTime: "02:35 PM - 02:55 PM",
      duration: "20 minutes",
      topic: "AI Assisted FBG Optical Sensors for Healthcare Applications",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Dr. Mohammad Shamsul Arefin",
      localTime: "09:00 PM - 09:20 PM",
      utcTime: "03:00 PM - 03:20 PM",
      duration: "20 minutes",
      topic: "Ethical Use of AI in Academia: Challanges and Opportunities",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Md Sohanur Rahman",
      localTime: "09:25 PM - 09:45 PM",
      utcTime: "03:25 PM - 03:45 PM",
      duration: "20 minutes",
      topic:
        "Innovating the Future with Big Data: Bridging Research and Industry",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Md. Fahim Hossain",
      localTime: "09:50 PM - 10:10 PM",
      utcTime: "03:50 PM - 04:10 PM",
      duration: "20 minutes",
      topic: "AI and Emerging Tech for Climate Action.",
    },
  ],
  day2: [
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Prof. Dr. A B M Shawkat Ali",
      localTime: "08:10 PM - 08:30 PM",
      utcTime: "02:10 PM - 02:30 PM",
      duration: "20 minutes",
      topic: "AI in Practice.",
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
      topic:
        "Genesis System: A Dual-Model AI Framework for Reverse Engineering Microstrip Patch Antennas",
    },
    {
      // image: "/speakers/zahidul.jpg",
      speaker: "Dr. Mohammad Firoz Mridha",
      localTime: "09:50 PM - 10:10 PM",
      utcTime: "03:50 PM - 04:10 PM",
      duration: "20 minutes",
      topic:
        "AI and Research Ethics: Opportunities and Responsibilities for Students",
    },
  ],
};

const Congress2025 = () => {
  const [activeTab, setActiveTab] = useState("day1");
  const [tabValue, setTabValue] = useState("both");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTermAmb, setSearchTermAmb] = useState("");
  const [debouncedSearchAmb, setDebouncedSearchAmb] = useState("");
  const [currentPageAmb, setCurrentPageAmb] = useState(1);
  const itemsPerPage = 5;

  // Get current data based on tab selection
  const currentData = useMemo(() => {
    switch (tabValue) {
      case "day1":
        return day1Data;
      case "day2":
        return day2Data;
      default:
        return bothDayData;
    }
  }, [tabValue]);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset page when search or tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, tabValue]);

  // Memoized filtered participants
  const filteredParticipants = useMemo(() => {
    const searchTermLower = debouncedSearch.toLowerCase().trim();

    if (!searchTermLower) return currentData;

    return currentData.filter((participant: Participant) => {
      const nameMatch = participant.name
        .toLowerCase()
        .includes(searchTermLower);
      const instituteMatch = participant.institute
        .toLowerCase()
        .includes(searchTermLower);
      const idMatch = participant.id.toLowerCase().includes(searchTermLower);
      const countryMatch = participant.country
        .toLowerCase()
        .includes(searchTermLower);

      return nameMatch || instituteMatch || idMatch || countryMatch;
    });
  }, [debouncedSearch, currentData]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentParticipants = filteredParticipants.slice(startIndex, endIndex);

  // Get certificate link based on tab selection
  const certificateLink = useMemo(() => {
    switch (tabValue) {
      case "day1":
      case "day2":
        return "https://drive.google.com/drive/folders/1pWAcmQWQsSUtm8fhANvxy1sFtnuEBlT1";
      case "both":
      default:
        return "https://drive.google.com/drive/folders/1xswBrERIllg8EyM4PctIoxhc5Hcy2yzX";
    }
  }, [tabValue]);

  // ambassadors
  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchAmb(searchTermAmb);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTermAmb]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPageAmb(1);
  }, [debouncedSearchAmb]);

  // Memoized filtered ambassadors
  const filteredAmbassadors = useMemo(() => {
    const searchTermLower = debouncedSearchAmb.toLowerCase().trim();

    if (!searchTermLower) return ambassadorsData;

    return ambassadorsData.filter((ambassador: Ambassador) => {
      const nameMatch = ambassador.name.toLowerCase().includes(searchTermLower);
      const universityMatch = ambassador.university
        .toLowerCase()
        .includes(searchTermLower);
      const idMatch = ambassador.id.toLowerCase().includes(searchTermLower);

      return nameMatch || universityMatch || idMatch;
    });
  }, [debouncedSearchAmb]);

  // Calculate pagination
  const totalPagesAmb = Math.ceil(filteredAmbassadors.length / itemsPerPage);
  const startIndexAmb = (currentPageAmb - 1) * itemsPerPage;
  const endIndexAmb = startIndexAmb + itemsPerPage;
  const currentAmbassadors = filteredAmbassadors.slice(startIndexAmb, endIndexAmb);
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide leading-tight animate-fade-in">
              1st International Congress on Artificial Intelligence (ICAI)
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-white/90 tracking-wider mb-4 animate-fade-in-delayed">
              September 6-7, 2025
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>
      {/* Congress Banner */}
      <div className="mb-16 container mx-auto px-4 pt-12">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src={speakersImage}
            alt="ICRCS 2024 Congress Banner"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Organizing committee */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Congress Committee
            </h2>

            <div
              className="rounded-lg border border-gray-200 bg-white shadow overflow-x-auto"
              style={{ width: "100%" }}
            >
              <div
                className="grid gap-4 border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-medium text-gray-500 items-center"
                style={{
                  gridTemplateColumns: "1fr 1fr 1fr 60px",
                  minWidth: "650px",
                }}
              >
                <div>Committee</div>
                <div>Name</div>
                <div>Role</div>
                <div>Image</div>
              </div>

              <ul className="divide-y divide-gray-200 w-full">
                {Object.entries(typedCommittee).flatMap(
                  ([committeeType, members]) =>
                    members.map((member: CommitteeMember, index: number) => (
                      <li
                        key={`${committeeType}-${index}`}
                        className="hover:bg-gray-50 w-full"
                        style={{ minWidth: "650px" }}
                      >
                        <div
                          className="grid gap-4 px-6 py-4 text-sm items-center"
                          style={{
                            gridTemplateColumns: "1fr 1fr 1fr 60px",
                          }}
                        >
                          <div className="font-medium text-gray-900 break-words leading-relaxed">
                            {committeeType}
                          </div>
                          <div className="font-medium text-gray-900 break-words">
                            {member.name}
                          </div>
                          <div className="text-gray-900 break-words">
                            {member.role}
                          </div>
                          <div className="flex justify-center">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                          </div>
                        </div>
                      </li>
                    )),
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <p className="text-center text-blue-800">
            <span className="font-semibold">Local Time:</span> Bangladesh
            (UTC+6) |
            <span className="font-semibold ml-2">International Time:</span> UTC
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
            {activeTab === "day1" ? (
              <div className="flex gap-5">
                <Link
                  to={
                    "https://bdren.zoom.us/j/8801818241?pwd=SmZkFTHvRRc5mRsx2LV3zOuoxzkr3G.1&omn=93048135218"
                  }
                  className="bg-[#2C4EF7] px-5 py-1.5 rounded-md text-white font-semibold ml-5"
                >
                  Zoom Link
                </Link>
                <p className="font-semibold border-2 border-[#2C4EF7] rounded-md px-4 py-1.5">
                  Passcode: icai
                </p>
              </div>
            ) : (
              <div className="flex gap-5">
                <Link
                  to={
                    "https://bdren.zoom.us/j/8801818241?pwd=SmZkFTHvRRc5mRsx2LV3zOuoxzkr3G.1&omn=96640207975"
                  }
                  className="bg-[#2C4EF7] px-5 py-1.5 rounded-md text-white font-semibold ml-5"
                >
                  Zoom Link
                </Link>
                <p className="font-semibold border-2 border-[#2C4EF7] rounded-md px-4 py-1.5">
                  Passcode: icai
                </p>
              </div>
            )}
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

        {/* Participants */}
        <section className="bg-primary-700 py-16 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="mb-4 text-4xl font-bold text-white">
                Our Participants
              </h1>

              {/* Certificate Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 sm:mb-8 px-4"
              >
                <a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 md:px-8 sm:py-3 md:py-4 bg-white text-primary-700 font-bold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-primary-300/50 hover:scale-105 transition-all duration-300 group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="whitespace-nowrap">
                    Get Your Certificate
                  </span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* Tab Section */}
              <div className="flex justify-center mb-6 sm:mb-8 px-4">
                <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 p-1 sm:p-1.5 bg-white bg-opacity-95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-white border-opacity-40 w-full sm:w-auto max-w-md sm:max-w-none">
                  <button
                    onClick={() => setTabValue("both")}
                    className={`relative px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ease-in-out ${
                      tabValue === "both"
                        ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/50 scale-105"
                        : "text-gray-700 hover:text-primary-600 hover:bg-primary-50 hover:scale-102"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="whitespace-nowrap">Both Days</span>
                    </span>
                  </button>
                  <button
                    onClick={() => setTabValue("day1")}
                    className={`relative px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ease-in-out ${
                      tabValue === "day1"
                        ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/50 scale-105"
                        : "text-gray-700 hover:text-primary-600 hover:bg-primary-50 hover:scale-102"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      <span className="whitespace-nowrap">Day 1</span>
                    </span>
                  </button>
                  <button
                    onClick={() => setTabValue("day2")}
                    className={`relative px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ease-in-out ${
                      tabValue === "day2"
                        ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/50 scale-105"
                        : "text-gray-700 hover:text-primary-600 hover:bg-primary-50 hover:scale-102"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                      <span className="whitespace-nowrap">Day 2</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Search Section */}
              <div className="mx-auto mt-8 max-w-2xl">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name, ID, institute, or country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-white bg-opacity-90 py-3 pl-10 pr-10 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {filteredParticipants.length === 0 ? (
                  <p className="mt-4 text-gray-200">
                    No participants found matching your search criteria.
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-gray-200">
                    Found {filteredParticipants.length} participant
                    {filteredParticipants.length !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-6"></div>

            <div className="rounded-lg border border-gray-200 bg-white shadow overflow-x-auto">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-medium text-gray-500 min-w-max">
                <div className="sm:col-span-2 hidden md:block">ID</div>
                <div className="sm:col-span-3 hidden md:block">Name</div>
                <div className="sm:col-span-5 hidden md:block">Institute</div>
                <div className="sm:col-span-2 hidden md:block">Country</div>
              </div>

              <ul className="divide-y divide-gray-200">
                {currentParticipants.map((participant: Participant) => (
                  <li key={participant.id} className="hover:bg-gray-50">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-6 py-4 text-sm min-w-max">
                      <div className="sm:col-span-2 font-medium text-gray-900">
                        <span className="md:hidden font-semibold">ID: </span>
                        {participant.id}
                      </div>
                      <div className="sm:col-span-3 text-gray-900">
                        <span className="md:hidden font-semibold">Name: </span>
                        {participant.name}
                      </div>
                      <div className="sm:col-span-5 text-gray-500">
                        <span className="md:hidden font-semibold">
                          Institute:{" "}
                        </span>
                        {participant.institute}
                      </div>
                      <div className="sm:col-span-2 text-gray-500">
                        <span className="md:hidden font-semibold">
                          Country:{" "}
                        </span>
                        {participant.country}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-50 border border-gray-300"
              >
                Previous
              </button>
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-50 border border-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Ambassadors */}
        <section className="bg-primary-700 py-16 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="mb-4 text-4xl font-bold text-white">
                Our Ambassadors
              </h1>

              {/* Certificate Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 sm:mb-8 px-4"
              >
                <a
                  href="https://drive.google.com/drive/folders/1_qQyDeFwnADrSH_ZvKxiDscR9M-3VICX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 md:px-8 sm:py-3 md:py-4 bg-white text-primary-700 font-bold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-primary-300/50 hover:scale-105 transition-all duration-300 group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="whitespace-nowrap">
                    Get Your Certificate
                  </span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* Search Section */}
              <div className="mx-auto mt-8 max-w-2xl">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name, ID, or university..."
                    value={searchTermAmb}
                    onChange={(e) => setSearchTermAmb(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-white bg-opacity-90 py-3 pl-10 pr-10 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTermAmb("")}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {filteredAmbassadors.length === 0 ? (
                  <p className="mt-4 text-gray-200">
                    No ambassadors found matching your search criteria.
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-gray-200">
                    Found {filteredAmbassadors.length} ambassador
                    {filteredAmbassadors.length !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-6"></div>

            <div className="rounded-lg border border-gray-200 bg-white shadow">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-medium text-gray-500">
                <div className="sm:col-span-2 hidden md:block">ID</div>
                <div className="sm:col-span-4 hidden md:block">Name</div>
                <div className="sm:col-span-6 hidden md:block">University</div>
              </div>

              <ul className="divide-y divide-gray-200">
                {currentAmbassadors.map((ambassador: Ambassador) => (
                  <li key={ambassador.id} className="hover:bg-gray-50">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-6 py-4 text-sm">
                      <div className="sm:col-span-2 font-medium text-gray-900">
                        {ambassador.id}
                      </div>
                      <div className="sm:col-span-4 text-gray-900">
                        {ambassador.name}
                      </div>
                      <div className="sm:col-span-6 text-gray-500">
                        {ambassador.university}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() =>
                  setCurrentPageAmb((prev) => Math.max(prev - 1, 1))
                }
                disabled={currentPageAmb === 1}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-700">
                Page {currentPageAmb} of {totalPagesAmb}
              </span>
              <button
                onClick={() =>
                  setCurrentPageAmb((prev) => Math.min(prev + 1, totalPagesAmb))
                }
                disabled={currentPageAmb === totalPagesAmb}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Congress2025;
