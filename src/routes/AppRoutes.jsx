import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home2 from '../pages/Home2'
import Services from '../pages/Services'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    )
}

export default AppRoutes