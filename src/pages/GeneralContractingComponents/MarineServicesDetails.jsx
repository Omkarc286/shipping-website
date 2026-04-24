import React from "react";

const SectionWrapper = ({ title, description, children }) => (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#FBFAF4] to-[#E0EBF7]">
        <div className="max-w-7xl mx-auto">
            <h2 className="!text-[24px] md:text-[24px] !font-bold !text-[#5846FB] !mb-[20px] !font-['Rubik'] text-left">
                {title}
            </h2>

            <p className="!text-[#22232C] mb-10 leading-relaxed text-[18px] italic font-['Rubik'] text-left">
                {description}
            </p>

            <div
                className={`grid md:grid-cols-2 ${title === "Offshore Infrastructure Design"
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-3"
                    } gap-6 text-left`}
            >
                {children}
            </div>
        </div>
    </div>
);

const Card = ({ title, items }) => (
    <div
        className="bg-[#f3f4f6] rounded-2xl p-6 shadow-sm 
                   transition-all duration-300 ease-in-out 
                   hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] 
                   hover:bg-white hover:ring-2 hover:ring-[#5846FB]/20 
                   cursor-pointer"
    >
        <h3 className="font-semibold text-gray-800 mb-4 transition-colors duration-300 hover:text-[#5846FB]">
            {title}
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm">
            {items.map((item, index) => (
                <li key={index}>• {item}</li>
            ))}
        </ul>
    </div>
);

const MarineServicesDetails = () => {
    return (
        <>
            {/* SECTION 1 */}
            <SectionWrapper
                title="Regulatory Compliance & Safety Management"
                description="We strictly adhere to all UAE marine regulations, industry standards, and environmental guidelines to ensure every project is executed responsibly and without risk. Our team maintains comprehensive safety protocols, conducts regular inspections, and coordinates closely with relevant authorities to secure approvals and maintain compliance at every stage. This approach minimizes operational risks while ensuring smooth and uninterrupted project delivery."
            >
                <Card
                    title="Marine Structural Works"
                    items={[
                        "Pilling in the marine environment",
                        "Offshore platforms",
                        "Marine bridges",
                        "Caisson construction",
                        "Concrete casting in tidal zones",
                    ]}
                />

                <Card
                    title="Marinas and waterfront developments"
                    items={[
                        "Marina basins",
                        "Floating pontoons",
                        "Yacht berths",
                        "Waterfront retaining structure",
                        "Boardwalk construction",
                    ]}
                />

                <Card
                    title="Marine and offshore infrastructure design"
                    items={[
                        "Quay, walls, jetties, breakwaters, marinas",
                    ]}
                />
            </SectionWrapper>

            {/* SECTION 2 */}
            <SectionWrapper
                title="Offshore Infrastructure Design"
                description="We provide complete marine contracting solutions, covering offshore infrastructure design, including quay walls, jetties, breakwaters, and marinas. Hiring a trusted general construction contractor simplifies construction and reduces risks. Our expertise extends to capital and maintenance dredging services, land reclamation, beach nourishment, and coastal protection works such as seawalls and rock armour. We execute complex marine structural and subsea works, including piling, offshore platforms, pipelines, and cable laying. From marina developments to temporary marine works and detailed BOQ execution, we deliver safe, durable, and high-performance waterfront infrastructure projects. We are among the notable infrastructure contractors in Abu Dhabi."
            >
                <Card
                    title="Coastal Protection Works"
                    items={[
                        "Breakwaters",
                        "Revetments",
                        "Seawalls",
                        "Rock armour protection",
                        "Sheet pilling",
                    ]}
                />

                <Card
                    title="Marine Dredging and reclamation"
                    items={[
                        "Capital dredging (Deepening navigation channels)",
                        "Maintenance & marine dredging services",
                        "Land reclamation & island formation",
                        "Beach nourishment",
                    ]}
                />
            </SectionWrapper>

            {/* SECTION 3 */}
            <SectionWrapper
                title="Advanced Port Infrastructure Solutions"
                description="ADSO also offers general contracting service in UAE for port infrastructure works that include construction work, barge support, and heavy lifting operations. As experienced port contractors and operators, we understand the specific requirements to work on UAE ports by following approved planning and safety standards. We always use certified lifting equipment to perform heavy lifting and marine logistics services. ADSO has earned a recognized name as an excellent marine contracting company in the local market. Marine contracting companies in UAE are experts in building and maintaining ports, harbors, and offshore structures."
            >
                <Card
                    title="Subsea and underwater works"
                    items={[
                        "Submarine pipelines",
                        "Cable laying (power & telecom)",
                    ]}
                />

                <Card
                    title="Marine Temporary Works"
                    items={[
                        "Cofferdams",
                        "Temporary access trestles",
                        "Marine plant mobilisation",
                        "Temporary jetties",
                    ]}
                />

                <Card
                    title="BOQ in marine contracting:"
                    items={[
                        "Mobilisation of marine plant (barges, cranes)",
                        "Dredging (m3)",
                        "Rock supply & placement",
                        "Marine piling",
                        "Cathodic protection",
                        "Fenders & bollard supply",
                        "Underwater works & diving services",
                        "Environmental protection measures",
                    ]}
                />
            </SectionWrapper>
        </>
    );
};

export default MarineServicesDetails;