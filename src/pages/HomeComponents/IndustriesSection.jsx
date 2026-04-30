import React from 'react';
import Badge from '../../components/Badge';
import IndustriesCard from '../../components/IndustriesCard';
import { home_industries } from '../../content/home/home_industries';

const IndustriesSection = () => {
    return (
        <section
            className='min-h-screen p-3 md:p-12 lg:p-20 flex items-center justify-center'
            style={{
                background: 'radial-gradient(113.16% 93.38% at 66.33% 33.28%, #EBDEFB 0%, #FBFAF4 48.99%, #FAF9F3 72.94%, #F2F0EC 100%)'
            }}
        >
            <div className='text-center items-center flex flex-col gap-2 md:gap-4 w-full'>
                <Badge text={home_industries.badge_text} />
                <h2 className='home-services-header-text'>{home_industries.header_text}</h2>

                <div className='industries-layout flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-8 w-full'>
                    {/* Left Cards */}
                    <div className='industries-cards-left flex flex-col gap-3 md:gap-6 lg:gap-13 w-full sm:w-auto'>
                        {home_industries.cards_left.map((card, index) => (
                            <IndustriesCard
                                key={index}
                                icon={card.icon}
                                title={card.title}
                            />
                        ))}

                        {/* Mobile Right Cards */}
                        <div className='sm:hidden flex flex-col gap-3'>
                            {home_industries.cards_right.map((card, index) => (
                                <IndustriesCard
                                    key={`right-${index}`}
                                    icon={card.icon}
                                    title={card.title}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Background Image - Desktop */}
                    <div className='hidden sm:block shrink-0'>
                        <img
                            src={home_industries.bg_image}
                            alt=""
                            className='industries_image'
                        />
                    </div>

                    {/* Right Cards - Desktop */}
                    <div className='industries-cards-right hidden sm:flex flex-col gap-3 md:gap-6 lg:gap-13 w-full sm:w-auto'>
                        {home_industries.cards_right.map((card, index) => (
                            <IndustriesCard
                                key={index}
                                icon={card.icon}
                                title={card.title}
                            />
                        ))}
                    </div>

                    {/* Background Image - Mobile */}
                    <div className='sm:hidden shrink-0 order-first'>
                        <img
                            src={home_industries.bg_image}
                            alt=""
                            className='industries_image'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;