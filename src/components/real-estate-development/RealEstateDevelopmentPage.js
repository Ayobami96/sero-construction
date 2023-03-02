import React from 'react'
import DeatailedInfo from '../construction-service-page/DeatailedInfo'
import OurExpertise from '../construction-service-page/OurExpertise'
import Cta from '../ui/Cta'
import Testimonials from '../ui/Testimonials'
import RealEstateHero from './RealEstateHero'

const RealEstateDevelopmentPage = () => {
  return (
    <div>
        <RealEstateHero />
        <DeatailedInfo />
        <OurExpertise />
        <Testimonials />
        <Cta />
    </div>
  )
}

export default RealEstateDevelopmentPage