import React, { useState, useRef, useEffect } from 'react'

const ServiceCard = ({header, desc, image, url}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [supportsHover, setSupportsHover] = useState(() => {
    // Initialize with current hover capability
    return window.matchMedia('(hover: hover)').matches
  })
  const cardRef = useRef(null)

  useEffect(() => {
    // Check if device supports hover (has mouse)
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

    // Calculate tilt angles based on mouse position
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

  const handleButtonClick = () => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <div 
      ref={cardRef}
      className="service-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: supportsHover && isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.08)`
          : isHovered
          ? 'scale(1.05)'
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      }}
    >
      <img src={image} alt={header} className="service-card-image" />
      <h3 className="service-card-header text-left px-2">{header}</h3>
      <p className="service-card-desc text-left px-2">{desc}</p>
      
      {/* Hover Button */}
      <div className={`service-card-button-container ${isHovered ? 'visible' : 'hidden'}`}>
        <button className="service-card-button" onClick={handleButtonClick}>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default ServiceCard