import React from 'react'

const ServiceCard = ({header, desc, image}) => {
  return (
    <div className="service-card">
      <img src={image} alt={header} className="service-card-image" />
      <h3 className="service-card-header">{header}</h3>
      <p className="service-card-desc">{desc}</p>
    </div>
  )
}

export default ServiceCard