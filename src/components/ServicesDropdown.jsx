import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ServicesDropdown = () => {
    const [openSection, setOpenSection] = useState('general');
    const navigate = useNavigate();

    const toggleSection = (section) => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    const handleNavigation = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const getIconClass = (section) =>
        `transition-transform duration-200 ${openSection === section ? "rotate-180" : "rotate-0"
        }`;

    return (
        <div className="absolute top-full left-0 pt-2 z-50">
            <div className="w-[340px] bg-white rounded-lg shadow-lg p-4 text-[14px] text-black text-left space-y-2">

                {/* General Contracting */}
                <div>
                    <div className="font-semibold cursor-pointer rounded-md flex justify-between items-center">
                        <span
                            className="hover:bg-gray-200 pl-3 pr-14 py-2 rounded-md"
                            onClick={() => handleNavigation("/general-contracting")}
                        >
                            General Contracting
                        </span>
                        <div className="flex items-center gap-1 rounded-3xl hover:bg-gray-200 px-3 py-3" onClick={() => toggleSection("general")}>
                            <FiChevronDown className={getIconClass("general")} />
                        </div>
                    </div>

                    {openSection === "general" && (
                        <ul className="mt-1 space-y-1 pl-2">
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/general-contracting/infrastructure")}
                            >
                                Infrastructure
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/general-contracting/marine")}
                            >
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
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/logistics/land-freight")}
                            >
                                Land Freight
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/logistics/air-freight")}
                            >
                                Air Freight
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/logistics/sea-freight")}
                            >
                                Sea Freight
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/logistics/open-yard-storage")}
                            >
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
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/marine/ship-management")}
                            >
                                Ship Management
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/marine/commercial-management")}
                            >
                                Commercial Management
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/marine/docking-management")}
                            >
                                Docking Management
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/marine/crew-management")}
                            >
                                Crew Management Services
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/marine/procurement-services")}
                            >
                                Procurement & Purchaser Services
                            </li>
                            <li
                                className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleNavigation("/marine/our-fleets")}
                            >
                                Our Fleets
                            </li>
                        </ul>
                    )}
                </div>

                {/* Bottom Links */}
                <div className="border-t border-gray-200 pt-2 space-y-1">
                    <div
                        className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleNavigation("/material-supply")}
                    >
                        Material Supply
                    </div>
                    <div
                        className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleNavigation("/equipment-rental")}
                    >
                        Equipment Rental
                    </div>
                    <div
                        className="px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleNavigation("/custom-clearance")}
                    >
                        Custom Clearance Services
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesDropdown;