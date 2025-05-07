const Logo = ({ colorScheme = "gold" }) => {
  // Extended color mapping based on selected scheme
  const colorMap = {
    gold: "bg-gold-500",
    green: "bg-emerald-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
    magenta: "bg-pink-500",
    neon: "bg-lime-500",
  };

  // Text color mapping
  const textColorMap = {
    gold: "text-gold-500",
    green: "text-emerald-500",
    orange: "text-orange-500",
    red: "text-red-500",
    purple: "text-purple-500",
    cyan: "text-cyan-500",
    magenta: "text-pink-500",
    neon: "text-lime-500",
  };

  // Gradient mapping
  const gradientMap = {
    gold: "from-amber-400 via-gold-500 to-amber-600",
    green: "from-green-400 via-emerald-500 to-green-600",
    orange: "from-yellow-500 via-orange-500 to-yellow-600",
    red: "from-rose-400 via-red-500 to-rose-600",
    purple: "from-indigo-400 via-purple-500 to-indigo-600",
    cyan: "from-blue-400 via-cyan-500 to-blue-600",
    magenta: "from-pink-400 via-fuchsia-500 to-pink-600",
    neon: "from-lime-300 via-lime-500 to-lime-600",
  };

  const bgColor = colorMap[colorScheme] || "bg-gold-500";
  const textColor = textColorMap[colorScheme] || "text-gold-500";
  const gradient =
    gradientMap[colorScheme] || "from-amber-400 via-gold-500 to-amber-600";

  return (
    <a href="#hero" className="flex items-center group">
      <div
        className={`h-10 w-10 rounded-full ${bgColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <span className="text-white font-bold text-xl">M</span>
      </div>
      <div className="ml-2">
        <span className="font-bold text-white text-lg">Miami</span>
        <span
          className={`${textColor} text-lg font-light bg-clip-text text-transparent bg-gradient-to-r ${gradient} group-hover:animate-pulse transition-all duration-300`}
        >
          {" "}
          Fitness
        </span>
      </div>
    </a>
  );
};

export default Logo;
