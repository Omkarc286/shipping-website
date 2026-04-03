import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LightRays from '../effects/LightRays';
import ClickForMore from '../components/ClickForMore';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import ship from '../assets/cargo-ship-sea.png'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const shipCanvasRef = useRef(null);
  const homeSectionRef = useRef(null);

  useEffect(() => {
    const shipCanvas = shipCanvasRef.current;
    const homeSection = homeSectionRef.current;
    
    if (!shipCanvas || !homeSection) return;

    // Initialize ship position off-screen to the left
    gsap.set(shipCanvas, { x: -1000, opacity: 1, scale: 1, rotation: 0 });

    // Create a timeline with multiple animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: homeSection,
        start: 'top top',
        end: '100% top',
        scrub: 1.5,
        markers: false
      }
    });

    // Entrance: Ship moves from left to center
    timeline.to(shipCanvas, {
      x: 0,
      opacity: 1,
      duration: 1
    }, 0)
    // Exit: Ship shrinks, rotates and fades out
    .to(shipCanvas, {
      scale: 0.05,
      rotation: 720,
      opacity: 0,
      duration: 1
    }, 0.5);

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section ref={homeSectionRef} className='home-section' style={{ position: 'relative', minHeight: '400vh' }}>
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
          <div className="hero-header-badge">
            <div className="hero-badge-text">10K+ Active Clients across the Globe</div>
          </div>
          <div className="hero-text-container text-center">
            <div className='hero-text'>Integrated Logistics &<br /> Infrastructure Solutions</div>
          </div>
          <ClickForMore 
            text="Get a Free Quote"
            icon={<NavigateNextRoundedIcon style={{ fontSize: '20px', marginLeft: '1px', color: '#FFF' }} />}
            classContainer="get-free-quote-button"
            classTypography="get-free-quote-typography"
          />
          <div 
            ref={shipCanvasRef}
            className='ship-canvas'
            style={{
              width: '1200px',
              height: '700px',
              position: 'absolute',
              bottom: '-250px',
              left: '50%',
              transform: 'translate(-50%, -25%)',
              zIndex: 5
            }}
          >
            <img 
              src={ship} 
              alt="Cargo Ship" 
              className='w-full h-full object-contain' 
              decoding="async"     
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home