import React from 'react'

const ClickForMore = ({ text, icon, classContainer, classTypography }) => {
  return (
    <div className={`${classContainer} flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105`}>
      <div className={`${classTypography} items-center`}>{text}</div>
      <div className="flex items-center">{icon}</div>
    </div>
  )
}

export default ClickForMore