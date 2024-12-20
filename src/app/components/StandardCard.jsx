import React from 'react';
const cardData = [
    {
        title: "Teamwork",
        description: "Forge stronger bonds and drive collective progress through active cooperation within the Balkan community.",
        icon: "/assets/teamwork-icon.svg", // You can replace these with real SVG or icon paths
    },
    {
        title: "Balkan Heritage",
        description: "Maintain and celebrate our rich traditions and cultural heritage, ensuring they thrive for generations.",
        icon: "/assets/heritage-icon.svg",
    },
    {
        title: "Eco Care",
        description: "Nurture strong family bonds and live in harmony with nature. We protect the real values that define our community and environment.",
        icon: "/assets/eco-icon.png",
    },
    {
        title: "Local Growth",
        description: "Stimulate local economies by supporting small businesses and innovative enterprises that create jobs and growth.",
        icon: "/assets/growth-icon.svg",
    },
    {
        title: "Art and Culture",
        description: "Celebrate the rich artistic heritage of the Balkans with festivals, exhibitions, and cultural exchanges that showcase our diverse creativity.",
        icon: "/assets/art-icon.svg",
    },
    {
        title: "Learn and Grow",
        description: "Empower our community with educational programs that promote cultural awareness, innovation, and personal development.",
        icon: "/assets/learn-icon.svg",
    },
];

const StandardCard = () => {
    return (
        <div className="w-full  md:p-0 lg:p-0 mt-4">
            <div className="text-center mx-auto max-w-4xl-md mb-10">
                <h1 className="text-[28px] md:text-responsive-38 lg:text-responsive-38 font-semibold poppins-semibold title-font mb-2 text-white">
                    Our Shared Standards
                </h1>
                <p className="text-white text-center poppins-regular text-[20px] ">Discover the core principles that unite this community. Our shared vision fosters a welcoming space, driven by family values and collaborative growth.</p>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row text-center md:text-left lg:text-left items-center space-x-4 p-4"
                    >
                        <div className="py-3 bg-white rounded-full flex justify-center items-center px-5 min-w-[110px] max-w-[110px] min-h-[110px] max-h-[110px] ">
                            {/* Icon for the card */}
                            <img
                                src={card.icon}
                                alt={card.title}
                                className="min-w-[47px] h-[64px]"
                            />
                        </div>
                        <div className='text-center lg:text-left'>
                            <h3 className="text-2xl md:text-responsive-38 mt-5 md:mt-2 lg:mt-0 lg:text-responsive-38 font-semibold poppins-semibold lg:max-w-[400px] text-white">
                                {card.title}
                            </h3>
                            <p className=" mt-3 text-white poppins-regular text-[16px]">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StandardCard;
