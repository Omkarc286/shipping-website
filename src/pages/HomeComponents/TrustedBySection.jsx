import React from 'react';

// Import your partner logos (update paths as per your project)
import siemens from '../../assets/partners/siemens.png';
import samsung from '../../assets/partners/samsung.png';
import bellway from '../../assets/partners/bellway.png';
import otis from '../../assets/partners/otis.png';
import ncp from '../../assets/partners/ncp.png';

const TrustedBySection = () => {
    const partners = [
        { name: "Siemens", logo: siemens },
        { name: "Samsung", logo: samsung },
        { name: "Bellway", logo: bellway },
        { name: "Otis", logo: otis },
        { name: "NCP", logo: ncp },
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px w-16 bg-gray-300"></div>
                    <h3 className="text-sm tracking-[3px] font-medium text-gray-500 uppercase">
                        TRUSTED BY
                    </h3>
                    <div className="h-px w-16 bg-gray-300"></div>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16 opacity-75 hover:opacity-100 transition-opacity duration-300">
                    {partners.map((partner, index) => (
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