import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const ServicesDropdown = () => {
    const [openSection, setOpenSection] = useState('general');
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSection = (section) => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    const handleNavigation = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const isActive = (path) => location.pathname === path;
    const startsWith = (path) => location.pathname.startsWith(path);

    const getIconClass = (section) =>
        `transition-transform duration-200 ${openSection === section ? "rotate-180" : "rotate-0"
        }`;

    return (
        <div className="absolute top-full left-0 pt-2 z-50">
            <div className="w-[340px] bg-white rounded-lg shadow-lg p-4 text-[14px] text-black text-left space-y-2">

                {/* General Contracting */}
                <div>
                    <div className="font-semibold flex justify-between items-center">
                        <span
                            className={`pl-3 pr-14 py-2 rounded-md cursor-pointer
                                ${startsWith("/general-contracting")
                                    ? "bg-purple-100 text-purple-700"
                                    : "hover:bg-gray-200"
                                }`}
                            onClick={() => handleNavigation("/general-contracting")}
                        >
                            General Contracting
                        </span>

                        <div
                            className="flex items-center gap-1 rounded-3xl hover:bg-gray-200 px-3 py-3 cursor-pointer"
                            onClick={() => toggleSection("general")}
                        >
                            <FiChevronDown className={getIconClass("general")} />
                        </div>
                    </div>

                    {openSection === "general" && (
                        <ul className="mt-1 space-y-1 pl-2">
                            <li
                                className={`px-3 py-2 rounded-md cursor-pointer
                                    ${isActive("/general-contracting/infrastructure")
                                        ? "bg-purple-100 text-purple-700"
                                        : "hover:bg-gray-200"
                                    }`}
                                onClick={() => handleNavigation("/general-contracting/infrastructure")}
                            >
                                Infrastructure
                            </li>

                            <li
                                className={`px-3 py-2 rounded-md cursor-pointer
                                    ${isActive("/general-contracting/marine")
                                        ? "bg-purple-100 text-purple-700"
                                        : "hover:bg-gray-200"
                                    }`}
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
                        className={`px-3 py-2 font-semibold cursor-pointer rounded-md flex justify-between items-center
                            ${startsWith("/logistics")
                                ? "bg-purple-100 text-purple-700"
                                : "hover:bg-gray-200"
                            }`}
                    >
                        <span>Logistics</span>
                        <FiChevronDown className={getIconClass("logistics")} />
                    </div>

                    {openSection === "logistics" && (
                        <ul className="mt-1 space-y-1 pl-2">
                            {[
                                { label: "Land Freight", path: "/logistics/land-freight" },
                                { label: "Air Freight", path: "/logistics/air-freight" },
                                { label: "Sea Freight", path: "/logistics/sea-freight" },
                                { label: "Open Yard Storage", path: "/logistics/open-yard-storage" }
                            ].map(item => (
                                <li
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`px-3 py-2 rounded-md cursor-pointer
                                        ${isActive(item.path)
                                            ? "bg-purple-100 text-purple-700"
                                            : "hover:bg-gray-200"
                                        }`}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Marine Transport */}
                <div className="border-t border-gray-200 pt-2">
                    <div
                        onClick={() => toggleSection("marine")}
                        className={`px-3 py-2 font-semibold cursor-pointer rounded-md flex justify-between items-center
                            ${startsWith("/marine")
                                ? "bg-purple-100 text-purple-700"
                                : "hover:bg-gray-200"
                            }`}
                    >
                        <span>Marine Transport</span>
                        <FiChevronDown className={getIconClass("marine")} />
                    </div>

                    {openSection === "marine" && (
                        <ul className="mt-1 space-y-1 pl-2">
                            {[
                                { label: "Ship Management", path: "/marine/ship-management" },
                                { label: "Commercial Management", path: "/marine/commercial-management" },
                                { label: "Docking Management", path: "/marine/docking-management" },
                                { label: "Crew Management Services", path: "/marine/crew-management" },
                                { label: "Procurement & Purchaser Services", path: "/marine/procurement-services" },
                                { label: "Our Fleets", path: "/marine/our-fleets" }
                            ].map(item => (
                                <li
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`px-3 py-2 rounded-md cursor-pointer
                                        ${isActive(item.path)
                                            ? "bg-purple-100 text-purple-700"
                                            : "hover:bg-gray-200"
                                        }`}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Bottom Links */}
                <div className="border-t border-gray-200 pt-2 space-y-1">
                    {[
                        { label: "Material Supply", path: "/material-supply" },
                        { label: "Equipment Rental", path: "/equipment-rental" },
                        { label: "Custom Clearance Services", path: "/custom-clearance" }
                    ].map(item => (
                        <div
                            key={item.path}
                            onClick={() => handleNavigation(item.path)}
                            className={`px-3 py-2 rounded-md cursor-pointer
                                ${isActive(item.path)
                                    ? "bg-purple-100 text-purple-700"
                                    : "hover:bg-gray-200"
                                }`}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ServicesDropdown;