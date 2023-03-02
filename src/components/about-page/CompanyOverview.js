import Image from 'next/image';
import React from 'react'
import overviewImg from '/public/assets/images/real-estate-house.jpg';

const CompanyOverview = () => {
  return (
    <div className='w-full bg-white relative'>    
        <div className='relative container sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>

            <div className='flex items-center md:gap-x-10 gap-y-6 md:flex-row flex-col justify-center'>
                <div className='basis-1/2 flex flex-col gap-y-4'>
                    <h2 className='font-semibold text-seroBlue text-3xl'>Company Overview</h2>
                    <p className='text-base font-normal leading-relaxed text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, harum autem. Voluptatibus laudantium aspernatur facere, quo sit rerum saepe enim sapiente alias dicta deleniti fugit earum corporis obcaecati perspiciatis aut at, suscipit excepturi omnis consectetur totam, libero dolorem! Voluptatibus, similique?</p>
                    <p className='text-base font-normal leading-relaxed text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam earum, velit quo aut harum nemo consequatur odio sequi non natus numquam? Sint incidunt adipisci ex eaque explicabo. Dignissimos dolores omnis, distinctio labore dolorem tempora sunt praesentium, a accusamus consectetur aliquam.</p>
                    <p className='text-base font-normal leading-relaxed text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias a itaque aliquam impedit voluptatibus enim velit, eaque excepturi atque quas.</p>
                </div>
                <div className='basis-1/2'>
                    <Image src={overviewImg} width='100%' height='500' alt='company-overview-img' className='rounded-lg shadow-lg' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default CompanyOverview