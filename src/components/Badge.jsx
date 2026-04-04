const Badge = ({ text = 'Badge Text' }) => {
  return (
    <div className="badge-wrapper">
      <div className="badge-container">
        <span className="badge-text">{text}</span>
      </div>
    </div>
  );
};

export default Badge;
