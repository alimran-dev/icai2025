import { motion } from "framer-motion";
// import { useState, useEffect, useMemo } from "react";   // disabled for ICAI 2026
// import ambassadorsData from "../../data/ambassadors.json"; // disabled for ICAI 2026

// ==========================================================================
// ICAI 2026 Ambassadors – Coming Soon
//
// The ambassador list for the upcoming congress has not yet been released.
// The original data file and UI components have been preserved below as
// comments. Uncomment them once the ambassador program is finalised.
// ==========================================================================

export default function Ambassadors() {
  // ---------- ICAI 2025 state & logic (commented out) ----------
  // const [searchTerm, setSearchTerm] = useState("");
  // const [debouncedSearch, setDebouncedSearch] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 50;
  //
  // useEffect(() => { ... }, [searchTerm]);
  // useEffect(() => { ... }, [debouncedSearch]);
  // const filteredAmbassadors = useMemo(() => { ... }, [debouncedSearch]);
  // ... all previous logic
  // ---------------------------------------------------------------

  return (
    <div className="pt-20">
      {/* Header – identical style, subtitle updated */}
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
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              The ambassador team for ICAI 2026 will be announced soon. Please check back later for updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placeholder content – replaces the original search, table, pagination */}
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
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We are recruiting a diverse group of student ambassadors to represent ICAI 2026 worldwide. The full list of ambassadors will be published once the selection process is complete.
            </p>

            {/* Placeholder items */}
            <div className="space-y-3 text-left max-w-sm mx-auto">
              {[
                "Ambassador Search",
                "Certificate Download",
                "University Representation",
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
        TODO: ICAI 2026 Ambassadors
        – Uncomment and restore the original state, effects,
          useMemo, and UI (search, table, pagination) when
          the ambassador data becomes available.
        – Update the certificate link if needed.
        – Keep the existing JSON data file in place.
        =======================================================
      */}
    </div>
  );
}