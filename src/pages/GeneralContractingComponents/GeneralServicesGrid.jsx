import React, { useState } from "react";
import img from "../../assets/generalcontracting/pic2.png";

const servicesData = [
    {
        id: 1,
        title: "Earthworks",
        points: [
            "Site clearance",
            "Excavation (cut and fill)",
            "Backfilling and compaction",
            "Disposal of surplus materials",
        ],
    },
    {
        id: 2,
        title: "Utilities and ducting",
        points: [
            "Electrical duct bank",
            "Street lighting foundations",
            "Telecom ducts",
            "Utility crossings",
        ],
    },
    {
        id: 3,
        title: "Drainage works",
        points: [
            "Stormwater pipes",
            "Manholes and catch basins",
            "Box culverts",
            "Outfall structure",
            "Cable laying",
        ],
    },
    {
        id: 4,
        title: "Sewerage and water networks",
        points: [
            "HDPE/DI pipes",
            "Valve chambers",
            "Pumping stations",
            "Testing and commissioning",
        ],
    },
];

const GeneralServicesGrid = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="bg-[#0b0220] py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                {servicesData.map((item) => {
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
                                    : "shadow-md"
                                }
              `}
                        >
                            <img
                                src={img}
                                alt={item.title}
                                className="w-full h-[260px] object-cover rounded-t-3xl"
                            />

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