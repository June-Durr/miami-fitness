const InstaFeed = () => {
  // Mock Instagram feed data
  const instaFeed = [
    {
      id: 1,
      imageUrl: "/images/insta-1.jpg",
      likes: 245,
      caption:
        "Morning workout with a client at South Beach. #MiamiFitness #PersonalTrainer",
    },
    {
      id: 2,
      imageUrl: "/images/insta-2.jpg",
      likes: 187,
      caption:
        "Helping clients achieve their fitness goals one session at a time. #FitnessJourney",
    },
    {
      id: 3,
      imageUrl: "/images/insta-3.jpg",
      likes: 312,
      caption:
        "Beautiful morning for an outdoor training session in Coconut Grove. #MiamiTrainer",
    },
    {
      id: 4,
      imageUrl: "/images/insta-4.jpg",
      likes: 276,
      caption:
        "Strength doesn't come from what you can do. It comes from overcoming what you once couldn't. #FitnessMotivation",
    },
    {
      id: 5,
      imageUrl: "/images/insta-5.jpg",
      likes: 198,
      caption:
        "Customized nutrition plans are just as important as your workout routine. #HealthyLifestyle",
    },
    {
      id: 6,
      imageUrl: "/images/insta-6.jpg",
      likes: 254,
      caption:
        "Weekend warrior mode activated! Beach bootcamp in full swing. #MiamiBeach #FitLife",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light uppercase mb-4">
            Follow Our Journey
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Connect with us on Instagram for daily workout inspiration, client
            success stories, and a behind-the-scenes look at Miami's premier
            personal training experience.
          </p>
          <a
            href="https://www.instagram.com/miamifitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gold-500 font-semibold mt-4 hover:underline"
          >
            @miamifitness
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instaFeed.map((post) => (
            <div
              key={post.id}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={post.imageUrl}
                alt={`Instagram post: ${post.caption}`}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-center p-4">
                  <div className="flex items-center justify-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                  <p className="text-sm">{post.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaFeed;
