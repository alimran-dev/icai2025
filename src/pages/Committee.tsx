import React from "react";
import { motion } from "framer-motion";

interface CommitteeMember {
  name: string;
  role: string;
  affiliation?: string;
  image: string;
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
        name: "Md. Saifur Rahman",
        role: "Chairman, Dept. of CSE, BUBT",

        image: "https://i.ibb.co.com/NghXzQCr/download-2.png",
      },
      {
        name: "Dr. Md. Shafiqul Islam",
        role: "Assistant Professor, Dept. of CSE, BUBT",

        image: "https://i.postimg.cc/XNt15rMF/Whats-App-Image-2025-08-10-at-7-49-54-PM.jpg",
      },
      {
        name: "Sudipa Saha",
        role: "Lecturer, Dept. of CSE, BUBT",
        image: "https://i.postimg.cc/MGGmNw2q/download-3.jpg",
      }
    ],
    "General Chair": [
      {
        name: "Shrabani Das",
        role: "General Chair",

        image: "https://i.ibb.co/ZYbkQhy/Shrabani-Das-Shrabani-Das.jpg",
      }
    ],
    "Organizing Committee": [
      {
        name: "Md Mehedi Hasan",
        role: "Organizing Chair",
        affiliation: "Research Institute",
        image: "https://i.ibb.co/1sq7X8s/IMG-20240128-073552-Md-Mehedi.jpg",
      },
      {
        name: "Mujahidul Islam Joy",
        role: "Organizing Secretary",
        affiliation: "Computer Science Department",
        image: "https://i.postimg.cc/fRVxfKxR/8b68a013-00fd-4f9e-8de0-c3f777650193-Mujahidul-Islam-Joy.jpg",
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
        name: "Mashfi Rejoan Saikat ",
        role: "Ambassador Chair",
        affiliation: "BRAC University",
        image: "https://i.postimg.cc/N0X3zS3J/FP-cropped-Mashfi-Rejoan-Saikat.jpg",
      }
    ],
    "Registration Committee": [
      {
        name: "Sabrina Tasnim Imu",
        role: "Registration Chair",
        affiliation: "Student Affairs Committee",
        image: "https://i.postimg.cc/gcgTNGwc/Whats-App-Image-2025-05-25-at-3-39-10-PM-Sabrina-Tasnim-Imu.jpg",
      },
      {
        name: "Md. Abu Talab Anik",
        role: "Registration Co-Chair",
        affiliation: "Student Affairs Committee",
        image: "https://i.postimg.cc/HsfWkrGj/00000-Md-Abu-Talab-Anik.png",
      },
    ],

    "Web and Design Committee": [
      {
        name: "Md Al Imran",
        role: "Web & IT Chair",

        image: "https://i.postimg.cc/Zn9sWD8t/Whats-App-Image-2025-08-10-at-9-35-00-PM.jpg",
      },
      {
        name: "Shopnil Karmakar",
        role: "Design Chair",
        affiliation: "Creative Department",
        image: "https://i.postimg.cc/9MJ8LwPp/IMG-1749-2-Shopnil-Karmakar.jpg",
      },
      {
        name: "Md Sirajul Islam",
        role: "Design Co-Chair",
        affiliation: "Design Team",
        image: "https://i.postimg.cc/Y9TZzHqq/Image-202-03-14-at-21-36-14-954090d-MD-SIRAJUL-ISLAM.jpg",
      },
      {
        name: "Faiza Khandoker Fama",
        role: "Design Co-Chair",
        affiliation: "Design Team",
        image: "https://i.postimg.cc/NfDbgtq9/inbound7581585900504204818-49-338-Faiza-Khandoker.jpg",
      },
    ],
    "Publication and Publicity Committee": [
      {
        name: "Most.Sonia Islam",
        role: "Publication Chair",
        affiliation: "Global Science Media",
        image: "https://i.postimg.cc/Qxq3J2Qj/Beauty-Plus-20241119133540300-save-Most-Sonia-Islam.jpg",
      },
      {
        name: "Humayra Akter",
        role: "Publicity Chair",
        affiliation: "Communications Department",
        image: "https://i.postimg.cc/fWfYXhWw/Humayra-Akter-Humayra-Akter.jpg",
      },
      {
        name: "Md Nahidujaman",
        role: "Media Chair",
        affiliation: "Communications Department",
        image: "https://i.postimg.cc/ZYw2c2VS/IMG-2082-Nahidujjaman-Shihab.jpg",
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
              Organizing Committee
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              Meet the dedicated team of professionals working behind the scenes
              to make ICAI 2025 a success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="section bg-white py-16">
        <div className="container">
          {Object.entries(committeeMembers).map(([category, members]) => (
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                    className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100`}
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
                          {/* {member.affiliation && (
                            <p className="text-gray-600 text-sm">
                              {member.affiliation}
                            </p>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Committee;
