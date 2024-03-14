import React from 'react'

const DeatailedInfo = ({title, firstDesc, secondDesc}) => {
  return (
    <div className='w-full bg-white relative overflow-hidden'>
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className='text-left space-y-6'>
                <h2 className='text-3xl font-semibold text-seroBlue !capitalize'>{title}</h2>
                <p className='sm:max-w-4xl font-normal text-base text-gray-600 leading-relaxed'>{firstDesc}</p>
                <p className='sm:max-w-4xl font-normal text-base text-gray-600 leading-relaxed'>{secondDesc}</p>
            </div>
        </div>
    </div>
  )
}

export default DeatailedInfo