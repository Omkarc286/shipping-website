import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home2 from '../pages/Home2'
import Services from '../pages/Services'
import GeneralContracting from '../pages/GeneralContracting'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/services" element={<Services />} />
            <Route path="/general-contracting" element={<GeneralContracting />} />
        </Routes>
    )
}

export default AppRoutes