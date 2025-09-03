import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import speakersData from "../../data/speakers.json";

interface Speaker {
  name: string;
  title: string;
  topic: string;
  email?: string;
  image?: string;
  description?: string;
}

const Speakers: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20 bg-gray-50">
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
              Join us in welcoming our esteemed speakers who will share their
              expertise and insights in various domains of computer science and
              technology.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
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
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {speaker.name}
                    </h3>
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
      </div>
    </div>
  );
};

export default Speakers;
