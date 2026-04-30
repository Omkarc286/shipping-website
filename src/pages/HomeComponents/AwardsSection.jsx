import React from 'react';
import AwardCard from '../../components/AwardCard';
import { awards_content } from '../../content/home/home_awards';

const AwardsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-[#F4EDF8] z-10 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center mb-12">
                    <h2 className='home-services-header-text mt-3'>
                        {awards_content.header_text}
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10">
                    {awards_content.awards.map((award, index) => (
                        <AwardCard
                            key={index}
                            image={award.image}
                            alt={award.alt}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AwardsSection;