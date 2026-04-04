import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LightRays from '../effects/LightRays';
import ClickForMore from '../components/ClickForMore';
import SplitText from '../effects/SplitText';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import ship from '../assets/cargo-ship-sea.png'
import bgImage from '../assets/bg-image.png'
import Badge from '../components/Badge';

gsap.registerPlugin(ScrollTrigger);

const Home2 = () => {
  const shipCanvasRef = useRef(null);
  const homeSectionRef = useRef(null);
  const badgeRef = useRef(null);
  const heroTextRef = useRef(null);
  const buttonRef = useRef(null);
  const exitSectionRef = useRef(null);

  useEffect(() => {
    const shipCanvas = shipCanvasRef.current;
    const homeSection = homeSectionRef.current;
    
    if (!shipCanvas || !homeSection) return;

    // Initialize all elements off-screen/hidden
    gsap.set(shipCanvas, { x: -1750, opacity: 0, scale: 0.8 });

    // Create entrance timeline on page load
    const entranceTimeline = gsap.timeline();

    // Ship entrance animation
    entranceTimeline.to(shipCanvas, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power2.out'
    }, 0);

    // Exit animation on scroll - reversible
    gsap.fromTo(shipCanvas, 
      { x: 0, opacity: 1, scale: 1 },
      {
        x: 1750,
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
          trigger: exitSectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1.5,
          markers: false,
          reversed: false
        }
      }
    );

    // Exit animation for hero content - reversible
    gsap.fromTo([badgeRef.current, heroTextRef.current, buttonRef.current],
      { y: 0, opacity: 1 },
      {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: exitSectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1.5,
          markers: false,
          reversed: false
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section ref={homeSectionRef} className='home-section' style={{ position: 'relative', minHeight: '100vh' }}>
        <div className='light-rays-container'>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <div className="home-content items-center justify-start flex flex-col" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '100vh', zIndex: 10, paddingTop: '12rem' }}>
          {/* Badge with SplitText effect */}
          <div ref={badgeRef} className="hero-header-badge">
            <SplitText
              text="10K+ Active Clients across the Globe"
              tag="span"
              className="hero-badge-text"
              delay={20}
              duration={0.2}
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          {/* Hero text with SplitText effect */}
          <div ref={heroTextRef} className="hero-text-container text-center" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SplitText
              text="Integrated Logistics &"
              tag="div"
              className="hero-text"
              delay={60}
              duration={1}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              text="Infrastructure Solutions"
              tag="div"
              className="hero-text"
              delay={60}
              duration={1}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          {/* CTA Button */}
          <div ref={buttonRef} style={{ margin: '16px' }}>
            <ClickForMore 
              text="Get a Free Quote"
              icon={<NavigateNextRoundedIcon style={{ fontSize: '20px', marginLeft: '1px', color: '#FFF' }} />}
              classContainer="get-free-quote-button"
              classTypography="get-free-quote-typography"
            />
          </div>

          {/* Ship entrance animation */}
          <div 
            ref={shipCanvasRef}
            className='ship-canvas'
            style={{
              width: '1200px',
              height: '700px',
              position: 'absolute',
              bottom: '-300px',
              left: '50%',
              transform: 'translate(-50%, -25%)',
              zIndex: 5
            }}
          >
            <img 
              src={ship} 
              alt="Cargo Ship" 
              className='w-full h-full object-contain' 
            />
          </div>
        </div>
      </section>

      {/* Exit Section - Ship and content will fade out and exit as user scrolls */}
      <section 
        ref={exitSectionRef}
        className='min-h-screen flex items-center justify-center'
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative', 
          zIndex: 1 
        }}
      >
        <div className='text-center items-center flex flex-col'>
          <div>
            <Badge text='Logistics' />
          </div>
          <div><h1 className='hero2'>Freight Solutions Built to Deliver</h1></div>
          <div><p className='logistics-p'>From <span className='logistics-span'>Ports</span> to <span className='logistics-span'>Highways</span> to <span className='logistics-span'>Airways</span>, our logistics services ensure reliable cargo movement across every transport channel.</p></div>
        </div>
      </section>

      {/* Next Section */}
      <section className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-4'>Welcome to Our Services</h2>
          <p className='text-lg text-gray-600'>Explore what we can do for your business</p>
        </div>
      </section>
    </>
  )
}

export default Home2
