import React from "react";

const AboutDropdown = () => {
    return (
        <div className="absolute top-full left-0 pt-2 z-50 text-left">
            <div className="w-48 bg-white rounded-lg shadow-lg p-2 text-black text-[14px]">
                <div className="px-3 py-2 rounded hover:bg-gray-200 cursor-pointer">
                    About Company
                </div>
                <div className="px-3 py-2 hover:bg-gray-200 cursor-pointer border-t border-gray-200">
                    Career
                </div>
            </div>
        </div>
    );
};

export default AboutDropdown;