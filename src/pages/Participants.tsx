import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import bothDayData from "../../data/both_day.json";
import day1Data from "../../data/day1.json";
import day2Data from "../../data/day2.json";

interface Participant {
  id: string;
  email: string;
  name: string;
  institute: string;
  country: string;
  ieeeMembership: string;
}

export default function Participants() {
  const [tabValue, setTabValue] = useState("both");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

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
                <span className="whitespace-nowrap">Get Your Certificate</span>
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
                      <span className="md:hidden font-semibold">Country: </span>
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
    </div>
  );
}
