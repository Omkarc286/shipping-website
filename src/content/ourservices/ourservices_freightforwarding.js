
import pic1 from '../assets/ourservices/pic1.png';
import pic2 from '../assets/ourservices/pic2.png';

export const freightforwarding_content = {
    sections: [
        {
            layout: 'normal', // content left, image right
            title: 'Freight Forwarding, Without Borders',
            description: `From first-mile collection to final delivery, we coordinate cargo across international trade lanes
with care at every handoff. Packaging, customs clearance, route planning and delivery come together
in one considered service, tailored to your cargo, schedule and destination.`,
            image: pic1,
            alt: 'Heavy industrial machinery prepared for shipment',
        },
        {
            layout: 'reverse', // image left, content right
            title: 'Air, Ocean & Road, Seamlessly Connected',
            description: `Whether it is time-sensitive air cargo, a large ocean shipment or cross-border road freight, we plan
the route around what you are moving and when it needs to arrive. Our team coordinates customs
documentation and keeps you informed from departure through delivery.`,
            image: pic2,
            alt: 'Freight transport for heavy industrial equipment',

            subSection: {
                subtitle: 'Specialist Logistics for Complex Cargo',
                description: `Heavy, oversized and sensitive freight demands more than a standard booking. We plan the movement
of machinery, cranes and project equipment for the energy, construction and manufacturing sectors,
with careful coordination at every stage.`,
            },
        },
    ],
};