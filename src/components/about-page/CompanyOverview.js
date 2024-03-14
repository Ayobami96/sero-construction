import Image from 'next/image';
import React from 'react'
import overviewImg from '/public/assets/images/real-estate-house.jpg';

const CompanyOverview = () => {
  return (
    <div className='w-full bg-white relative'>    
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>

            <div className='flex items-center md:gap-x-10 gap-y-8 lg:flex-row flex-col justify-center'>
                <div className='basis-1/2 flex flex-col gap-y-4'>
                    <h2 className='font-semibold text-seroBlue text-3xl'>Company Overview</h2>
                    <p className='text-base font-normal leading-relaxed text-gray-500'>Sero Construction Limited (a.k.a Sero Construction) from the beginning started out has a construction materials and equipment supplier as well as brick making which has been in operation for almost a decade.</p>
                    <p className='text-base font-normal leading-relaxed text-gray-500'>We got into the Nigeria real estate business in 2019 as a brokerage agency, we partnered with reputable development companies, community heads and families with large real estate asset to serve both the bulk and unit buyers. We were fully registered in 2021 as a Real Estate Development and Construction Company. We got in the business at a point when there was unreasonable pricing in the value of real estate, most especially in Lagos and our goal has been to fill the void by provding value that match up with the resources of our investors.</p>
                    <p className='text-base font-normal leading-relaxed text-gray-500'>In the last 4 years, we've been creating wealth for Businesses, Individuals and Associations through valuable and secure real estate investment. Our integrity and delivery catapulted our capacity to do more in the development sector.</p>
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