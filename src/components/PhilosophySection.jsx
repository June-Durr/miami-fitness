const PhilosophySection = () => {
  return (
    <section
      id="philosophy"
      className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-light uppercase mb-8">
          Our Five Phases of Fitness
        </h2>
        <p className="max-w-3xl mx-auto mb-16 text-gray-300">
          Our comprehensive approach to personal training in Miami follows a
          proven methodology designed to deliver sustainable results. Each phase
          builds upon the previous, creating a foundation for long-term success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <div className="h-64 mb-6 relative overflow-hidden rounded-lg">
              <img
                src="/images/assessment.jpg"
                alt="Fitness assessment in Miami"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-xl font-bold">01</span>
              </div>
            </div>
            <h3 className="text-gold-500 text-xl font-semibold mb-3">
              Assessment
            </h3>
            <p className="text-gray-300">
              Comprehensive evaluation of your current fitness level, mobility,
              strength, and health metrics to establish your baseline and
              identify areas for improvement.
            </p>
          </div>

          <div className="group">
            <div className="h-64 mb-6 relative overflow-hidden rounded-lg">
              <img
                src="/images/planning.jpg"
                alt="Fitness planning in Miami"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-xl font-bold">02</span>
              </div>
            </div>
            <h3 className="text-gold-500 text-xl font-semibold mb-3">
              Planning
            </h3>
            <p className="text-gray-300">
              Development of a customized fitness program that aligns with your
              goals, preferences, and lifestyle while addressing your specific
              needs and limitations.
            </p>
          </div>

          <div className="group">
            <div className="h-64 mb-6 relative overflow-hidden rounded-lg">
              <img
                src="/images/implementation.jpg"
                alt="Fitness implementation in Miami"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-xl font-bold">03</span>
              </div>
            </div>
            <h3 className="text-gold-500 text-xl font-semibold mb-3">
              Implementation
            </h3>
            <p className="text-gray-300">
              Guided execution of your program with expert coaching, proper form
              instruction, and progressive overload to ensure safety and
              effectiveness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="group">
            <div className="h-64 mb-6 relative overflow-hidden rounded-lg">
              <img
                src="/images/monitoring.jpg"
                alt="Fitness progress monitoring in Miami"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-xl font-bold">04</span>
              </div>
            </div>
            <h3 className="text-gold-500 text-xl font-semibold mb-3">
              Monitoring
            </h3>
            <p className="text-gray-300">
              Continuous tracking of your progress through regular assessments,
              measurements, and feedback to ensure you're on track and to make
              necessary adjustments.
            </p>
          </div>

          <div className="group">
            <div className="h-64 mb-6 relative overflow-hidden rounded-lg">
              <img
                src="/images/refinement.jpg"
                alt="Fitness program refinement in Miami"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-xl font-bold">05</span>
              </div>
            </div>
            <h3 className="text-gold-500 text-xl font-semibold mb-3">
              Refinement
            </h3>
            <p className="text-gray-300">
              Ongoing optimization of your program based on your progress,
              response to training, and evolving goals to ensure continued
              results and prevent plateaus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
