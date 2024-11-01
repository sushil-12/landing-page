import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telegramId: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Validate on change
        validate({ ...formData, [name]: value });
    };

    const validate = (data) => {
        const newErrors = {};
        if (!data.firstName) newErrors.firstName = 'First name is required';
        if (!data.lastName) newErrors.lastName = 'Last name is required';
        if (!data.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!data.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        // Final validation before submission
        validate(formData);
        console.log(errors);
        if (Object.keys(errors).length > 0) return; // Stop if errors exist

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Message sent successfully!');
                setFormData({ firstName: '', lastName: '', email: '', telegramId: '', message: '' }); // Clear form
            } else {
                setErrorMessage('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="flex w-full flex-col justify-center place-content-center items-center overflow-x-hidden">
            <div className="text-center z-10 max-w-4xl px-4 md:px-8 lg:px-36">
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

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        name="firstName"
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        className="p-2 rounded"
                    />
                    {errors.firstName && <p className="text-danger text-left m-0">{errors.firstName}</p>}
                    
                    <input 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        className="p-2 rounded"
                    />
                    {errors.lastName && <p className="text-danger text-left m-0">{errors.lastName}</p>}
                    
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 rounded"
                    />
                    {errors.email && <p className="text-danger text-left m-0">{errors.email}</p>}
                    
                    <input 
                        type="text" 
                        name="telegramId"
                        placeholder="Telegram ID (optional)" 
                        value={formData.telegramId}
                        onChange={handleChange}
                        className="p-2 rounded"
                    />
                    
                    <textarea 
                        name="message"
                        placeholder="Your Message" 
                        value={formData.message}
                        onChange={handleChange}
                        className="p-2 rounded"
                    />
                    {errors.message && <p className="text-danger text-left m-0">{errors.message}</p>}
                    
                    <button type="submit" className="custom-button min-w-[282px]">
                        GET IN TOUCH
                    </button>
                    {successMessage && <p className="text-primary">{successMessage}</p>}
                    {errorMessage && <p className="text-danger text-left m-0">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;