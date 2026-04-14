import er_sevices from '../assets/er_services.png'
import gc_services from '../assets/gc_services.png'
import lg_services from '../assets/logistics_services.png'
import ms_services from '../assets/ms_services.png'
import mt_services from '../assets/mt_services.png'

export const home_services = {
    badge_text: 'Services',
    header_text: 'Logistics Solutions We Offer',
    cards:[
        {
            header: 'General Contracting',
            desc: 'A trusted international freight forwarding and project cargo partner in the UAE for over 50 years.',
            image: gc_services,
            url: 'https://www.google.com/general-contracting'
        },
        {
            header: 'Logistics',
            desc: 'Specialized project logistics solutions for complex and oversized cargo, providing end-to-end management and execution for successful project delivery.',
            image: lg_services,
            url: 'https://www.google.com/logistics'
        },
        {
            header: 'Marine Transport',
            desc: 'Comprehensive marine transport services, ensuring safe and efficient movement of goods across waterways, tailored to meet your specific shipping needs.',
            image: ms_services,
            url: 'https://www.google.com/marine-transport'
        
        },
        {
            header: 'Material Supply',
            desc: 'Reliable material supply services, ensuring timely delivery of high-quality materials to support your projects and operations.',
            image: er_sevices,
            url: 'https://www.google.com/material-supply'
        },
        {
            header: 'Equipment Rental',
            desc: 'Comprehensive equipment rental services, providing high-quality machinery and tools to support your projects and operations efficiently.',
            image: mt_services,
            url: 'https://www.google.com/equipment-rental'
        }
    ]
    
}