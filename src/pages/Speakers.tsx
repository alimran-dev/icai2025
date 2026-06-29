import React from "react";
import { motion } from "framer-motion";
// import speakersData from "../../data/speakers.json"; // Temporarily disabled for ICAI 2026

// ============================================================
// ICAI 2026 Speakers – Placeholder
// The official speaker lineup is not yet published.
// Uncomment the import and the grid mapping below once
// the confirmed speakers are available.
// ============================================================

const Speakers: React.FC = () => {

  return (
    <div className="pt-20 bg-gray-50">
      {/* Header – identical style, subtitle updated for ICAI 2026 */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-white">
              Distinguished Speakers
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-50 leading-relaxed">
              The official ICAI 2026 speaker lineup will be announced soon.
              Please check back later for updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid – replaced with a professional Coming Soon placeholder */}
      <div className="container mx-auto px-4 py-20">
        {/* 
          // TODO: ICAI 2026 Speakers
          // Uncomment the following block and replace the placeholder
          // once the speaker list is finalized.
        */}
        {/* 
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {speakersData.map((speaker: Speaker, index: number) => (
            <motion.div key={index} variants={item}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col pt-16 mt-6">
                <div className="flex justify-center -mt-12 mb-4 relative z-10">
                  {speaker.image ? (
                    <div className="rounded-full w-60 h-60 border-4 border-white shadow-xl overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="rounded-full w-40 h-40 border-4 border-white shadow-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl font-bold">
                      {speaker.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>

                <div className="px-6 pb-6 flex-grow flex flex-col text-center">
                  <div className="mb-4">
                    <Link to={`/speakers/${speaker.id}`} className="text-xl font-bold text-gray-800 mb-1">
                      {speaker.name}
                    </Link>
                    <p className="text-primary-600 font-medium whitespace-pre-line">
                      {speaker.title }
                    </p>
                  </div>

                  <div className="mb-2 flex-grow">
                    <p className="text-gray-700"><span className="font-bold">Session Topic: </span>{speaker.topic}</p>
                  </div>

                  {speaker.email && (
                    <div className=" flex space-x-3 justify-center">
                      <button
                        onClick={() =>
                          (window.location.href = `mailto:${speaker.email}`)
                        }
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200 border border-primary-200"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        */}

        {/* ICAI 2026 – Speakers Coming Soon Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-primary-100 p-10 text-center">
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
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We are curating an exciting lineup of distinguished speakers from
              academia and industry. The full speaker list for ICAI 2026 will be
              published shortly.
            </p>

            {/* Placeholder list */}
            <div className="space-y-3 text-left max-w-sm mx-auto">
              {[
                "Keynote Speakers",
                "Invited Talks",
                "Technical Sessions",
                "Panel Discussions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-2"
                >
                  <span className="text-gray-700 font-medium">{item}</span>
                  <span className="text-xs text-primary-500 bg-primary-50 px-2 py-0.5 rounded-full font-medium">
                    Coming Soon
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Speakers;