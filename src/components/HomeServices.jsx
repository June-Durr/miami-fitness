const HomeServices = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <div className="inline-block">
            <svg
              className="w-10 h-10 text-gold-500 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-light uppercase mb-4">
            Luxury In-Home Fitness Services
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Experience personalized fitness training in the comfort of your own
            space. Our Miami-based trainers bring premium workout experiences
            directly to you, eliminating commutes and maximizing your valuable
            time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="uppercase text-gray-800 font-semibold mb-4">
              Assess
            </h3>
            <img
              src="/images/assess.jpg"
              alt="Fitness assessment in Miami"
              className="w-full h-48 object-cover mb-6 rounded-md"
            />
            <p className="text-gray-700">
              We begin with a comprehensive assessment of your current fitness
              level, health history, and goals. This allows us to create a
              personalized plan tailored specifically to your unique needs and
              aspirations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="uppercase text-gray-800 font-semibold mb-4">
              Design
            </h3>
            <img
              src="/images/design.jpg"
              alt="Workout program design in Miami"
              className="w-full h-48 object-cover mb-6 rounded-md"
            />
            <p className="text-gray-700">
              Our expert trainers craft a custom fitness program that balances
              your goals with proven exercise science. Whether you're looking to
              lose weight, build muscle, or improve overall health, we design
              the optimal approach.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="uppercase text-gray-800 font-semibold mb-4">
              Execute
            </h3>
            <img
              src="/images/execute.jpg"
              alt="Personal training session in Miami"
              className="w-full h-48 object-cover mb-6 rounded-md"
            />
            <p className="text-gray-700">
              Experience transformative training sessions with expert guidance,
              proper form correction, and constant motivation. We bring all
              necessary equipment to your location and ensure every workout is
              challenging, effective, and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
