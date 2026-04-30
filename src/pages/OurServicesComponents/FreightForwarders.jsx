import React from 'react';
import { freightforwarders_content } from '../../content/ourservices/ourservices_freightforwarders';

const FreightForwarders = ({ backgroundImage }) => {
    return (
        <section
            className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden px-4"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl md:px-15 flex justify-center md:justify-end">
                <div className="max-w-[700px] text-center md:text-right">

                    {/* Heading */}
                    <h1 className="font-['Rubik'] font-normal 
                        text-[34px] sm:text-[42px] md:text-[70px] 
                        leading-[1.2] md:leading-[1.1] 
                        tracking-[-1px] md:tracking-[-2px] 
                        text-white"
                    >
                        {freightforwarders_content.heading.map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </h1>

                    {/* Badge */}
                    <div className="inline-block mt-4 mb-6 bg-[#2DA8FF] px-4 py-2 rounded-[10px] md:rounded-[12px]">
                        <span className="font-['Rubik'] font-bold 
                            text-[40px] sm:text-[55px] md:text-[100px] 
                            leading-none text-white">
                            {freightforwarders_content.badge}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] sm:text-[14px] md:text-[14px] 
                        leading-[1.6] md:leading-[1.7] 
                        text-white font-['Rubik'] 
                        max-w-full md:max-w-[600px] 
                        mx-auto md:ml-auto whitespace-pre-line"
                    >
                        {freightforwarders_content.description}
                    </p>

                </div>
            </div>

        </section>
    )
}

export default FreightForwarders;