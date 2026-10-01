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
            <div className="loomFreight-general-section">

                <div className="loomFreight-general-container reverse">

                    {/* IMAGE FROM CONTENT */}
                    <div className="loomFreight-general-image-container">
                        <img
                            src={marine_contracting.section.image}
                            alt={marine_contracting.section.image_alt}
                            className="loomFreight-general-image"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="loomFreight-general-content">
                        <h2 className="loomFreight-general-title !text-[#111116]">
                            {marine_contracting.section.header_text}
                        </h2>

                        <p className="loomFreight-general-description !text-[#22232C]">
                            {marine_contracting.section.description}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MarineContractingServices;