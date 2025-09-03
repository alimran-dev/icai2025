import React from "react";
import { Mail, Phone, FacebookIcon, LinkedinIcon } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-primary-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-primary-100 max-w-xl mx-auto">
              Have questions about ICRCS 2025? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-6 w-6 text-primary-600" />
                <h3 className="font-semibold text-gray-800">Email Us</h3>
              </div>
              <a
                href="mailto:icai@ieee.org"
                className="text-primary-600 hover:underline"
              >
                icai@ieee.org
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-6 w-6 text-primary-600" />
                <h3 className="font-semibold text-gray-800">Call Us</h3>
              </div>
              <div className="space-y-2">
                <a
                  href="https://wa.me/8801710048394"
                  className="block text-primary-600 hover:underline"
                >
                  +880 1710 048394 (Registration Chair)
                </a>
                <a
                  href="https://wa.me/8801985419558"
                  className="block text-primary-600 hover:underline"
                >
                  +880 1985 419558 (Ambassador Chair)
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-semibold text-gray-800">Follow Us</h3>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/icrcsbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/icrcsbd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
