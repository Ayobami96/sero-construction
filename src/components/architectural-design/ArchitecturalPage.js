import React from 'react'
import DeatailedInfo from '../ui/DeatailedInfo'
import OurExpertise from '../construction-service-page/OurExpertise'
import Cta from '../ui/Cta'
import Testimonials from '../ui/Testimonials'
import ArchitecturalHero from './ArchitecturalHero'

const ArchitecturalPage = () => {
  return (
    <div>
        <ArchitecturalHero />
        <DeatailedInfo 
          title="We've Just About The Expertise To Take On Your Architectural Project" 
          firstDesc="We have an experienced team of Architects & Interior designers amongst us who tends to think outside the box and give spectacular results."
          secondDesc="We offer exceptional services in Consultation, design ( Exterior and Interior ) of both Residential and Commercial structures, Virtual Reality of the interior spaces - by making the client have a feel of what will be gotten."
        />
        <OurExpertise />
        <Testimonials />
        <Cta />
    </div>
  )
}

export default ArchitecturalPage