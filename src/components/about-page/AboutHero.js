import React from 'react';
import "animate.css"

const AboutHero = () => {
  return (
    <div className='bg-aboutHero bg-no-repeat bg-cover text-white relative w-full' style={{backgroundPositionY: '20%'}}>
      <div className="absolute inset-0 bg-black bg-opacity-60 w-full h-full"></div>
      <div className='flex flex-col lg:flex-row sm:mx-auto lg:px-24 lg:py-24 py-12 px-4 relative z-10'>
          <div className='flex flex-col space-y-8 lg:w-[50%] w-full'>
            <h1 className='animate__animated animate__fadeInLeft font-bold md:text-5xl text-3xl capitalize md:leading-snug'>About Sero Construction</h1>
            <p className='animate__animated animate__fadeInRight text-base font-normal md:leading-relaxed'>Sero Construction Limited is an award winning real estate development and Construction company, located in Lagos, Nigeria. With professional expertise in general real estate services and property development, we offer a wide range of innovative product and services which makes our team unique.</p>
            <div>
              <button
              type="button"
              className="animate__animated animate__slideInUp white-border-btn"
              >
              Book a Consultaion
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutHero