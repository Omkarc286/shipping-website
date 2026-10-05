import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LightRays from '../effects/LightRays';
import ClickForMore from '../components/ClickForMore';
import SplitText from '../effects/SplitText';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

// Assets
import bgImage from '../assets/bg-image.png';
import Badge from '../components/Badge';
import SLCard from '../components/SLCard';
import seafreightImage from '../assets/seafreight.png';
import landtransportImage from '../assets/landtransport.png';
import airfreightImage from '../assets/airfreight.png';
import contact_bg from '../assets/contact-bg.png';
import testimonial_bg from '../assets/testimonials/testimonial_bg.png';
import { home_aboutus } from '../content/home/home_aboutus';
import test_icon from '../assets/test_icon.png';
import ServiceCard from '../components/ServiceCard';
import IndustriesCard from '../components/IndustriesCard';
import Masonry from '../effects/Masonry';
import FWCard from '../components/FWCard';
import TestimonialsSection from './HomeComponents/TestimonialsSection.jsx';
import FAQSection from './HomeComponents/FAQSection.jsx';
import ReachOutSection from './HomeComponents/ReachOutSection.jsx';
import Footer from '../components/Footer.jsx';
import FeaturedWorksSection from './HomeComponents/FeaturedWorksSection.jsx';
import RecentWorksSection from './HomeComponents/RecentWorksSection.jsx';
import IndustriesSection from './HomeComponents/IndustriesSection.jsx';
import LogisticSolutionsSection from './HomeComponents/LogisticSolutionsSection.jsx';
import AwardsSection from './HomeComponents/AwardsSection.jsx';
import TrustedBySection from './HomeComponents/TrustedBySection.jsx';

// Content
import { home2_content } from '../content/home/home_logistics';

gsap.registerPlugin(ScrollTrigger);

// Map image keys to actual imported assets
const CARD_IMAGES = {
  seafreight: seafreightImage,
  landtransport: landtransportImage,
  airtransport: airfreightImage,
};

const Home2 = () => {
  const shipCanvasRef = useRef(null);
  const homeSectionRef = useRef(null);
  const badgeRef = useRef(null);
  const heroTextRef = useRef(null);
  const buttonRef = useRef(null);
  const exitSectionRef = useRef(null);

  // ---- Destructure content ----
  const { hero, logistics } = home2_content;

  // ---- Read navigation state (e.g. About Us click from Navbar) ----
  const location = useLocation();
  const skipLoader = location.state?.skipHeroLoader === true;

  // ---- Loading state for hero text ----
  // If redirected from About Us, start with the loader disabled
  const [isLoading, setIsLoading] = useState(!skipLoader);
  const [heroData, setHeroData] = useState(skipLoader ? hero.loaded : null);

  // Public-folder asset URLs (stable, never hashed by Vite)
  const shipWebp = '/cargo-ship-sea.webp';
  const shipPng = '/cargo-ship-sea.png';

  // ---- Scroll to Reach Out section ----
  const scrollToReachOut = () => {
    const target = document.getElementById('reach-out');
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // ---- Simulate/perform data fetching ----
  useEffect(() => {
    // If redirected from About Us, skip the loader and the fetch
    if (skipLoader) {
      setIsLoading(false);
      ScrollTrigger.refresh();
      return;
    }

    const fetchHeroData = async () => {
      try {
        // Replace this with your real data source (API, context, props, etc.)
        // Example:
        // const res = await fetch('/api/hero');
        // const data = await res.json();

        // Simulated delay for demo purposes
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setHeroData(hero.loaded);
      } catch (err) {
        console.error('Failed to load hero data', err);
        // Fallback so the section doesn't stay empty
        setHeroData(hero.loaded);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, [skipLoader, hero.loaded]);

  // ---- GSAP scroll animations ----
  useEffect(() => {
    const shipCanvas = shipCanvasRef.current;
    const exitSection = exitSectionRef.current;

    if (!shipCanvas || !exitSection) return;

    gsap.set(shipCanvas, { x: 0, opacity: 1, scale: 1 });

    const shipTween = gsap.fromTo(
      shipCanvas,
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
          reversed: false,
        },
      }
    );

    const contentTween = gsap.fromTo(
      [badgeRef.current, heroTextRef.current, buttonRef.current],
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
          reversed: false,
        },
      }
    );

    return () => {
      shipTween.scrollTrigger?.kill();
      shipTween.kill();
      contentTween.scrollTrigger?.kill();
      contentTween.kill();
    };
  }, []);

  // Refresh ScrollTrigger after content swaps from loader -> text
  useEffect(() => {
    if (!isLoading) {
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  // ---- Render the logistics description with highlighted words ----
  const renderLogisticsDescription = () => (
    <p className='logistics-p' style={{ fontWeight: '300', fontStyle: 'normal' }}>
      {logistics.description.parts.map((part, idx) =>
        part.highlight ? (
          <span
            key={idx}
            className='logistics-span'
            style={{ fontWeight: '500', fontStyle: 'italic' }}
          >
            {part.text}
          </span>
        ) : (
          <React.Fragment key={idx}>{part.text}</React.Fragment>
        )
      )}
    </p>
  );

  return (
    <>
      <section
        ref={homeSectionRef}
        className='home-section'
        style={{ position: 'relative', minHeight: '100vh' }}
      >
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
        <div
          className="home-content items-center justify-start flex flex-col"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '100vh',
            zIndex: 10,
            paddingTop: '9rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          <div ref={badgeRef} className="hero-header-badge">
            <SplitText
              text={hero.badge}
              tag="span"
              className="hero-badge-text"
              delay={20}
              duration={0.2}
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </div>

          <div
            ref={heroTextRef}
            className="hero-text-container text-center"
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0px',
              minHeight: '160px',
            }}
          >
            {isLoading ? (
              <div className="hero-loader" aria-label="Loading" role="status">
                <div className="hero-loader-spinner" />
              </div>
            ) : (
              <>
                <SplitText
                  text={heroData?.line1 || hero.loading.line1}
                  tag="div"
                  className="hero-text"
                  delay={60}
                  duration={1}
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="center"
                />
                <SplitText
                  text={heroData?.line2 || hero.loading.line2}
                  tag="div"
                  className="hero-text"
                  delay={60}
                  duration={1}
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="center"
                />
              </>
            )}
          </div>

          <div ref={buttonRef} style={{ margin: '16px' }}>
            <ClickForMore
              text={hero.cta}
              icon={<NavigateNextRoundedIcon style={{ fontSize: '20px', marginLeft: '1px', color: '#FFF' }} />}
              classContainer="get-free-quote-button"
              classTypography="get-free-quote-typography"
              onClick={scrollToReachOut}
            />
          </div>

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
              pointerEvents: 'none',
            }}
          >
            <picture>
              <source srcSet={shipWebp} type="image/webp" />
              <img
                src={shipPng}
                alt="Cargo Ship"
                fetchpriority="high"
                decoding="async"
                className='w-full h-full object-contain'
              />
            </picture>
          </div>
        </div>
      </section>

      <section
        ref={exitSectionRef}
        className='min-h-screen flex items-center justify-center px-18'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className='text-center items-center flex flex-col py-18'>
          <div>
            <Badge text={logistics.badge} />
          </div>
          <div><h1 className='hero2'>{logistics.title}</h1></div>
          {renderLogisticsDescription()}

          <div className='slcard-grid grid grid-cols-1 md:grid-cols-2 px-12 py-12 gap-6 md:gap-8 w-full'>
            {logistics.cards.map((card, idx) => (
              <Link
                key={idx}
                to={card.route}
                style={{ textDecoration: 'none' }}
              >
                <SLCard
                  title={card.title}
                  image={CARD_IMAGES[card.imageKey]}
                  description={card.description}
                  spotlightColor={card.spotlightColor}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className='flex flex-col p-20 bg-[#0A0118]'>
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

      <AwardsSection />

      <LogisticSolutionsSection />
      <IndustriesSection />
      <TrustedBySection />
      {/* <RecentWorksSection /> */}
      {/* <FeaturedWorksSection /> */}

      <TestimonialsSection backgroundImage={testimonial_bg} />
      <FAQSection />

      <div id="reach-out">
        <ReachOutSection backgroundImage={contact_bg} />
      </div>

      <Footer />
    </>
  )
}

export default Home2