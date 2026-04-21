import React from 'react';
import Badge from '../../components/Badge';
import AwardCard from '../../components/AwardCard';

import awardLetter from '../../assets/awards/award-letter.png';
import swissCert1 from '../../assets/awards/swiss-cert1.png';
import swissCert2 from '../../assets/awards/swiss-cert2.png';

const AwardsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-[#F4EDF8] z-10 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className='home-services-header-text mt-3'>
                        Awards
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10">
                    <AwardCard image={awardLetter} alt="Appreciation Letter" />
                    <AwardCard image={swissCert1} alt="ISO Certificate 1" />
                    <AwardCard image={swissCert2} alt="ISO Certificate 2" />
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;