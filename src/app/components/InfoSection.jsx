import React from 'react';

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-14 lg:gap-28 w-full text-center md:text-left lg:text-left">
      {/* Left Section - Balkan Map */}
      <div className="hidden md:block lg:block">
        <div className="w-clamp-365 h-clamp-365 md:w-clamp-365 md:h-clamp-365 lg:w-clamp-500 lg:h-clamp-500 bg-white flex  items-center justify-center ">
          <span className="font-bold text-xl">BALKAN MAP</span>
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full md:w-1/2 text-white  max-w-lg">
        <h1 className="text-[28px] md:text-responsive-28 lg:text-responsive-38 font-semibold poppins-semibold mb-4 ">Join the Balkan Org!<br /> A Gateway to Connection and Discovery</h1>
        <p className="text-[16px] mb-4 text-left">
          <span className="poppins-bold">For Locals:</span> <span className="poppins-regular">Become a key player in the largest network across the Balkans. Reconnect with like-minded individuals and take an active role in shaping our future. Collaborate with your peers, host visitors with the warmth only a local can offer, and use this platform to reflect the true spirit of the Balkans. Drive meaningful change and celebrate our rich traditions together.</span>
        </p>
        <div className="block md:hidden lg:hidden mb-4 items-center justify-center place-content-center text-center">
          <div className="w-[365px] h-[365px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] bg-white flex  items-center justify-center ">
            <span className="font-bold text-xl text-black">BALKAN MAP</span>
          </div>
        </div>
        <p className="text-[16px] text-left">
          <span className="poppins-bold">For Visitors:</span><span className="poppins-regular"> Joining Balkan Org offers the best introduction to this vibrant region. Experience authentic warmth and lively culture first hand. Gain insider tips, connect with locals, and organize your travels with ease. If our way of life captures your heart, stay longer and become a permanent part of our story, helping to enrich the Balkan experience for all.</span>
        </p>
      </div>
    </div>
  );
};

export default InfoSection;