import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

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
        <div className="fixed bottom-0 z-50 flex items-center justify-center bg-danger w-full ">
            <div className="w-full flex flex-col lg:flex-row md:flex-row justify-around items-center p-4 shadow-xl ">
                <p className="text-white text-[1rem] poppins-regular leading-6">
                    We use cookies to ensure you get the best experience on our website. By using our site, you agree to the &nbsp;
                    <Link href="/privacy-policy" className="underline text-lightersecondary">use of policy.</Link>
                </p>
                <button onClick={handleAccept} className="bg-primary text-white text-sm md:text-[16px] lg:text-[20px] font-semibold  px-6 rounded-[55px] p-4 "  >
                    Okay, Thanks
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;