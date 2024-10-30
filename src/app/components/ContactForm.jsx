import React from 'react';

const ContactForm = () => {
    return (
        <>
            <div className="flex  w-full flex-col justify-center place-content-center items-center overflow-x-hidden">
                {/* Content */}
                <div className="text-center  z-10 max-w-4xl px-4 md:px-8 lg:px-36">
                    <h2 className="text-white text-[38px] lg:text-[48px] font-semibold poppins-semibold mb-4">
                        Be a Part of Our Story
                    </h2>
                    <p className="text-[14px] text-white mb-6 poppins-regular">
                        <span>
                            Whether you're from the Balkans or exploring our region from afar, whether you wish to join, inquire, or collaborate, we are eager to hear from you.
                        </span>
                        &nbsp;
                        <span className="font-bold">
                            Let's make the Balkans not just a place on the map, but a vibrant community of connected hearts and minds.
                        </span>
                    </p>

                    {/* Button */}
                    <button className="custom-button  min-w-[282px]">
                        GET IN TOUCH
                    </button>
                </div>

            </div>
            {/* Cookie Banner should be at the bottom */}

        </>
    );
};

export default ContactForm;