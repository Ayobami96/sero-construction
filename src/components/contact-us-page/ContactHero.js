import React from 'react'

const ContactHero = () => {
  return (
    <div className='bg-contactHero bg-no-repeat bg-cover text-white relative w-full' style={{backgroundPositionY: '20%'}}>
      <div className="absolute inset-0 bg-black bg-opacity-60 w-full h-full"></div>
      <div className='flex flex-col lg:flex-row sm:mx-auto lg:px-24 lg:py-28 py-12 px-4 relative z-10'>
          <div className='flex flex-col space-y-8 lg:w-[60%] w-full'>
            <h1 className='animate__animated animate__fadeInLeft font-bold md:text-5xl text-3xl capitalize md:leading-snug'>What Would you like us to help you with</h1>
            <p className='animate__animated animate__fadeInRight text-base font-normal md:leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum consectetur fuga nesciunt rerum, eos dicta quisquam repudiandae libero nam vero deleniti totam quia architecto, qui quae, assumenda eaque aliquid.</p>
          </div>
      </div>
    </div>
  )
}

export default ContactHero