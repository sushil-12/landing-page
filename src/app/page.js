"use client";
import { useEffect, useRef } from "react";
import ContactForm from "./components/ContactForm";
import InfoSection from "./components/InfoSection";
import StandardCard from "./components/StandardCard";
import anime from "animejs";
import Head from "next/head";

function Home() {
  const containerRef = useRef(null);
  const currentSectionIndex = useRef(0);
  const isScrolling = useRef(false); // Flag to prevent multiple scrolls

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    function scrollToSection(index) {
      currentSectionIndex.current = index;
      sections[index].scrollIntoView({ behavior: "smooth" });
      disappear();
      appear(index + 1); // Adjust index for nth-child selector
    }

    function appear(index) {
      anime({
        targets: `.section:nth-child(${index}) h1`,
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
    
    // Clean up event listener
    return () => container.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <main ref={containerRef} className="sections-container">
      <Head>
        <title>Home</title>
      </Head>
      <div className="sections">
        <section id="section1" className="section text-gray-700 body-font bg-primary">
          <div className="mx-auto flex px-36 md:flex-row flex-col items-center padding-upper">
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
        <section id="section2" className="section text-gray-700 px-36 body-font bg-secondary py-[40px]">
          <StandardCard />
        </section>
        <section id="section3" className="section text-gray-700 bg-primary py-[119px] px-36">
          <InfoSection />
        </section>
        <section id="section4" className="section text-gray-700 body-font bg-secondary">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}

export default Home;