import Image from 'next/image';
import React from 'react';
import { Instagram, Twitter, Linkedin } from 'react-feather';
import whiteLogo from '/public/assets/logo/seroowhite.png';

const Footer = () => {

    let currentYear= new Date().getFullYear(); 

  return (
    <div className=' w-full bg-seroBlue relative overflow-hidden'>
        <div className='relative container sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className="flex md:flex-row flex-col md:justify-center md:items-center gap-10">
                <div className='basis-1/3 text-white'>
                <h4 className='font-medium text-lg'>Services</h4>
                   <div className=' mt-4'>
                        <p className='text-base font-normal leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta obcaecati repellat ullam eligendi laudantium autem aspernatur error sapiente vero sequi nemo, quibusdam numquam totam.</p>
                   </div>
                </div>
                <div className='basis-1/3 text-white md:ml-[8.3%]'>
                    <h4 className='font-medium text-lg'>Services</h4>
                    <div className='flex flex-col items-start gap-y-2 mt-4'>
                        <span>Construction Service</span>
                        <span>Real Estate Development</span>
                        <span>Architectural Design</span>
                        <span>Building Materials</span>
                    </div>
                </div>
                <div className='basis-1/3 text-white'>
                    <h4 className='font-medium text-lg'>Services</h4>
                    <div className='flex flex-col items-start gap-y-2 mt-4'>
                        <span>Construction Service</span>
                        <span>Real Estate Development</span>
                        <span>Architectural Design</span>
                        <span>Building Materials</span>
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <div className='flex items-center'>
                    <hr className='text-white border-t-w-[2px] bg-white w-[1px] flex-grow mt-2' />
                    <div className='flex items-center gap-x-5 px-3'>
                        <Instagram size={24} className='text-yellow-400' />
                        <Twitter size={24} className='text-yellow-400' />
                        <Linkedin size={24} className='text-yellow-400' />
                    </div>
                    <hr className='text-white border-t-w-[2px] bg-white w-[1px] flex-grow mt-2' />
                </div>

                <div className='flex flex-col justify-center items-center text-center mt-6'>
                    <Image src={whiteLogo} height='100' width='100' />
                    <p className='font-normal text-sm text-white'>Copyright © {currentYear} Sero Construction</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer