// src/components/FAQSection.jsx
import React, { useState } from 'react';
import Badge from '../../components/Badge';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Why should I use Butter?",
            answer: "Butter provides a seamless and intuitive platform for hosting meetings, workshops, and collaborative sessions with powerful features designed for modern teams."
        },
        {
            question: "What types of sessions is Butter best for?",
            answer: "Butter is perfect for team meetings, design sprints, workshops, brainstorming sessions, training programs, and any interactive group collaboration."
        },
        {
            question: "Is Butter free?",
            answer: "Yes, Butter offers a generous free plan. Paid plans unlock advanced features like unlimited sessions, recording, and more participants."
        },
        {
            question: "How many participants can join a Butter session?",
            answer: "The free plan supports up to 15 participants. Paid plans allow up to 100+ participants depending on your subscription tier."
        },
        {
            question: "Do you need an account to join a Butter session?",
            answer: "No account is required to join a session as a participant. Only the host needs to have a Butter account."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen py-20 px-6 bg-white flex items-center justify-center z-10 relative">
            <div className="max-w-6xl w-full mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-4 mb-2">
                        <Badge text="FAQ's" />
                    </div>

                    <h2 className="mt-6" style={{ color: '#5846FB', fontSize: '50px', fontFamily: 'Source Serif Pro', fontWeight: '700' }}>
                        Frequently Asked Questions
                    </h2>


                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-4 flex items-center justify-between text-left group"
                            >
                                <span className="text-xl font-medium text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <span className={`text-3xl font-light text-gray-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-45' : ''}`}>
                                    +
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
                            >
                                <div className="px-8 pb-8 text-gray-600 leading-relaxed text-left
                                ">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;