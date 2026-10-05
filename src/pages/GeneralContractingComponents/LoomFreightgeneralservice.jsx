import React from 'react';
import './LoomFreightgeneralservice.css';
import { loomFreightgeneralservice_content } from '../../content/generalcontracting/generalcontracting_loomfreightgeneralservice';

const LoomFreightgeneralservice = () => {
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
            <div className="loomFreight-general-section">

                {/* Intro Section */}
                <div
                    className="loomFreight-general-content loomFreight-general-container"
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="loomFreight-general-title !mx-auto !mb-0">
                        {loomFreightgeneralservice_content.intro.heading}
                    </h2>

                    <p className="loomFreight-general-description whitespace-pre-line">
                        {loomFreightgeneralservice_content.intro.description}
                    </p>
                </div>

                {/* Dynamic Sections */}
                {loomFreightgeneralservice_content.sections.map((section, index) => (
                    <div
                        key={index}
                        className={`loomFreight-general-container ${section.reverse ? 'reverse' : ''}`}
                    >
                        {/* Image */}
                        <div className="loomFreight-general-image-container">
                            <img
                                src={section.image}
                                alt={section.heading}
                                className="loomFreight-general-image"
                            />
                        </div>

                        {/* Content */}
                        <div className="loomFreight-general-content">
                            <h2 className="loomFreight-general-title">
                                {section.heading}
                            </h2>

                            <p className="loomFreight-general-description whitespace-pre-line">
                                {section.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default LoomFreightgeneralservice;