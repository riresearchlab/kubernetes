import { useState, useEffect, useRef } from "react";
import { Navigation } from "./Navigation";

export const NavigationWrapper = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRefs = useRef<IntersectionObserver[]>([]);

  // Define sections to be included in navigation
  const sections = [
    { id: "hero", name: "Home" },
    { id: "fundamentals", name: "Fundamentals" },
    { id: "learning-path", name: "Learning Path" },
    { id: "footer", name: "Contact" },
  ];

  useEffect(() => {
    // Disconnect any existing observers
    observerRefs.current.forEach(observer => observer.disconnect());
    observerRefs.current = [];
    
    // Create new observers for each section
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // When section is at least 40% visible, set it as active
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActiveSection(section.id);
          }
        },
        {
          root: null, // viewport
          rootMargin: "0px",
          threshold: [0.4, 0.8], // Trigger at 40% and 80% visibility
        }
      );

      observer.observe(element);
      observerRefs.current.push(observer);
    });

    return () => {
      // Clean up observers on unmount
      observerRefs.current.forEach(observer => observer.disconnect());
    };
  }, []);

  return <Navigation sections={sections} activeSection={activeSection} />;
};