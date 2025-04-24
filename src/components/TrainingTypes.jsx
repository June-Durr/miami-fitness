const TrainingTypes = () => {
  return (
    <section id="training" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* On-site training */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src="/images/onsite-training.jpg"
                alt="On-site personal training in Miami"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-gold-500 uppercase tracking-wider font-bold mb-4">
                On-Site Personal Training
              </h3>
              <p className="text-gray-700 mb-6">
                Experience premium fitness coaching at your preferred location.
                Our certified trainers bring all necessary equipment to your
                home, condo gym, office, or local park, making fitness
                convenient and accessible anywhere in Miami-Dade.
              </p>
              <p className="text-gray-700 mb-6">
                Benefit from customized workouts, expert guidance, and
                accountability to achieve your fitness goals without the hassle
                of commuting to a gym.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded transition duration-300"
              >
                Schedule Now
              </a>
            </div>
          </div>

          {/* Virtual training */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 md:order-2">
              <img
                src="/images/virtual-training.jpg"
                alt="Virtual personal training from Miami"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:order-1">
              <h3 className="text-gold-500 uppercase tracking-wider font-bold mb-4">
                Virtual Personal Training
              </h3>
              <p className="text-gray-700 mb-6">
                Connect with Miami's elite personal trainers from anywhere in
                the world. Our virtual training programs deliver the same level
                of personalization and expertise as our in-person sessions, all
                through high-quality video coaching.
              </p>
              <p className="text-gray-700 mb-6">
                Perfect for busy professionals, frequent travelers, or those who
                prefer working out from home. Receive real-time feedback, form
                corrections, and motivation directly from your trainer.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingTypes;
