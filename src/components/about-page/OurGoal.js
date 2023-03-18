import React from 'react';

const OurGoal = () => {
  return (
    <div className='w-full bg-white relative'>    
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>

            <div className='flex items-center md:gap-x-10 gap-y-6 md:flex-row flex-col justify-center'>
                <div className='basis-[44%] flex flex-col gap-y-4'>
                    <h2 className='font-semibold text-seroBlue text-3xl'>Why We Stand Out</h2>
                    <p className='text-base font-normal leading-relaxed text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, harum autem. Voluptatibus laudantium aspernatur facere, quo sit rerum saepe enim sapiente alias dicta deleniti fugit earum corporis obcaecati perspiciatis aut at.</p>
                </div>
                <div className='basis-[28%] bg-ourGoal bg-no-repeat bg-cover relative p-6 py-28'>
                    <div className='absolute inset-0 bg-black bg-opacity-60 w-full h-full'></div>
                    <div className='relative z-1 space-y-3'>
                        <h4 className='font-semibold text-white text-2xl relative'>Our Mission</h4>
                        <div className='after:absolute w-10 h-[2px] bg-white'></div>
                        <p className='leading-relaxed font-normal text-base text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium reprehenderit totam quae porro quasi iusto voluptas ea sapiente, voluptatem consequatur doloribus numquam.</p>
                    </div>
                </div>
                <div className='basis-[28%] bg-ourMission bg-no-repeat bg-cover relative p-6 py-28'>
                    <div className='absolute inset-0 bg-black bg-opacity-60 w-full h-full'></div>
                    <div className='relative z-1 space-y-3'>
                        <h4 className='font-semibold text-white text-2xl relative'>Our Vision</h4>
                        <div className='after:absolute w-10 h-[2px] bg-white'></div>
                        <p className='leading-relaxed font-normal text-base text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium reprehenderit totam quae porro quasi iusto voluptas ea sapiente, voluptatem consequatur doloribus numquam.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OurGoal