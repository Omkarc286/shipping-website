import React, { useState } from 'react';
import { FiPhone, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { reachout_content } from '../../content/ourservices/ourservices_reachout';

const ReachOutSection = ({ backgroundImage = '' }) => {
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

    const renderIcon = (name) => {
        switch (name) {
            case 'facebook': return <FiFacebook style={{ fontSize: '20px', color: '#000000' }} />;
            case 'instagram': return <FiInstagram style={{ fontSize: '20px', color: '#000000' }} />;
            case 'linkedin': return <FiLinkedin style={{ fontSize: '20px', color: '#000000' }} />;
            default: return null;
        }
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden z-10"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#0A7CFF',
            }}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

                {/* Left */}
                <div className="text-white space-y-8">
                    <div>
                        <h2
                            className="leading-none"
                            style={{
                                fontSize: '50px',
                                fontFamily: 'Source Serif Pro',
                                fontWeight: '700',
                                color: '#111116',
                                marginBottom: '1rem'
                            }}
                        >
                            {reachout_content.header_text}
                        </h2>

                        <p
                            className="text-lg md:text-xl text-white/90 max-w-md md:mx-0 mt-6"
                            style={{
                                fontSize: '16px',
                                lineHeight: '1.6',
                                color: '#111116',
                                margin: 'auto'
                            }}
                        >
                            {reachout_content.description}
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 justify-center">
                        <FiPhone style={{ fontSize: '20px', color: '#000000' }} />
                        <span style={{ fontSize: '20px', color: '#000000' }}>
                            {reachout_content.phone.label} {reachout_content.phone.number}
                        </span>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 justify-center">
                        {reachout_content.socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                className="w-11 h-11 bg-white hover:bg-white/20 rounded-full flex items-center justify-center text-2xl transition-all"
                            >
                                {renderIcon(social.name)}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right - Form */}
                <div className="backdrop-blur-md rounded-3xl p-10 shadow-lg border border-white/60">
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-gray-900 text-left">
                            {reachout_content.form.title}
                        </h3>

                        <p className="text-black mt-3 text-[15px] leading-relaxed text-left">
                            {reachout_content.form.description}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-5 py-4 bg-[#a5daf0] rounded-md outline-none" required />
                            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full px-5 py-4 bg-[#a5daf0] rounded-md outline-none" required />
                        </div>

                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 bg-[#a5daf0] rounded-md outline-none" required />
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 bg-[#a5daf0] rounded-md outline-none" />

                        <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-5 py-4 bg-[#a5daf0] rounded-md outline-none resize-y" required />

                        <button type="submit" className="w-full bg-[#8B00FF] hover:bg-[#7A00E6] text-white font-semibold py-4 rounded-md flex items-center justify-center gap-3 text-lg shadow-md">
                            {reachout_content.form.button_text}
                            <span className="text-xl">→</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ReachOutSection;