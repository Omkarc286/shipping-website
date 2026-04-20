import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const ServicesDropdown = () => {
    const [openSection, setOpenSection] = useState('general');

    const toggleSection = (section) => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    const getIconClass = (section) =>
        `transition-transform duration-200 ${openSection === section ? "rotate-180" : "rotate-0"
        }`;

    return (
        <div className="absolute top-full left-0 pt-2 z-50">
            <div className="w-[340px] bg-white rounded-lg shadow-lg p-4 text-[14px] text-black text-left space-y-2">

                {/* General Contracting */}
                <div>
                    <div
                        onClick={() => toggleSection("general")}
                        className="px-3 py-2 font-semibold cursor-pointer hover:bg-gray-200 rounded-md flex justify-between items-center"
                    >
                        <span>General Contracting</span>
                        <FiChevronDown className={getIconClass("general")} />
                    </div>

                    {openSection === "general" && (
                        <ul className="mt-1 space-y-1 pl-2">
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Infrastructure
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Marine Contracting
                            </li>
                        </ul>
                    )}
                </div>

                {/* Logistics */}
                <div>
                    <div
                        onClick={() => toggleSection("logistics")}
                        className="px-3 py-2 font-semibold cursor-pointer hover:bg-gray-200 rounded-md flex justify-between items-center"
                    >
                        <span>Logistics</span>
                        <FiChevronDown className={getIconClass("logistics")} />
                    </div>

                    {openSection === "logistics" && (
                        <ul className="mt-1 space-y-1 pl-2">
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Land Freight
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Air Freight
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Sea Freight
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Open Yard Storage
                            </li>
                        </ul>
                    )}
                </div>

                {/* Marine Transport */}
                <div className="border-t border-gray-200 pt-2">
                    <div
                        onClick={() => toggleSection("marine")}
                        className="px-3 py-2 font-semibold cursor-pointer hover:bg-gray-200 rounded-md flex justify-between items-center"
                    >
                        <span>Marine Transport</span>
                        <FiChevronDown className={getIconClass("marine")} />
                    </div>

                    {openSection === "marine" && (
                        <ul className="mt-1 space-y-1 pl-2">
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Ship Management
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Commercial Management
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Docking Management
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Crew Management Services
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Procurement & Purchaser Services
                            </li>
                            <li className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                Our Fleets
                            </li>
                        </ul>
                    )}
                </div>

                {/* Bottom Links (UNCHANGED) */}
                <div className="border-t border-gray-200 pt-2 space-y-1">
                    <div className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                        Material Supply
                    </div>
                    <div className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                        Equipment Rental
                    </div>
                    <div className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                        Custom Clearance Services
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesDropdown;