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
            card1_header: 'General Contracting',
            card1_desc: 'A trusted international freight forwarding and project cargo partner in the UAE for over 50 years.',
            card1_image: gc_services
        },
        {
            card2_header: 'Logistics',
            card2_desc: 'Specialized project logistics solutions for complex and oversized cargo, providing end-to-end management and execution for successful project delivery.',
            card2_image: lg_services
        },
        {
            card3_header: 'Marine Transport',
            card3_desc: 'Comprehensive marine transport services, ensuring safe and efficient movement of goods across waterways, tailored to meet your specific shipping needs.',
            card3_image: ms_services
        
        },
        {
            card4_header: 'Material Supply',
            card4_desc: 'Reliable material supply services, ensuring timely delivery of high-quality materials to support your projects and operations.',
            card4_image: er_sevices
        },
        {
            card5_header: 'Equipment Rental',
            card5_desc: 'Comprehensive equipment rental services, providing high-quality machinery and tools to support your projects and operations efficiently.',
            card5_image: mt_services
        }
    ]
    
}