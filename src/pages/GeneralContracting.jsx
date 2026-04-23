import React from 'react'
import ContractingHero from './GeneralContractingComponents/ContractingHero'
import ADSOconnect from './GeneralContractingComponents/ADSOconnect'
import ADSOgeneralservice from './GeneralContractingComponents/ADSOgeneralservice'
import InfrastructureCards from './GeneralContractingComponents/InfrastructureCards'
import GeneralServicesGrid from './GeneralContractingComponents/GeneralServicesGrid'



const GeneralContracting = () => {
    return (
        <>
            <ContractingHero />
            <div className="relative z-10">
                <ADSOconnect />
                <ADSOgeneralservice />
                <InfrastructureCards />
                <GeneralServicesGrid />
            </div>

        </>
    )
}

export default GeneralContracting