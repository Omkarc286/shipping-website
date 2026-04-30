import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";

const ITEMS_PER_PAGE = 4;

const data = [
    {
        title: "Etihad Rail Project",
        client: "Etihad Rail",
        scope: "Rail Embankment, Base Course, Sub-Ballast",
        material: "Crushed Aggregate and Washed Sand",
    },
    {
        title: "Bab & Bu Hasa Fields",
        client: "ADNOC",
        scope: "Civil Foundation, Road Access, Pad Backfill",
        material: "Rock, sub-base, Backfill Sand",
    },
    {
        title: "Das Island",
        client: "ADNOC",
        scope: "Jetty and Shoreline Protection, Utility Road",
        material: "Aggregate, Rock Armour, Washed Beach Sand",
    },
    {
        title: "Road Works - Multiple",
        client: "Abu Dhabi Municipality",
        scope: "Road Construction and Rehabilitation",
        material: "Road base, Sub Base, crushed Aggregate",
    },
    {
        title: "Yas Acres & Saadiyat Grove",
        client: "Aldar",
        scope: "Landscape fill, Villa base Preparation",
        material: "Dune Sand, Washed Sand and Aggregate",
    },
];

const MaterialSupplyTable = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = data.filter((item) =>
        Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="px-6 py-12 bg-[#F6F8FB]">
            <div className="max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

                    <h2 className="!text-[20px] !font-['Rubik'] font-semibold !text-black leading-snug">
                        List of Material Supply works
                        <span className="block sm:inline !text-gray-500 text-sm sm:ml-2 mt-1 sm:mt-0">
                            {filteredData.length} Total
                        </span>
                    </h2>

                    {/* Search */}
                    <div className="relative w-full sm:w-auto">
                        <FiSearch className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

                    {/* Scroll wrapper (ONLY affects mobile) */}
                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[700px] text-sm text-left">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="px-6 py-4">Project Title</th>
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Scope of Work</th>
                                    <th className="px-6 py-4">Material Supplied</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4">{item.title}</td>
                                        <td className="px-6 py-4">{item.client}</td>
                                        <td className="px-6 py-4">{item.scope}</td>
                                        <td className="px-6 py-4">{item.material}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-6 py-4 bg-gray-50 border-t">

                            <p className="text-sm text-gray-600">
                                Showing {startIndex + 1} to{" "}
                                {Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)} of{" "}
                                {filteredData.length}
                            </p>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
                                >
                                    <FiChevronLeft />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                    (page) => (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`px-3 py-1 rounded ${currentPage === page
                                                ? "bg-purple-600 text-white"
                                                : "hover:bg-gray-200"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                )}

                                <button
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
                                >
                                    <FiChevronRight />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MaterialSupplyTable;