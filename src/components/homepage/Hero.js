import React from 'react';
import "animate.css"

const Hero = () => {
  return (
    <div className='bg-heroBanner bg-no-repeat bg-cover text-white relative w-full'>
      <div className="absolute inset-0 bg-black bg-opacity-60 w-full h-full"></div>
      <div className='flex flex-col lg:flex-row sm:mx-auto lg:px-24 lg:py-24 py-12 px-4 relative z-10'>
          <div className='flex flex-col space-y-8 lg:w-[60%] w-full'>
            <h1 className='animate__animated animate__fadeInLeft font-bold md:text-5xl text-3xl capitalize md:leading-snug'>Creating Wealth Through Real Estate.</h1>
            <p className='animate__animated animate__fadeInRight text-base font-normal md:leading-relaxed'>We help Individuals, associations & business owners create wealth through real estate and build comfortable, affordable, smart, luxury homes with impeccable finesse.</p>
            <button
            type="button"
            className="animate__animated animate__slideInUp inline-flex items-center rounded-md md:w-1/3 w-52 border border-white bg-transparent px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none"
            >
            Book a Consultaion
            </button>
          </div>
      </div>
    </div>
  )
}

export default Hero