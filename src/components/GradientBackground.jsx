import React from "react";

/**
 * GradientBackground Component
 * Creates dynamic, animated background effects for sections
 *
 * @param {string} colorScheme - Current theme color (gold, green, orange, red, purple, cyan, magenta, neon)
 * @param {ReactNode} children - Child components to render
 * @param {string} id - HTML id attribute for the section
 * @param {string} className - Additional CSS classes
 * @param {string} pattern - Background pattern (dots, grid, diagonal, hexagon, circuit)
 */
const GradientBackground = ({
  colorScheme = "gold",
  children,
  id,
  className = "",
  pattern = "dots",
}) => {
  // Define gradient maps for each color scheme and background type
  const gradientMap = {
    gold: {
      light: "bg-gradient-to-br from-amber-50 via-white to-amber-100",
      medium: "bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900",
      dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950",
      vibrant: "bg-gradient-to-br from-amber-400 via-gold-500 to-amber-600",
    },
    green: {
      light: "bg-gradient-to-br from-emerald-50 via-white to-emerald-100",
      medium: "bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900",
      dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-950",
      vibrant: "bg-gradient-to-br from-green-400 via-emerald-500 to-green-600",
    },
    orange: {
      light: "bg-gradient-to-br from-orange-50 via-white to-orange-100",
      medium: "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900",
      dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950",
      vibrant: "bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-600",
    },
    red: {
      light: "bg-gradient-to-br from-red-50 via-white to-red-100",
      medium: "bg-gradient-to-br from-gray-900 via-gray-800 to-red-900",
      dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-red-950",
      vibrant: "bg-gradient-to-br from-rose-400 via-red-500 to-rose-600",
    },
    purple: {
      light: "bg-gradient-to-br from-purple-50 via-white to-purple-100",
      medium: "bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900",
      dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-purple-950",
      vibrant: "bg-gradient-to-br from-indigo-400 via-purple-500 to-indigo-600",
    },
    cyan: {
      light: "bg-gradient-to-br from-cyan-50 via-white to-cyan-100",
      medium: "bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900",
      dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-950",
      vibrant: "bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600",
    },
    magenta: {
      light: "bg-gradient-to-br from-pink-50 via-white to-pink-100",
      medium: "bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900",
      dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-fuchsia-950",
      vibrant: "bg-gradient-to-br from-pink-400 via-fuchsia-500 to-pink-600",
    },
    neon: {
      light: "bg-gradient-to-br from-lime-50 via-white to-lime-100",
      medium: "bg-gradient-to-br from-gray-900 via-gray-800 to-lime-900",
      dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-lime-950",
      vibrant: "bg-gradient-to-br from-lime-300 via-lime-500 to-lime-600",
    },
  };

  // Get appropriate gradient based on the current color scheme
  const schemeGradients = gradientMap[colorScheme] || gradientMap.gold;

  // Determine which variant of gradient to use based on className
  let gradientClass;
  if (className.includes("bg-white") || className.includes("bg-gray-50")) {
    gradientClass = schemeGradients.light;
  } else if (className.includes("bg-gray-800")) {
    gradientClass = schemeGradients.medium;
  } else if (className.includes("bg-gray-900")) {
    gradientClass = schemeGradients.dark;
  } else if (className.includes("vibrant")) {
    gradientClass = schemeGradients.vibrant;
  } else {
    // Default to light gradient
    gradientClass = schemeGradients.light;
  }

  // Replace background classes with our gradient
  const backgroundRegex = /bg-\w+-\d+|bg-gray-\d+|bg-white/;
  const newClassName =
    className.replace(backgroundRegex, gradientClass) || gradientClass;

  // Pattern effect classes
  const patternClass = `pattern-${pattern}`;
  const animatedGradientClass = `${colorScheme}-gradient`;

  return (
    <div
      id={id}
      className={`${newClassName} relative overflow-hidden pattern-bg ${patternClass} animated-bg animated-gradient ${animatedGradientClass}`}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-20 animate-pulse-slow pointer-events-none"></div>

      {/* Decorative floating elements */}
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-white bg-opacity-5 rounded-full pointer-events-none"></div>
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-white bg-opacity-5 rounded-full pointer-events-none"></div>

      {/* Animated floating elements */}
      <div
        className="absolute top-1/4 right-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full floating pointer-events-none"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-white bg-opacity-5 rounded-full floating pointer-events-none"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-8 h-8 bg-white bg-opacity-5 rounded-full floating pointer-events-none"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Main content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
