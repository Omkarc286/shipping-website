import React from 'react';
import './ADSOgeneralservice.css';

import pic1 from '../../assets/generalcontracting/pic1.png';


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
            }}>
            <div className="adso-general-section">
                <div className="adso-general-content adso-general-container" style={{
                    textAlign: 'center',
                }}>
                    <h2 className="adso-general-title !mx-auto !mb-0">
                        ADSO General Contracting Service in UAE
                    </h2>
                    <p className="adso-general-description">
                        ADSO general contracting service in UAE covers the complete execution of marine and infrastructure projects from planning to final delivery. A general construction contractor manages building projects from start to finish. These services include site preparation, structural works, civil construction, and special marine operations. As reliable general contractors in UAE, we manage manpower, materials, safety, quality control, and timelines to ensure smooth project delivery. In infrastructure projects, we handle utilities, drainage, and cable laying. Marine contracting focuses on coastal works, ports, jetties, and maintenance. With integrated project management, general contracting services support residential, commercial, industrial developments. Our company performs excellent general contracting service in UAE for large and mega projects.
                    </p>


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
                            Infrastructure Works
                        </h2>
                        <p className="adso-general-description">
                            We have special capabilities to perform and execute infrastructural development works, including water drainage utilities, and underground services.  We are among the leading infrastructure companies in UAE. ADSO’s working methodology includes detailed planning and authorized coordination while performing the civil works with complete strict safety controls and standards. These qualities make us a trusted main contractor and infrastructure contractor in UAE to manage large-scale infrastructure and public works projects with technical expertise. We offer end-to-end infrastructure development services to support large-scale projects in UAE.This all builds trust and reinforces our reputation as a reliable general contracting company in UAE. Our clients find us among the top general contractors in UAE.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default ADSOgeneralservice;