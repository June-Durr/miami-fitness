import React, { useEffect } from "react";

const SEOEnhancements = () => {
  useEffect(() => {
    // Create a virtual head element to add SEO metadata
    const head = document.querySelector("head");

    // Set the title
    const title = document.title;
    if (!title || !title.includes("Miami")) {
      document.title =
        "Miami Fitness | Premium Personal Training in Miami-Dade County";
    }

    // Define meta tags for enhanced SEO specific to personal trainers in Miami
    const metaTags = [
      {
        name: "description",
        content:
          "Expert personal training services in Miami-Dade County. In-home and virtual training with certified fitness professionals. Serving South Beach, Brickell, Coral Gables and all Miami locations.",
      },
      {
        name: "keywords",
        content:
          "personal trainer Miami, Miami fitness, personal training, Miami-Dade, in-home trainer, mobile personal trainer, certified personal trainer Miami, luxury fitness Miami, fitness coach Miami, personal training services, strength training Miami, weight loss Miami, South Beach personal trainer, Brickell fitness, Coral Gables personal training",
      },
      // Location-specific meta tags
      { name: "geo.region", content: "US-FL" },
      { name: "geo.placename", content: "Miami-Dade County" },
      { name: "geo.position", content: "25.7617;-80.1918" },
      { name: "ICBM", content: "25.7617, -80.1918" },
      // Mobile optimization
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // Open Graph tags for social media sharing
      {
        property: "og:title",
        content: "Miami Fitness | Premium Personal Training Services",
      },
      {
        property: "og:description",
        content:
          "Experience premium personal training at your preferred location in Miami-Dade County. Expert trainers, customized programs, and results-driven approach.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.miamifitness.com" },
      {
        property: "og:image",
        content: "https://www.miamifitness.com/images/og-image.jpg",
      },
      { property: "og:site_name", content: "Miami Fitness" },
      { property: "og:locale", content: "en_US" },
      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@miamifitness" },
      { name: "twitter:creator", content: "@miamifitness" },
      {
        name: "twitter:title",
        content: "Miami Fitness | Premium Personal Training Services",
      },
      {
        name: "twitter:description",
        content:
          "Experience premium personal training at your preferred location in Miami-Dade County. Expert trainers, customized programs, and results-driven approach.",
      },
      {
        name: "twitter:image",
        content: "https://www.miamifitness.com/images/twitter-image.jpg",
      },
      // Additional SEO elements
      { name: "author", content: "Miami Fitness" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      {
        name: "google-site-verification",
        content: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace with your verification code
      },
    ];

    // Remove existing meta tags to avoid duplicates
    const existingMetaTags = document.querySelectorAll(
      "meta[name], meta[property]"
    );
    existingMetaTags.forEach((tag) => {
      const name = tag.getAttribute("name");
      const property = tag.getAttribute("property");

      // Skip essential meta tags like charset and viewport
      if (name === "viewport" || name === "charset") {
        return;
      }

      // Check if this tag is in our new meta tags list
      const isInNewTags = metaTags.some(
        (newTag) =>
          (name && newTag.name === name) ||
          (property && newTag.property === property)
      );

      if (isInNewTags) {
        tag.remove();
      }
    });

    // Add meta tags to head
    metaTags.forEach((tagData) => {
      const meta = document.createElement("meta");
      Object.entries(tagData).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      head.appendChild(meta);
    });

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", "https://www.miamifitness.com");
      head.appendChild(canonicalLink);
    }

    // Add schema.org structured data for LocalBusiness
    const structuredDataScript = document.createElement("script");
    structuredDataScript.type = "application/ld+json";
    structuredDataScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Miami Fitness",
      description: "Premium personal training services in Miami-Dade County",
      url: "https://www.miamifitness.com",
      logo: "https://www.miamifitness.com/images/logo.jpg",
      image: "https://www.miamifitness.com/images/gym.jpg",
      telephone: "+13055551234",
      email: "info@miamifitness.com",
      priceRange: "$$",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 25.7617,
          longitude: -80.1918,
        },
        geoRadius: "30 mi",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Fitness Way",
        addressLocality: "Miami",
        addressRegion: "FL",
        postalCode: "33101",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.7617,
        longitude: -80.1918,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "05:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "07:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/miamifitness",
        "https://www.instagram.com/miamifitness",
        "https://twitter.com/miamifitness",
        "https://www.youtube.com/miamifitness",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fitness Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Personal Training",
              description:
                "One-on-one personal training with certified fitness professionals",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "In-Home Personal Training",
              description:
                "Expert fitness coaching in the comfort of your home",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Virtual Training",
              description:
                "Live video coaching with a certified personal trainer",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nutrition Consultation",
              description:
                "Customized nutrition plans to support your fitness goals",
            },
          },
        ],
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Maria Rodriguez",
          },
          reviewBody:
            "Excellent personal training service! My trainer comes to my home in Brickell and has helped me achieve amazing results.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "David Chen",
          },
          reviewBody:
            "The virtual training sessions are perfect for my busy schedule. Professional, knowledgeable trainers who really care.",
        },
      ],
    });

    head.appendChild(structuredDataScript);

    // Add hreflang tag for language/region
    const hreflangTag = document.createElement("link");
    hreflangTag.rel = "alternate";
    hreflangTag.hreflang = "en-us";
    hreflangTag.href = "https://www.miamifitness.com";
    head.appendChild(hreflangTag);

    // Add additional language support if needed
    const spanishHreflangTag = document.createElement("link");
    spanishHreflangTag.rel = "alternate";
    spanishHreflangTag.hreflang = "es-us";
    spanishHreflangTag.href = "https://www.miamifitness.com/es";
    head.appendChild(spanishHreflangTag);
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default SEOEnhancements;
