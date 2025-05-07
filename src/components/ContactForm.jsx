import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ colorScheme = "gold" }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
    trainingInterest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Define color classes based on colorScheme
  const getColorClasses = () => {
    const colorMap = {
      primary: {
        gold: "bg-gold-500 hover:bg-gold-600 focus:ring-gold-500 text-gold-500",
        green:
          "bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500 text-emerald-500",
        orange:
          "bg-orange-500 hover:bg-orange-600 focus:ring-orange-500 text-orange-500",
      },
    };

    return {
      primary: colorMap.primary[colorScheme] || colorMap.primary.gold,
    };
  };

  const colors = getColorClasses();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setErrorMessage("");

    try {
      // This is where you would integrate EmailJS when ready
      // For demonstration purposes, let's simulate the API call

      /* 
      // Uncomment this code when you're ready to use EmailJS
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      */

      // For now, simulate a successful API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
        trainingInterest: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      setSubmitError(true);
      setErrorMessage(
        "There was an error sending your message. Please try again later."
      );
    }
  };

  // Extract primary color class
  const buttonBgClass = colors.primary.split(" ")[0];
  const buttonHoverClass = colors.primary.split(" ")[1];
  const textColorClass = colors.primary.split(" ")[3];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light uppercase mb-6 text-gray-800">
                Get <span className="font-semibold">Started</span> Today
              </h2>
              <p className="text-gray-700 mb-8">
                Ready to transform your fitness journey? Fill out the form and
                one of our expert trainers will contact you to discuss your
                goals and schedule your first session.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className={`w-6 h-6 ${textColorClass}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Flexible Scheduling
                    </h3>
                    <p className="text-gray-600 mt-1">
                      We accommodate your busy lifestyle with sessions available
                      from 5:00 AM to 9:00 PM, seven days a week.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className={`w-6 h-6 ${textColorClass}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      We Come to You
                    </h3>
                    <p className="text-gray-600 mt-1">
                      No need to fight Miami traffic. Our trainers travel to
                      your preferred location throughout Miami-Dade County.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className={`w-6 h-6 ${textColorClass}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Expert Trainers
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Our certified fitness professionals bring years of
                      experience and specialized knowledge to every session.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700">
                    <svg
                      className={`w-5 h-5 ${textColorClass} mr-3`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    (305) 555-1234
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg
                      className={`w-5 h-5 ${textColorClass} mr-3`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    info@miamifitness.com
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg
                      className={`w-5 h-5 ${textColorClass} mr-3`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Miami, Florida
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-white">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your message has been sent successfully. One of our trainers
                    will contact you shortly.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-semibold mb-6">
                    Request Information
                  </h3>

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-md">
                      <p className="text-red-300">{errorMessage}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === "email"}
                            onChange={handleChange}
                            className={`h-4 w-4 ${textColorClass} focus:ring-offset-gray-800`}
                          />
                          <span className="ml-2">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === "phone"}
                            onChange={handleChange}
                            className={`h-4 w-4 ${textColorClass} focus:ring-offset-gray-800`}
                          />
                          <span className="ml-2">Phone</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="trainingInterest"
                        className="block text-sm font-medium mb-1"
                      >
                        I'm Interested In
                      </label>
                      <select
                        id="trainingInterest"
                        name="trainingInterest"
                        value={formData.trainingInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                      >
                        <option value="">Select an option</option>
                        <option value="on-site">
                          On-Site Personal Training
                        </option>
                        <option value="virtual">
                          Virtual Personal Training
                        </option>
                        <option value="both">Both Training Options</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                        placeholder="Tell us about your fitness goals, experience level, or any questions you have."
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${buttonBgClass} ${buttonHoverClass} text-white py-3 px-6 rounded-full transition duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
