import React from 'react'
import Testimonials from '../ui/Testimonials'
import About from './About'
import CoreValues from './CoreValues'
import ForBusinesses from './ForBusinesses'
import Hero from './Hero'
import Services from './Services'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <CoreValues />
      <Services />
      <ForBusinesses />
      <Testimonials />
    </div>
  )
}

export default Homepage