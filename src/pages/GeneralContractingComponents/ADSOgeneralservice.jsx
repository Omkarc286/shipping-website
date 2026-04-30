import React from 'react';
import './ADSOgeneralservice.css';
import { adsogeneralservice_content } from '../../content/generalcontracting/generalcontracting_adsogeneralservice';

const ADSOgeneralservice = () => {
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

                {/* Intro Section */}
                <div
                    className="adso-general-content adso-general-container"
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="adso-general-title !mx-auto !mb-0">
                        {adsogeneralservice_content.intro.heading}
                    </h2>

                    <p className="adso-general-description whitespace-pre-line">
                        {adsogeneralservice_content.intro.description}
                    </p>
                </div>

                {/* Dynamic Sections */}
                {adsogeneralservice_content.sections.map((section, index) => (
                    <div
                        key={index}
                        className={`adso-general-container ${section.reverse ? 'reverse' : ''}`}
                    >
                        {/* Image */}
                        <div className="adso-general-image-container">
                            <img
                                src={section.image}
                                alt={section.heading}
                                className="adso-general-image"
                            />
                        </div>

                        {/* Content */}
                        <div className="adso-general-content">
                            <h2 className="adso-general-title">
                                {section.heading}
                            </h2>

                            <p className="adso-general-description whitespace-pre-line">
                                {section.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default ADSOgeneralservice;