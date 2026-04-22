import React from 'react'
import ServicesHero from './OurServicesComponents/ServicesHero'
import FreightForwarding from './OurServicesComponents/FreightForwarding'
import FreightExpertise from './OurServicesComponents/FreightExpertise'
import FreightFAQ from './OurServicesComponents/FreightFAQ'
import FAQSection from './OurServicesComponents/FAQSection'
import ReachOutSection from './OurServicesComponents/ReachOutSection'
import Footer from './OurServicesComponents/Footer'
import contact_bg from '../assets/contact-bg.png'
import LogisticSolutionsSection from './OurServicesComponents/LogisticSolutionsSection'
import TrustedBySection from './OurServicesComponents/TrustedBySection'
import FreightForwarders from './OurServicesComponents/FreightForwarders'
import freight from '../assets/ourservices/freight.png'
import HowWeDoFreightForwarding from './OurServicesComponents/HowWeDoFreightForwarding'




const Services = () => {
    return (
        <>
            <ServicesHero />
            <FreightForwarding />
            <FreightExpertise />
            <FreightFAQ />
            <FreightForwarders backgroundImage={freight} />
            <HowWeDoFreightForwarding />
            <TrustedBySection />
            <LogisticSolutionsSection />
            <FAQSection />
            <ReachOutSection backgroundImage={contact_bg} />
            <Footer />
        </>
    )
}

export default Services