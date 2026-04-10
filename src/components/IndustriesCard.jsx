import React from 'react'

const IndustriesCard = ({ icon, title }) => {
  return (
    <div className='industries-card flex items-center gap-3'>
        <img src={icon} alt="Industry Icon" className='industries-card-icon' />
        <h3 className='industries-card-title text-left'>{title}</h3>
    </div>
  )
}

export default IndustriesCard