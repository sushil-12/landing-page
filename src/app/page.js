"use client";
import { useEffect, useRef } from "react";
import ContactForm from "./components/ContactForm";
import InfoSection from "./components/InfoSection";
import StandardCard from "./components/StandardCard";
import { motion } from "framer-motion";
import Head from "next/head";
import CookieBanner from "./components/CookieBanner";

function Home() {
  const containerRef = useRef(null);
  const currentSectionIndex = useRef(0);
  const isScrolling = useRef(false); // Flag to prevent multiple scrolls
  const startY = useRef(null); // Initialize startY as a ref
  const sections = useRef([]); // Store the sections

  const sectionsVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  useEffect(() => {
    sections.current = containerRef.current.querySelectorAll(".section");

    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.current.length) return;
      currentSectionIndex.current = index;
      sections.current[index].scrollIntoView({ behavior: "smooth" });
    };

    const handleScroll = (event) => {
      event.preventDefault();
      if (isScrolling.current) return; // Prevent further scrolls until animation completes

      isScrolling.current = true; // Set the flag
      const nextIndex =
        event.deltaY > 0
          ? Math.min(currentSectionIndex.current + 1, sections.current.length - 1)
          : Math.max(currentSectionIndex.current - 1, 0);

      scrollToSection(nextIndex);

      setTimeout(() => {
        isScrolling.current = false; // Reset the flag after a timeout
      }, 800); // Adjust timeout duration to match the animation duration
    };

    const handleTouchStart = (event) => {
      startY.current = event.touches[0].clientY; // Store the start position
    };

    const handleTouchMove = (event) => {
      if (startY.current === null) return; // Do nothing if startY is not set
      const touchY = event.touches[0].clientY;

      if (startY.current - touchY > 50) {
        // Swipe up
        const nextIndex = Math.min(currentSectionIndex.current + 1, sections.current.length - 1);
        scrollToSection(nextIndex);
      } else if (touchY - startY.current > 50) {
        // Swipe down
        const prevIndex = Math.max(currentSectionIndex.current - 1, 0);
        scrollToSection(prevIndex);
      }

      startY.current = null; // Reset startY after handling the touch
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleScroll, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Clean up event listeners
    return () => {
      container.removeEventListener("wheel", handleScroll);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <main ref={containerRef} className="sections-container">
      <Head>
        <title>Home</title>
      </Head>
      <div className="sections bg-secondary">
        <motion.section
          id="section1"
          className="section text-gray-700 body-font bg-primary min-h-screen flex items-center"
          variants={sectionsVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="mx-auto flex px-4 md:px-16 lg:px-36 md:flex-row flex-col items-center justify-center w-full">
            <div className="lg:flex-grow max-w-6xl text-center md:text-left lg:text-left">
              <h1 className="md:text-responsive-64 lg:text-responsive-64 text-responsive-38 mb-4 font-semibold max-w-xl poppins-semibold text-white text-center md:text-left lg:text-left">
                From the Roots of
                <br className="" />
                the Balkans, We
                <br />
                Rise Together.
              </h1>
              <img className="object-cover object-center rounded block md:hidden lg:hidden" alt="hero" src="/assets/balkan-org.svg" />
              <p className="mb-8 leading-relaxed text-white max-w-xl poppins-regular text-[18px] text-center md:text-left lg:text-left">
                Unite with the Balkans' strongest network. Empowering progress, innovation, and shared tradition. Be part of a community that drives growth and fosters collaboration across the region.
              </p>
              <button className="custom-button">Request to Join</button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block lg:block">
              <img className="object-cover object-center rounded" alt="hero" src="/assets/balkan-org.svg" />
            </div>
          </div>
        </motion.section>
        
        <motion.section
          id="section2"
          className="section text-gray-700 px-4 md:px-16 lg:px-36 body-font bg-secondary min-h-screen flex items-center"
          variants={sectionsVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <StandardCard />
        </motion.section>

       <motion.section
          id="section3"
          className="section text-gray-700 px-4 md:px-16 lg:px-36 bg-primary min-h-screen py-20 md:flex lg:flex items-center"
          variants={sectionsVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <InfoSection />
        </motion.section>

        <motion.section
          id="section4"
          className="section text-gray-700 px-4 md:px-16 lg:px-36 body-font bg-secondary min-h-screen flex items-center"
          variants={sectionsVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ContactForm />
        </motion.section> 

        <CookieBanner />
      </div>
    </main>
  );
}

export default Home;