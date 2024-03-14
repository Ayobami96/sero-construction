import React from 'react'
import DeatailedInfo from '../ui/DeatailedInfo'
import OurExpertise from '../construction-service-page/OurExpertise'
import Cta from '../ui/Cta'
import Testimonials from '../ui/Testimonials'
import RealEstateHero from './RealEstateHero'

const RealEstateDevelopmentPage = () => {
  return (
    <div>
        <RealEstateHero />
        <DeatailedInfo 
          title="We Deliver Value That Match Up To Intended Expectations" 
          firstDesc="At Sero Construction, we pride ourselves on being at the forefront of innovative and sustainable real estate development. Our diverse team of experts brings a wealth of knowledge and experience to every project, ensuring excellence from concept to completion."
          secondDesc="Our seasoned analysts conduct exhaustive market analyses, utilizing cutting-edge data analytics to identify prime real estate opportunities. We delve into local market intricacies, staying ahead of trends to guide our strategic decisions."
        />
        <OurExpertise />
        <Testimonials />
        <Cta />
    </div>
  )
}

export default RealEstateDevelopmentPage