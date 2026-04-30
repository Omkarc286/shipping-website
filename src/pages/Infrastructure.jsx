import React from 'react';
import InfrastructureHero from './InfrastructureComponents/InfrastructureHero';
import ProfessionalEarthworks from './InfrastructureComponents/ProfessionalEarthworks';
import UtilitiesStructural from './InfrastructureComponents/UtilitiesStructural';
import MarineContractingServices from './InfrastructureComponents/MarineContractingServices';
import WhyChooseADSO from './InfrastructureComponents/WhyChooseADSO';
import TrustedBySection from './InfrastructureComponents/TrustedBySection';
import RecentWorksSection from './InfrastructureComponents/RecentWorksSection';
import contact_bg from '../assets/contact-bg.png'
import ReachOutSection from './InfrastructureComponents/ReachOutSection';
import FAQSection from './InfrastructureComponents/FAQSection';
import Footer from '../components/Footer';



function Infrastructure() {
    return (
        <>
            <InfrastructureHero />
            <div className="relative z-10">
                <ProfessionalEarthworks />
                <UtilitiesStructural />
                <MarineContractingServices />
                <WhyChooseADSO />
                <TrustedBySection />
                <RecentWorksSection />
                <FAQSection />
                <ReachOutSection backgroundImage={contact_bg} />
                <Footer />
            </div>
        </>
    );
}

export default Infrastructure;