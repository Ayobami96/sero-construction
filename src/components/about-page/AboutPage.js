import React from 'react'
import Testimonials from '../ui/Testimonials'
import AboutHero from './AboutHero'
import CompanyOverview from './CompanyOverview'
import OurGoal from './OurGoal'
import OurPartners from './OurPartners'
import TeamMember from './TeamMember'

const AboutPage = () => {
  return (
    <div>
        <AboutHero />
        <OurPartners />
        <CompanyOverview />
        <OurGoal />
        <TeamMember />
        <Testimonials />
    </div>
  )
}

export default AboutPage