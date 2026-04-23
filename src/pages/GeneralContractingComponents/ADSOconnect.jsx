import React, { useRef, useState } from 'react';
import './ADSOconnect.css';

const ADSOconnect = () => {
    const exitSectionRef = useRef(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully! (Demo)");
        // Connect to backend later
    };

    return (
        <section
            ref={exitSectionRef}
            className='freight-trigger min-h-screen flex items-center justify-center freight-section-wrapper'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start w-full">

                {/* Left Side - Text Content */}
                <div className="text-white space-y-8 pt-4">
                    <div>
                        <h2 className="leading-none text-left" style={{ fontSize: '32px', fontFamily: 'Source Serif Pro', fontWeight: '700', color: '#C2BCFF', marginBottom: '1rem' }}>
                            ADSO_A Leading General Contractor in UAE
                        </h2>
                        <p className="text-white/90 md:mx-0 mt-6 text-left" style={{ fontSize: '16px', lineHeight: '1.6', color: 'white' }}>
                            We have been working for 50 years as an experienced main contractor in the UAE to serve clients and manage their projects with complete quality assurance. We have experienced engineers and skilled manpower who deliver high-quality work while complying strictly with regulatory standards. While performing our contracting services, we focus on safety, quality, and timeline for a perfect completion of work.  If you are looking for a reliable and trusted general contractor in the UAE for infrastructure execution or marine contracting support, we are here to help you build your dream project with success. Are you searching for reliable construction companies near me? We are here to bring your visions to life. Reach out to ADSO today!
                        </p>
                    </div>




                </div>

                {/* Right Side - Form */}
                <div className="bg-[#2d2539] rounded-3xl p-10 shadow-lg border border-white/60">
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-white text-left">Let’s connect constellations</h3>
                        <p className="text-white mt-3 text-[15px] leading-relaxed text-left">
                            Let’s align our constellations! Reach out and let the magic of collaboration illuminate our skies.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-[#76717E] border border-transparent focus:border-[#4C3FFF] rounded-md outline-none placeholder-black text-black"
                                required
                            />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-[#76717E] border border-transparent focus:border-[#4C3FFF] rounded-md outline-none placeholder-black text-black"
                                required
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-[#76717E] border border-transparent focus:border-[#4C3FFF] rounded-md outline-none placeholder-black text-black"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-[#76717E] border border-transparent focus:border-[#4C3FFF] rounded-md outline-none placeholder-black text-black"
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-[#76717E] border border-transparent focus:border-[#4C3FFF] rounded-md outline-none placeholder-black text-black resize-y"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#8B00FF] hover:bg-[#7A00E6] text-white font-semibold py-4 rounded-md transition-all flex items-center justify-center gap-3 text-lg shadow-md"
                        >
                            Submit Message
                            <span className="text-xl">→</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ADSOconnect;