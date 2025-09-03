import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const CallForPapers: React.FC = () => {
  const topics = [
    "Artificial Intelligence and Machine Learning",
    "Computer Vision and Image Processing",
    "Natural Language Processing",
    "Data Mining and Big Data Analytics",
    "Cybersecurity and Privacy",
    "Cloud Computing and Distributed Systems",
    "Internet of Things (IoT)",
    "Blockchain and Cryptocurrency",
    "Human-Computer Interaction",
    "Software Engineering and DevOps",
    "Computer Networks and Communications",
    "Mobile Computing and Applications",
    "Quantum Computing",
    "Robotics and Autonomous Systems",
    "Virtual and Augmented Reality",
    "Bioinformatics and Computational Biology",
    "Green Computing and Sustainability",
    "Computer Graphics and Visualization",
    "Parallel and High-Performance Computing",
    "Ethics in Computing and Technology",
  ];

  const importantDates = [
    { event: "Paper Submission Deadline", date: "June 15, 2025" },
    { event: "Notification of Acceptance", date: "August 1, 2025" },
    { event: "Camera-Ready Submission", date: "September 1, 2025" },
    { event: "Early Registration Deadline", date: "September 15, 2025" },
    { event: "Conference Dates", date: "October 10-12, 2025" },
  ];

  const submissionGuidelines = [
    "Papers must be written in English and follow the IEEE conference format.",
    "The maximum page length is 8 pages, including figures, tables, and references.",
    "All papers must be original and not simultaneously submitted to another journal or conference.",
    "Papers must be submitted in PDF format through the conference submission system.",
    "At least one author of each accepted paper must register for the conference and present the paper.",
    "All submissions will be peer-reviewed by at least three reviewers from the program committee.",
  ];

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
            <h1 className="text-4xl font-bold mb-4">Call for Papers</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              Submit your research to be presented at the International
              Conference on Recent Trends in Computer Science (ICRCS 2025).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Introduction</h2>
            <div className="prose prose-lg max-w-none text-secondary-700">
              <p>
                The International Congress on Recent Trends in Computer Science
                (ICRCS 2025) invites researchers, academics, and industry
                professionals to submit original research papers on recent
                advances and developments in all areas of computer science and
                information technology.
              </p>
              <p>
                ICRCS 2025 aims to provide a platform for researchers to present
                their work, exchange ideas, and establish collaborations. The
                conference will feature keynote speeches, technical sessions,
                workshops, and networking opportunities.
              </p>
              <p>
                All accepted papers will be published in the conference
                proceedings and will be submitted for inclusion in IEEE Xplore
                Digital Library (pending approval). Selected papers will be
                invited for extension and publication in special issues of
                reputed journals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics of Interest */}
      <section className="section bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Topics of Interest</h2>
            <p className="text-center text-secondary-700 mb-12 max-w-3xl mx-auto">
              ICRCS 2025 welcomes submissions on a wide range of topics related
              to computer science and information technology, including but not
              limited to:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="flex items-start space-x-2"
              >
                <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-800">{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Important Dates</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center mb-6 last:mb-0"
              >
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  {item.event.includes("Deadline") ? (
                    <Clock className="h-6 w-6 text-primary-600" />
                  ) : item.event.includes("Conference") ? (
                    <Calendar className="h-6 w-6 text-primary-600" />
                  ) : (
                    <FileText className="h-6 w-6 text-primary-600" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.event}</h3>
                  <p className="text-secondary-700">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="section bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Submission Guidelines</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Paper Format</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">
                      IEEE conference format
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">
                      Maximum 8 pages including references
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">PDF format only</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">
                      Double-column layout
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">
                      10-point font size
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                  >
                    <span>Download Template</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Review Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">
                      Double-blind peer review
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">
                      At least three reviewers per paper
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">
                      Evaluation based on originality, technical soundness, and
                      relevance
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">
                      Notification of acceptance by August 1, 2025
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold mb-4">
                Submission Requirements
              </h3>
              <ul className="space-y-3">
                {submissionGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{guideline}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publication */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Publication</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none text-secondary-700"
            >
              <p>
                All accepted papers will be published in the conference
                proceedings and will be submitted for inclusion in IEEE Xplore
                Digital Library (pending approval). The proceedings will be
                indexed by major academic databases including Scopus and Web of
                Science.
              </p>
              <p>
                Selected high-quality papers will be invited for extension and
                publication in special issues of the following journals:
              </p>
              <ul>
                <li>Journal of Computer Science and Technology</li>
                <li>International Journal of Computer Applications</li>
                <li>Journal of Information Technology and Computer Science</li>
              </ul>
              <p>
                Authors of accepted papers must sign a copyright transfer form
                and present their work at the conference to be included in the
                proceedings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plagiarism Policy */}
      <section className="section bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Plagiarism Policy</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Zero Tolerance for Plagiarism
                  </h3>
                  <p className="text-secondary-700 mb-4">
                    ICRCS 2025 has a strict zero-tolerance policy for
                    plagiarism. All submitted papers will be checked for
                    plagiarism using advanced plagiarism detection software.
                    Papers found to contain plagiarized content will be
                    immediately rejected, and the authors may be barred from
                    submitting to future conferences.
                  </p>
                  <p className="text-secondary-700">
                    Authors are responsible for ensuring that their work is
                    original and properly cited. Self-plagiarism (reusing
                    significant portions of one's own previously published work
                    without citation) is also considered a violation of our
                    policy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Submit Your Paper?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
              Submit your research paper to ICRCS 2025 and join the global
              community of computer science researchers.
            </p>
            <a
              href="#"
              className="btn bg-white text-primary-700 hover:bg-primary-100"
            >
              Submit Paper
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CallForPapers;
