import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import participantsData from "../../data/participants2026.json";

interface Participant {
  id: string;
  email: string;
  name: string;
  institute: string;
  country: string;
}

export default function Participants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset page on search
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  // Filter participants
  const filteredParticipants = useMemo(() => {
    const term = debouncedSearch.toLowerCase().trim();
    if (!term) return participantsData as Participant[];
    return (participantsData as Participant[]).filter((p) => {
      return (
        p.name.toLowerCase().includes(term) ||
        p.id.toLowerCase().includes(term) ||
        p.institute.toLowerCase().includes(term) ||
        p.country.toLowerCase().includes(term)
      );
    });
  }, [debouncedSearch]);

  // Pagination
  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentParticipants = filteredParticipants.slice(startIndex, endIndex);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-700 py-16 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-white">Our Participants</h1>

            {/* Search Section */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
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
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
                <p className="mt-4 text-gray-200">No participants found matching your search criteria.</p>
              ) : (
                <p className="mt-2 text-sm text-gray-200">
                  Found {filteredParticipants.length} participant{filteredParticipants.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Participants Table */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
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
                      <span className="md:hidden font-semibold">Institute: </span>
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

          {/* Pagination */}
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
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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