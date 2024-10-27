"use client";
import { useEffect, useRef } from "react";
import ContactForm from "./components/ContactForm";
import InfoSection from "./components/InfoSection";
import StandardCard from "./components/StandardCard";
import anime from "animejs";
import Head from "next/head";
import CookieBanner from "./components/CookieBanner";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Home() {
  const containerRef = useRef(null);
  const currentSectionIndex = useRef(0);
  const isScrolling = useRef(false); // Flag to prevent multiple scrolls

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out", // Easing effect
      once: true, // Only animate once per element
    });

    const sections = document.querySelectorAll(".section");

    function scrollToSection(index) {
      currentSectionIndex.current = index;
      sections[index].scrollIntoView({ behavior: "smooth" });
      disappear();
      appear(index + 1); // Adjust index for nth-child selector
    }

    function appear(index) {
      anime({
        targets: `.section:nth-child(${index})`,
        opacity: [0, 1],
        duration: anime.random(300, 600),
        easing: "easeInOutQuad",
      });
    }

    function disappear() {
      anime({
        targets: "marque",
        opacity: [1, 0],
        duration: anime.random(200, 400),
        easing: "easeInOutQuad",
      });
    }

    function handleParallax() {
      sections.forEach((section, index) => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const offsetTop = section.offsetTop;
        
        if (scrollTop >= offsetTop && scrollTop < offsetTop + section.offsetHeight) {
          const distance = scrollTop - offsetTop;

          // Apply 3D transformations
          section.style.transform = `translate3d(0, ${distance * 0.2}px, 0) rotateY(${distance * 0.02}deg) scale(${1 - distance * 0.0002})`;
        }
      });
    }

    function handleScroll(event) {
      event.preventDefault();
      if (isScrolling.current) return; // Prevent further scrolls until animation completes

      isScrolling.current = true; // Set the flag
      const nextIndex =
        event.deltaY > 0
          ? Math.min(currentSectionIndex.current + 1, sections.length - 1)
          : Math.max(currentSectionIndex.current - 1, 0);

      if (nextIndex !== currentSectionIndex.current) {
        scrollToSection(nextIndex);
      }

      setTimeout(() => {
        isScrolling.current = false; // Reset the flag after a timeout
      }, 800); // Adjust timeout duration to match the animation duration
    }

    const container = containerRef.current;
    container.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("scroll", handleParallax); // Attach parallax effect on scroll

    // Clean up event listeners
    return () => {
      container.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <main ref={containerRef} className="sections-container">
      <Head>
        <title>Home</title>
      </Head>
      <div className="sections bg-secondary">
        <section
          id="section1"
          className="section text-gray-700 body-font bg-primary min-h-screen flex items-center "
          data-aos="fade-down"
        >
          <div className="mx-auto flex px-36 md:flex-row flex-col items-center justify-center w-full">
            <div className="lg:flex-grow max-w-6xl">
              <h1 className="text-64 mb-4 font-semibold max-w-xl poppins-semibold text-white">
                From the Roots of
                <br className="hidden lg:inline-block" />
                the Balkans, We
                <br className="hidden lg:inline-block" />
                Rise Together.
              </h1>
              <p className="mb-8 leading-relaxed text-white max-w-xl poppins-regular text-[18px]">
                Unite with the Balkans' strongest network. Empowering progress, innovation, and shared tradition. Be part of a community that drives growth and fosters collaboration across the region.
              </p>
              <button className="custom-button">Request to Join</button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="/assets/balkan-org.svg"
              />
            </div>
          </div>
        </section>
        <section
          id="section2"
          className="section text-gray-700 px-36 body-font bg-secondary min-h-screen flex items-center"
          data-aos="fade-up"
        >
          <StandardCard />
        </section>
        <section
          id="section3"
          className="section text-gray-700 bg-primary min-h-screen flex items-center"
          data-aos="fade-up"
        >
          <InfoSection />
        </section>
        <section
          id="section4"
          className="section text-gray-700 body-font bg-secondary min-h-screen flex items-center"
          data-aos="fade-up"
        >
          <ContactForm />
        </section>
        <CookieBanner />
      </div>
    </main>
  );
}

export default Home;