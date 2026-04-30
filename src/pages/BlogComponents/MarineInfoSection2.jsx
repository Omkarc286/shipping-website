import React from "react";
import { marine_info_2 } from "../../content/blog/blog_marineInfo2";

const MarineInfoSection2 = () => {
    return (
        <div className="w-full">

            {/* IMAGE */}
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={marine_info_2.image}
                    alt={marine_info_2.image_alt}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CONTENT */}
            <div className="text-center px-6 md:px-20 py-16 space-y-14">

                {marine_info_2.sections.map((section, index) => (
                    <div key={index}>
                        <h2 className="!text-[32px] font-semibold !text-[#C2BCFF] mb-4 !font-['Source_Serif_Pro']">
                            {section.title}
                        </h2>

                        <p className="text-white !text-[16px] leading-relaxed max-w-6xl mx-auto">
                            {section.description}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default MarineInfoSection2;