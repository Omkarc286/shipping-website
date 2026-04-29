import React, { useRef } from 'react';
import './MarineInfoSection.css';

import shipImg from '../../assets/blog/pic1.png';

const MarineInfoSection = () => {
    const exitSectionRef = useRef(null);

    return (
        <section
            ref={exitSectionRef}
            className='freight-trigger min-h-screen flex items-center justify-center'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                zIndex: 1
            }}
        >
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
                            Ancient Origins and Importance
                        </h2>
                        <p className="text-white !text-[16px] !md:text-[16px] leading-relaxed max-w-6xl mx-auto">
                            Marine transport has a rich history dating back thousands of years. Early civilizations relied on boats and ships to explore new territories, trade valuable goods, and establish cultural exchanges. Phoenicians, Egyptians, and Greeks were among the prominent seafaring civilizations that contributed to the development of marine transportation. Today, marine transport remains a vital industry, responsible for more than 80% of global trade by volume. It enables the transportation of raw materials, manufactured goods, and fuels across the world, supporting economic growth and international relations.
                        </p>
                    </div>

                    {/* SECTION 2 */}
                    <div>
                        <h2 className="!text-[32px] !md:text-[32px] font-semibold !text-[#C2BCFF] mb-4 !font-['Source_Serif_Pro']">
                            Revolutionary Containerization
                        </h2>
                        <p className="text-white !text-[16px] !md:text-[16px] leading-relaxed max-w-6xl mx-auto">
                            One of the most significant advancements in marine transport was the introduction of containerization. In the 1950s, container ships revolutionized the industry by standardizing cargo units, enabling efficient loading, unloading, and transportation. These standardized containers significantly reduced labor costs, simplified logistics, and accelerated the global supply chain. Abu Dhabi, the capital of the United Arab Emirates, has embraced containerization, boasting state-of-the-art container terminals that handle vast amounts of cargo, contributing to the region's economic development and global trade connectivity.
                        </p>
                    </div>

                    {/* SECTION 3 */}
                    <div>
                        <h2 className="!text-[32px] !md:text-[32px] font-semibold !text-[#C2BCFF] mb-4 !font-['Source_Serif_Pro']">
                            Impressive Supertankers
                        </h2>
                        <p className="text-white !text-[16px] !md:text-[16px] leading-relaxed max-w-6xl mx-auto">
                            When it comes to marine transport, supertankers command attention. These colossal vessels, sometimes exceeding 1,000 feet in length, transport crude oil and other liquids across the oceans. Their immense size allows them to carry enormous quantities of oil, making them vital in meeting global energy demands. Abu Dhabi's strategic location and rich oil reserves have made it a key player in the supertanker industry. The city's ports accommodate these mammoth vessels, facilitating the export of oil and fostering Abu Dhabi's position as a major maritime hub.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MarineInfoSection;