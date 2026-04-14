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
import SLCard from '../components/SLCard';
import seafreightImage from '../assets/seafreight.png'
import landtransportImage from '../assets/landtransport.png'
import airfreightImage from '../assets/airfreight.png'
import rw_bg_image from '../assets/rw-bg-image.png'
import contact_bg from '../assets/contact-bg.png'
import { home_aboutus } from '../content/home_aboutus';
import test_icon from '../assets/test_icon.png'
import { home_services } from '../content/home_services';
import ServiceCard from '../components/ServiceCard';
import { home_industries } from '../content/home_industries';
import IndustriesCard from '../components/IndustriesCard';
import { gallery } from '../content/home_rw';
import Masonry from '../effects/Masonry';

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
    const exitSection = exitSectionRef.current;
    
    if (!shipCanvas || !exitSection) return;

    // Set ship to visible initially
    gsap.set(shipCanvas, { x: 0, opacity: 1, scale: 1 });

    // Exit animation on scroll - reversible
    gsap.fromTo(shipCanvas, 
      { x: 0, opacity: 1, scale: 1 },
      {
        x: 1750,
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
          trigger: exitSection,
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
          trigger: exitSection,
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
              bottom: '-350px',
              left: '50%',
              transform: 'translate(-50%, -25%)',
              zIndex: 5,
              pointerEvents: 'none'
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
        className='min-h-screen flex items-center justify-center px-18'
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative', 
          zIndex: 1 
        }}
      >
        <div className='text-center items-center flex flex-col py-18'>
          <div>
            <Badge text='Logistics' />
          </div>
          <div><h1 className='hero2'>Freight Solutions Built to Deliver</h1></div>
          <p className='logistics-p' style={{ fontWeight: '300', fontStyle: 'normal' }}>From <span className='logistics-span' style={{ fontWeight: '500', fontStyle: 'italic' }}>Ports</span> to <span className='logistics-span' style={{ fontWeight: '500', fontStyle: 'italic' }}>Highways</span> to <span className='logistics-span' style={{ fontWeight: '500', fontStyle: 'italic' }}>Airways</span>, our logistics services ensure reliable cargo movement across every transport channel.</p>
          <div className='slcard-grid grid grid-cols-1 md:grid-cols-2 px-12 py-12 gap-6 md:gap-8 w-full'>
            <SLCard
              title="Sea Freight"
              image={seafreightImage}
              description="Reliable global shipping through major sea routes."
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
            <SLCard
              title="Land Freight"
              image={landtransportImage}
              description="Reliable ground transportation for your cargo."
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
            <SLCard
              title="Air Freight"
              image={airfreightImage}
              description="Air cargo solutions for time-sensitive shipments."
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
          </div>
        </div>

        
      </section>

      {/* Next Section */}
      <section className='flex flex-col p-20 bg-[#0A0118]'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 w-full'>
          <div className='flex flex-col items-center lg:items-start w-full lg:w-1/2 px-0 lg:px-10'>
            <Badge text='About us' />
            <h1 className='about-head-text text-center lg:text-left pt-1.5'>{home_aboutus.header_text}</h1>
            <p className='about-p text-center lg:text-left pr-0 lg:pr-6'>{home_aboutus.description}</p>
          </div>
          <div className='flex flex-col lg:flex-row w-full lg:w-1/2 pt-0 lg:pt-10 gap-7'>
            <div className='flex flex-col items-center lg:items-start w-full lg:w-1/2'>
              <h2 className='about-subhead-text text-center lg:text-left'>{home_aboutus.subhead1}</h2>
              <p className='about-p text-center lg:text-left'>{home_aboutus.subdesc1}</p>
            </div>
            <div className='flex flex-col items-center lg:items-start w-full lg:w-1/2'>
              <h2 className='about-subhead-text text-center lg:text-left'>{home_aboutus.subhead2}</h2>
              <p className='about-p text-center lg:text-left'>{home_aboutus.subdesc2}</p>
            </div>
          </div>
          
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 gap-2.5 px-6 md:px-8 py-5 rounded-[1.25rem] bg-[#221A2F] w-full auto-rows-max'>
          <div className='flex flex-col justify-center md:justify-start items-center md:items-start w-full'>
            <div className='flex items-start w-full'>
              <div className='pr-4 shrink-0'>
                <img src={test_icon} alt="" className='w-9 h-9' />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='about-tag-head'>{home_aboutus.about_tag1_head}</div>
                <div className='about-tag-desc'>{home_aboutus.about_tag1_desc}</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center md:justify-start items-center md:items-start w-full'>
            <div className='flex items-start w-full'>
              <div className='pr-4 shrink-0'>
                <img src={test_icon} alt="" className='w-9 h-9' />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='about-tag-head'>{home_aboutus.about_tag2_head}</div>
                <div className='about-tag-desc'>{home_aboutus.about_tag2_desc}</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center md:justify-start items-center md:items-start w-full'>
            <div className='flex items-start w-full'>
              <div className='pr-4 shrink-0'>
                <img src={test_icon} alt="" className='w-9 h-9' />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='about-tag-head'>{home_aboutus.about_tag3_head}</div>
                <div className='about-tag-desc'>{home_aboutus.about_tag3_desc}</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center md:justify-start items-center md:items-start w-full'>
            <div className='flex items-start w-full'>
              <div className='pr-4 shrink-0'>
                <img src={test_icon} alt="" className='w-9 h-9' />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='about-tag-head'>{home_aboutus.about_tag4_head}</div>
                <div className='about-tag-desc'>{home_aboutus.about_tag4_desc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-screen p-12 md:p-20 flex items-center justify-center' style={{ background: 'linear-gradient(180deg, #FBFAF4 0%, #E0EBF7 100%)' }}>
        <div className='text-center items-center flex flex-col gap-4 w-full'>
          <Badge text={home_services.badge_text} />
          <h2 className='home-services-header-text'>{home_services.header_text}</h2>
          <div className='services-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto justify-items-center z-30'>
            {home_services.cards.map((card, index) => (
              <ServiceCard
                key={index}
                header={card.header}
                desc={card.desc}
                image={card.image}
                url={card.url}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='min-h-screen p-3 md:p-12 lg:p-20 flex items-center justify-center' style={{ background: 'radial-gradient(113.16% 93.38% at 66.33% 33.28%, #EBDEFB 0%, #FBFAF4 48.99%, #FAF9F3 72.94%, #F2F0EC 100%)' }}>
        <div className='text-center items-center flex flex-col gap-2 md:gap-4 w-full'>
          <Badge text={home_industries.badge_text} />
          <h2 className='home-services-header-text'>{home_industries.header_text}</h2>
          <div className='industries-layout flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-8 w-full'>
            <div className='industries-cards-left flex flex-col gap-3 md:gap-6 lg:gap-13 w-full sm:w-auto'>
              {
                home_industries.cards_left.map((card, index) => (
                  <IndustriesCard key={index} icon={card.icon} title={card.title} />
                ))
              }
              <div className='sm:hidden flex flex-col gap-3'>
                {
                  home_industries.cards_right.map((card, index) => (
                    <IndustriesCard key={`right-${index}`} icon={card.icon} title={card.title} />
                  ))
                }
              </div>
            </div>
            <div className='hidden sm:block shrink-0'>
              <img src={home_industries.bg_image} alt="" className='industries_image' />
            </div>
            <div className='industries-cards-right hidden sm:flex flex-col gap-3 md:gap-6 lg:gap-13 w-full sm:w-auto'>
              {
                home_industries.cards_right.map((card, index) => (
                  <IndustriesCard key={index} icon={card.icon} title={card.title} />
                ))
              }
            </div>
            <div className='sm:hidden shrink-0 order-first'>
              <img src={home_industries.bg_image} alt="" className='industries_image' />
            </div>
          </div>
        </div>
      </section>
      <section className='min-h-screen p-6 md:p-12 lg:p-20 flex items-center justify-center' style={{ background: `url(${rw_bg_image}) lightgray 0px -198.327px / 100% 139.886% no-repeat` }}>
        
        <div className='text-center items-center flex flex-col gap-2 md:gap-4 w-full'>
          <Badge text='Recent Works' />
          <h2 className='recent-works-header-text mb-4'>Our Recent Completed Projects Showcase</h2>
        
          <div className='w-full max-w-7xl mx-auto p-3 md:p-6 lg:p-8 overflow-hidden z-40'>
            <Masonry
              items={gallery}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={true}
            />
          </div>
        </div>
      </section>
      <section className='min-h-screen p-6 md:p-12 lg:p-20 flex items-center justify-centerr' style={{ background: 'rgba(29, 28, 32, 1)' }}>
        <div className='text-center items-center flex flex-col gap-2 md:gap-4 w-full'>
          <Badge text="Industries"/>
          <h2 className='featured-works-header-text'>Featured Works</h2>
          
        </div>
      </section>
      <section className='min-h-screen flex items-center justify-center' style={{ background: 'rgba(29, 28, 32, 1)' }}>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-4'>What Our Clients Say</h2>
          <p className='text-lg text-gray-600'>Explore what we can do for your business</p>
        </div>
      </section>
      <section className='min-h-screen flex items-center justify-center' style={{ background: 'rgba(255, 255, 255, 1)' }}>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-4'>Frequently Asked Questions</h2>
          <p className='text-lg text-gray-600'>Explore what we can do for your business</p>
        </div>
      </section>
      <section className='min-h-screen flex items-center justify-center' style={{ background: `url(${contact_bg}) lightgray 50% / cover no-repeat` }}>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-4'>Reach out Today</h2>
          <p className='text-lg text-gray-600'>Explore what we can do for your business</p>
        </div>
      </section>
    </>
  )
}

export default Home2
