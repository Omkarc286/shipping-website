import React from 'react';
import Badge from '../../components/Badge';
import ServiceCard from '../../components/ServiceCard';
import { home_services } from '../../content/home_services';

const LogisticSolutionsSection = () => {
    return (
        <section
            className='min-h-screen p-12 md:p-20 flex items-center justify-center'
            style={{
                background: 'linear-gradient(180deg, #FBFAF4 0%, #E0EBF7 100%)'
            }}
        >
            <div className='text-center items-center flex flex-col gap-4 w-full'>
                <Badge text={home_services.badge_text} />

                <h2 className='home-services-header-text'>
                    {home_services.header_text}
                </h2>

                <div className='services-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto justify-items-center z-30'>
                    {home_services.cards.map((card, index) => (
                        <ServiceCard
                            key={index}
                            header={card.header}
                            desc={card.desc}
                            image={card.image}
                            url={card.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogisticSolutionsSection;