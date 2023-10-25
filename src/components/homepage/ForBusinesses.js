import Image from 'next/image';
import React from 'react';
import businessIcon from '/public/assets/images/portfolio.svg';
import individualIcon from '/public/assets/images/person.svg';

const ForBusinesses = () => {
  return (
    <div className='w-full bg-white relative overflow-hidden'>
        
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className='grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-3 xl:gap-8'>
                    <div className='self-start space-y-4'>
                        <h2 className='font-semibold text-seroBlue text-3xl leading-snug'>Available For Businesses and Individuals</h2>
                        <p className='font-normal text-gray-500 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint temporibus, enim necessitatibus molestiae saepe minus.</p>
                    </div>
                    <div>
                        <div className='bg-seroBlue p-6 rounded-lg space-y-4 pb-16 h-[350px]'>  
                            <div>
                            <Image src={businessIcon} alt='business-icon' width='100' height='100' className='pt-3' />
                            <h3 className='font-semibold text-white text-2xl mt-2'>For Businesses</h3>
                            <p className='text-base font-normal leading-relaxed text-white mt-3'>We help businesses diversify their external investment budget into profitable real estate portfolio that guarantees high return on investment.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-seroBlue p-6 rounded-lg space-y-4 pb-16 h-[350px]'>
                            <div>
                                <Image src={individualIcon} alt='business-icon' width='100' height='100' className='pt-3' />
                                <h3 className='font-semibold text-white text-2xl mt-2'>For Individuals</h3>
                                <p className='text-base font-normal leading-relaxed text-white mt-3'>We help businesses diversify their external investment budget into profitable real estate portfolio that guarantees high return on investment.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ForBusinesses