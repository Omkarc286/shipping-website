import React, { useRef } from 'react';
import './FreightForwarding.css';

import pic1 from '../../assets/ourservices/pic1.png';

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
                            Comprehensive Freight Forwarding Services in UAE
                        </h2>
                        <p className="freight-description">
                            We provide comprehensive freight forwarding services in the UAE, managing every step from cargo
                            pickup and packaging to customs clearance, shipping, and final delivery. Our team ensures smooth
                            handling of both local and international shipments using efficient processes. No matter the industry or
                            shipment size, we plan each movement carefully to minimize delays and ensure your cargo arrives
                            safely and on time.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="freight-image-container">
                        <img
                            src={pic1}
                            alt="Heavy machinery cargo transport in UAE"
                            className="freight-image"
                        />
                    </div>
                </div>

                {/* === NEW SECTION (Image Left | Content Right) === */}
                <div className="freight-container reverse">
                    {/* Left Image */}
                    <div className="freight-image-container">
                        <img
                            src={pic1}
                            alt="Heavy machinery transport across GCC"
                            className="freight-image"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="freight-content">
                        <h2 className="freight-title">
                            Reliable Land, Sea &amp; Air Freight Solutions across GCC
                        </h2>
                        <p className="freight-description">
                            ADSO LLC AUH provides reliable freight services through land, sea, and air across the UAE, KSA,
                            Oman, Bahrain, and other GCC countries. We handle everything from fast road transport to large sea
                            shipments and urgent air freight, along with customs and documentation support. With expert
                            logistics planning and real-time updates, we ensure safe, efficient, and timely delivery across
                            borders.
                        </p>

                        <h3 className="freight-subtitle">
                            Trusted Freight Forwarding Partner for Industrial Logistics in UAE
                        </h3>
                        <p className="freight-description">
                            ADSO provides reliable industrial freight and logistics services for heavy, oversized, and sensitive
                            cargo. We support sectors like oil &amp; gas, construction, and manufacturing, handling machinery,
                            cranes, and equipment with professionalism and precision.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FreightForwarding;