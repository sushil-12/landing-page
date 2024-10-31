"use client";
import ContactForm from "./components/ContactForm";
import InfoSection from "./components/InfoSection";
import StandardCard from "./components/StandardCard";
import homeJSonLd from "./schema/homeJsonLd";
import Script from "next/script";
import Head from "next/head";
import CookieBanner from "./components/CookieBanner";

function Home() {
  return (
    <>
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJSonLd) }}
        />
      </Head>
      <CookieBanner />
      <main id="home-sections">
        <div className="sections bg-secondary">
          <div
            id="section1"
            className="text-gray-700 body-font min-h-screen flex items-start md:items-center lg:items-center bg-primary py-20 lg:py-0"
          >
            <div className="mx-auto flex px-4 md:px-16 lg:px-36 md:flex-row flex-col items-start lg:items-center justify-center w-full">
              <div className="lg:flex-grow max-w-6xl text-center md:text-left lg:text-left">
                <h1 className="text-[38px] md:text-responsive-64 lg:text-responsive-64 mb-4 font-semibold max-w-xl poppins-semibold text-white text-center md:text-left lg:text-left">
                  From the Roots of
                  <br />
                  the Balkans, We
                  <br />
                  Rise Together.
                </h1>
                <img
                  className="object-cover object-center rounded block md:hidden lg:hidden w-96"
                  alt="hero"
                  src="/assets/balkan-org.svg"
                />
                <p className="mb-8 leading-relaxed text-white max-w-xl poppins-regular text-[18px] text-center md:text-left lg:text-left">
                  Unite with the Balkans' strongest network. Empowering
                  progress, innovation, and shared tradition. Be part of a
                  community that drives growth and fosters collaboration across
                  the region.
                </p>
                <button className="custom-button">Request to Join</button>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block lg:block">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/assets/balkan-org.svg"
                />
              </div>
            </div>
          </div>

          <div
            id="section2"
            className="text-gray-700 px-4 md:px-16 lg:px-36 body-font bg-secondary min-h-screen flex items-start py-20 lg:py-0 xl:items-center"
          >
            <StandardCard />
          </div>

          <div
            id="section3"
            className="text-gray-700 px-4 md:px-4 lg:px-36 bg-primary min-h-screen md:flex lg:flex items-start lg:items-center py-20 lg:py-0"
          >
            <InfoSection />
          </div>

          <div
            id="section4"
            className="text-gray-700 px-4 md:px-4 lg:px-36 bg-secondary min-h-screen place-content-center md:flex lg:flex items-center lg:items-center py-20 lg:py-0">
            <ContactForm />
          </div>
          
        </div>
      </main>
    </>
  );
}

export default Home;