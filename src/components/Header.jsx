import { useState, useEffect } from "react";
import Logo from "./Logo";

const Header = ({ activeColorScheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Extended Color schemes
  const colorSchemes = {
    gold: {
      primary: "bg-gold-500 hover:bg-gold-600",
      text: "text-gold-500",
      hover: "hover:text-gold-500",
      active: "border-gold-500",
      gradient: "from-amber-400 via-gold-500 to-amber-600",
    },
    green: {
      primary: "bg-emerald-500 hover:bg-emerald-600",
      text: "text-emerald-500",
      hover: "hover:text-emerald-500",
      active: "border-emerald-500",
      gradient: "from-green-400 via-emerald-500 to-green-600",
    },
    orange: {
      primary: "bg-orange-500 hover:bg-orange-600",
      text: "text-orange-500",
      hover: "hover:text-orange-500",
      active: "border-orange-500",
      gradient: "from-yellow-500 via-orange-500 to-yellow-600",
    },
    red: {
      primary: "bg-red-500 hover:bg-red-600",
      text: "text-red-500",
      hover: "hover:text-red-500",
      active: "border-red-500",
      gradient: "from-rose-400 via-red-500 to-rose-600",
    },
    purple: {
      primary: "bg-purple-500 hover:bg-purple-600",
      text: "text-purple-500",
      hover: "hover:text-purple-500",
      active: "border-purple-500",
      gradient: "from-indigo-400 via-purple-500 to-indigo-600",
    },
    cyan: {
      primary: "bg-cyan-500 hover:bg-cyan-600",
      text: "text-cyan-500",
      hover: "hover:text-cyan-500",
      active: "border-cyan-500",
      gradient: "from-blue-400 via-cyan-500 to-blue-600",
    },
    magenta: {
      primary: "bg-pink-500 hover:bg-pink-600",
      text: "text-pink-500",
      hover: "hover:text-pink-500",
      active: "border-pink-500",
      gradient: "from-pink-400 via-fuchsia-500 to-pink-600",
    },
    neon: {
      primary: "bg-lime-500 hover:bg-lime-600",
      text: "text-lime-500",
      hover: "hover:text-lime-500",
      active: "border-lime-500",
      gradient: "from-lime-300 via-lime-500 to-lime-600",
    },
  };

  // Set default color scheme to gold if not specified
  const colors = colorSchemes[activeColorScheme || "gold"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Function to determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "training",
        "philosophy",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150; // Adjust this value as needed

          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "training", label: "Training" },
    { id: "philosophy", label: "Philosophy" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo colorScheme={activeColorScheme} />

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={toggleMenu}
        >
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
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-gray-200 transition duration-300 pb-1 border-b-2 ${
                activeSection === item.id
                  ? `${colors.text} ${colors.active}`
                  : `border-transparent ${colors.hover}`
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA button with gradient */}
        <button
          onClick={() => scrollToSection("contact")}
          className={`hidden md:block text-white px-6 py-2 rounded-full transition duration-300 font-medium
            bg-gradient-to-r ${colors.gradient} hover:shadow-lg transform hover:scale-105`}
        >
          Book a Session
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 w-full shadow-lg absolute top-16 left-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`text-gray-200 transition duration-300 py-2 border-b border-gray-700 text-left ${
                    activeSection === item.id ? colors.text : ""
                  } ${colors.hover}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-white px-4 py-2 text-center rounded-full transition duration-300 my-2 font-medium
                  bg-gradient-to-r ${colors.gradient} hover:shadow-lg`}
              >
                Book a Session
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
