import React, { useRef, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from 'motion/react'

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
}

const FWCard = ({ header, image }) => {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  })

  const [lastY, setLastY] = useState(0)

  function handleMouse(e) {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -12
    const rotationY = (offsetX / (rect.width / 2)) * 12

    rotateX.set(rotationX)
    rotateY.set(rotationY)

    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)

    const velocityY = offsetY - lastY
    rotateFigcaption.set(-velocityY * 0.6)
    setLastY(offsetY)
  }

  function handleMouseEnter() {
    scale.set(1.02)
    opacity.set(1)
  }

  function handleMouseLeave() {
    opacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="fw-card"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        margin: 'auto'
      }}
    >
      <h3 className="fw-card-header text-left">{header}</h3>

      <img
        src={image}
        alt={header}
        className="fw-card-image"
      />

      {/* Popup header text with 3D effect - DISABLED FOR NOW */}
      {/* 
      <motion.figcaption
        className="pointer-events-none absolute rounded-sm bg-white px-2.5 py-1 text-[12px] text-[#1D1C20] opacity-0 z-10 hidden sm:block font-semibold"
        style={{
          x,
          y,
          opacity,
          rotate: rotateFigcaption,
          transformStyle: 'preserve-3d',
          translate: '0 -50px'
        }}
      >
        {header}
      </motion.figcaption>
      */}
    </motion.div>
  )
}

export default FWCard