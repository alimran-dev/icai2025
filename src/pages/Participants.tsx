import { motion } from "framer-motion";
// import { useState, useEffect, useMemo } from "react";   // disabled for ICAI 2026
// import bothDayData from "../../data/both_day.json";    // disabled for ICAI 2026
// import day1Data from "../../data/day1.json";          // disabled for ICAI 2026
// import day2Data from "../../data/day2.json";          // disabled for ICAI 2026

// ==========================================================================
// ICAI 2026 Participants – Coming Soon
//
// The official participant list is not yet available. The previous data
// files and UI components are preserved below as comments. Uncomment and
// reintegrate them once registration opens and data is collected.
// ==========================================================================

export default function Participants() {
  // ---------- ICAI 2025 state & logic (commented out) ----------
  // const [tabValue, setTabValue] = useState("both");
  // const [searchTerm, setSearchTerm] = useState("");
  // const [debouncedSearch, setDebouncedSearch] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 50;
  //
  // const currentData = useMemo(() => { ... }, [tabValue]);
  // ... all previous logic
  // ---------------------------------------------------------------

  return (
    <div className="pt-20">
      {/* Header – identical gradient and structure */}
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
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              The list of registered participants for ICAI 2026 will be displayed here once registration opens. Stay tuned!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placeholder content – replaces the original tabs, search, and table */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-primary-100 p-10 text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <svg
                className="w-16 h-16 text-primary-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Participant registration for ICAI 2026 has not yet opened. Once available, you'll find the complete list of attendees, searchable by name, ID, institute, and country.
            </p>

            {/* Optional placeholder items */}
            <div className="space-y-3 text-left max-w-sm mx-auto">
              {[
                "Day 1 Attendees",
                "Day 2 Attendees",
                "Both Days Participants",
                "Certificates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-2"
                >
                  <span className="text-gray-700 font-medium">{item}</span>
                  <span className="text-xs text-primary-500 bg-primary-50 px-2 py-0.5 rounded-full font-medium">
                    Pending
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-full shadow hover:bg-primary-700 transition-colors duration-200"
                onClick={(e) => e.preventDefault()}
              >
                Stay Tuned
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        =======================================================
        TODO: ICAI 2026 Participant List
        – Uncomment and restore the original state, effects,
          useMemo, and the UI (tabs, search, table, pagination)
          when the registration data is ready.
        – Update certificate links accordingly.
        – Keep the existing data files in place.
        =======================================================
      */}
    </div>
  );
}