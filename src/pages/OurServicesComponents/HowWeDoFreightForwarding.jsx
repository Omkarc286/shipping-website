import React, { useState } from "react";

// import your images here
import img1 from "../../assets/ourservices/image1.png";
import img2 from "../../assets/ourservices/image2.png";
import img3 from "../../assets/ourservices/image3.png";
import img4 from "../../assets/ourservices/image4.png";

const cardsData = [
    {
        id: 1,
        image: img1,
        textTop:
            "The world as we know it now, is not as restrictive at borders, which has encouraged global trade and boosted global economy. It is now easier to enter into the international markets, as compared to previous decades and that is why it is important to understand the international freight forwarding situation.",
    },
    {
        id: 2,
        image: img2,
        textBottom:
            "It is highly recommended to hire the services of a third party logistics partner like ADSO AUH, because despite the ease in transportation, the import/export laws have become stringent as well as the strictness at border control. With the assistance of ADSO AUH, companies can conduct international freight forwarding business with ease.",
    },
    {
        id: 3,
        image: img3,
        textBottom:
            "Team of dedicated Professionals to handle all aspects of Project Forwarding including Logistics, International Freight arrangements, Procurement, Marine & Air Brokerage. Global Agency Network to handle and expedite Project Cargo Movements.",
    },
    {
        id: 4,
        image: img4,
        textTitle: "For International Forwarding ADSO covers",
        textBottom:
            "Imports, exports, customs clearance, local & cross border trucking, storage & distribution, heavy lift, break bulk handling, project forwarding & management consultancy",
    },
];

const HowWeDoFreightForwarding = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="bg-[#0b0220] text-white py-16 px-6 md:px-16 z-10 relative">
            <h2
                className="text-center !text-[60px] font-light !mb-[3.5rem] tracking-wide leading-[1.1]"
                style={{ fontFamily: "Source Serif Pro" }}
            >
                How We Do Freight Forwarding
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {cardsData.map((card) => {
                    const isHovered = hoveredCard === card.id;

                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
                                ${isHovered ? "bg-[#2F80ED] text-white scale-[1.02]" : "bg-gray-200 text-black"}
                            `}
                        >
                            {/* Top Text */}
                            {card.textTop && (
                                <div className="p-6 text-sm md:text-base text-left newtexttop">
                                    {card.textTop}
                                </div>
                            )}

                            {/* Image */}
                            <img
                                src={card.image}
                                alt=""
                                className="w-full h-[250px] object-cover"

                            />

                            {/* Bottom Text */}
                            {card.textBottom && (
                                <div className="p-6 text-sm md:text-base text-left">
                                    {card.textTitle && (
                                        <h4
                                            className={`font-semibold mb-2 ${isHovered ? "text-white" : "text-blue-500"
                                                }`}
                                        >
                                            {card.textTitle}
                                        </h4>
                                    )}
                                    {card.textBottom}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HowWeDoFreightForwarding;