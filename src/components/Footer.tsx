import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <img src="/logo.jpeg" alt="Logo" className="h-24 rounded-md" />
            <h3 className="mb-4 text-lg font-bold text-white">ICAI 2026</h3>
            <p className="mb-4 text-secondary-300">
              2nd International Congress on Artificial Intelligence (ICAI 2026) - Bringing together researchers, academics, and
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
                <Mail size={20} className="flex-shrink-0 text-primary-400" />
                <a
                  href="mailto:sanjid.b65@gmail.com"
                  className="text-secondary-300 hover:text-white"
                >
                  Md. Sanjid Hosen (Registration Chair)
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="flex-shrink-0 text-primary-400" />
                <a
                  href="mailto:siradive137@gmail.com"
                  className="text-secondary-300 hover:text-white"
                >
                  Md. Sadik Mahmud Adive (Ambassador Chair)
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
      </div>

      {/* Copyright & Maintainer */}
      <div className="py-4 text-center bg-primary-800">
        <p className="text-sm text-secondary-400">
          &copy; {new Date().getFullYear()} ICAI All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-3 mt-2">
          <img
            src="https://i.ibb.co.com/vx5hPvmw/pp.png"
            alt="Md Mehedi Hasan"
            className="w-8 h-8 rounded-full object-cover border border-primary-400"
          />
          <span className="text-sm text-secondary-400">
            Maintained by Md Mehedi Hasan, Research Assistant, AMIR Lab
          </span>
          <a
            href="https://www.linkedin.com/in/0mehedihasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 inline-flex items-center"
            title="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;