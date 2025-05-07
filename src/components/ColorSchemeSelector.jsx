import { useState, useEffect } from "react";
import "../assets/edgy-styles.css";

const ColorSchemeSelector = ({ activeScheme, onChange }) => {
  // Enhanced color schemes with gradients and vibrant options
  const schemes = [
    {
      id: "gold",
      name: "Gold",
      color: "bg-gold-500",
      gradient: "bg-gradient-to-r from-amber-400 to-gold-600",
      border: "border-gold-400",
      hoverGlow: "hover:shadow-highlight",
      activeClass: "gold-theme-active",
    },
    {
      id: "green",
      name: "Green",
      color: "bg-emerald-500",
      gradient: "bg-gradient-to-r from-green-400 to-emerald-600",
      border: "border-emerald-400",
      hoverGlow: "hover:shadow-highlight-green",
      activeClass: "green-theme-active",
    },
    {
      id: "orange",
      name: "Orange",
      color: "bg-orange-500",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-600",
      border: "border-orange-400",
      hoverGlow: "hover:shadow-highlight-orange",
      activeClass: "orange-theme-active",
    },
    {
      id: "red",
      name: "Red",
      color: "bg-red-500",
      gradient: "bg-gradient-to-r from-rose-400 to-red-600",
      border: "border-red-400",
      hoverGlow: "hover:shadow-highlight-red",
      activeClass: "red-theme-active",
    },
    {
      id: "purple",
      name: "Purple",
      color: "bg-purple-500",
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
      border: "border-purple-400",
      hoverGlow: "hover:shadow-highlight-purple",
      activeClass: "purple-theme-active",
    },
    {
      id: "cyan",
      name: "Cyan",
      color: "bg-cyan-500",
      gradient: "bg-gradient-to-r from-blue-400 to-cyan-500",
      border: "border-cyan-400",
      hoverGlow: "hover:shadow-highlight-cyan",
      activeClass: "cyan-theme-active",
    },
    {
      id: "magenta",
      name: "Magenta",
      color: "bg-pink-500",
      gradient: "bg-gradient-to-r from-pink-400 to-fuchsia-600",
      border: "border-pink-400",
      hoverGlow: "hover:shadow-highlight-magenta",
      activeClass: "magenta-theme-active",
    },
    {
      id: "neon",
      name: "Neon",
      color: "bg-lime-500",
      gradient: "bg-gradient-to-r from-lime-300 to-lime-600",
      border: "border-lime-400",
      hoverGlow: "hover:shadow-highlight-neon",
      activeClass: "neon-theme-active",
    },
  ];

  // Add special effect when switching themes
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("theme-transition");

    const timeout = setTimeout(() => {
      body.classList.remove("theme-transition");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [activeScheme]);

  return (
    <div
      className="fixed right-6 top-24 z-50 bg-gray-900 bg-opacity-70 backdrop-blur-md 
      rounded-xl shadow-2xl p-6 border-2 border-gray-700 
      transform transition-all duration-500 hover:scale-105"
    >
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-gray-800 border-2 border-gray-700 rotate-45"></div>
      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gray-800 border-2 border-gray-700 rotate-45"></div>

      <h3 className="text-white text-xs uppercase tracking-wider mb-4 font-extrabold relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          SELECT THEME
        </span>
        <span className="block h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-1"></span>
      </h3>

      <div className="grid grid-cols-4 gap-3">
        {schemes.map((scheme) => {
          const isActive = activeScheme === scheme.id;

          return (
            <button
              key={scheme.id}
              onClick={() => onChange(scheme.id)}
              className={`group w-10 h-10 bg-opacity-80 hover:bg-opacity-100 transition-all duration-500 
                ${scheme.gradient} ${scheme.hoverGlow} 
                flex items-center justify-center border-2 ${scheme.border}
                ${isActive ? scheme.activeClass : "opacity-70"}
                clip-path-polygon z-10 relative`}
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              title={`Switch to ${scheme.name} theme`}
              aria-label={`Switch to ${scheme.name} theme`}
            >
              {isActive && (
                <svg
                  className="w-5 h-5 text-white drop-shadow-lg animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {scheme.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 pt-2 border-t border-gray-700">
        <div className="flex justify-center items-center">
          <div className="w-2 h-2 bg-gray-600 rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full mx-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ColorSchemeSelector;
