import React from 'react'
import SpotlightCard from '../effects/SpotlightCard'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const SLCard = ({ title, description, spotlightColor, image }) => {
  return (
    <div className='h-full'>
      <SpotlightCard className='bg-white custom-spotlight-card' spotlightColor={spotlightColor}>
        <div className='flex flex-col p-2 gap-2.5' >
          <img src={image} alt="" className='w-full h-auto object-cover' />
          <div className='flex flex-col'>
            <div className='flex'>
              <h2 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '125%', letterSpacing: '0%', color: 'rgba(0, 0, 0, 1)' }} className='text-left'>{title}</h2>
              <ArrowCircleRightIcon style={{ fontSize: '32px', marginLeft: 'auto', color: 'rgba(0, 0, 0, 1)' }} />
            </div>
            <p className='lg-card-desc text-left pb-2 line-clamp-3'>{description}</p>
          </div>
          
        </div>
      </SpotlightCard>
    </div>
  )
}

export default SLCard