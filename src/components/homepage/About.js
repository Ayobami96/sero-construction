import React from 'react';
import Image from 'next/image';
import workersImg from '/public/assets/images/architect.png'

const About = () => {
  return (
    <div className='w-full bg-white'>
        <div className='relative container flex flex-col items-center sm:flex-row sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className='relative block basis-1/2'>
                <Image src={workersImg} width='600' height='600' alt="workers-img" className='rounded-xl'  />
            </div>

            <div className='flex flex-col basis-1/2 p-4 px-6'>
                <span className='capitalize text-slate-500 font-medium text-lg'>Our Company</span>
                <p className='font-semibold text-seroBlue text-3xl mt-2'>Sero Construction Building Your Dream Home</p>
                <div className='space-y-4 mt-3'>
                    <p className='text-gray-500 font-normal leading-relaxed text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus iusto inventore, fugiat vel provident enim voluptatem non molestias, atque rerum, sed eveniet quo molestiae.</p>
                    <p className='text-gray-500 font-normal leading-relaxed text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat sint odit voluptate, eligendi asperiores.</p>
                </div>
                <div className='mt-5'>
                    <button
                    type="button"
                    className="animate__animated animate__slideInUp hvr-sweep-to-top"
                    >
                    About Us
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About