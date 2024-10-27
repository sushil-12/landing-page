import React from 'react';
import CookieBanner from './CookieBanner';

const ContactForm = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen relative w-full flex-col">
                {/* Background Icon */}
                <img 
                    src="/assets/telegram-icon.svg" 
                    alt="telegram" 
                    className="absolute w-[512px] h-[512px] tele-mobile md:hidden lg:hidden" 
                />
                <img 
                    src="/assets/telegram-icon.svg" 
                    alt="telegram" 
                    className="absolute w-[512px] h-[512px] tele-desktop hidden md:block lg:block" 
                />

                {/* Content */}
                <div className="text-center relative z-10 max-w-3xl px-5">
                    <h2 className="text-white text-responsive-38 font-semibold poppins-semibold mb-4">
                        Be a Part of Our Story
                    </h2>
                    <p className="text-[14px] text-white mb-6 poppins-regular">
                        <span>
                            Whether you're from the Balkans or exploring our region from afar, whether you wish to join, inquire, or collaborate, we are eager to hear from you.
                        </span>
                        <span className="font-bold">
                            Let's make the Balkans not just a place on the map, but a vibrant community of connected hearts and minds.
                        </span>
                    </p>

                    {/* Button */}
                    <button className="custom-button mt-14 min-w-[282px]">
                        GET IN TOUCH
                    </button>
                </div>
                <CookieBanner />
            </div>

            {/* Cookie Banner should be at the bottom */}
            
        </>
    );
};

export default ContactForm;
