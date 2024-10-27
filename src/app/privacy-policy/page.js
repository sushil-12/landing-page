import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="bg-primary min-h-screen flex justify-center p-8 relative">
            <img
                src="/assets/logo.svg" // Replace with your logo path
                alt="Logo"
                className="absolute top-4 left-4 w-24 h-24"
            />

            <div className="container w-full bg-primary text-white p-8 py-24 max-w-6xl">
                <h1 className="text-4xl font-semibold text-responsive-64 mb-12 poppins-bold">Our Privacy Policy</h1>

                {/* Policy Content with custom scrollbar */}
                <div className="policy_content overflow-y-auto max-h-[55vh]">
                    <section className="mb-8 max-w-3xl">
                        <h2 className="text-responsive-40 font-semibold mb-2 poppins-bold">Lorem Ipsum</h2>
                        <p className="text-responsive-18">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section className="mb-8 max-w-3xl">
                        <h2 className="text-responsive-40 font-semibold mb-2 poppins-bold">Lorem Ipsum</h2>
                        <ul className="text-responsive-18">
                            <li className="list-disc ml-6 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </li>
                            <li className="list-disc ml-6  mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}