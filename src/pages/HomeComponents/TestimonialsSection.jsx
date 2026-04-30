import React from 'react';
import Badge from '../../components/Badge';
import { testimonials_content } from '../../content/home/home_testimonials';

const TestimonialsSection = ({ backgroundImage }) => {
    return (
        <section
            className='min-h-screen flex items-center justify-center py-20 px-6 relative z-10'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: '50% 7.25rem',
                backgroundSize: 'min(640px, 80vw) auto',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#0F0B15'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Header */}
                <div className="text-center items-center flex flex-col mb-16">
                    <Badge text={testimonials_content.badge_text} />

                    <div className="relative inline-block mt-6 mb-4">
                        <div className="heart-shape">
                            <div className="heart-bg"></div>
                            <div className="heart-content">
                                <h2 className="testimonial-header-text text-5xl font-bold text-white">
                                    {testimonials_content.header_text}
                                </h2>
                                <p className="testimonial-desc-text text-lg text-gray-300 mt-2">
                                    {testimonials_content.sub_text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {testimonials_content.testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="testimonial-card bg-[#1A1428] rounded-md p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div className='text-left'>
                                    <div className="font-semibold text-white">{item.name}</div>
                                    <div className="text-sm text-gray-400">{item.username}</div>
                                </div>
                            </div>

                            <p className="text-gray-300 text-[15px] leading-relaxed text-left">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;