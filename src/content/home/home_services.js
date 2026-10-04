
import pl_services from '../../assets/pl_services.png'
import wh_services from '../../assets/wh_services.png'
import ff_services from '../../assets/ff_services.png'
import cc_services from '../../assets/cc_services.png'
import va_services from '../../assets/va_services.png'

export const home_services = {
    badge_text: 'Services',
    header_text: 'Logistics Solutions We Offer',
    cards: [
    {
        header: 'Freight Forwarding',
        desc: 'End-to-end coordination of air, ocean, and road freight across global destinations.',
        image: ff_services,
        url: 'https://www.google.com/freight-forwarding'
    },
    {
        header: 'Customs Clearance',
        desc: 'Smooth import and export clearance with accurate documentation and regulatory compliance.',
        image: cc_services,
        url: 'https://www.google.com/customs-clearance'
    },
    {
        header: 'Warehousing',
        desc: 'Secure storage and inventory management to keep cargo organized and ready for dispatch.',
        image: wh_services,
        url: 'https://www.google.com/warehousing'
    },
    {
        header: 'Project Logistics',
        desc: 'Specialized planning and execution for oversized, complex, and time-sensitive cargo.',
        image: pl_services,
        url: 'https://www.google.com/project-logistics'
    },
    {
        header: 'Value-Added Services',
        desc: 'Flexible packing, labeling, consolidation, and cargo preparation tailored to your needs.',
        image: va_services,
        url: 'https://www.google.com/value-added-services'
    }
]

}