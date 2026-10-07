import React, { useState } from 'react';
import { FiPhone, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { reachout_content } from '../../content/home/home_reachout';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const ReachOutSection = ({ backgroundImage = '', id = 'reach-out' }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState("idle");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        console.log("Form Data:", formData);
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            alert("RFQ submitted successfully!");
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (e) {
            console.error("Error sending email:", e);
            setStatus("error");
            alert("There was an error submitting your RFQ. Please try again later.");
            return;
        }

    };

    const renderIcon = (name) => {
        switch (name) {
            case 'facebook': return <FiFacebook style={{ fontSize: '20px', color: '#000000' }} />;
            case 'instagram': return <FiInstagram style={{ fontSize: '20px', color: '#000000' }} />;
            case 'linkedin': return <FiLinkedin style={{ fontSize: '20px', color: '#000000' }} />;
            default: return null;
        }
    };

    // Shared class for inputs to keep placeholder + text black
    const inputClass = "w-full px-5 py-4 bg-[#a5daf0] rounded-md outline-none placeholder-gray text-black";

    return (
        <section
            id={id}
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
                            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={inputClass} required />
                            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={inputClass} required />
                        </div>

                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputClass} required />
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={inputClass} />

                        <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} className={`${inputClass} resize-y`} required />

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