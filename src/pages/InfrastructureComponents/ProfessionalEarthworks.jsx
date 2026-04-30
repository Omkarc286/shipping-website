import React, { useRef, useState } from 'react';
import './ProfessionalEarthworks.css';
import { professional_earthworks } from '../../content/infrastructure/infrastructure_professionalearthworks';

const ProfessionalEarthworks = () => {
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

                {/* LEFT CONTENT */}
                <div className="text-white space-y-8 pt-4">
                    <div>
                        <h2
                            className="leading-none text-left"
                            style={{
                                fontSize: '32px',
                                fontFamily: 'Source Serif Pro',
                                fontWeight: '700',
                                color: '#C2BCFF',
                                marginBottom: '1.5rem'
                            }}
                        >
                            {professional_earthworks.header_text}
                        </h2>

                        <p
                            className="text-white/90 text-left"
                            style={{ fontSize: '16px', lineHeight: '1.7' }}
                        >
                            {professional_earthworks.description}
                        </p>

                        {/* SERVICES LIST */}
                        <ul className="mt-6 space-y-3 text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                            {professional_earthworks.services.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-[#C2BCFF]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-[#2d2539] rounded-3xl p-10 shadow-lg border border-white/60">
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-white text-left">
                            {professional_earthworks.form.heading}
                        </h3>
                        <p className="text-white mt-3 text-[15px] leading-relaxed text-left">
                            {professional_earthworks.form.subtext}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="lastName"
                                placeholder={professional_earthworks.form.fields.lastName}
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-[#76717E] rounded-md outline-none placeholder-black text-black"
                                required
                            />
                            <input
                                type="text"
                                name="firstName"
                                placeholder={professional_earthworks.form.fields.firstName}
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-[#76717E] rounded-md outline-none placeholder-black text-black"
                                required
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder={professional_earthworks.form.fields.email}
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-[#76717E] rounded-md outline-none placeholder-black text-black"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder={professional_earthworks.form.fields.phone}
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-[#76717E] rounded-md outline-none placeholder-black text-black"
                        />

                        <textarea
                            name="message"
                            placeholder={professional_earthworks.form.fields.message}
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-[#76717E] rounded-md outline-none placeholder-black text-black resize-y"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#8B00FF] hover:bg-[#7A00E6] text-white font-semibold py-4 rounded-md transition-all flex items-center justify-center gap-3 text-lg shadow-md"
                        >
                            {professional_earthworks.form.button_text}
                            <span className="text-xl">→</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ProfessionalEarthworks;