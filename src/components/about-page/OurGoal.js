import React from 'react';

const OurGoal = () => {
  return (
    <div className='w-full bg-white relative'>    
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>

            <div className='flex items-center md:gap-x-10 gap-y-6 lg:flex-row flex-col justify-center'>
                <div className='lg:basis-[44%] basis-full flex flex-col gap-y-4'>
                    <h2 className='font-semibold text-seroBlue text-3xl'>Why We Stand Out</h2>
                    <p className='text-base font-normal leading-relaxed text-gray-500'>Our entire operations reflects our most core  value, which is Value itself. We believe in offering value to our customer's at all time, and ensuring customer satisfaction. As much as we give value to our customers we also ensure to contribute our quota into building a sustainable community for all. Over the last 2 years, we've trained over 400 people on how to sell real estate in Nigeria with follow up mentorship at no cost</p>
                </div>
                <div className='lg:basis-[28%] basis-full bg-ourGoal bg-no-repeat bg-cover relative p-6 py-28 h-[460px]'>
                    <div className='absolute inset-0 bg-black bg-opacity-60 w-full h-full'></div>
                    <div className='relative z-1 space-y-3'>
                        <h4 className='font-semibold text-white text-2xl relative'>Our Mission</h4>
                        <div className='after:absolute w-10 h-[2px] bg-white'></div>
                        <p className='leading-relaxed font-normal text-base text-white'>To provide world class services in real estate, constructions and consultancy; through productive scouting, innovative projects,
                        strategic partnership and exceptional customer friendly system.</p>
                    </div>
                </div>
                <div className='lg:basis-[28%] basis-full bg-ourMission bg-no-repeat bg-cover relative p-6 py-28 h-[460px] w-full'>
                    <div className='absolute inset-0 bg-black bg-opacity-60 w-full h-full'></div>
                    <div className='relative z-1 space-y-3'>
                        <h4 className='font-semibold text-white text-2xl relative'>Our Vision</h4>
                        <div className='after:absolute w-10 h-[2px] bg-white'></div>
                        <p className='leading-relaxed font-normal text-base text-white'>To be a leading force in Africa's real estate and construction industry.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OurGoal