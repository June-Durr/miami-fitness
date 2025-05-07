import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrainingTypes from "./components/TrainingTypes";
import HomeServices from "./components/HomeServices";
import PhilosophySection from "./components/PhilosophySection";
import ContactForm from "./components/ContactForm";
import InstaFeed from "./components/InstaFeed";
import ServiceAreaMap from "./components/ServicesAreaMap";
import Footer from "./components/Footer";
import ColorSchemeSelector from "./components/ColorSchemeSelector";
import GradientBackground from "./components/GradientBackground";
import SEOEnhancements from "./components/SEOEnhancements";

function App() {
  // Add state for color scheme - extended options
  const [colorScheme, setColorScheme] = useState("gold");

  // Store the color scheme in localStorage so it persists between visits
  useEffect(() => {
    // Try to get saved color scheme on initial load
    const savedColorScheme = localStorage.getItem("colorScheme");
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    }
  }, []);

  // Update localStorage when color scheme changes
  useEffect(() => {
    localStorage.setItem("colorScheme", colorScheme);
  }, [colorScheme]);

  return (
    <div className="font-sans text-gray-200">
      <SEOEnhancements />
      <ColorSchemeSelector
        activeScheme={colorScheme}
        onChange={setColorScheme}
      />
      <Header activeColorScheme={colorScheme} />

      <div id="hero">
        <Hero colorScheme={colorScheme} />
      </div>

      <GradientBackground
        colorScheme={colorScheme}
        id="training"
        className="py-16 md:py-24 bg-gray-50"
      >
        <TrainingTypes colorScheme={colorScheme} />
      </GradientBackground>

      <GradientBackground
        colorScheme={colorScheme}
        id="services"
        className="py-16 md:py-24 bg-gray-800"
      >
        <HomeServices colorScheme={colorScheme} />
      </GradientBackground>

      <GradientBackground
        colorScheme={colorScheme}
        id="philosophy"
        className="py-16 md:py-24 bg-gray-900"
      >
        <PhilosophySection colorScheme={colorScheme} />
      </GradientBackground>

      <GradientBackground
        colorScheme={colorScheme}
        id="gallery"
        className="py-16 md:py-24 bg-gray-50"
      >
        <InstaFeed colorScheme={colorScheme} />
      </GradientBackground>

      <GradientBackground
        colorScheme={colorScheme}
        id="about"
        className="py-16 md:py-24 bg-gray-800"
      >
        <ServiceAreaMap colorScheme={colorScheme} />
      </GradientBackground>

      <GradientBackground
        colorScheme={colorScheme}
        id="contact"
        className="py-16 md:py-24 bg-gray-50"
      >
        <ContactForm colorScheme={colorScheme} />
      </GradientBackground>

      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default App;
