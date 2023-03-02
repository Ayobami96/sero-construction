import React from 'react'
import DeatailedInfo from '../construction-service-page/DeatailedInfo'
import OurExpertise from '../construction-service-page/OurExpertise'
import Cta from '../ui/Cta'
import Testimonials from '../ui/Testimonials'
import ArchitecturalHero from './ArchitecturalHero'

const ArchitecturalPage = () => {
  return (
    <div>
        <ArchitecturalHero />
        <DeatailedInfo />
        <OurExpertise />
        <Testimonials />
        <Cta />
    </div>
  )
}

export default ArchitecturalPage