import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Logo from '../assets/reflect.png'
import { menuItems } from '../content/navbar_content'

import AboutDropdown from './AboutDropdown'
import ServicesDropdown from './ServicesDropdown'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(() => {
    if (location.pathname === '/services') {
      return 'services'
    } else if (location.pathname === '/') {
      return 'aboutus'
    }
    return 'aboutus'
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [hoveredMenu, setHoveredMenu] = useState(null)
  const hoverTimeout = useRef(null)

  useEffect(() => {
    if (location.pathname === '/services') {
      setActiveMenu('services')
    } else if (location.pathname === '/') {
      setActiveMenu('aboutus')
    }
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080)
    }

    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest('.mobile-menu-content') &&
        !event.target.closest('.mobile-menu-button')
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    handleResize()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const handleMenuClick = (item) => {
    setActiveMenu(item.id)
    setIsMobileMenuOpen(false)

    window.scrollTo(0, 0)

    if (item.id === 'services') {
      navigate('/services')
    } else if (item.id === 'aboutus') {
      navigate('/')
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMouseEnter = (id) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setHoveredMenu(id)
  }

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredMenu(null)
    }, 150)
  }

  return (
    <>
      <nav
        className={`navbar-grid w-vw px-18 py-4 items-center fixed top-0 left-0 right-0 z-70 ${isScrolled ? 'navbar-solid' : 'navbar-glass'
          }`}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-start gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={Logo} className="w-9 h-9" alt="Reflect logo" />
          <div className="brand-text">Fleetonic</div>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="menuholder flex gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  onClick={() => handleMenuClick(item)}
                  className={`menu-item-element transition-all ${activeMenu === item.id
                    ? 'menu-item-active'
                    : 'menu-item'
                    }`}
                >
                  {item.label}
                </div>

                {/* About Dropdown */}
                {item.id === 'aboutus' &&
                  hoveredMenu === 'aboutus' && <AboutDropdown />}

                {/* Services Dropdown */}
                {item.id === 'services' &&
                  hoveredMenu === 'services' && <ServicesDropdown />}
              </div>
            ))}
          </div>
        )}

        {/* Right Button */}
        {!isMobile && (
          <div className="flex justify-end">
            <div className="flex px-2 py-2 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="font-medium text-base text-white">
                Company Brochure
              </div>
            </div>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''
          }`}
      >
        <div className="mobile-menu-content">
          <div className="mobile-menu-items">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`mobile-menu-item ${activeMenu === item.id ? 'active' : ''
                  }`}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div className="mobile-menu-button-container">
            <div className="flex px-4 py-3 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="font-medium text-base text-white">
                Company Brochure
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar