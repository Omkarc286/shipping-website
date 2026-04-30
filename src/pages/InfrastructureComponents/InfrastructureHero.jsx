import React, { useRef, useEffect } from 'react';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import SplitText from '../../effects/SplitText';
import ClickForMore from '../../components/ClickForMore';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { infrastructurehero_content } from '../../content/infrastructure/infrastructure_infrastructurehero';

gsap.registerPlugin(ScrollTrigger);

const InfrastructureHero = () => {
    const heroTextRef = useRef(null);
    const buttonRef = useRef(null);
    const badgeRef = useRef(null);
    const homeSectionRef = useRef(null);

    useEffect(() => {
        const elements = [
            badgeRef.current,
            heroTextRef.current,
            buttonRef.current
        ];

        const triggerSection = document.querySelector('.freight-trigger');

        if (!triggerSection) return;

        gsap.fromTo(
            elements,
            { y: 0, opacity: 1 },
            {
                y: -120,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: triggerSection,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1.5,
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section
            ref={homeSectionRef}
            className='home-section'
            style={{ position: 'relative', minHeight: '100vh' }}
        >
            <div
                className="home-content items-center justify-start flex flex-col"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100vh',
                    zIndex: 10,
                    paddingTop: '12rem'
                }}
            >

                {/* Badge */}
                <div ref={badgeRef} className="hero-header-badge">
                    <SplitText
                        text={infrastructurehero_content.badge}
                        tag="span"
                        className="hero-badge-text"
                        delay={20}
                        duration={0.2}
                        splitType="chars"
                        from={{ opacity: 0, y: 20 }}
                        to={{ opacity: 1, y: 0 }}
                    />
                </div>

                {/* Heading */}
                <div
                    ref={heroTextRef}
                    className="hero-text-container text-center"
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    {infrastructurehero_content.heading.map((line, index) => (
                        <SplitText
                            key={index}
                            text={line}
                            tag="div"
                            className="hero-text"
                            delay={60}
                            duration={1}
                            splitType="words"
                            from={{ opacity: 0, y: 30 }}
                            to={{ opacity: 1, y: 0 }}
                        />
                    ))}

                    <p className="text-gray-300 text-center mt-6 max-w-6xl !text-[18px] md:text-base whitespace-pre-line">
                        {infrastructurehero_content.description}
                    </p>
                </div>

                {/* CTA */}
                <div ref={buttonRef} style={{ margin: '16px' }}>
                    <ClickForMore
                        text={infrastructurehero_content.cta.text}
                        icon={
                            <NavigateNextRoundedIcon
                                style={{ fontSize: '20px', marginLeft: '1px', color: '#FFF' }}
                            />
                        }
                        classContainer="get-free-quote-button"
                        classTypography="get-free-quote-typography"
                    />
                </div>

            </div>
        </section>
    );
};

export default InfrastructureHero;