import Image from 'next/image';
import workersImg from '/public/assets/images/architect.png'
import Link from 'next/link';

const About = () => {
  return (
    <div className='w-full bg-white'>
        <div className='relative flex flex-col-reverse gap-y-8 items-center lg:flex-row md:gap-y-8 lg:mx-auto lg:px-24 lg:py-24 py-12 px-4'>
            <div className='relative block basis-1/2'>
                <Image src={workersImg} width='600' height='600' alt="workers-img" className='rounded-xl animate__animated animate__fadeInUp'  />
            </div>

            <div className='flex flex-col basis-1/2 p-4 lg:px-6 px-2'>
                <span className='capitalize text-slate-500 font-medium text-lg animate__animated animate__slideInUp'>Our Company</span>
                <p className='font-semibold text-seroBlue text-3xl mt-2 animate__animated animate__slideInUp'>Sero Construction Building Your Dream Home</p>
                <div className='space-y-4 mt-3'>
                    <p className='text-gray-500 font-normal leading-relaxed text-base animate__animated animate__slideInUp'>Sero Construction is a multifaceted commercial company, with specialization in
                    Real Estate, Residential and Commercial construction, Design and Architectural services, building materials and Investment Consultancy.</p>
                    <p className='text-gray-500 font-normal leading-relaxed text-base animate__animated animate__slideInUp'>The company is focused
                    on innovative and high-quality strategy in every project composition and
                    service professionalism through an efficient management system.</p>
                </div>
                <div className='mt-5'>
                    <Link
                    href='/about'
                    type="button"
                    className="animate__animated animate__slideInUp hvr-sweep-to-top"
                    >
                    About Us
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About