import React from 'react';

const InfoSection = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-around w-full">
      {/* Left Section - Balkan Map */}
      <div className="">
        <div className="w-[500px] h-[500px] bg-white flex items-center justify-center">
          <span className="font-bold text-xl">BALKAN MAP</span>
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full md:w-1/2 text-white p-5 max-w-lg">
        <h2 className=" text-[38px] font-semibold poppins-semibold mb-4 ">Join the Balkan Org!
          A Gateway to Connection and Discovery</h2>

        <p className="text-[14px] mb-4">
          <span className="poppins-bold">For Locals:</span> <span className="poppins-regular">Become a key player in the largest network across the Balkans. Reconnect with like-minded individuals and take an active role in shaping our future. Collaborate with your peers, host visitors with the warmth only a local can offer, and use this platform to reflect the true spirit of the Balkans. Drive meaningful change and celebrate our rich traditions together.</span>
        </p>
        <p className="text-[14px]">
        <span className="poppins-bold">For Visitors:</span><span className="poppins-regular"> Joining Balkan Org offers the best introduction to this vibrant region. Experience authentic warmth and lively culture first hand. Gain insider tips, connect with locals, and organize your travels with ease. If our way of life captures your heart, stay longer and become a permanent part of our story, helping to enrich the Balkan experience for all.</span>
        </p>
      </div>
    </div>
  );
};

export default InfoSection;