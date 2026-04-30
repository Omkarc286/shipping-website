// src/components/FeaturedWorksSection.jsx
import React from 'react';
import Badge from '../../components/Badge';
import FWCard from '../../components/FWCard';
import { featured_works } from '../../content/home/home_fw';

const FeaturedWorksSection = () => {
    return (
        <section
            className="min-h-screen p-6 md:p-12 lg:p-20 flex items-center justify-center bg-[#0F0B15] z-10 relative"
        >
            <div className="w-full max-w-7xl mx-auto">

                <div className="text-center mb-10 md:mb-12">

                    <div className="flex items-center justify-center gap-4 mb-2">
                        <Badge text="Industries" />
                    </div>
                    <h2 className="featured-works-header-text mt-4">
                        Featured Works
                    </h2>
                </div>

                {/* ONE CARD PER LINE ON MOBILE */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {featured_works.cards.map((card, index) => (
                        <FWCard
                            key={index}
                            header={card.header}
                            image={card.img}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorksSection;