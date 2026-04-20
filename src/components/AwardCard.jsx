import React, { useState, useRef, useEffect } from 'react';

const AwardCard = ({ image, alt }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [supportsHover, setSupportsHover] = useState(true);
    const cardRef = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: hover)');
        setSupportsHover(mediaQuery.matches);

        const handleMediaChange = (e) => setSupportsHover(e.matches);
        mediaQuery.addEventListener('change', handleMediaChange);
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);

    const handleMouseMove = (e) => {
        if (!cardRef.current || !supportsHover) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotateY = ((mouseX - centerX) / centerX) * 10;
        const rotateX = ((centerY - mouseY) / centerY) * 10;

        setTilt({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div
            ref={cardRef}
            className="award-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                transform: supportsHover && isHovered
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.06)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                transition: 'transform 0.15s ease-out',
            }}
        >
            <div className="award-image-wrapper">
                <img
                    src={image}
                    alt={alt}
                    className="award-image"
                />
            </div>
        </div>
    );
};

export default AwardCard;