import React, { useRef, useEffect } from 'react'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import SplitText from '../../effects/SplitText';
import ClickForMore from '../../components/ClickForMore';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContractingHero = () => {
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
                        text="General Contracting"
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
                    <SplitText
                        text="General Contracting Service in UAE"
                        tag="div"
                        className="hero-text"
                        delay={60}
                        duration={1}
                        splitType="words"
                        from={{ opacity: 0, y: 30 }}
                        to={{ opacity: 1, y: 0 }}
                    />

                    {/* <SplitText
                        text="Across UAE & GCC"
                        tag="div"
                        className="hero-text"
                        delay={60}
                        duration={1}
                        splitType="words"
                        from={{ opacity: 0, y: 30 }}
                        to={{ opacity: 1, y: 0 }}
                    /> */}
                    <p className="text-gray-300 text-center mt-6 max-w-7xl !text-[18px] md:text-base">
                        ADSO is a leading and trusted general contracting company in Abu Dhabi that delivers professional general contracting service in UAE.  We also offer
                        <br />
                        infrastructural development and marine infrastructure work solutions with the best expertise. We make sure that your project, relevant to a specific
                        <br />
                        industry or the construction industry, is well completed from planning to final delivery. We have expertise to deal with large infrastructural projects. We
                        <br />
                        also perform marine construction projects and infrastructure works in the UAE.
                    </p>
                </div>

                {/* Subtitle */}


                {/* CTA */}
                <div ref={buttonRef} style={{ margin: '16px' }}>
                    <ClickForMore
                        text="Get a Free Quote"
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
    )
}

export default ContractingHero