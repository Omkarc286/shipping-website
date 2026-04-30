import React from 'react';
import './MarineContractingServices.css';

import pic1 from '../../assets/generalcontracting/pic1.png';
import { marinecontractingservices_content } from '../../content/generalcontracting/generalcontracting_marinecontractingservices';

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
            }}
        >
            <div className="adso-general-section">

                <div className="adso-general-container reverse">

                    {/* Image */}
                    <div className="adso-general-image-container">
                        <img
                            src={pic1}
                            alt={marinecontractingservices_content.image.alt}
                            className="adso-general-image"
                        />
                    </div>

                    {/* Content */}
                    <div className="adso-general-content">
                        <h2 className="adso-general-title !text-[#111116]">
                            {marinecontractingservices_content.content.title}
                        </h2>

                        <p className="adso-general-description !text-[#22232C] whitespace-pre-line">
                            {marinecontractingservices_content.content.description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MarineContractingServices;