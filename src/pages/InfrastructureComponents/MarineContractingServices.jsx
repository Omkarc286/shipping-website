import React from 'react';
import './MarineContractingServices.css';

import { marine_contracting } from '../../content/infrastructure/infrastructure_marineContracting';

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

                    {/* IMAGE FROM CONTENT */}
                    <div className="adso-general-image-container">
                        <img
                            src={marine_contracting.section.image}
                            alt={marine_contracting.section.image_alt}
                            className="adso-general-image"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="adso-general-content">
                        <h2 className="adso-general-title !text-[#111116]">
                            {marine_contracting.section.header_text}
                        </h2>

                        <p className="adso-general-description !text-[#22232C]">
                            {marine_contracting.section.description}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MarineContractingServices;