import React from 'react';
import './FreightExpertise.css';
import { freightexpertise_content } from '../../content/ourservices/ourservices_freightexpertise';

const FreightExpertise = () => {
    return (
        <section className="expertise-section z-10 relative">
            <div className="expertise-container">

                {/* Heading */}
                <h2 className="expertise-title">
                    {freightexpertise_content.heading}
                </h2>

                {/* Cards */}
                <div className="expertise-grid">
                    {freightexpertise_content.cards.map((card, index) => (
                        <div key={index} className="expertise-card">
                            <h3>{card.title}</h3>
                            <p className="whitespace-pre-line">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FreightExpertise;