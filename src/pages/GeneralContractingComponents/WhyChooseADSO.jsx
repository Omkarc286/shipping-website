import React from "react";
import { whychooseadso_content } from "../../content/generalcontracting/generalcontracting_whychooseadso";

const WhyChooseADSO = () => {
    return (
        <div className="bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb] py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-10 mb-16">
                    <h2 className="!text-[32px] !md:text-[32px] !font-bold !text-[#111116] leading-snug !font-['Source_Serif_Pro'] text-left">
                        {whychooseadso_content.top.title}
                    </h2>

                    <p className="!text-[#22232C] !italic leading-relaxed !text-[18px] !font-['Rubik'] text-left whitespace-pre-line">
                        {whychooseadso_content.top.description}
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="grid md:grid-cols-2 gap-10">
                    {whychooseadso_content.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="!text-[24px] font-bold !text-[#5846FB] mb-4 text-left !font-['Rubik']">
                                {section.title}
                            </h3>

                            <p className="!text-[#22232C] leading-relaxed !text-[20px] !font-['Rubik'] text-left whitespace-pre-line">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WhyChooseADSO;