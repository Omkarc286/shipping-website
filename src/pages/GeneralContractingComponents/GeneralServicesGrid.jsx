import React, { useState } from "react";
import { generalservicesgrid_content } from "../../content/generalcontracting/generalcontracting_generalservicesgrid";

const GeneralServicesGrid = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="bg-[#0b0220] py-16 px-6 md:px-16">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

                {generalservicesgrid_content.services.map((item) => {
                    const isHovered = hovered === item.id;

                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHovered(item.id)}
                            onMouseLeave={() => setHovered(null)}
                            className={`
                                rounded-3xl overflow-hidden cursor-pointer
                                transition-all duration-300 ease-out
                                flex flex-col h-full
                                ${isHovered
                                    ? "scale-[1.02] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                                    : "shadow-md"}
                            `}
                        >

                            {/* Image */}
                            <img
                                src={generalservicesgrid_content.image}
                                alt={item.title}
                                className="w-full h-[260px] object-cover rounded-t-3xl"
                            />

                            {/* Content */}
                            <div className="bg-[#F5F5F7] p-6 rounded-b-3xl flex-1 text-left">
                                <h3 className="text-[18px] font-semibold text-[#4F46E5] mb-4">
                                    {item.title}
                                </h3>

                                <ul className="text-[15px] text-black space-y-2 list-disc pl-5">
                                    {item.points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default GeneralServicesGrid;