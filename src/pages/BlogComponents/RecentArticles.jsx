import React from "react";
import img1 from '../../assets/blog/article1.png';
import img2 from '../../assets/blog/article2.png';
import img3 from '../../assets/blog/article3.png';

const articles = [
    {
        id: 1,
        image: img1,
        title: "How to Build a Climate-Ready Data Stack",
        date: "March 18, 2026",
        time: "01:00 PM",
        desc: "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
    },
    {
        id: 2,
        image: img2,
        title: "How to Build a Climate-Ready Data Stack",
        date: "March 18, 2026",
        time: "01:00 PM",
        desc: "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
    },
    {
        id: 3,
        image: img3,
        title: "How to Build a Climate-Ready Data Stack",
        date: "March 18, 2026",
        time: "01:00 PM",
        desc: "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
    },
];

const RecentArticles = () => {
    return (
        <div className="bg-[#F6F8FB] px-6 md:px-16 py-14">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="!text-[56px] md:!text-[56px] font-semibold !font-['Source_Serif_Pro'] !text-black">
                        Recent articles
                    </h2>
                    <span className="text-sm md:text-base cursor-pointer text-black hover:underline">
                        View all articles
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((item) => (
                        <div
                            key={item.id}
                            className="space-y-4 group cursor-pointer"
                        >
                            <div className="w-full h-[220px] overflow-hidden rounded-xl relative">
                                <img
                                    src={item.image}
                                    alt="article"
                                    className="w-full h-full object-cover transition-all duration-500 
                                               group-hover:scale-110 group-hover:brightness-75"
                                />

                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
                                              transition-opacity duration-300" />
                            </div>

                            <h3 className="text-[20px] md:text-[20px] font-semibold text-black text-left 
                                         group-hover:text-[#1A73E8] transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="text-[14px] text-[#6C6C6C] text-left">
                                {item.date} &nbsp; • &nbsp; {item.time}
                            </p>

                            <p className="text-[16px] md:text-[16px] text-black leading-relaxed text-left">
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