// src/components/RecentWorksSection.jsx
import React from 'react';
import Badge from '../../components/Badge';
import Masonry from '../../effects/Masonry';
import { gallery } from '../../content/home/home_rw';
import rw_bg_image from '../../assets/rw-bg-image.png';

const RecentWorksSection = () => {
    return (
        <section
            className="min-h-screen p-6 md:p-12 lg:p-20 flex items-center justify-center"
            style={{
                background: `url(${rw_bg_image}) lightgray 0px -198.327px / 100% 139.886% no-repeat`
            }}
        >
            <div className="text-center items-center flex flex-col gap-2 md:gap-4 w-full">
                <Badge text="Recent Works" />


                <h2 className="recent-works-header-text mb-4">
                    Our Recent Completed Projects Showcase
                </h2>

                <div className="w-full max-w-7xl mx-auto p-3 md:p-6 lg:p-8 overflow-hidden z-30">
                    <Masonry
                        items={gallery}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default RecentWorksSection;