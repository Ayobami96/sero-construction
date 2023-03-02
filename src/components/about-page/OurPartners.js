import Image from 'next/image'
import React from 'react'

const OurPartners = () => {
  return (
    <div className='w-full bg-gray-50 relative'>    
        <div className='relative container sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className='text-2xl font-semibold text-seroBlue text-center'>
                <h2>Trusted By Leading Brands</h2>
            </div>

            <div className='flex items-center justify-center flex-wrap md:gap-8 gap-6 mt-10'>
                <div className='grayscale transition-all hover:grayscale-0 cursor-pointer'>
                    <Image src='https://cdn.worldvectorlogo.com/logos/goldair.svg' width='100' height='100' alt='goldir' />
                </div>
                <div className='grayscale transition-all hover:grayscale-0 cursor-pointer'>
                    <Image src='https://cdn.worldvectorlogo.com/logos/hisense-logo.svg' width='100' height='100' alt='goldir' />
                </div>
                <div className='grayscale transition-all hover:grayscale-0 cursor-pointer'>
                    <Image src='https://cdn.worldvectorlogo.com/logos/evobus-1.svg' width='100' height='100' alt='goldir' />
                </div>
                <div className='grayscale transition-all hover:grayscale-0 cursor-pointer'>
                    <Image src='https://cdn.worldvectorlogo.com/logos/aeroquip.svg' width='100' height='100' alt='goldir' />
                </div>
                <div className='grayscale transition-all hover:grayscale-0 cursor-pointer'>
                    <Image src='https://cdn.worldvectorlogo.com/logos/amazon-2.svg' width='100' height='100' alt='goldir' />
                </div>
                <div className='grayscale transition-all hover:grayscale-0 cursor-pointer'>
                    <Image src='https://cdn.worldvectorlogo.com/logos/mobil-logo-1.svg' width='100' height='100' alt='goldir' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurPartners