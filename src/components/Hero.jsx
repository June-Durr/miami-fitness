const Hero = ({ colorScheme = "gold" }) => {
  // Define colors based on the colorScheme
  const getPrimaryBgClass = () => {
    const colorMap = {
      gold: "bg-gold-500 hover:bg-gold-600",
      green: "bg-emerald-500 hover:bg-emerald-600",
      orange: "bg-orange-500 hover:bg-orange-600",
      red: "bg-red-500 hover:bg-red-600",
      purple: "bg-purple-500 hover:bg-purple-600",
      cyan: "bg-cyan-500 hover:bg-cyan-600",
      magenta: "bg-pink-500 hover:bg-pink-600",
      neon: "bg-lime-500 hover:bg-lime-600",
    };

    return colorMap[colorScheme] || "bg-gold-500 hover:bg-gold-600";
  };

  const getTextGradient = () => {
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

    return (
      gradientMap[colorScheme] || "from-amber-400 via-gold-500 to-amber-600"
    );
  };

  const primaryBgClass = getPrimaryBgClass();
  const textGradient = getTextGradient();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Personal trainer in Miami"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl text-white font-light mb-6 uppercase tracking-wider">
          Premium <span className="font-bold">Fitness</span> in{" "}
          <span
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r animate-pulse-slow inline-block transform hover:scale-110 transition-transform duration-300"
            style={{
              backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
            }}
          >
            <span className={`bg-gradient-to-r ${textGradient}`}>MIAMI</span>
          </span>
        </h1>
        <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Expert personal training designed to transform your body and elevate
          your lifestyle
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <a
            href="#contact"
            className={`${primaryBgClass} text-white px-10 py-4 rounded-full transition duration-300 text-lg font-medium transform hover:scale-105 hover:shadow-lg edgy-btn`}
          >
            <span className="content">Book a Session</span>
          </a>
          <a
            href="#training"
            className="bg-white hover:bg-gray-100 text-gray-800 px-10 py-4 rounded-full transition duration-300 text-lg font-medium transform hover:scale-105 hover:shadow-lg edgy-btn"
          >
            <span className="content">Explore Services</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
