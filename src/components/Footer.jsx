import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaTwitter,
    FaDiscord
} from 'react-icons/fa';
import { FiPhone, FiMail } from "react-icons/fi";
import { footer_content } from '../content/common/common_footer';

// ⭐ Same list as Navbar — pages that have a #reach-out section
const pagesWithReachOut = [
    '/',
    '/about-company',
    '/career',
    '/services',
    '/general-contracting',
    '/general-contracting/infrastructure',
    '/general-contracting/marine',
    '/blog',
    // '/portfolio',
    '/logistics',
    '/logistics/land-freight',
    '/logistics/air-freight',
    '/logistics/sea-freight',
    '/logistics/open-yard-storage',
    '/marine',
    '/marine/ship-management',
    '/marine/commercial-management',
    '/marine/docking-management',
    '/marine/crew-management',
    '/marine/procurement-services',
    '/marine/our-fleets',
    '/material-supply',
    '/equipment-rental',
    '/custom-clearance'
]

const Footer = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const iconMap = {
        instagram: FaInstagram,
        youtube: FaYoutube,
        linkedin: FaLinkedin,
        twitter: FaTwitter,
        discord: FaDiscord,
    };

    // ⭐ Scroll to #about-us, navigating home first if needed
    const scrollToAboutUs = () => {
        const doScroll = () => {
            const section = document.getElementById('about-us');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (location.pathname === '/') {
            setTimeout(doScroll, 100);
        } else {
            navigate('/');
            setTimeout(doScroll, 300);
        }
    };

    // ⭐ Same logic as Navbar's scrollToReachOut:
    //    if current page has a #reach-out section → scroll to it
    //    otherwise → navigate home, then scroll
    const scrollToReachOut = () => {
        const isOnValidPage =
            pagesWithReachOut.includes(location.pathname) ||
            location.pathname.startsWith('/logistics/') ||
            location.pathname.startsWith('/marine/');

        if (isOnValidPage) {
            setTimeout(() => {
                const reachOutSection = document.getElementById('reach-out');
                if (reachOutSection) {
                    reachOutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            navigate('/');
            setTimeout(() => {
                const reachOutSection = document.getElementById('reach-out');
                if (reachOutSection) {
                    reachOutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    };

    // ⭐ Custom click handler per quick link label
    const handleQuickLinkClick = (e, link) => {
        const label = (link.label || '').trim().toLowerCase();

        // Our Services → /services
        if (label === 'our services' || label === 'services') {
            e.preventDefault();
            navigate('/services');
            window.scrollTo(0, 0);
            return;
        }

        // Our Projects / Portfolio → /portfolio
        // if (
        //     label === 'our projects' ||
        //     label === 'our project' ||
        //     label === 'projects' ||
        //     label === 'portfolio'
        // ) {
        //     e.preventDefault();
        //     navigate('/portfolio');
        //     window.scrollTo(0, 0);
        //     return;
        // }

        // About Us → scroll to #about-us on home page
        if (label === 'about us' || label === 'aboutus') {
            e.preventDefault();
            scrollToAboutUs();
            return;
        }

        // Contact Us → scroll to this page's #reach-out (or home if not present)
        if (label === 'contact us' || label === 'contactus' || label === 'contact') {
            e.preventDefault();
            scrollToReachOut();
            return;
        }

        // Fallback: let the default anchor href behavior work
    };

    return (
        <footer className="bg-[#0A0714] text-white py-16 px-6 md:px-12 z-10 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

                {/* Left */}
                <div className="md:col-span-5 space-y-6">
                    <div className="flex items-center align-middle gap-3">
                        <img src={footer_content.brand.logo} className="" alt="logo" />
                        <h2 className="text-2xl font-semibold align-middle">{footer_content.brand.name}</h2>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-[15px] max-w-md text-left">
                        {footer_content.brand.description}
                    </p>

                    {/* Socials */}
                    <div className="flex gap-4 pt-4">
                        {footer_content.socials.map((social, index) => {
                            const Icon = iconMap[social.name];
                            return (
                                <a
                                    key={index}
                                    href={social.link}
                                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-xl"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-2 text-left">
                    <h3 className="text-lg font-semibold mb-6 text-white/90">Quick Links</h3>

                    <div className="space-y-3 text-[#9B96B0] text-[14px]">
                        {footer_content.quick_links.map((link, index) => (
                            <a
                                key={index}
                                href={link.link}
                                onClick={(e) => handleQuickLinkClick(e, link)}
                                className="block hover:text-white transition-colors cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="md:col-span-5 text-left">
                    <h3 className="text-lg font-semibold mb-6 text-white/90">Contact Info</h3>

                    <div className="space-y-5 text-sm text-gray-300">
                        <p className="leading-relaxed text-left text-[#9B96B0] text-[14px]">
                            {footer_content.contact.address}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[12px] text-white">
                            {footer_content.contact.items.map((item, index) => (
                                item.link ? (
                                    <a
                                        key={index}
                                        href={item.link}
                                        className={`flex items-center gap-3 hover:text-white transition-colors ${item.fullWidth ? 'sm:col-span-3' : ''
                                            }`}
                                    >
                                        <FiPhone style={{ fontSize: '18px' }} />
                                        {item.value}
                                    </a>
                                ) : (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-3 ${item.fullWidth ? 'sm:col-span-3' : ''
                                            }`}
                                    >
                                        <FiPhone style={{ fontSize: '18px' }} />
                                        {item.value}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;