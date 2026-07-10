import React from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail } from "lucide-react";

interface CommitteeMember {
  name: string;
  role: string;
  affiliation?: string;
  image: string;
  email?: string;
  linkedin?: string;
  orcid?: string;
}

const Committee: React.FC = () => {
  const committeeMembers: Record<string, CommitteeMember[]> = {
    "Advisory Panel": [
      {
        name: "Prof. Dr. A B M Shawkat Ali",
        role: "Vice Chancellor, BUBT",
        image: "https://i.ibb.co.com/0jVMjqzz/download-1.png",
      },
      {
        name: "Dr. Muhammad Aminur Rahaman",
        role: "Dean, Faculty of Computer Science & Artificial Intelligence, BUBT",
        image: "https://i.ibb.co.com/whw8FxfF/balaminurbala.jpg",
      },
      {
        name: "Prof. Dr. Md. Ahsan Habib",
        role: "Chairman, Dept. of CSE, BUBT",
        image: "https://i.ibb.co.com/wN2PthKc/chairman.jpg",
      },
      {
        name: "Shrabani Das",
        role: "Lecturer, Dept. of CSE, BUBT",
        image: "https://i.ibb.co/ZYbkQhy/Shrabani-Das-Shrabani-Das.jpg",
      },
    ],
    "General Chair": [
      {
        name: "Md Mehedi Hasan",
        role: "Research Assistant, Advanced Machine Intelligence Research Lab (AMIR Lab)",
        affiliation: "Research Institute",
        image: "https://i.ibb.co.com/vx5hPvmw/pp.png",
        linkedin: "https://www.linkedin.com/in/0mehedihasan/",
      },
    ],
    "Organizing Committee": [
      {
        name: "Maruf Billah Anas",
        role: "Organizing Chair (Operations)",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/HpgyMWvw/inbound5648170297621318866-maruf-billah-anas.jpg",
      },
      {
        name: "Md Al Imran",
        role: "Organizing Chair (Technical)",
        affiliation: "BUBT",
        image: "https://i.postimg.cc/Zn9sWD8t/Whats-App-Image-2025-08-10-at-9-35-00-PM.jpg",
      },
      {
        name: "Naimur Rahaman Rifat",
        role: "Organizing Co-Chair (Operations)",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/B5FpW5rp/8935-Naimur-Rahaman.jpg",
      },
      {
        name: "Mashfi Rejoan Saikat",
        role: "Organizing Co-Chair (Technical)",
        affiliation: "BUBT",
        image: "https://i.postimg.cc/N0X3zS3J/FP-cropped-Mashfi-Rejoan-Saikat.jpg",
      },
      {
        name: "Ashif Sheikh",
        role: "Organizing Secretary",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/d4xH5jq8/Whats-App-Image-2026-07-04-at-1-57-59-AM-Ashif-Sheikh.jpg",
      },
      {
        name: "Adiba Azam Mati",
        role: "Master of Ceremonies",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/PvqTWZwv/NHS06220-Adiba-Azam-Mati.jpg",
      },
      {
        name: "Shadida Khan",
        role: "Master of Ceremonies",
        affiliation: "Computer Science Department",
        image: "https://i.postimg.cc/3RWQZ1X9/IMG-5401-Shadida-Khan.jpg",
      },
    ],
    "Ambassador Committee": [
      {
        name: "Md. Sadik Mahmud Adive",
        role: "Ambassador Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/wZB58WRX/599677195-2702743066737038-3730406491581254218-n-Sm-Adive.jpg",
      },
    ],
    "Registration Committee": [
      {
        name: "Md. Sanjid Hosen",
        role: "Registration Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/5hg1wrnS/20260629-145816-Sanjid-Al-Mamun.jpg",
      },
      {
        name: "Jannathul Ferdousi Shoshi",
        role: "Registration Co-Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/TqNRY5ft/inbound193459536612755663-jannathul-ferdaus.jpg",
      },
    ],
    "Presentation Program Committee": [
      {
        name: "Md Masudur Rahaman Nirob",
        role: "Presentation Program Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/N2XtnZt0/Gemini-Generated-Image-64q3d964q3d964q3.png",
      },
      {
        name: "Nur Uddin",
        role: "Presentation Program Co-Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/FkT55DV8/inbound6867854119187620541-Nur.jpg",
      },
    ],
    "Design Committee": [
      {
        name: "Nusrat Jahan Tonmoy",
        role: "Design Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/vCvW57YB/IMG-20260102-WA0764-Nusrat-Jahan-Tonmoy.jpg",
      },
      {
        name: "Sarah",
        role: "Design Co-Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/Hf1MYY9Y/IMG-20250814-WA0069-Original-Sarah.jpg",
      },
      {
        name: "Nazif Azad Maadol",
        role: "Design Co-Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/vSnb2gr/66407-Nazif-Azad.jpg",
      },
    ],
    "Publication Committee": [
      {
        name: "Muhammad Nazmus Sakib Prachurjo",
        role: "Publication Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/jk1skQrC/IMG-20260417-001545-Muhammad-Nazmus-Sakib-Prachurjo.jpg",
      },
      {
        name: "Saidur Rahaman",
        role: "Publication Co-Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/4wjTwww5/IMG-20251230-020047-591-Saidur-Rahaman.webp",
      },
    ],
    "Publicity Committee": [
      {
        name: "Kamrul Islam",
        role: "Publicity Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/HLLhS8Vb/Tuhin-Mia.jpg",
      },
      {
        name: "MD Tanvir Ahmmed",
        role: "Publicity Co-Chair",
        affiliation: "BUBT",
        image: "https://i.ibb.co.com/DHv14Wsv/IMG-20260619-213620-106-Tanvir-Ahmmed.jpg",
      },
    ],
  };

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
            <h1 className="text-4xl font-bold mb-4 text-white">
              ICAI 2026 Congress Committee
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              Meet the dedicated team of professionals working behind the scenes
              to make ICAI 2026 a success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="section bg-white py-16">
        <div className="container">
          {Object.entries(committeeMembers).map(([category, members]) => {
            const isGeneralChair = category === "General Chair";
            return (
              <div key={category} className="mb-24 last:mb-0">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold mb-12 text-center after:content-[''] after:block after:w-24 after:h-1 after:bg-primary-500 after:mx-auto after:mt-4"
                >
                  {category}
                </motion.h2>

                <div
                  className={
                    isGeneralChair
                      ? "flex justify-center"
                      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                  }
                >
                  {members.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -8,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                      }}
                      className={
                        isGeneralChair
                          ? "w-full max-w-md bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                          : "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                      }
                    >
                      <div className="p-6">
                        <div className="flex flex-col items-center">
                          <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-primary-100 shadow-lg">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                            />
                          </div>
                          <div className="text-center mt-2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                              {member.name}
                            </h3>
                            <div className="inline-block bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
                              {member.role}
                            </div>
                            {isGeneralChair && (
                              <div className="mt-4 flex flex-col items-center gap-2 text-sm">
                                {member.email && (
                                  <a
                                    href={`mailto:${member.email}`}
                                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors"
                                  >
                                    <Mail className="w-4 h-4" />
                                    {member.email}
                                  </a>
                                )}
                                {member.linkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors"
                                  >
                                    <LinkedinIcon className="w-4 h-4" />
                                    LinkedIn Profile
                                  </a>
                                )}
                                {member.orcid && (
                                  <a
                                    href={member.orcid}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors"
                                  >
                                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-primary-700 text-[10px] font-bold leading-none">
                                      iD
                                    </span>
                                    ORCID Profile
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Committee;