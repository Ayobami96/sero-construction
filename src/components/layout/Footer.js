import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'react-feather';
import whiteLogo from '/public/assets/logo/seroowhite.png';

const Footer = () => {

    let currentYear= new Date().getFullYear(); 

  return (
    <div className='w-full bg-seroBlue relative overflow-hidden bg-patternBg bg-no-repeat bg-cover'>
        <div className='relative w-full sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className="flex lg:flex-row flex-col md:justify-center gap-10">
                <div className='basis-1/3 text-white'>
                <h4 className='font-medium text-lg'>Sero Construction</h4>
                   <div className=' mt-4'>
                        <p className='text-sm font-normal leading-relaxed'>The company is focused on innovative and high-quality strategy in every project composition and service professionalism through an efficient management system.</p>
                   </div>
                </div>
                <div className='basis-1/3 text-white lg:ml-[8.3%]'>
                    <h4 className='font-medium text-lg'>Services</h4>
                    <div className='flex flex-col items-start gap-y-2 mt-4 text-sm'>
                        <Link href="/construction-service">Construction Service</Link>
                        <Link href='/real-estate-development'>Real Estate Development</Link>
                        <Link href='/architectural-design'>Architectural Design</Link>
                        <Link href='/building-materials'>Building Materials</Link>
                    </div>
                </div>
                <div className='basis-1/3 text-white'>
                    <h4 className='font-medium text-lg'>Location</h4>
                    <div className='flex flex-col items-start gap-y-2 mt-4 text-sm'>
                        <span>Construction Service</span>
                        <span>Real Estate Development</span>
                        
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <div className='flex items-center'>
                    <hr className='text-white border-t-w-[2px] bg-white w-[1px] flex-grow mt-2' />
                    <div className='flex items-center gap-x-5 px-3'>
                        <Link target='_blank' href='https://www.instagram.com/seroconstruction/'>
                            <Instagram size={24} className='text-yellow-400' />
                        </Link>
                        <Link target='_blank' href='https://www.facebook.com/seroconstruction'>
                            <Facebook size={24} className='text-yellow-400' />
                        </Link>
                        <Link target='_blank' href='https://www.linkedin.com/company/sero-construction-limited/'>
                            <Linkedin size={24} className='text-yellow-400' />
                        </Link>
                    </div>
                    <hr className='text-white border-t-w-[2px] bg-white w-[1px] flex-grow mt-2' />
                </div>

                <div className='flex flex-col justify-center items-center text-center mt-6'>
                    <Image src={whiteLogo} height='100' width='100' alt='sero footer logo' />
                    <p className='font-normal text-sm text-white'>Copyright © {currentYear} Sero Construction</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer