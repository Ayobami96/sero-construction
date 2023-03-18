import Image from 'next/image';
import React from 'react';
import { teamMember } from '../data/data';
import { Instagram, Twitter, Linkedin } from 'react-feather';

const TeamMember = () => {
  return (
    <div className='w-full bg-seroBlue relative'>    
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <h2 className='font-semibold text-white text-3xl capitalize text-center'>Meet our leadership</h2>
            <div className='flex items-center gap-y-6 flex-wrap md:flex-row flex-col justify-center mt-20'>
                {teamMember.map(({name, role, image, linkedinHref, instagramHref, twitterHref}) => (
                    <div className='p-[15px] basis-1/4' key={name}>
                        <div className='bg-white p-[15px] text-center cursor-pointer group'>
                            <Image src={image} alt={name} width='280' height='280' objectFit='cover' className='transition-all ease-in-out -mt-10 group-hover:scale-95 delay-100' />
                            <h4 className='mt-4 text-base font-medium text-seroBlue mb-2'>{name}</h4>
                            <p className='text-gray-500 text-base font-normal mb-2'>{role}</p>
                            <div className='flex items-center justify-center gap-x-4'>
                                <div className='border rounded-full w-[32px] h-[32px] bg-yellow-400 border-yellow-400 p-1 leading-[32px] flex items-center justify-center text-center'>
                                    <Linkedin size={18} className='text-center text-seroBlue ' />
                                </div>
                                <div className='border rounded-full w-[32px] h-[32px] bg-yellow-400 border-yellow-400 p-1 leading-[32px] flex items-center justify-center text-center'>
                                    <Twitter size={18} className='text-center text-seroBlue ' />
                                </div>
                                <div className='border rounded-full w-[32px] h-[32px] bg-yellow-400 border-yellow-400 p-1 leading-[32px] flex items-center justify-center text-center'>
                                    <Instagram size={18} className='text-center text-seroBlue ' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default TeamMember
