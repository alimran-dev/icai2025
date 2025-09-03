import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import speakersData from "../../data/speakers.json";
import { Mail } from "lucide-react";

interface Speaker {
  id: string;
  name: string;
  title: string;
  topic: string;
  email?: string;
  image?: string;
  description?: string;
  bio?: string;
}

const SpeakerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const speaker: Speaker | undefined = speakersData.find((s) => s.id === id);
  console.log(speaker);
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="pt-20 bg-gray-50">
      <section>
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center p-2 lg:p-8 m-2 lg:m-10 border-2 border-primary-400 rounded-md">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col pt-14 ">
            <div className="flex flex-col justify-center items-center -mt-12 mb-4 relative z-10">
              {speaker?.image ? (
                <div className="rounded-full w-40 h-40 border-4 border-white shadow-xl overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top mx-auto"
                  />
                </div>
              ) : (
                <div className="rounded-full w-40 h-40 border-4 border-white shadow-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl font-bold">
                  {speaker?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>

            <div className="px-6 pb-6 flex-grow flex flex-col text-center">
              <div className="mb-4">
                <div
                  className="text-xl font-bold text-gray-800 mb-1"
                >
                  {speaker?.name}
                </div>
                <p className="text-primary-600 font-medium whitespace-pre-line">
                  {speaker?.title}
                </p>
              </div>

              <div className="mb-2 flex-grow">
                <p className="text-gray-700">
                  <span className="font-bold">Session Topic: </span>
                  {speaker?.topic}
                </p>
              </div>

              {speaker?.email && (
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
          <div className="col-span-2 p-5 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full text-justify hover:bg-primary-100">
            <h2 className="text-lg font-bold mb-2 text-opacity-75">Biography:</h2>
            <p className="whitespace-pre-line">{speaker?.bio}</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SpeakerDetail;
