/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Logo from '../assets/reflect.png'
import { menuItems } from '../content/navbar_content'
import brochurePDF from '../assets/brochure/freight_forwarding_brochure_sample.pdf'

import AboutDropdown from './AboutDropdown'
import ServicesDropdown from './ServicesDropdown'
import { FiChevronDown } from "react-icons/fi";


const isServiceRoute = (pathname) => {
  const serviceRoutes = [
    '/services',
    '/general-contracting',
    '/general-contracting/infrastructure',
    '/general-contracting/marine',
    '/logistics',
    '/logistics/land-freight',
    '/logistics/air-freight',
    '/logistics/sea-freight',
    '/logistics/open-yard-storage',
    '/marine',
    '/marine/ship-management',
    '/marine/commercial-management',
    '/marine/docking-management',
    '/marine/crew-management',
    '/marine/procurement-services',
    '/marine/our-fleets',
    '/material-supply',
    '/equipment-rental',
    '/custom-clearance'
  ]

  return (
    serviceRoutes.includes(pathname) ||
    pathname.startsWith('/logistics/') ||
    pathname.startsWith('/marine/')
  )
}

const isAboutRoute = (pathname) => {
  const aboutRoutes = ['/', '/about-company', '/career']
  return aboutRoutes.includes(pathname)
}

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(() => {
    if (isServiceRoute(location.pathname)) return 'services'
    if (isAboutRoute(location.pathname)) return 'aboutus'
    return 'aboutus'
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [servicesOpen, setServicesOpen] = useState(false)
  const [generalContractingOpen, setGeneralContractingOpen] = useState(false)
  const [logisticsOpen, setLogisticsOpen] = useState(false)
  const [marineTransportOpen, setMarineTransportOpen] = useState(false)

  const [hoveredMenu, setHoveredMenu] = useState(null)
  const hoverTimeout = useRef(null)

  useEffect(() => {
    if (isServiceRoute(location.pathname)) setActiveMenu('services')
    else if (isAboutRoute(location.pathname)) setActiveMenu('aboutus')
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleResize = () => setIsMobile(window.innerWidth < 1080)

    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest('.mobile-menu-content') &&
        !event.target.closest('.mobile-menu-button')
      ) {
        setIsMobileMenuOpen(false)
        setServicesOpen(false)
        setGeneralContractingOpen(false)
        setLogisticsOpen(false)
        setMarineTransportOpen(false)
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
    setServicesOpen(false)
    setGeneralContractingOpen(false)
    setLogisticsOpen(false)
    setMarineTransportOpen(false)
    window.scrollTo(0, 0)

    if (item.id === 'services') navigate('/services')
    else if (item.id === 'aboutus') navigate('/')
  }

  const handleServiceSubItemClick = (path) => {
    setActiveMenu('services')
    setIsMobileMenuOpen(false)
    setServicesOpen(false)
    setGeneralContractingOpen(false)
    setLogisticsOpen(false)
    setMarineTransportOpen(false)
    navigate(path)
    window.scrollTo(0, 0)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setServicesOpen(false)
    setGeneralContractingOpen(false)
    setLogisticsOpen(false)
    setMarineTransportOpen(false)
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

  const toggleServices = (e) => {
    e.stopPropagation()
    setServicesOpen(!servicesOpen)
  }

  const toggleGeneralContracting = (e) => {
    e.stopPropagation()
    setLogisticsOpen(false)
    setMarineTransportOpen(false)
    setGeneralContractingOpen(!generalContractingOpen)
  }

  const toggleLogistics = (e) => {
    e.stopPropagation()
    setGeneralContractingOpen(false)
    setMarineTransportOpen(false)
    setLogisticsOpen(!logisticsOpen)
  }

  const toggleMarineTransport = (e) => {
    e.stopPropagation()
    setGeneralContractingOpen(false)
    setLogisticsOpen(false)
    setMarineTransportOpen(!marineTransportOpen)
  }

  const handleDownloadBrochure = () => {
    const link = document.createElement('a')
    link.href = brochurePDF
    link.download = 'Fleetonic_Freight_Forwarding_Brochure.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <nav
        className={`navbar-grid w-vw px-18 py-4 items-center fixed top-0 left-0 right-0 z-70 ${isScrolled ? 'navbar-solid' : 'navbar-glass'
          }`}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={Logo} className="w-9 h-9" alt="logo" />
          <div className="brand-text">Fleetonic</div>
        </div>

        {/* Desktop */}
        {!isMobile && (
          <div className="menuholder flex gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <div
                  onClick={() => handleMenuClick(item)}
                  className={`menu-item-element ${activeMenu === item.id
                    ? 'menu-item-active'
                    : 'menu-item'
                    }`}
                >
                  {item.label}
                </div>

                {item.id === 'aboutus' &&
                  hoveredMenu === 'aboutus' && <AboutDropdown />}

                {item.id === 'services' &&
                  hoveredMenu === 'services' && <ServicesDropdown />}
              </div>
            ))}
          </div>
        )}

        {!isMobile && (
          <div className="flex justify-end">
            <div
              className="flex px-2 py-2 items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-purple-500 cursor-pointer"
              onClick={handleDownloadBrochure}
            >
              <div className="font-medium text-base text-white">
                Company Brochure
              </div>
            </div>
          </div>
        )}

        {/* Mobile button */}
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

      {/* MOBILE MENU */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content" style={{ maxHeight: '100vh', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <div className="mobile-menu-items">
            {menuItems.map((item) => {
              if (item.id === 'services') {
                return (
                  <div key={item.id}>
                    {/* SERVICES */}
                    <div className="flex justify-between items-center">
                      <span
                        className={`mobile-menu-item flex-1 ${isServiceRoute(location.pathname) ? 'active' : ''}`}
                        onClick={() => handleServiceSubItemClick('/services')}
                      >
                        Our Services
                      </span>

                      <span
                        onClick={toggleServices}
                        className={`px-3 cursor-pointer transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      >
                        <FiChevronDown />
                      </span>
                    </div>

                    {servicesOpen && (
                      <div className="ml-6 mt-2 space-y-2">
                        {/* General Contracting */}
                        <div>
                          <div className="flex justify-between items-center">
                            <span
                              className={`mobile-menu-item flex-1 ${location.pathname.startsWith('/general-contracting') ? 'active' : ''
                                }`}
                              onClick={() => handleServiceSubItemClick('/general-contracting')}
                            >
                              General Contracting
                            </span>

                            <span
                              onClick={toggleGeneralContracting}
                              className={`px-3 cursor-pointer transition-transform ${generalContractingOpen ? 'rotate-180' : ''}`}
                            >
                              <FiChevronDown />
                            </span>
                          </div>

                          {generalContractingOpen && (
                            <div className="ml-6 mt-1 space-y-1">
                              <div
                                className={`mobile-menu-item ${location.pathname === '/general-contracting/infrastructure' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/general-contracting/infrastructure')}
                              >
                                Infrastructure
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/general-contracting/marine' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/general-contracting/marine')}
                              >
                                Marine Contracting
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex justify-between items-center">
                            <span
                              className={`mobile-menu-item flex-1 ${location.pathname.startsWith('/logistics') ? 'active' : ''
                                }`}
                              onClick={() => handleServiceSubItemClick('/logistics')}
                            >
                              Logistics
                            </span>

                            <span
                              onClick={toggleLogistics}
                              className={`px-3 cursor-pointer transition-transform ${logisticsOpen ? 'rotate-180' : ''}`}
                            >
                              <FiChevronDown />
                            </span>
                          </div>

                          {logisticsOpen && (
                            <div className="ml-6 mt-1 space-y-1">
                              <div
                                className={`mobile-menu-item ${location.pathname === '/logistics/land-freight' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/logistics/land-freight')}
                              >
                                Land Freight
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/logistics/air-freight' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/logistics/air-freight')}
                              >
                                Air Freight
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/logistics/sea-freight' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/logistics/sea-freight')}
                              >
                                Sea Freight
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/logistics/open-yard-storage' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/logistics/open-yard-storage')}
                              >
                                Open Yard Storage
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex justify-between items-center">
                            <span
                              className={`mobile-menu-item flex-1 ${location.pathname.startsWith('/marine') ? 'active' : ''
                                }`}
                              onClick={() => handleServiceSubItemClick('/marine')}
                            >
                              Marine Transport
                            </span>

                            <span
                              onClick={toggleMarineTransport}
                              className={`px-3 cursor-pointer transition-transform ${marineTransportOpen ? 'rotate-180' : ''}`}
                            >
                              <FiChevronDown />
                            </span>
                          </div>

                          {marineTransportOpen && (
                            <div className="ml-6 mt-1 space-y-1">
                              <div
                                className={`mobile-menu-item ${location.pathname === '/marine/ship-management' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/marine/ship-management')}
                              >
                                Ship Management
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/marine/commercial-management' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/marine/commercial-management')}
                              >
                                Commercial Management
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/marine/docking-management' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/marine/docking-management')}
                              >
                                Docking Management
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/marine/crew-management' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/marine/crew-management')}
                              >
                                Crew Management Services
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/marine/procurement-services' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/marine/procurement-services')}
                              >
                                Procurement & Purchaser Services
                              </div>
                              <div
                                className={`mobile-menu-item ${location.pathname === '/marine/our-fleets' ? 'active' : ''
                                  }`}
                                onClick={() => handleServiceSubItemClick('/marine/our-fleets')}
                              >
                                Our Fleets
                              </div>
                            </div>
                          )}
                        </div>
                        <div
                          className={`mobile-menu-item ${location.pathname === '/material-supply' || location.pathname.startsWith('/material') ? 'active' : ''
                            }`}
                          onClick={() => handleServiceSubItemClick('/material-supply')}
                        >
                          Material Supply
                        </div>
                        <div
                          className={`mobile-menu-item ${location.pathname === '/equipment-rental' ? 'active' : ''
                            }`}
                          onClick={() => handleServiceSubItemClick('/equipment-rental')}
                        >
                          Equipment Rental
                        </div>
                        <div
                          className={`mobile-menu-item ${location.pathname === '/custom-clearance' ? 'active' : ''
                            }`}
                          onClick={() => handleServiceSubItemClick('/custom-clearance')}
                        >
                          Custom Clearance Services
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <div
                  key={item.id}
                  onClick={() => handleMenuClick(item)}
                  className={`mobile-menu-item ${activeMenu === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </div>
              )
            })}
          </div>

          <div className="mobile-menu-button-container">
            <div
              className="flex px-4 py-3 items-center justify-center rounded-lg bg-linear-to-r from-blue-500 to-purple-500 cursor-pointer"
              onClick={handleDownloadBrochure}
            >
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