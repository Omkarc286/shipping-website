import React from 'react'
import ContractingHero from './GeneralContractingComponents/ContractingHero'
import ADSOconnect from './GeneralContractingComponents/ADSOconnect'
import ADSOgeneralservice from './GeneralContractingComponents/ADSOgeneralservice'
import InfrastructureCards from './GeneralContractingComponents/InfrastructureCards'
import GeneralServicesGrid from './GeneralContractingComponents/GeneralServicesGrid'
import MarineContractingServices from './GeneralContractingComponents/MarineContractingServices'
import MarineServicesDetails from './GeneralContractingComponents/MarineServicesDetails'
import TrustedBySection from './GeneralContractingComponents/TrustedBySection'
import Footer from '../components/Footer'
import FAQSection from './GeneralContractingComponents/FAQSection'
import ReachOutSection from './GeneralContractingComponents/ReachOutSection'
import contact_bg from '../assets/contact-bg.png'
import WhyChooseADSO from './GeneralContractingComponents/WhyChooseADSO'



const GeneralContracting = () => {
    return (
        <>
            <ContractingHero />
            <div className="relative z-10">
                <ADSOconnect />
                <ADSOgeneralservice />
                <InfrastructureCards />
                <GeneralServicesGrid />
                <MarineContractingServices />
                <MarineServicesDetails />
                <WhyChooseADSO />
                <TrustedBySection />
                <FAQSection />
                <ReachOutSection backgroundImage={contact_bg} />
                <Footer />
            </div>

        </>
    )
}

export default GeneralContracting