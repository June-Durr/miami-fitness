const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Personal trainer in Miami"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-light mb-4 uppercase tracking-wider">
          The <span className="font-bold">Luxury</span> of{" "}
          <span className="font-bold">Fitness</span>
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Personal Training in Miami, FL designed to help you reach your fitness
          goals
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="#contact"
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded transition duration-300 text-lg"
          >
            Book a Session
          </a>
          <a
            href="#training"
            className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded transition duration-300 text-lg"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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
