

const Hero = () => {
  return (
    <div className='bg-heroBanner bg-no-repeat bg-cover text-white relative w-full'>
      <div className="absolute inset-0 bg-black bg-opacity-70 w-full h-full"></div>
      <div className='flex flex-col lg:flex-row sm:mx-auto lg:px-24 lg:py-24 py-12 px-4 relative z-10'>
          <div className='flex flex-col space-y-8 lg:w-[50%] w-full'>
            <h1 className='animate__animated animate__fadeInLeft font-bold md:text-5xl text-3xl capitalize md:leading-snug'>Creating Wealth Through Real Estate.</h1>
            <p className='animate__animated animate__fadeInRight text-base font-normal md:leading-relaxed'>We help Individuals, associations & business owners create wealth through real estate and build comfortable, affordable, smart, luxury homes with impeccable finesse.</p>
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

export default Hero