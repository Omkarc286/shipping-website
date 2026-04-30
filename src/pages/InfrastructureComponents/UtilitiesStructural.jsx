import React from 'react';
import './UtilitiesStructural.css';

import { utilities_structural } from '../../content/infrastructure/infrastructure_utilitiesStructural';

const UtilitiesStructural = () => {
    return (
        <section
            className='freight-trigger min-h-screen flex items-center justify-center freight-section-wrapper'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div className="adso-general-section">

                {/* UTILITIES */}
                <div
                    className="adso-general-content adso-general-container"
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="adso-general-title !mx-auto !mb-0">
                        {utilities_structural.utilities.header_text}
                    </h2>

                    <p className="text-white/90 text-left" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                        {utilities_structural.utilities.description}
                    </p>

                    <ul className="space-y-3 text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                        {utilities_structural.utilities.services.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-[#C2BCFF]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* STRUCTURAL */}
                <div className="adso-general-container reverse">

                    {/* IMAGE FROM CONTENT */}
                    <div className="adso-general-image-container">
                        <img
                            src={utilities_structural.structural.image}
                            alt={utilities_structural.structural.image_alt}
                            className="adso-general-image"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="adso-general-content">
                        <h2 className="adso-general-title">
                            {utilities_structural.structural.header_text}
                        </h2>

                        <p className="text-white/90 text-left" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                            {utilities_structural.structural.description}
                        </p>

                        <ul className="mt-6 space-y-3 text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                            {utilities_structural.structural.services.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-[#C2BCFF]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default UtilitiesStructural;