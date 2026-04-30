import React from "react";
import { recent_articles } from "../../content/blog/blog_recentArticles";

const RecentArticles = () => {
    return (
        <div className="bg-[#F6F8FB] px-6 md:px-16 py-14">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-5">
                    <h2 className="!text-[56px] font-semibold !font-['Source_Serif_Pro'] !text-black">
                        {recent_articles.header.title}
                    </h2>

                    <span className="text-sm md:text-base cursor-pointer text-black hover:underline">
                        {recent_articles.header.cta_text}
                    </span>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recent_articles.articles.map((item) => (
                        <div
                            key={item.id}
                            className="space-y-4 group cursor-pointer"
                        >
                            {/* IMAGE */}
                            <div className="w-full h-[220px] overflow-hidden rounded-xl relative">
                                <img
                                    src={item.image}
                                    alt={item.image_alt}
                                    className="w-full h-full object-cover transition-all duration-500 
                                               group-hover:scale-110 group-hover:brightness-75"
                                />

                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
                                              transition-opacity duration-300" />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-[20px] font-semibold text-black text-left 
                                         group-hover:text-[#1A73E8] transition-colors duration-300">
                                {item.title}
                            </h3>

                            {/* DATE + TIME */}
                            <p className="text-[14px] text-[#6C6C6C] text-left">
                                {item.date} &nbsp; • &nbsp; {item.time}
                            </p>

                            {/* DESCRIPTION */}
                            <p className="text-[16px] text-black leading-relaxed text-left">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default RecentArticles;