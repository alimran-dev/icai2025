import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <img src="/logo.jpeg" alt="Logo" className="h-24 rounded-md" />
            <h3 className="mb-4 text-lg font-bold text-white">ICAI 2025</h3>
            <p className="mb-4 text-secondary-300">
              International Congress on Artificial Intelligence (ICAI 2025) - Bringing together researchers, academics, and
              industry professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/committee"
                  className="text-secondary-300 hover:text-white"
                >
                  Committee
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="text-secondary-300 hover:text-white"
                >
                  Speakers
                </Link>
              </li>

              {/* <li>
                <Link
                  to="/contact"
                  className="text-secondary-300 hover:text-white"
                >
                  Contact
                </Link>
              </li> */}
              <li>
                <Link
                  to="/schedule"
                  className="text-secondary-300 hover:text-white"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/ambassadors"
                  className="text-secondary-300 hover:text-white"
                >
                  Ambassadors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin
                  size={20}
                  className="flex-shrink-0 mt-1 text-primary-400"
                />
                <span className="text-secondary-300">Rupnagar, Mirpur-2, Dhaka-1216, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="flex-shrink-0 text-primary-400" />
                <a
                  href="mailto:icai.bubt@gmail.com"
                  className="text-secondary-300 hover:text-white"
                >
                  icai.bubt@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="flex-shrink-0 text-primary-400" />
                <a
                  href="tel: +880 1623 185968"
                  className="text-secondary-300 hover:text-white"
                >
                  +880 1623 185968 (Registration Chair)
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="flex-shrink-0 text-primary-400" />
                <a
                  href="tel: +880 1897 911901"
                  className="text-secondary-300 hover:text-white"
                >
                  +880 1897 911901 (Ambassador Chair)
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/InternationalCongressonArtificialIntelligence"
              target="_blank"
              className="text-secondary-300 hover:text-white"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7360316665907040256"
              target="_blank"
              className="text-secondary-300 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:icai.bubt@gmail.com"
              className="text-secondary-300 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        {/* <div>
          <h3 className="mb-4 text-lg font-bold text-white">Important Dates</h3>
          <ul className="space-y-2">
            <li className="text-secondary-300">
              <span className="font-semibold">Paper Submission:</span> June 15,
              2025
            </li>
            <li className="text-secondary-300">
              <span className="font-semibold">Notification:</span> August 1,
              2025
            </li>
            <li className="text-secondary-300">
              <span className="font-semibold">Camera Ready:</span> September 1,
              2025
            </li>
            <li className="text-secondary-300">
              <span className="font-semibold">Registration:</span> September 15,
              2025
            </li>
            <li className="text-secondary-300">
              <span className="font-semibold">Conference:</span> October 10-12,
              2025
            </li>
          </ul>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="py-4 text-center bg-primary-800">
        <p className="text-sm text-secondary-400">
          &copy; {new Date().getFullYear()} ICAI 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
