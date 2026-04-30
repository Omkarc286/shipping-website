import React from "react";
import { marineservicesdetails_content } from "../../content/generalcontracting/generalcontracting_marineservicesdetails";

const SectionWrapper = ({ title, description, children }) => (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#FBFAF4] to-[#E0EBF7]">
        <div className="max-w-7xl mx-auto">
            <h2 className="!text-[24px] md:text-[24px] !font-bold !text-[#5846FB] !mb-[20px] !font-['Rubik'] text-left">
                {title}
            </h2>

            <p className="!text-[#22232C] mb-10 leading-relaxed text-[18px] italic font-['Rubik'] text-left whitespace-pre-line">
                {description}
            </p>

            <div
                className={`grid md:grid-cols-2 ${title === "Offshore Infrastructure Design"
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-3"
                    } gap-6 text-left`}
            >
                {children}
            </div>
        </div>
    </div>
);

const Card = ({ title, items }) => (
    <div
        className="bg-[#f3f4f6] rounded-2xl p-6 shadow-sm 
        transition-all duration-300 ease-in-out 
        hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] 
        hover:bg-white hover:ring-2 hover:ring-[#5846FB]/20 
        cursor-pointer"
    >
        <h3 className="font-semibold text-gray-800 mb-4 transition-colors duration-300 hover:text-[#5846FB]">
            {title}
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm">
            {items.map((item, index) => (
                <li key={index}>• {item}</li>
            ))}
        </ul>
    </div>
);

const MarineServicesDetails = () => {
    return (
        <>
            {marineservicesdetails_content.map((section, index) => (
                <SectionWrapper
                    key={index}
                    title={section.title}
                    description={section.description}
                >
                    {section.cards.map((card, i) => (
                        <Card key={i} title={card.title} items={card.items} />
                    ))}
                </SectionWrapper>
            ))}
        </>
    );
};

export default MarineServicesDetails;