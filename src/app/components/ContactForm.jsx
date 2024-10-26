import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#b49567] relative">
            {/* Background Icon */}
            <img
                src="/assets/telegram-icon.svg"
                alt="telegram"
                className="absolute w-[512px] h-[512px]"
                style={{ top: '48%', left: '30%', transform: 'translate(-50%, -50%)'}}
            />
            
            {/* Content */}
            <div className="text-center relative z-10 max-w-3xl px-5">
                <h2 className="text-white text-[38px] font-semibold mb-4">Be a Part of Our Story</h2>
                <p className="text-[14px] text-white mb-6">
                    <span>Whether you're from the Balkans or exploring our region from afar, whether you wish to join, inquire, or collaborate, we are eager to hear from you.</span>
                    <span className="font-bold"> Let's make the Balkans not just a place on the map, but a vibrant community of connected hearts and minds.</span>
                </p>
                
                {/* Button */}
                <button className="custom-button mt-14 min-w-[282px]">
                    GET IN TOUCH
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
