import React from 'react';
import './FreightExpertise.css';

const FreightExpertise = () => {
    return (
        <section className="expertise-section z-10 relative">
            <div className="expertise-container">
                <h2 className="expertise-title">
                    Our Expertise in Freight Forwarding
                </h2>

                <div className="expertise-grid">
                    {/* Card 1 */}
                    <div className="expertise-card">
                        <h3>Cargo Transportation &amp; Heavy Equipment Transport</h3>
                        <p>We handle oversized and complex cargo for industrial projects with precision. From route planning and load assessment to permits and escorts, every step is managed safely to ensure on-time delivery.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="expertise-card">
                        <h3>Custom Logistics for Oversized Shipments</h3>
                        <p>We deliver customized logistics for oversized and abnormal cargo. From route surveys and permits to specialized carriers, every step is planned to ensure safe and timely delivery.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="expertise-card">
                        <h3>Hydraulic Modular Trailer Services for Heavy-Lift Transport</h3>
                        <p>We use hydraulic modular trailers to move long, wide, and heavy cargo with maximum safety. Our team plans each load carefully, ensuring proper balance, control, and smooth transport.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="expertise-card">
                        <h3>Experienced Jacking, Skidding &amp; Rigging Services in the Middle East</h3>
                        <p>Our jacking, skidding, and rigging services ensure safe movement of heavy equipment in tight or restricted spaces. With precise tools and detailed planning, we maintain safety at every stage.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="expertise-card">
                        <h3>End-to-End Freight Management with HSE compliance</h3>
                        <p>End-to-end freight project management, covering planning, logistics, and delivery. We ensure safety, handle permits and customs, and coordinate seamlessly for smooth execution.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="expertise-card">
                        <h3>Proven Experience in Multimodal Freight Logistics</h3>
                        <p>Our multimodal freight services integrate road, sea, and air transport for faster, cost-efficient delivery. We plan each route carefully and provide tracking at every stage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreightExpertise;