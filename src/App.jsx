import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrainingTypes from "./components/TrainingTypes";
import HomeServices from "./components/HomeServices";
import PhilosophySection from "./components/PhilosophySection";
import ContactForm from "./components/ContactForm";
import InstaFeed from "./components/InstaFeed";
import ServiceAreaMap from "./components/ServicesAreaMap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <TrainingTypes />
      <HomeServices />
      <PhilosophySection />
      <InstaFeed />
      <ServiceAreaMap />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
