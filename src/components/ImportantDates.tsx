import { motion } from "framer-motion";

export default function ImportantDates() {
  return (
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
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mb-8"
            >
              <div className="flex items-center mb-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold text-primary-700">
                    Paper Submission Deadline
                  </h3>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-secondary-700">June 15, 2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="flex items-center mb-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold text-primary-700">
                    Notification of Acceptance
                  </h3>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-secondary-700">August 1, 2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mb-8"
            >
              <div className="flex items-center mb-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold text-primary-700">
                    Camera-Ready Submission
                  </h3>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-secondary-700">September 1, 2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mb-8"
            >
              <div className="flex items-center mb-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold text-primary-700">
                    Early Registration Deadline
                  </h3>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-secondary-700">September 15, 2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <div className="flex items-center mb-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold text-primary-700">
                    Conference Dates
                  </h3>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-secondary-700">October 10-12, 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
