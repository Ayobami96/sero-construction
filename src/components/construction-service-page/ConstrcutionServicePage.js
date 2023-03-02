import React from 'react'
import Cta from '../ui/Cta'
import Testimonials from '../ui/Testimonials'
import ConstructionServiceHero from './ConstructionServiceHero'
import DeatailedInfo from './DeatailedInfo'
import OurExpertise from './OurExpertise'

const ConstrcutionServicePage = () => {
  return (
    <div>
      <ConstructionServiceHero />
      <DeatailedInfo />
      <OurExpertise />
      <Testimonials />
      <Cta />
    </div>
  )
}

export default ConstrcutionServicePage