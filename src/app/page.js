import ContactForm from "./components/ContactForm";
import InfoSection from "./components/InfoSection";
import StandardCard from "./components/StandardCard";

export default function Home() {
  return (
    <main>
      <section className="text-gray-700 body-font  bg-primary">
        <div className=" mx-auto flex px-36 md:flex-row flex-col items-center padding-upper">
          <div className="lg:flex-grow max-w-6xl">
            <div className="">
              <h1 className="text-64 mb-4 font-semibold  max-w-xl poppins-semibold text-white">
                From the Roots of
                <br className="hidden lg:inline-block" />
                the Balkans, We
                <br className="hidden lg:inline-block" />
                Rise Together.
              </h1>
              <p className="mb-8 leading-relaxed text-white max-w-xl poppins-regular text-[18px]">
                Unite with the Balkans' strongest network. Empowering progress, innovation, and shared tradition. Be part of a community that drives growth and fosters collaboration across the region.
              </p>
              <button className="custom-button">
                Request to Join
              </button>
            </div>

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
      <section className="text-gray-700 px-36 body-font  bg-secondary  py-[119px]">
        <StandardCard />
      </section>
      <section className="text-gray-700 bg-primary py-[119px] px-36 ">
        <InfoSection />
      </section>
      <section className="text-gray-700 body-font bg-secondary">
        <ContactForm />
      </section>
    </main>
  );
}
