import React from 'react';
import Badge from '../../components/Badge';
import profile1 from '../../assets/testimonials/profile1.png'
import profile2 from '../../assets/testimonials/profile2.png'



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
                {/* Header with Heart */}
                <div className="text-center items-center flex flex-col mb-16">
                    <Badge text='Wall of Love' />

                    <div className="relative inline-block mt-6 mb-4">
                        <div className="heart-shape">
                            <div className="heart-bg"></div>
                            <div className="heart-content">
                                <h2 className="testimonial-header-text text-5xl font-bold text-white">
                                    What Our Clients Say
                                </h2>
                                <p className="testimonial-desc-text text-lg text-gray-300 mt-2">
                                    Testimonials From Clients
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

                    {/* Sean Rose */}
                    <div className="testimonial-card bg-[#1A1428] rounded-md p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={profile1} alt="Sean Rose" className="w-10 h-10 rounded-full object-cover" />
                            <div className='text-left'>
                                <div className="font-semibold text-white">Sean Rose</div>
                                <div className="text-sm text-gray-400">@seanrose</div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-[15px] leading-relaxed text-left">
                            Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.
                        </p>
                    </div>

                    {/* Ryan Delk */}
                    <div className="testimonial-card bg-[#1A1428] rounded-md p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={profile2} alt="Ryan Delk" className="w-10 h-10 rounded-full object-cover" />
                            <div className='text-left'>
                                <div className="font-semibold text-white">Ryan Delk</div>
                                <div className="text-sm text-gray-400">@delk</div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-[15px] leading-relaxed text-left">
                            Don't take it from me: @reflectnotes is magic.
                        </p>
                    </div>

                    {/* Demetria Giles */}
                    <div className="testimonial-card bg-[#1A1428] rounded-md p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={profile1} alt="Demetria Giles" className="w-10 h-10 rounded-full object-cover" />
                            <div className='text-left'>
                                <div className="font-semibold text-white">Demetria Giles</div>
                                <div className="text-sm text-gray-400">@drosewritings</div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-[15px] leading-relaxed text-left">
                            Playing around with @reflectnotes. I'm back to thoughts, details and soundbites from episode meetings, articles, etc from the past week. So knowledge worker's dream come true.
                        </p>
                    </div>

                    {/* Fabrizio Rinaldi */}
                    <div className="testimonial-card bg-[#1A1428] rounded-md p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={profile2} alt="Fabrizio Rinaldi" className="w-10 h-10 rounded-full object-cover" />
                            <div className='text-left'>
                                <div className="font-semibold text-white">Fabrizio Rinaldi</div>
                                <div className="text-sm text-gray-400">@linuz90</div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-[15px] leading-relaxed text-left">
                            I'm keeping @reflectnotes open *all* the time. I'm using both for simple journaling, and long form writing. It's rare to see a single app work so well for both.
                        </p>
                    </div>

                    {/* Jonathan Simcoe */}
                    <div className="testimonial-card bg-[#1A1428] rounded-md p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={profile1} alt="Jonathan Simcoe" className="w-10 h-10 rounded-full object-cover" />
                            <div className='text-left'>
                                <div className="font-semibold text-white">Jonathan Simcoe</div>
                                <div className="text-sm text-gray-400">@jdsimcoe</div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-[15px] leading-relaxed text-left">
                            All righty. I have to give a massive shout-out to @maccaw for pioneering @reflectnotes. It has already matured to a point where it is a daily driver for me. The speed, focus, and attention to detail (especially perfect bits of structured data) is superb.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;