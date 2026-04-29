import React from "react";
import shipImg from '../../assets/blog/pic2.png';

const MarineInfoSection2 = () => {
    return (
        <div className="w-full">

            {/* TOP IMAGE */}
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={shipImg}
                    alt="marine"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CONTENT */}
            <div className="text-center px-6 md:px-20 py-16 space-y-14">

                {/* SECTION 1 */}
                <div>
                    <h2 className="!text-[32px] !md:text-[32px] font-semibold !text-[#C2BCFF] mb-4 !font-['Source_Serif_Pro']">
                        Environmentally Friendly Innovations
                    </h2>
                    <p className="text-white !text-[16px] !md:text-[16px] leading-relaxed max-w-6xl mx-auto">
                        In recent years, marine transport has faced increasing scrutiny regarding its environmental impact. To address this concern, the industry has been actively seeking innovative solutions. Abu Dhabi, a forward-thinking city, has embraced environmentally friendly initiatives in its marine transport sector. The Abu Dhabi Ports Authority has implemented measures such as shore power systems to reduce emissions from docked vessels, and they have invested in research and development to explore sustainable alternatives, including electric and hydrogen-powered ships. These eco-friendly efforts aim to minimize marine pollution and promote a more sustainable future.
                    </p>
                </div>

                {/* SECTION 2 */}
                <div>
                    <h2 className="!text-[32px] !md:text-[32px] font-semibold !text-[#C2BCFF] mb-4 !font-['Source_Serif_Pro']">
                        The New Era of Autonomous Ships
                    </h2>
                    <p className="text-white !text-[16px] !md:text-[16px] leading-relaxed max-w-6xl mx-auto">
                        Advancements in technology are propelling marine transport into a new era with the development of autonomous ships. These vessels, equipped with artificial intelligence and advanced navigation systems, have the potential to revolutionize the industry further. While the transition to fully autonomous ships may take time, the concept holds promise for enhancing safety, optimizing routes, and reducing human error. Abu Dhabi, renowned for embracing cutting-edge technologies, is actively exploring the integration of autonomous vessels into its maritime transport infrastructure, fostering innovation and positioning itself as a leader in the field.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default MarineInfoSection2;