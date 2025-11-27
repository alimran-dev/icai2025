import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Committee", path: "/committee" },
    { name: "Speakers", path: "/speakers" },
    { name: "Schedule", path: "/schedule" },
    { name: "Participants", path: "/participants"},
    { name: "Ambassadors", path: "/ambassadors" },
    // { name: "Call for Papers", path: "/call-for-papers" },
    // {
    //   name: "Past Congresses",
    //   children: [
    //     { name: "2024", path: "/2024" },
    //     { name: "2023", path: "/2023" },
    //     { name: "2022", path: "/2022" },
    //   ],
    // },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.jpeg" alt="Logo" className="h-10 rounded-md" />
          <span className="text-xl font-bold text-primary-700">ICAI 2025</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.children ? (
                <div>
                  <button className={`flex items-center text-sm font-medium hover:text-primary-600 ${isScrolled? "text-secondary-700":"text-white"}`}>
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50 hover:text-primary-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary-700"
                      : `${isScrolled || location.pathname!=="/"? "text-secondary-600": "text-white"} hover:text-primary-600`
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYlWXatwaXOicPfDS_qWU5V7yzd6Mw3qfPtyAuZjsHPBnREw/viewform"
            target="_blank"
            className="btn btn-primary border-none"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-secondary-500 rounded-md hover:text-secondary-900 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-3 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      location.pathname === link.path
                        ? "text-primary-700 bg-primary-50"
                        : "text-secondary-700 hover:text-primary-600 hover:bg-secondary-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYlWXatwaXOicPfDS_qWU5V7yzd6Mw3qfPtyAuZjsHPBnREw/viewform"
              target="_blank"
              className="block w-full px-3 py-2 mt-4 text-base font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
