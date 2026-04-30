import React from "react";
import { infrastructurecards_content } from "../../content/generalcontracting/generalcontracting_infrastructureCards";

const InfrastructureCards = () => {
    return (
        <section className="w-full bg-gradient-to-b from-[#16171D] to-[#1a0033] py-16 px-6 md:px-16">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                {infrastructurecards_content.cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#1c1c1e] rounded-2xl p-8 text-white text-left 
                        shadow-lg border border-transparent
                        transition-all duration-300 ease-out
                        hover:-translate-y-2 hover:scale-[1.02]
                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                        hover:border-[#6C63FF]/40"
                        style={{ fontFamily: 'Rubik' }}
                    >

                        <h2 className="text-[18px] font-semibold !text-[#C2BCFF] mb-3">
                            {card.title}
                        </h2>

                        <p className="text-[16px] leading-relaxed text-white whitespace-pre-line">
                            {card.description}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default InfrastructureCards;