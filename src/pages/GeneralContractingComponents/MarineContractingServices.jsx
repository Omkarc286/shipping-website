import React from 'react';
import './MarineContractingServices.css';

import pic1 from '../../assets/generalcontracting/pic1.png';


const MarineContractingServices = () => {
    return (
        <section
            className='freight-trigger flex items-center justify-center freight-section-wrapper bg-[white]'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                zIndex: 1
            }}>
            <div className="adso-general-section">

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
                        <h2 className="adso-general-title !text-[#111116]">
                            Marine Contracting Services
                        </h2>
                        <p className="adso-general-description !text-[#22232C]">
                            ADSO is an experienced construction company in Abu Dhabi. A skilled general construction contractor ensures quality work and timely completion. We have expertise in managing marine and port contracting works.  There is a great demand for marine projects and advanced technical capability at UAE ports. We offer marine construction services with maintenance and rehabilitation facilities.  We are a professional contractor to handle challenging marine conditions with marine-grade equipment and trained staff.  We offer reliable marine dredging contracting services for port construction.                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarineContractingServices;