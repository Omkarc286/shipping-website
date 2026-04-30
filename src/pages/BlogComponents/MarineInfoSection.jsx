import React, { useRef } from 'react';
import './MarineInfoSection.css';

import { marine_info } from '../../content/blog/blog_marineInfo';

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
                        src={marine_info.image}
                        alt={marine_info.image_alt}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* CONTENT */}
                <div className="text-center px-6 md:px-20 py-16 space-y-14">

                    {marine_info.sections.map((section, index) => (
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
        </section>
    );
};

export default MarineInfoSection;