import React from 'react'
import { constructionExpertise } from '../data/data'
import Image from 'next/image'

const OurExpertise = () => {
  return (
    <div className='w-full bg-seroBlue relative overflow-hidden'>
        
        <div className='relative container sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            
            <div className='text-3xl font-semibold text-white text-center'>
               <h2 className='leading-snug'>
                Our Expertise
               </h2>
               <p className='font-normal text-white text-base sm:px-[250px] mt-4 leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet cum autem reprehenderit sit eum, expedita dicta tenetur.</p>
            </div>

            <div className='grid grid-cols-1 md:gap-y-20 gap-y-10 mt-20'>
                {constructionExpertise.map(({title, description, image}, key) => (
                    <div key={title} className='flex items-center justify-center md:flex-row flex-col gap-y-4 md:gap-x-10'>
                        <div className='basis-1/2'>
                            <Image src={image} width='100%' height='500' className='rounded-xl' alt='' />
                        </div>
                       <div className={`basis-1/2 space-y-6 ${key%2 === 0 ? 'order-last' : 'order-first'}`}>
                            <h2 className='text-white font-semibold text-3xl leading-snug'>{title}</h2>
                            <p className='font-normal text-white text-base leading-relaxed'>{description}</p>
                       </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default OurExpertise