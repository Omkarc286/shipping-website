import React from 'react';
import { trustedby_content } from '../../content/infrastructure/infrastructure_trustedby';

const TrustedBySection = () => {

    return (
        <section className="py-12 md:py-16 bg-white z-10 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Heading */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px w-16 bg-gray-300"></div>

                    <h3 className="text-sm tracking-[3px] font-medium text-gray-500 uppercase">
                        {trustedby_content.header_text}
                    </h3>

                    <div className="h-px w-16 bg-gray-300"></div>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16 opacity-75 hover:opacity-100 transition-opacity duration-300">
                    {trustedby_content.partners.map((partner, index) => (
                        <img
                            key={index}
                            src={partner.logo}
                            alt={partner.name}
                            className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustedBySection;