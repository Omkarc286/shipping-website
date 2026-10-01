// components/ClickForMore.jsx
import React from 'react';

const ClickForMore = ({ text, icon, classContainer, classTypography, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classContainer}
    >
      <span className={classTypography}>{text}</span>
      {icon}
    </button>
  );
};

export default ClickForMore;