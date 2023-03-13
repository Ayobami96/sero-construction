import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { services } from '../data/data';

const Services = () => {
  return (
    <div className='w-full bg-seroBlue relative overflow-hidden'>
        
        <div className='relative container sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            
            <div className='text-3xl font-semibold text-white text-center'>
               <h2 className='leading-snug'>
                Your One Stop Plug For All Your<br></br> Construction Services
               </h2>
               <p className='font-normal text-white text-base sm:px-[250px] mt-4 leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet cum autem reprehenderit sit eum, expedita dicta tenetur. Reiciendis excepturi fugit veniam quisquam ratione dolor molestiae?</p>
            </div>

            <div className='grid grid-cols-1 md:gap-y-20 gap-y-10 mt-20'>
                {services.map(({title, description, image, href}, key) => (
                    <div key={title} className='flex items-center justify-center md:flex-row flex-col gap-y-4 md:gap-x-10'>
                        <div className='basis-1/2'>
                            <Image src={image} width='100%' height='500' className='rounded-xl' alt='' />
                        </div>
                       <div className={`basis-1/2 space-y-6 ${key%2 === 0 ? 'order-last' : 'order-first'}`}>
                            <h2 className='text-white font-semibold text-3xl'>{title}</h2>
                            <p className='font-normal text-white text-base leading-relaxed'>{description}</p>
                            <div>
                                <Link href={href}>
                                    <button
                                    type="button"
                                    className="animate__animated animate__slideInUp border-btn"
                                    >
                                    Explore
                                    </button>
                                </Link>
                            </div>
                       </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Services