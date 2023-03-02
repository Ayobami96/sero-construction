import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <div className='w-full bg-white relative overflow-hidden'>
        
        <div className='relative container sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className='overflow-hidden bg-gradient-to-b from-seroBlue to-seroBlue py-14 px-9 rounded-xl'>
                <div className="pointer-events-none absolute inset-0 " aria-hidden="true">
                   <svg
                      className="absolute inset-0 h-full w-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                </div>

                <div className='flex items-center'>
                    <div className='sm:basis-1/2 space-y-6'>
                        <h3 className='capitalize text-4xl text-white leading-snug font-semibold'>Let's take that your building project to the the next level.</h3>
                        <p className='font-normal text-base text-white leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex alias officiis aliquid impedit eius quod qui et. Non, nisi.</p>
                        <div>
                            <Link href='#'>
                            <button
                            type="button"
                            className="animate__animated animate__slideInUp border-btn"
                            >
                            Book a Consultation
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cta