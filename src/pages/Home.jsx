import React from 'react';
import LightRays from '../effects/LightRays';
import ClickForMore from '../components/ClickForMore';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const Home = () => {
  return (
    <section className='home-section'>
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
      <div className="home-content items-center justify-center flex pt-16">
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
        <div className='ship-canvas'>

        </div>
      </div>
    </section>
  )
}

export default Home