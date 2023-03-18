import React from 'react'
import { coreValuesData } from '../data/data'
import Image from 'next/image'
import patternBg from '/public/assets/images/trianglepad.svg'

const CoreValues = () => {
  return (
    <div className='w-full bg-white relative overflow-hidden'>
        
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className='hidden sm:block lg:absolute lg:right-0 lg:top-0'>
                <Image src={patternBg} width='500' height='500' className='rotate-45' alt='ptter-bg' />
            </div>
            <div className='text-4xl font-semibold text-seroBlue text-center'>
                <h2>Our Core Values</h2>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20 relative z-10'>
                {coreValuesData.map(({title, description, icon}) => (
                    <div key={title} className='col-span-1 rounded-lg bg-white shadow-lg p-6'>
                        <div className="flex flex-col gap-y-4">
                        <div className='bg-yellow-100 w-20 leading-[80px] rounded-full flex items-center justify-center p-4'>
                            <Image src={icon} width='50' height='50' alt={title} />
                        </div>  
                        <h3 className='font-semibold text-2xl text-seroBlue'>{title}</h3> 
                        <p className='text-gray-500 leading-relaxed text-base'>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CoreValues