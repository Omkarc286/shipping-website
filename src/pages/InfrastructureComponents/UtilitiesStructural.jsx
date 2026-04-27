import React from 'react';
import './UtilitiesStructural.css';

import pic1 from '../../assets/generalcontracting/pic1.png';


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
            }}>
            <div className="adso-general-section">
                <div className="adso-general-content adso-general-container" style={{
                    textAlign: 'center',
                }}>
                    <h2 className="adso-general-title !mx-auto !mb-0">
                        Utilities and Ducting
                    </h2>
                    <p className="text-white/90 md:mx-0 text-left" style={{ fontSize: '16px', lineHeight: '1.7', color: 'white' }}>
                        Need to contact cable laying contractors in UAE? Our company works extensively on urban and industrial projects to provide utility and ducting system installation and management solutions. It includes constructing electrical duct banks to enable safe distribution of electrical power and installing telecom ducts to allow for uninterrupted communications. It develops foundations for street lights to provide lighting for road use, and manages utility crossings to allow utilities to be integrated into their own systems and those of others. We perform all our utilities and ducting operations with quality, safety, and compliance against the requirements of engineering standards in UAE to create a durable facility.

                    </p>
                    <ul className=" space-y-3 text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                        <li className="flex items-start gap-3">
                            <span className="text-[#C2BCFF]">•</span>
                            <span>Electrical duct banks</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#C2BCFF]">•</span>
                            <span>Street lighting foundations</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#C2BCFF]">•</span>
                            <span>Telecommunication contract</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#C2BCFF]">•</span>
                            <span>Telecom ducts</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#C2BCFF]">•</span>
                            <span>Utility crossings</span>
                        </li>
                    </ul>

                </div>
                <div className="adso-general-container reverse">
                    {/* Left Image */}
                    <div className="adso-general-image-container">
                        <img
                            src={pic1}
                            alt="Heavy machinery transport across GCC"
                            className="adso-general-image"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="adso-general-content">
                        <h2 className="adso-general-title">
                            Structural Works
                        </h2>
                        <p className="text-white/90 md:mx-0 text-left" style={{ fontSize: '16px', lineHeight: '1.7', color: 'white' }}>
                            We offer reliable structural solutions and telecommunication contract that offer a solid and long-lasting base for construction projects like other top infrastructure companies in Abu Dhabi. Constructing retaining walls to prevent soil erosion is just part of our scope. We also construct concrete foundations to provide stability for different structures, such as buildings or roads. Every task we complete is done correctly and with the proper materials, following all engineering requirements, so that your project can perform safely and reliably over time.

                        </p>

                        <ul className="mt-6 space-y-3 text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C2BCFF]">•</span>
                                <span>Retaining walls</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C2BCFF]">•</span>
                                <span>Concrete foundations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C2BCFF]">•</span>
                                <span>Load-bearing support structures</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C2BCFF]">•</span>
                                <span>Reinforced concrete works</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UtilitiesStructural;