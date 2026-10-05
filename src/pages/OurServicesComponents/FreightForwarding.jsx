import React, { useRef } from 'react';
import './FreightForwarding.css';

import pic1 from '../../assets/ourservices/pic1.png';
import pic2 from '../../assets/ourservices/pic2.png';
import { freightforwarding_content } from '../../content/ourservices/ourservices_freightforwarding';


const FreightForwarding = () => {
    const exitSectionRef = useRef(null);

    return (
        <section
            ref={exitSectionRef}
            className='freight-trigger min-h-screen flex items-center justify-center freight-section-wrapper'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div className="freight-forwarding-section">

                {/* === Existing Section (Content Left | Image Right) === */}
                <div className="freight-container">
                    {/* Left Content */}
                    <div className="freight-content">
                        <h2 className="freight-title">
                            {/* Freight Forwarding, Without Borders */}
                            {freightforwarding_content.sections[0].title}
                        </h2>
                        <p className="freight-description">
                            {/* From first-mile collection to final delivery, we coordinate cargo across international trade lanes
                            with care at every handoff. Packaging, customs clearance, route planning and delivery come together
                            in one considered service, tailored to your cargo, schedule and destination. */}
                            {freightforwarding_content.sections[0].description}
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="freight-image-container">
                        <img
                            src={freightforwarding_content.sections[0].image}
                            // change the size of the image to be smaller and more centered
                            style={{ width: '100%', height: 'auto', margin: '0 auto' }}
                            alt={freightforwarding_content.sections[0].alt}
                            className="freight-image"
                        />
                    </div>
                </div>

                {/* === NEW SECTION (Image Left | Content Right) === */}
                <div className="freight-container reverse">
                    {/* Left Image */}
                    <div className="freight-image-container">
                        <img
                            src={freightforwarding_content.sections[1].image}
                            alt={freightforwarding_content.sections[1].alt}
                            style={{ width: '100%', height: 'auto', margin: '0 auto' }}
                            className="freight-image"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="freight-content">
                        <h2 className="freight-title">
                            {freightforwarding_content.sections[1].title}
                        </h2>
                        <p className="freight-description">
                            {freightforwarding_content.sections[1].description}
                        </p>

                        <h3 className="freight-subtitle">
                            {freightforwarding_content.sections[1].subSection.subtitle}
                        </h3>
                        <p className="freight-description">
                            {freightforwarding_content.sections[1].subSection.description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FreightForwarding;