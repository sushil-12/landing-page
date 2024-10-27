import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if the 'acceptedCookies' cookie is set
        const acceptedCookies = document.cookie.split('; ').find(row => row.startsWith('acceptedCookies='));
        if (!acceptedCookies) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        // Set the 'acceptedCookies' cookie to expire in 30 days
        document.cookie = "acceptedCookies=true; path=/; max-age=" + 30 * 24 * 60 * 60;
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="absolute bottom-0 z-50 flex items-center justify-center  w-screen">
            <div className="w-full flex justify-around items-center p-4 shadow-xl bg-primary ">
                <p className="text-white text-[1rem] poppins-regular leading-6">
                    We use cookies to ensure you get the best experience on our website. By using our site, you agree to the &nbsp;
                    <a href="/privacy-policy" className="underline text-lightersecondary">use of policy</a>.
                </p>
                <button onClick={handleAccept} className="bg-danger text-white text-sm md:text-[16px] lg:text-[20px] font-semibold py-2 px-6 rounded-[55px] "  >
                    Okay, Thanks
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;