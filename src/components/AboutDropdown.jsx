import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AboutDropdown = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="absolute top-full left-0 pt-2 z-50 text-left">
            <div className="w-48 bg-white rounded-lg shadow-lg p-2 text-black text-[14px]">

                <div
                    onClick={() => handleNavigation("/about-company")}
                    className={`px-3 py-2 rounded cursor-pointer
                        ${isActive("/about-company")
                            ? "bg-purple-100 text-purple-700"
                            : "hover:bg-gray-200"
                        }`}
                >
                    About Company
                </div>

                <div
                    onClick={() => handleNavigation("/career")}
                    className={`px-3 py-2 rounded cursor-pointer border-t border-gray-200
                        ${isActive("/career")
                            ? "bg-purple-100 text-purple-700"
                            : "hover:bg-gray-200"
                        }`}
                >
                    Career
                </div>

            </div>
        </div>
    );
};

export default AboutDropdown;