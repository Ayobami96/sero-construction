import React from 'react'
import Cta from '../ui/Cta'
import Testimonials from '../ui/Testimonials'
import ConstructionServiceHero from './ConstructionServiceHero'
import DeatailedInfo from '../ui/DeatailedInfo'
import OurExpertise from './OurExpertise'

const ConstrcutionServicePage = () => {
  return (
    <div>
      <ConstructionServiceHero />
      <DeatailedInfo 
        title="We Take Away Your Anxiety When We Handle Your Project" 
        firstDesc="At Sero Construction, we see every project as an opportunity to show off our expertise through quality project delivery."
        secondDesc="Each project we embark on goes through a rigorous process of planning, managing, monitoring and improvement to ensure that possible risk(s) are controlled."
      />
      <OurExpertise />
      <Testimonials />
      <Cta />
    </div>
  )
}

export default ConstrcutionServicePage