import React, { useState } from 'react';
import './FreightFAQ.css';

const FreightFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What kind of heavy equipment do we handle?",
            answer: "We handle cranes, bulldozers, excavators, generators, transformers, industrial machinery, and all types of oversized and heavy cargo."
        },
        {
            question: "Do we have hydraulic modular trailers for the transport of over dimensional or heavy loads?",
            answer: "Yes, we operate a modern fleet of hydraulic modular trailers (HMT) suitable for heavy-lift and oversized cargo transportation."
        },
        {
            question: "Do you handle cross-border permits on project cargo?",
            answer: "Yes, we manage all necessary cross-border permits, route surveys, and approvals for project cargo across the GCC."
        },
        {
            question: "Is our freight forwarding service compliant with HSE?",
            answer: "Absolutely. All our operations follow strict Health, Safety, and Environment (HSE) standards and international best practices."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="freight-faq-section z-10 relative">
            <div className="faq-container">

                {/* Why Choose Us Section */}
                <div className="why-choose-grid">
                    <div className="why-left">
                        <h2 className="why-title">
                            Why Choose ADSO LLC AUH for<br />
                            Freight Forwarding in UAE
                        </h2>
                    </div>

                    <div className="why-right">
                        <p className="why-text">
                            We enhance your freight operations with safe, reliable, and efficient
                            solutions. With extensive experience in heavy transport and project
                            logistics, our expert team manages everything from permits to final
                            delivery while following strict safety standards. You can rely on us
                            for professional service, clear communication, and timely cargo handling.
                        </p>

                        <h3 className="best-title">We Are the Best Freight Forwarders in UAE</h3>
                        <p className="why-text2">
                            Choose a fast, safe, and professional freight forwarding service in
                            the UAE. We handle heavy cargo, oversized loads, and cross-border
                            logistics across the UAE and the Middle East, ensuring timely and
                            secure delivery. Contact us today for a free quote.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <h2 className="faq-main-title">Frequently Asked Questions</h2>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="faq-question"
                                >
                                    <span>{faq.question}</span>
                                    <span className={`faq-plus ${openIndex === index ? 'open' : ''}`}>+</span>
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