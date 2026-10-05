import React from 'react'
import ContractingHero from './GeneralContractingComponents/ContractingHero'
import LoomFreightconnect from './GeneralContractingComponents/LoomFreightconnect'
import LoomFreightgeneralservice from './GeneralContractingComponents/LoomFreightgeneralservice'
import InfrastructureCards from './GeneralContractingComponents/InfrastructureCards'
import GeneralServicesGrid from './GeneralContractingComponents/GeneralServicesGrid'
import MarineContractingServices from './GeneralContractingComponents/MarineContractingServices'
import MarineServicesDetails from './GeneralContractingComponents/MarineServicesDetails'
import TrustedBySection from './GeneralContractingComponents/TrustedBySection'
import Footer from '../components/Footer'
import FAQSection from './GeneralContractingComponents/FAQSection'
import ReachOutSection from './GeneralContractingComponents/ReachOutSection'
import contact_bg from '../assets/contact-bg.png'
import WhyChooseLoomFreight from './GeneralContractingComponents/WhyChooseLoomFreight'



const GeneralContracting = () => {
    return (
        <>
            <ContractingHero />
            <div className="relative z-10">
                <LoomFreightconnect />
                <LoomFreightgeneralservice />
                <InfrastructureCards />
                <GeneralServicesGrid />
                <MarineContractingServices />
                <MarineServicesDetails />
                <WhyChooseLoomFreight />
                <TrustedBySection />
                <FAQSection />
                <ReachOutSection backgroundImage={contact_bg} />
                <Footer />
            </div>

        </>
    )
}

export default GeneralContracting