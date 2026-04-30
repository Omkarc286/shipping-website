import React, { useState } from "react";
import { howwedofreightforwarding_content } from "../../content/ourservices/ourservices_howwedofreightforwarding";

const HowWeDoFreightForwarding = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="bg-[#0b0220] text-white py-16 px-6 md:px-16 z-10 relative">

            <h2
                className="text-center !text-[60px] font-light !mb-[3.5rem] tracking-wide leading-[1.1]"
                style={{ fontFamily: "Source Serif Pro" }}
            >
                {howwedofreightforwarding_content.heading}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {howwedofreightforwarding_content.cards.map((card) => {
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
                                <div className="p-6 text-sm md:text-base text-left newtexttop whitespace-pre-line">
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

                                    <div className="whitespace-pre-line">
                                        {card.textBottom}
                                    </div>
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