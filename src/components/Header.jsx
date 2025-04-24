import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-gray-800 hover:text-gold-500 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-gold-500 transition duration-300"
          >
            Services
          </a>
          <a
            href="#training"
            className="text-gray-800 hover:text-gold-500 transition duration-300"
          >
            Training
          </a>
          <a
            href="#philosophy"
            className="text-gray-800 hover:text-gold-500 transition duration-300"
          >
            Philosophy
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-gold-500 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden md:block bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded transition duration-300"
        >
          Book a Session
        </a>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg absolute top-16 left-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-800 hover:text-gold-500 transition duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-gold-500 transition duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#training"
                className="text-gray-800 hover:text-gold-500 transition duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Training
              </a>
              <a
                href="#philosophy"
                className="text-gray-800 hover:text-gold-500 transition duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Philosophy
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-gold-500 transition duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 text-center rounded transition duration-300 my-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Session
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
