import React from 'react';

const FreightForwarders = ({ backgroundImage }) => {
    return (
        <div className="relative w-full h-[500px] md:h-1/2 overflow-hidden">
            <img
                src={backgroundImage}
                alt="Container ship"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70"></div>
            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Content */}
                <div className="
                relative z-10 flex flex-col justify-center h-full
                items-center text-center px-6 py-12

                md:items-end md:text-right md:py-[130px]
            ">
                    <div>
                        <div className="
                        text-white font-[400] tracking-widest leading-[1.2] mb-4 font-rubik
                        text-[36px]

                        md:text-[70px]
                    ">
                            FREIGHT<br />FORWARDERS
                        </div>

                        <div className="
                        inline-block bg-[#00AEEF] text-white font-extrabold
                        px-6 py-2 mb-6 rounded-lg leading-none font-rubik
                        text-[48px]

                        md:text-[100px] md:px-4 md:py-2 md:mb-8
                    ">
                            UAE
                        </div>

                        <div className="
                        text-white leading-relaxed font-rubik
                        text-[13px] max-w-md

                        md:text-[14px] md:max-w-4xl
                    ">
                            ADSO AUH is a trusted international freight forwarding company with over 50 years of experience. Based in Abu Dhabi, we provide safe and efficient cargo delivery from pickup to drop-off, along with services such as international freight arrangements, procurement, and marine and air brokerage. Our expert team and advanced logistics solutions ensure reliable and cost-effective transport for clients worldwide.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FreightForwarders;