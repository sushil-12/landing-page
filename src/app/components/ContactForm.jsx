import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex items-center justify-center py-10">
            <div className="container mx-auto px-5">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white">Be a Part of Our Story</h2>
                    <p className="text-lg text-white mt-2">
                        Whether you're from the Balkans or exploring our region from afar, whether you wish to join, inquire, or collaborate, we are eager to hear from you.
                        <br />
                        <strong>Let's make the Balkans not just a place on the map, but a vibrant community of connected hearts and minds.</strong>
                    </p>
                </div>

                {/* Form */}
                <form className="p-8 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-semibold text-white mb-1">First Name</label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full px-4 py-2 border bg-light-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-[#bfa466]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-white mb-1">Last Name</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full px-4 py-2 border bg-light-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-[#bfa466]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-white mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 border bg-light-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-[#bfa466]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-white mb-1">Telegram ID</label>
                            <input
                                type="text"
                                placeholder="Enter your Telegram ID"
                                className="w-full px-4 py-2 border bg-light-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-[#bfa466]"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-white mb-1">Message</label>
                        <textarea
                            placeholder="Enter your message (explain more about yourself and why you want to join our Organization)"
                            rows="4"
                            className="w-full px-4 py-2 border bg-light-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-[#bfa466]"
                        ></textarea>
                        <p className="text-sm mt-1 text-gray-600">PS: We may follow up with some questions.</p>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="custom-button"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;