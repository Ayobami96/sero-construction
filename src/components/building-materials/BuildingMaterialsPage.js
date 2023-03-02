import React from 'react'
import DeatailedInfo from '../construction-service-page/DeatailedInfo'
import OurExpertise from '../construction-service-page/OurExpertise'
import Cta from '../ui/Cta'
import Testimonials from '../ui/Testimonials'
import BuildingMaterialsHero from './BuildingMaterialsHero'

const BuildingMaterialsPage = () => {
  return (
    <div>
        <BuildingMaterialsHero />
        <DeatailedInfo />
        <OurExpertise />
        <Testimonials />
        <Cta />
    </div>
  )
}

export default BuildingMaterialsPage