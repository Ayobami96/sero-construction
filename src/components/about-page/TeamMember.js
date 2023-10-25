import Image from 'next/image';
import React from 'react';
import { team } from '../data/data';
import { Instagram, Twitter, Linkedin } from 'react-feather';

const TeamMember = () => {
  return (
    <div className='w-full bg-seroBlue relative'>    
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <h2 className='font-semibold text-white text-3xl capitalize text-center'>Meet our Leadership</h2>
            <div className="space-y-24">
                {team.map((group) => (
                <div key={group.title}>
                    {/* <Border as={FadeIn} /> */}
                    <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                    <div>
                        <h2 className="font-display text-2xl font-semibold text-white">
                        {group.title}
                        </h2>
                    </div>
                    <div className="lg:col-span-3">
                        <ul
                        role="list"
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                        >
                        {group.people.map((person) => (
                            <li key={person.name}>
                            <div>
                                <div className="group relative overflow-hidden rounded-3xl">
                                    <Image
                                        alt=""
                                        {...person.image}
                                        className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                        <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                        {person.name}
                                        </p>
                                        <p className="mt-2 text-sm text-white">
                                        {person.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </li>
                        ))}
                        </ul>
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
