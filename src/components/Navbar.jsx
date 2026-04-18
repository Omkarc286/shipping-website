import React, { useState, useEffect } from 'react'
import Logo from '../assets/reflect.png'
import { menuItems } from '../content/navbar_content'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState('services')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080)
    }

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-content') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    // Initial check
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

  const handleMenuClick = (id) => {
    setActiveMenu(id)
    setIsMobileMenuOpen(false) // Close mobile menu when item is clicked
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav className={`navbar-grid w-vw px-18 py-4 items-center fixed top-0 left-0 right-0 z-70 ${
        isScrolled ? 'navbar-solid' : 'navbar-glass'
      }`}>
          {/* Left - Logo */}
          <div className="flex items-center justify-start gap-3">
              <img src={Logo} className="w-9 h-9" alt="Reflect logo"/>
              <div className="brand-text">Fleetonic</div>
          </div>
          
          {/* Middle - Menu (centered) - Only show on desktop */}
          {!isMobile && (
            <div className="menuholder">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`menu-item-element transition-all ${
                    activeMenu === item.id ? 'menu-item-active' : 'menu-item'
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
          
          {/* Right - Brochure Button - Only show on desktop */}
          {!isMobile && (
            <div className="flex justify-end">
                <div className="flex px-2 py-2 items-center justify-center rounded-lg custom-gradient-box">
                    <div className="font-medium text-base custom-gradient-text">Company Brochure</div>
                </div>
            </div>
          )}

          {/* Mobile Hamburger Menu - Only show on mobile */}
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

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {/* Mobile Menu Items */}
          <div className="mobile-menu-items">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`mobile-menu-item ${
                  activeMenu === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>
          
          {/* Mobile Brochure Button */}
          <div className="mobile-menu-button-container">
            <div className="flex px-4 py-3 items-center justify-center rounded-lg custom-gradient-box">
                <div className="font-medium text-base custom-gradient-text">Company Brochure</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar