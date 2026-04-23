import React from "react";

const InfrastructureCards = () => {
    return (
        <section className="w-full bg-gradient-to-b from-[#16171D] to-[#1a0033] py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                {/* Card 1 */}
                <div
                    className="bg-[#1c1c1e] rounded-2xl p-8 text-white text-left 
                    shadow-lg border border-transparent
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.02]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                    hover:border-[#6C63FF]/40"
                    style={{ fontFamily: 'Rubik' }}
                >
                    <h2 className="text-[18px] font-semibold !text-[#C2BCFF] mb-3">
                        Complete Civil & Infrastructure Solutions
                    </h2>
                    <p className="text-[16px] leading-relaxed text-white">
                        ADSO infrastructure contractors in UAE delivers end-to-end
                        infrastructure and civil works solutions across greenfield and
                        brownfield projects. Our services include roadworks such as subgrade
                        preparation, subbase and base course installation, asphalt paving,
                        road marking, kerbs, and interlock works. We handle full earthworks,
                        including site clearance, excavation (cut and fill), backfilling,
                        compaction, and surplus disposal. Our expertise also covers drainage
                        systems, sewerage and water networks, utility ducting, structural
                        works, and complete project execution with reliable, high-quality
                        infrastructure services.
                    </p>
                </div>

                {/* Card 2 */}
                <div
                    className="bg-[#1c1c1e] rounded-2xl p-8 text-white text-left 
                    shadow-lg border border-transparent
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.02]
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                    hover:border-[#6C63FF]/40"
                >
                    <h2 className="text-[18px] font-semibold mb-3 !text-[#c7c7ff]">
                        Compliance, Safety, and Authority Coordination
                    </h2>
                    <p className="text-[16px] leading-relaxed text-white">
                        While performing the work on projects, we completely follow the
                        compliance and safety regulations. We form each and every project by
                        coordinating with the authorized local authorities and taking proper
                        legal approvals. We take care of site inspections and surveys and
                        make sure to maintain the documentation accurately. With a strategic
                        approach, we move forward with the projects without any delays or
                        disruptions and commit our clients to follow compliance that protects
                        long-term asset value.                    </p>
                </div>

            </div>
        </section>
    );
};

export default InfrastructureCards;