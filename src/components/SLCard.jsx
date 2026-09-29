import React, { useState, useRef, useEffect } from 'react'
import SpotlightCard from '../effects/SpotlightCard'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const SLCard = ({ title, description, spotlightColor, image }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [supportsHover, setSupportsHover] = useState(() => {
    return window.matchMedia('(hover: hover)').matches
  })
  const cardRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)')

    const handleMediaChange = (e) => {
      setSupportsHover(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  const handleMouseMove = (e) => {
    if (!cardRef.current || !supportsHover) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotateY = ((mouseX - centerX) / centerX) * 15 // Max 15deg tilt
    const rotateX = ((centerY - mouseY) / centerY) * 15

    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div
      ref={cardRef}
      className='h-full'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: supportsHover && isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.08)`
          : isHovered
            ? 'scale(1.05)'
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <SpotlightCard className='bg-white custom-spotlight-card' spotlightColor={spotlightColor}>
        <div className='flex flex-col p-2 gap-2.5 cursor-pointer'>
          <img src={image} alt="" className='w-full h-auto object-cover' />
          <div className='flex flex-col'>
            <div className='flex'>
              <h2
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '125%',
                  letterSpacing: '0%',
                  color: 'rgba(0, 0, 0, 1)'
                }}
                className='text-left'
              >
                {title}
              </h2>
              <ArrowCircleRightIcon
                style={{ fontSize: '32px', marginLeft: 'auto', color: 'rgba(0, 0, 0, 1)' }}
              />
            </div>
            <p className='lg-card-desc text-left pb-2 line-clamp-3'>{description}</p>
          </div>
        </div>
      </SpotlightCard>
    </div>
  )
}

export default SLCard