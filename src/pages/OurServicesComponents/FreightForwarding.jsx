import React, { useRef } from 'react';
import './FreightForwarding.css';

import pic1 from '../../assets/ourservices/pic1.png';
import pic2 from '../../assets/ourservices/pic2.png';

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
                            Freight Forwarding, Without Borders
                        </h2>
                        <p className="freight-description">
                            From first-mile collection to final delivery, we coordinate cargo across international trade lanes
                            with care at every handoff. Packaging, customs clearance, route planning and delivery come together
                            in one considered service, tailored to your cargo, schedule and destination.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="freight-image-container">
                        <img
                            src={pic1}
                            // change the size of the image to be smaller and more centered
                            style={{ width: '100%', height: 'auto', margin: '0 auto' }}
                            alt="Heavy industrial machinery prepared for shipment"
                            className="freight-image"
                        />
                    </div>
                </div>

                {/* === NEW SECTION (Image Left | Content Right) === */}
                <div className="freight-container reverse">
                    {/* Left Image */}
                    <div className="freight-image-container">
                        <img
                            src={pic2}
                            alt="Freight transport for heavy industrial equipment"
                            style={{ width: '100%', height: 'auto', margin: '0 auto' }}
                            className="freight-image"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="freight-content">
                        <h2 className="freight-title">
                            Air, Ocean &amp; Road, Seamlessly Connected
                        </h2>
                        <p className="freight-description">
                            Whether it is time-sensitive air cargo, a large ocean shipment or cross-border road freight, we plan
                            the route around what you are moving and when it needs to arrive. Our team coordinates customs
                            documentation and keeps you informed from departure through delivery.
                        </p>

                        <h3 className="freight-subtitle">
                            Specialist Logistics for Complex Cargo
                        </h3>
                        <p className="freight-description">
                            Heavy, oversized and sensitive freight demands more than a standard booking. We plan the movement
                            of machinery, cranes and project equipment for the energy, construction and manufacturing sectors,
                            with careful coordination at every stage.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FreightForwarding;