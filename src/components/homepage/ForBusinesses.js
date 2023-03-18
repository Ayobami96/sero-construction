import Image from 'next/image';
import React from 'react';
import businessIcon from '/public/assets/images/portfolio.svg';
import individualIcon from '/public/assets/images/person.svg';

const ForBusinesses = () => {
  return (
    <div className='w-full bg-white relative overflow-hidden'>
        
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className='flex md:flex-row flex-col justify-center items-center gap-6'>
                <div className='basis-1/3 self-start space-y-4'>
                    <h2 className='font-semibold text-seroBlue text-3xl leading-snug'>Available For Businesses and Individuals</h2>
                    <p className='font-normal text-gray-500 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint temporibus, enim necessitatibus molestiae saepe minus.</p>
                </div>
                <div className='basis-1/3 bg-seroBlue p-6 rounded-lg space-y-4 pb-16'>
                    <Image src={businessIcon} alt='business-icon' width='100' height='100' className='pt-3' />
                    <h3 className='font-semibold text-white text-2xl'>For Businesses</h3>
                    <p className='text-base font-normal leading-relaxed text-white'>We help businesses diversify their external investment budget into profitable real estate portfolio that guarantees high return on investment.</p>
                </div>
                <div className='basis-1/3 bg-seroBlue p-6 rounded-lg space-y-4 pb-16'>
                    <Image src={individualIcon} alt='business-icon' width='100' height='100' className='pt-3' />
                    <h3 className='font-semibold text-white text-2xl'>For Individuals</h3>
                    <p className='text-base font-normal leading-relaxed text-white'>We help businesses diversify their external investment budget into profitable real estate portfolio that guarantees high return on investment</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForBusinesses