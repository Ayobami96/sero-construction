import Image from 'next/image';
import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../data/data';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className=' w-full bg-gray-50 relative overflow-hidden'>
        <div className='relative container sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <h2 className='md:text-4xl text-2xl font-semibold text-seroBlue text-center mb-8'>What Our Customers are Saying</h2>
            <Swiper
            className='max-w-[700px] mx-auto mt-6'
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            }}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            >
            {testimonials.map(({name, image, comment, role}) => (
            <SwiperSlide key={name} className='text-center px-5 pb-5 '>
                <div className='h-[5.6rem] w-[5.6rem] mx-auto mb-4'>
                    <Image src={image} alt={name} width='150' height='150' objectFit='cover' className='rounded-full' />
                </div>
                <h3 className='mt-3 font-semibold text-seroBlue text-xl'>{name}</h3>
                <span className='text-gray-600 font-medium text-lg'>{role}</span>
                <p className='comment relative mt-6 p-8 shadow-lg mb-12 rounded-md'>{comment}</p>
            </SwiperSlide>
            ))}

            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials