import React from "react";
import { why_choose_adso } from "../../content/infrastructure/infrastructure_whyChooseADSO";

const WhyChooseADSO = () => {
    return (
        <div className="bg-gradient-to-b from-[#FBFAF4] to-[#E0EBF7] py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* TOP SECTION */}
                <div className="grid md:grid-cols-2 gap-10 mb-16">
                    <h2 className="!text-[32px] !md:text-[32px] !font-bold !text-[#111116] leading-snug !font-['Source_Serif_Pro'] text-left">
                        {why_choose_adso.top_section.header_text}
                    </h2>

                    <p className="!text-[#22232C] !italic leading-relaxed !text-[18px] !font-['Rubik'] text-left">
                        {why_choose_adso.top_section.description}
                    </p>
                </div>

                {/* BOTTOM SECTION */}
                <div className="grid md:grid-cols-1 gap-10">
                    <div>
                        <h3 className="!text-[24px] font-bold !text-[#5846FB] mb-4 text-left !font-['Rubik']">
                            {why_choose_adso.bottom_section.title}
                        </h3>

                        <p className="!text-[#22232C] leading-relaxed !text-[20px] !font-['Rubik'] text-left">
                            {why_choose_adso.bottom_section.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseADSO;