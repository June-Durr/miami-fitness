import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/edgy-styles.css";

// Create a virtual head element to add SEO metadata
const head = document.querySelector("head");

// Add meta tags for SEO
const metaTags = [
  {
    name: "description",
    content:
      "Premium personal training services in Miami-Dade County. On-site and virtual training with certified fitness professionals.",
  },
  {
    name: "keywords",
    content:
      "personal trainer, Miami, fitness, personal training, Miami-Dade, on-site training, virtual training, certified trainer, luxury fitness",
  },
  { name: "author", content: "Miami Fitness" },
  { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  // Open Graph tags for social media sharing
  {
    property: "og:title",
    content: "Miami Fitness | Premium Personal Training Services",
  },
  {
    property: "og:description",
    content:
      "Experience premium personal training at your preferred location in Miami-Dade County. Professional trainers, customized programs, and results-driven approach.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.miamifitness.com" },
  {
    property: "og:image",
    content: "https://www.miamifitness.com/images/og-image.jpg",
  },
  // Twitter Card tags
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Miami Fitness | Premium Personal Training Services",
  },
  {
    name: "twitter:description",
    content:
      "Experience premium personal training at your preferred location in Miami-Dade County. Professional trainers, customized programs, and results-driven approach.",
  },
  {
    name: "twitter:image",
    content: "https://www.miamifitness.com/images/twitter-image.jpg",
  },
  // Location specific
  { name: "geo.region", content: "US-FL" },
  { name: "geo.placename", content: "Miami" },
];

// Add meta tags to head
metaTags.forEach((tagData) => {
  const meta = document.createElement("meta");
  Object.entries(tagData).forEach(([key, value]) => {
    meta.setAttribute(key, value);
  });
  head.appendChild(meta);
});

// Add title
const title = document.createElement("title");
title.textContent = "Miami Fitness | Premium Personal Training Services";
head.appendChild(title);

// Add canonical link
const canonicalLink = document.createElement("link");
canonicalLink.setAttribute("rel", "canonical");
canonicalLink.setAttribute("href", "https://www.miamifitness.com");
head.appendChild(canonicalLink);

// Import Google Fonts
const googleFontsLink = document.createElement("link");
googleFontsLink.setAttribute("rel", "stylesheet");
googleFontsLink.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
);
head.appendChild(googleFontsLink);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
