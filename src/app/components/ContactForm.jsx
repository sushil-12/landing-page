import CookieBanner from './CookieBanner';
import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [isVisible, setIsVisible] = useState(true);
 
    useEffect(() => {
        // Check if the 'acceptedCookies' cookie is set
        const acceptedCookies = document.cookie.split('; ').find(row => row.startsWith('acceptedCookies='));
        if (acceptedCookies) {
            setIsVisible(false);
        }
    }, []);

    const handleAccept = () => {
        // Set the 'acceptedCookies' cookie to expire in 30 days
        document.cookie = "acceptedCookies=true; path=/; max-age=" + 30 * 24 * 60 * 60;
        setIsVisible(false);
    };
   console.log(isVisible);

    return (
        <div className='h-[100vh] '>
            <div className={`flex w-full flex-col justify-center place-content-center items-center relative ${isVisible ? 'h-[90vh]': 'h-[100vh]'}`}>
                {/* Content */}
                <div className="text-center z-10 max-w-4xl px-4 md:px-8 lg:px-36">
                    <h2 className="text-white text-[38px] lg:text-[48px] font-semibold poppins-semibold mb-4">
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
                    <div className="flex items-center justify-center space-x-2">
                        <button className="custom-button-other text-center flex flex-col items-center">
                            <span className="text-2xl flex-grow mb-1">Get in Touch</span>
                            <span className="w-full h-[1px] bg-secondary mb-1"></span>
                            <span className="text-[1rem] pb-0">or Chat with Us</span>
                        </button>
                    </div>
                </div>
            </div>
            {isVisible && <div className="h-[10vh] "><CookieBanner handleAccept={handleAccept} /></div>}
        </div>
    );
};

export default ContactForm;