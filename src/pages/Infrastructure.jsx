import React from 'react';
import InfrastructureHero from './InfrastructureComponents/InfrastructureHero';
import ProfessionalEarthworks from './InfrastructureComponents/ProfessionalEarthworks';
import UtilitiesStructural from './InfrastructureComponents/UtilitiesStructural';
import MarineContractingServices from './InfrastructureComponents/MarineContractingServices';
import WhyChooseADSO from './InfrastructureComponents/WhyChooseADSO';


function Infrastructure() {
    return (
        <>
            <InfrastructureHero />
            <div className="relative z-10">
                <ProfessionalEarthworks />
                <UtilitiesStructural />
                <MarineContractingServices />
                <WhyChooseADSO />
            </div>
        </>
    );
}

export default Infrastructure;