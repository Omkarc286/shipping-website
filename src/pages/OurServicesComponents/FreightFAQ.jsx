import React, { useState } from 'react';
import './FreightFAQ.css';
import { freightfaq_content } from '../../content/ourservices/ourservices_freightfaq';

const FreightFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="freight-faq-section z-10 relative">
            <div className="faq-container">

                {/* Why Choose Section */}
                <div className="why-choose-grid">
                    <div className="why-left">
                        <h2 className="why-title whitespace-pre-line">
                            {freightfaq_content.why_choose.title}
                        </h2>
                    </div>

                    <div className="why-right">
                        <p className="why-text whitespace-pre-line">
                            {freightfaq_content.why_choose.description}
                        </p>

                        <h3 className="best-title">
                            {freightfaq_content.why_choose.highlight_title}
                        </h3>

                        <p className="why-text2 whitespace-pre-line">
                            {freightfaq_content.why_choose.highlight_description}
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <h2 className="faq-main-title">
                        {freightfaq_content.faq_section.title}
                    </h2>

                    <div className="faq-list">
                        {freightfaq_content.faq_section.faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="faq-question"
                                >
                                    <span>{faq.question}</span>
                                    <span className={`faq-plus ${openIndex === index ? 'open' : ''}`}>
                                        +
                                    </span>
                                </button>

                                <div className={`faq-answer ${openIndex === index ? 'open' : ''} text-left`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FreightFAQ;