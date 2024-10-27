"use client";
import { useRef } from "react";
import ContactForm from "./components/ContactForm";
import InfoSection from "./components/InfoSection";
import StandardCard from "./components/StandardCard";
import Head from "next/head";

function Home() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="sections-container">
      <Head>
        <title>Home</title>
      </Head>
      <div className="sections bg-secondary">
        <section
          id="section1"
          className="section text-gray-700 body-font bg-primary min-h-screen flex items-center"
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
        </section>

        <section
          id="section2"
          className="section text-gray-700 px-4 md:px-16 lg:px-36 body-font bg-secondary min-h-screen flex items-center"
        >
          <StandardCard />
        </section>

        <section
          id="section3"
          className="section text-gray-700 px-4 md:px-16 lg:px-36 bg-primary min-h-screen py-20 md:flex lg:flex items-center"
        >
          <InfoSection />
        </section>

        <section
          id="section4"
          className="section text-gray-700 px-4 md:px-16 lg:px-36 body-font bg-secondary min-h-screen flex flex-col items-center"
        >
          <ContactForm />
        </section>


      </div>
    </main>
  );
}

export default Home;