import React from 'react'

const BuildingMaterialsHero = () => {
  return (
    <div className='bg-buildingMaterialHero bg-no-repeat bg-cover text-white relative w-full' style={{backgroundPositionY: '20%'}}>
      <div className="absolute inset-0 bg-black bg-opacity-60 w-full h-full"></div>
      <div className='flex flex-col lg:flex-row sm:mx-auto lg:px-24 lg:py-24 py-12 px-4 relative z-10'>
          <div className='flex flex-col space-y-8 lg:w-[50%] w-full'>
            <h1 className='animate__animated animate__fadeInLeft font-bold md:text-5xl text-3xl capitalize md:leading-snug'>Building Materials</h1>
            <p className='animate__animated animate__fadeInRight text-base font-normal md:leading-relaxed'>Our company is dedicated to providing top-quality products that meet the highest standards of durability and reliability.
            Our inventory includes a wide range of building materials, including cement, concrete, bricks, roofing materials, Reinforced iron, bricks, sharp sand and more. We source our materials from the most reputable suppliers in the industry, ensuring that our clients receive only the best products available.</p>
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

export default BuildingMaterialsHero