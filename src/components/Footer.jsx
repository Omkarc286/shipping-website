// src/components/Footer.jsx
import React from 'react';
import {
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaTwitter,
    FaDiscord
} from 'react-icons/fa';
import Logo from '../assets/reflect.png';
import { FiPhone } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="bg-[#0A0714] text-white py-16 px-6 md:px-12 z-10 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

                {/* Left Column - Company Info */}
                <div className="md:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                        <img src={Logo} className="w-9 h-9" alt="Reflect logo" />
                        <h2 className="text-2xl font-semibold">Reflect</h2>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-[15px] max-w-md text-left">
                        ADSO group of Companies was established in 1968 with Head Office in Abu Dhabi and Branches in Dubai, Sharjah, AL AIN, Al Ghuaifat, Al Maziyat and Associated offices in other major Gulf Cities.
                        Since ADSO's establishment, it specialized in providing services to the Oil, Petrochemical, Telecommunication and Power Industry Projects in the region.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-4">
                        <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-xl">
                            <FaYoutube />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-xl">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-xl">
                            <FaDiscord />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-2 text-left">
                    <h3 className="text-lg font-semibold mb-6 text-white/90">Quick Links</h3>
                    <div className="space-y-3 text-[#9B96B0] text-[14px]">
                        <a href="#" className="block hover:text-white transition-colors">Our Services</a>
                        <a href="#" className="block hover:text-white transition-colors">Our Project</a>
                        <a href="#" className="block hover:text-white transition-colors">About Us</a>
                        <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-5 text-left">
                    <h3 className="text-lg font-semibold mb-6 text-white/90">Contact Info</h3>

                    <div className="space-y-5 text-sm text-gray-300">
                        <p className="leading-relaxed text-left text-[#9B96B0] text-[14px]">
                            ADSO Head Office, Mezzanine Floor, Burj Al Arab Building, Hamdan Street, Abu Dhabi, UAE
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[12px] text-white">

                            {/* Phone */}
                            <a href="tel:+97168788877" className="flex items-center gap-3 hover:text-white transition-colors">
                                <FiPhone style={{ fontSize: '18px' }} /> +971 6 878 8877
                            </a>

                            {/* Email */}
                            <a href="mailto:reflect@emirate.net.ae" className="flex items-center gap-3 hover:text-white transition-colors">
                                <FiPhone style={{ fontSize: '18px' }} /> reflect@emirate.net.ae
                            </a>

                            {/* Mon - Fri */}
                            <div className="flex items-center gap-3">
                                <FiPhone style={{ fontSize: '18px' }} /> Mon - Fri 08:00 - 17:00
                            </div>

                            {/* Saturday - Goes to next row */}
                            <div className="flex items-center gap-3 sm:col-span-3">
                                <FiPhone style={{ fontSize: '18px' }} /> Sat 08:00 - 13:00
                            </div>

                        </div>
                    </div>


                </div>

            </div>


        </footer>
    );
};

export default Footer;