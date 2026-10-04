import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home2 from '../pages/Home2'
import Services from '../pages/Services'
import GeneralContracting from '../pages/GeneralContracting'
import Infrastructure from '../pages/Infrastructure'
import Blog from '../pages/Blog'
import Portfolio from '../pages/Portfolio'
import SeaFreight from '../pages/HomeComponents/SeaFreight'
import LandTransport from '../pages/HomeComponents/LandTransport'
import AirTransport from '../pages/HomeComponents/AirTransport'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/general-contracting" element={<GeneralContracting />} />
            <Route path="/general-contracting/infrastructure" element={<Infrastructure />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/sea-freight" element={<SeaFreight />} />
            <Route path="/land-transport" element={<LandTransport />} />
            <Route path="/air-transport" element={<AirTransport />} />
        </Routes>
    )
}

export default AppRoutes