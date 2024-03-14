import React from 'react'
import { constructionExpertise, realEstateExpertise, architecturalExpertise, buildingMaterialExpertise } from '../data/data'
import Image from 'next/image'
import { usePathname } from 'next/navigation'




const ExpertiseCard = ({ title, description, image, isEven }) => {
    return (
      <div className={`flex items-center justify-center md:flex-row flex-col gap-y-4 md:gap-x-10`}>
        <div className='basis-1/2'>
          <Image src={image} width='100%' height='500' className='rounded-xl' alt='' />
        </div>
        <div className={`basis-1/2 space-y-6 ${isEven ? 'sm:order-last' : 'sm:order-first'}`}>
          <h2 className='text-white font-semibold text-3xl leading-snug'>{title}</h2>
          <p className='font-normal text-white text-base leading-relaxed'>{description}</p>
        </div>
      </div>
    );
  };

const OurExpertise = () => {

  const pathName = usePathname();

  return (
    <div className='w-full bg-seroBlue relative overflow-hidden'>
        
        <div className='relative sm:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            
            <div className='text-3xl font-semibold text-white text-center'>
               <h2 className='leading-snug'>
                Our Expertise
               </h2>
               {pathName === '/construction-service' ? <p className='font-normal text-white text-base sm:px-[250px] mt-4 leading-relaxed'>We offer exceptional services in Consultation, Construction Project Management and Floor Construction</p> : null}
               {pathName === '/real-estate-development' ? <p className='font-normal text-white text-base sm:px-[250px] mt-4 leading-relaxed'>Our expertise in Land Acquisition, Property Management and Environmental Sustainability gives us the reputation of being a major contributor in the Sustainable development of Africa.
                </p> : null}
               {pathName === '/architectural-design' ? <p className='font-normal text-white text-base sm:px-[250px] mt-4 leading-relaxed'>Great work takes great team - and people with the focus, vision and energy to keep us moving forward. That's why our team of skilled Architects is dedicated to creating unique and functional designs that enhance the lives of those who live and work in them.
                </p> : null}
               {pathName === '/building-materials' ? <p className='font-normal text-white text-base sm:px-[250px] mt-4 leading-relaxed'>We offer exceptional services in Consultation, Construction Project Management and Floor Construction</p> : null} 
            </div>

            <div className='grid grid-cols-1 md:gap-y-20 gap-y-10 mt-20'>
            {pathName === '/construction-service' ? constructionExpertise.map(({title, description, image}, key) => (
                    <ExpertiseCard
                        key={title}
                        title={title}
                        description={description}
                        image={image}
                        isEven={key % 2 === 0}
                    />
                )) : null}

            {pathName === '/real-estate-development' ? realEstateExpertise.map(({title, description, image}, key) => (
                    <ExpertiseCard
                        key={title}
                        title={title}
                        description={description}
                        image={image}
                        isEven={key % 2 === 0}
                    />
                )) : null}

            {pathName === '/architectural-design' ? architecturalExpertise.map(({title, description, image}, key) => (
                    <ExpertiseCard
                        key={title}
                        title={title}
                        description={description}
                        image={image}
                        isEven={key % 2 === 0}
                    />
                )) : null}

            {pathName === '/building-materials' ? buildingMaterialExpertise.map(({title, description, image}, key) => (
                    <ExpertiseCard
                        key={title}
                        title={title}
                        description={description}
                        image={image}
                        isEven={key % 2 === 0}
                    />
                )) : null}
         
            </div>

        </div>
    </div>
  )
}

export default OurExpertise