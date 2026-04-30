import React, { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { material_supply } from "../../content/portfolio/portfolio_materialSupply";

const MaterialSupplyTable = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const exitSectionRef = useRef(null);

    const ITEMS_PER_PAGE = material_supply.pagination.items_per_page;

    const filteredData = material_supply.data.filter((item) =>
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
        <section
            ref={exitSectionRef}
            className='freight-trigger flex items-center justify-center'
        >
            <div className="w-full">
                <div className="px-6 py-12 bg-[#F6F8FB]">
                    <div className="max-w-6xl mx-auto w-full">

                        {/* HEADER */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

                            <h2 className="!text-[20px] font-semibold !text-black !font-['Rubik']">
                                {material_supply.header.title}
                                <span className="block sm:inline text-gray-500 text-sm sm:ml-2">
                                    {filteredData.length} Total
                                </span>
                            </h2>

                            {/* SEARCH */}
                            <div className="relative w-full sm:w-auto">
                                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder={material_supply.header.search_placeholder}
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
                                />
                            </div>
                        </div>

                        {/* TABLE */}
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[700px] text-sm text-left">

                                    <thead className="bg-gray-100 text-gray-600">
                                        <tr>
                                            {material_supply.table.columns.map((col, i) => (
                                                <th key={i} className="px-6 py-4">
                                                    {col}
                                                </th>
                                            ))}
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

                            {/* PAGINATION */}
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
            </div>
        </section>
    );
};

export default MaterialSupplyTable;