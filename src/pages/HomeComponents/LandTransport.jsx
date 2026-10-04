import React, { useEffect, useRef } from 'react';
import './FreightStyle.css';
import ReachOutSection from './ReachOutSection.jsx';
import Footer from '../../components/Footer.jsx';
import contact_bg from '../../assets/contact-bg.png';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

// SplitText for hero animation (same as ServicesHero)
import SplitText from '../../effects/SplitText';
import ClickForMore from '../../components/ClickForMore';

// GSAP imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assets
// NOTE: heroBg is served from /public (un-hashed, stable URL).
// We use a plain URL string instead of importing, so the preload
// link in index.html can point at the same stable path.
import test_icon from '../../assets/test_icon.png';

gsap.registerPlugin(ScrollTrigger);

const LandTransport = () => {
    const badgeRef = useRef(null);
    const heroTextRef = useRef(null);
    const buttonRef = useRef(null);

    // Public-folder asset URLs (stable, never hashed by Vite)
    const heroBgWebp = '/landtransport2.webp';
    const heroBgPng = '/landtransport2.png'; // fallback for non-WebP browsers

    // ---- Scroll to Reach Out section ----
    const scrollToReachOut = () => {
        const target = document.getElementById('reach-out');
        if (!target) return;

        // Use window.scrollTo with offset (friendlier with ScrollTrigger pinned sections)
        const y = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fade out on scroll (matches ServicesHero behavior)
    useEffect(() => {
        const elements = [
            badgeRef.current,
            heroTextRef.current,
            buttonRef.current
        ].filter(Boolean);

        const triggerSection = document.querySelector('.sf-trigger');

        if (!triggerSection || elements.length === 0) return;

        gsap.fromTo(
            elements,
            { y: 0, opacity: 1 },
            {
                y: -120,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: triggerSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const features = [
        {
            title: 'Full Truckload',
            desc: 'Dedicated capacity for large-volume cargo.'
        },
        {
            title: 'Less than Truckload',
            desc: 'Shared capacity for cost-effective shipping.'
        },
        {
            title: 'Long & Short Haul',
            desc: 'Flexible transport across regional and long routes.'
        },
        {
            title: 'Customer Service',
            desc: 'Responsive support from booking to delivery.'
        },
        {
            title: 'Last-mile Delivery',
            desc: 'Reliable delivery to the final destination.'
        },
        {
            title: 'Documentation',
            desc: 'Accurate paperwork and compliance checks.'
        },
        {
            title: 'Cross-border Transportation',
            desc: 'Smooth movement across international borders.'
        },
        {
            title: 'Mainline Operators',
            desc: 'Major carriers for international trade routes.'
        },
        {
            title: 'Feeder Operators',
            desc: 'Regional connections to major trade routes.'
        },
    ];

    const steps = [
        {
            num: '1.',
            title: 'Shipment Request',
            desc: 'Submit cargo details and receive a transport quote.'
        },
        {
            num: '2.',
            title: 'Vehicle Assignment',
            desc: 'The right vehicle is assigned to your shipment.'
        },
        {
            num: '3.',
            title: 'Pickup',
            desc: 'Cargo is collected and verified at the pickup point.'
        },
        {
            num: '4.',
            title: 'Route & Transit',
            desc: 'Cargo moves securely along the planned route.'
        },
        {
            num: '5.',
            title: 'Delivery',
            desc: 'Cargo is delivered safely to the destination.'
        },
        {
            num: '6.',
            title: 'Proof of Delivery',
            desc: 'Delivery is confirmed with digital proof of receipt.'
        },
    ];

    return (
        <div className="sea-freight-page">

            {/* FIXED HERO SECTION - Left aligned, Playfair Display typography */}
            <section className="sf-hero-fixed">
                {/* Real <img> with <picture> for WebP + PNG fallback */}
                <picture>
                    <source srcSet={heroBgWebp} type="image/webp" />
                    <img
                        src={heroBgPng}
                        alt=""
                        aria-hidden="true"
                        fetchpriority="high"
                        decoding="async"
                        className="sf-hero-bg-img"
                    />
                </picture>

                <div className="sf-hero-overlay"></div>

                <div className="sf-hero-content">

                    {/* Badge - Left aligned */}
                    <div ref={badgeRef} className="sf-badge-wrapper">
                        <SplitText
                            text="Land Transport"
                            tag="span"
                            className="sf-badge"
                            delay={20}
                            duration={0.2}
                            splitType="chars"
                            from={{ opacity: 0, y: 20 }}
                            to={{ opacity: 1, y: 0 }}
                            textAlign="left"
                        />
                    </div>

                    {/* Title + Description - Left aligned container */}
                    <div ref={heroTextRef} className="sf-hero-text-container">
                        {/* Title with Playfair Display + SplitText */}
                        <h1 className="sf-hero-title">
                            <SplitText
                                text="Flexible road transportation for reliable regional and domestic delivery"
                                tag="div"
                                className="sf-title-line"
                                delay={60}
                                duration={1}
                                splitType="words"
                                from={{ opacity: 0, y: 30 }}
                                to={{ opacity: 1, y: 0 }}
                                textAlign="left"
                            />
                        </h1>

                        {/* Description with Inter light + SplitText */}
                        <p className="sf-hero-desc">
                            <SplitText
                                text="We offer cost-effective and sustainable land transport solution for business of all sizes. From full truck loads to smaller shipments, we ensure your cargo reaches its destination safely and on time."
                                tag="span"
                                className="sf-desc-text"
                                delay={30}
                                duration={0.8}
                                splitType="words"
                                from={{ opacity: 0, y: 15 }}
                                to={{ opacity: 1, y: 0 }}
                                textAlign="left"
                            />
                        </p>
                    </div>

                    {/* CTA Button - Left aligned, scrolls to Reach Out section */}
                    <div ref={buttonRef} className="sf-button-wrapper">
                        <ClickForMore
                            text="Request a quote"
                            icon={
                                <NavigateNextRoundedIcon
                                    style={{ fontSize: '20px', marginLeft: '1px', color: '#FFF' }}
                                />
                            }
                            classContainer="get-free-quote-button2"
                            classTypography="get-free-quote-typography"
                            onClick={scrollToReachOut}
                        />
                    </div>

                </div>
            </section>

            {/* INVISIBLE TRIGGER */}
            <div className="sf-trigger"></div>

            {/* FEATURES GRID */}
            <section className="sf-features-section">
                <div className="sf-features-grid">
                    {features.map((item, index) => (
                        <div className="sf-feature-item" key={index}>
                            <div className="sf-feature-icon">
                                <img src={test_icon} alt={item.title} className="sf-feature-img" />
                            </div>
                            <div className="sf-feature-text">
                                <h3 style={{ color: '#E6F9AF' }}>{item.title}</h3>
                                <p style={{ textAlign: 'left', fontSize: '15px' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="sf-how-it-works">
                <h2 className="sf-section-title">How it Works</h2>
                <div className="sf-steps-grid">
                    {steps.map((step, index) => (
                        <div className="expertise-card2" key={index}>
                            <div className="sf-step-num">{step.num}</div>
                            <h3 className="sf-step-title">{step.title}</h3>
                            <p className="sf-step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* REACH OUT & FOOTER */}
            <div id="reach-out">
                <ReachOutSection backgroundImage={contact_bg} />
            </div>
            <Footer />
        </div>
    );
};

export default LandTransport;