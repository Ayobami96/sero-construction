import excellenceIcon from '/public/assets/images/excellence.svg';
import diligenceIcon from '/public/assets/images/diligence.svg';
import integrityIcon from '/public/assets/images/integrity.svg';
import builderImg from '/public/assets/images/builder-at-work.jpg';
import realEstate from '/public/assets/images/real-estate.jpg';
import architecturalDesign from '/public/assets/images/skyline-design.jpg';
import buildingMaterial from '/public/assets/images/building-material.jpg';
import manFace from '/public/assets/images/man-face.jpeg';
import jessicaPratt from '/public/assets/images/jessica-pratt.jpg';
import contructionImg1 from '/public/assets/images/negotiations-of-two-intelligent-coworkers-success-2022-08-17-00-53-06-utc (1).jpg'
import contructionImg2 from '/public/assets/images/ambitious-field-engineer-working-on-his-laptop-nea-2021-09-03-21-03-03-utc (1).jpg'
import contructionImg3 from '/public/assets/images/professional-engineers-with-helmets-work-to-mainta-2022-10-27-04-45-58-utc (1).jpg'
import {
    ChartBarIcon,
    CursorArrowRaysIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
  } from '@heroicons/react/24/outline'


export const coreValuesData = [
    {
        title: 'Excellence',
        description:  'At Sero Construction, we have a culture of honesty, psychological safety, and mutual respect which builds the trust our clients has in us.',
        icon: excellenceIcon,
    },
    {
        title: 'Deliigence',
        description:  'We believe in giving value by making sure all our projects and services are fit for intended use, with reasonable cost.',
        icon: diligenceIcon,
    },
    {
        title: 'Integrity',
        description:  'We think outside the box to provide unique solutions to complex issues and consistently push for better ways to serve our clients, employees and the organization',
        icon: integrityIcon,
    },
]

export const services = [
    {
        title: 'Construction Services',
        description: 'Our experienced Construction team have the resources to handle both residential and commercial construction projects and build comfortable, affordable, smart, luxury homes with impeccable finesse.',
        image: builderImg,
        href: '/construction-service'
    },
    {
        title: 'Real Estate Development',
        description: 'We offer custom plots, finished home, off-plan investments in a simple, secure and profitable way. We develop the standard of properties with quality management and ensure customer’s satisfaction.',
        image: realEstate,
        href: '/real-estate-development'
    },
    {
        title: 'Architectural Designs',
        description: 'We offer professional services in interior & exterior designing.',
        image: architecturalDesign,
        href: '/architectural-design'
    },
    {
        title: 'Building Materials',
        description: 'We supply and sell the essential products used for building construction such as; Granite, Sharp sand, Cement, Red bricks & concrete bricks, iron rod and many more.',
        image: buildingMaterial,
        href: '/building-materials'
    },
]

export const testimonials = [
    {
        name: 'Ryan Daniels',
        role: 'Accountant',
        comment: 'Sero Construction provides top-notch service all day, everyday. Looking forward to doing business with them again.',
        image: manFace,
    },
    {
        name: 'Jessica Pratt',
        role: 'Lawyer',
        comment: 'Sero Construction provides top-notch service all day, everyday. Looking forward to doing business with them again.',
        image: jessicaPratt,
    },
    {
        name: 'Tom Reddington',
        role: 'Don',
        comment: 'Sero Construction provides top-notch service all day, everyday. Looking forward to doing business with them again.',
        image: manFace,
    }
]


export const teamMember = [
    {
        name: 'Promise O. Ogungbesan',
        role: 'Founder / CEO',
        image: 'https://images.pexels.com/photos/6050404/pexels-photo-6050404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        linkedinHref: '/constrction-service',
        instagramHref: '/constrction-service',
        twitterHref: '/constrction-service'
    },
    {
        name: 'Temitayo Odogun',
        role: 'Managing Director',
        image: 'https://images.pexels.com/photos/6050404/pexels-photo-6050404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        linkedinHref: '/constrction-service',
        instagramHref: '/constrction-service',
        twitterHref: '/constrction-service'
    },
    {
        name: 'Courage Ogungbesan',
        role: 'Chief Operations Officer',
        image: 'https://images.pexels.com/photos/6050404/pexels-photo-6050404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        linkedinHref: '/constrction-service',
        instagramHref: '/constrction-service',
        twitterHref: '/constrction-service'
    },
    {
        name: 'Moses Adewale',
        role: 'Chief Marketing Officer',
        image: 'https://images.pexels.com/photos/6050404/pexels-photo-6050404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        linkedinHref: '/constrction-service',
        instagramHref: '/constrction-service',
        twitterHref: '/constrction-service'
    },
]

export const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "Competently recaptiualize timely bandwidth before extensive channels. Synergistically productize an expanded array of.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "Competently recaptiualize timely bandwidth before extensive channels. Synergistically productize an expanded array of.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "Competently recaptiualize timely bandwidth before extensive channels. Synergistically productize an expanded array of.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "Competently recaptiualize timely bandwidth before extensive channels. Synergistically productize an expanded array of.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "Competently recaptiualize timely bandwidth before extensive channels. Synergistically productize an expanded array of.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "Competently recaptiualize timely bandwidth before extensive channels. Synergistically productize an expanded array of.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "Competently recaptiualize timely bandwidth before extensive channels. Synergistically productize an expanded array of.",
    },
]

export const navServices = [
    {
      name: 'Construction Services',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '/construction-service',
      icon: ChartBarIcon,
    },
    {
      name: 'Real Estate Development',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '/real-estate-development',
      icon: CursorArrowRaysIcon,
    },
    { name: 'Architectural Designs', 
      description: "Your customers' data will be safe and secure.", 
      href: '/architectural-design', 
      icon: ShieldCheckIcon },
    {
      name: 'Building Materials',
      description: "Connect with third-party tools that you're already using.",
      href: '/building-materials',
      icon: Squares2X2Icon,
    },
    
  ]


  export const constructionExpertise = [
    {
        title: 'Managing Bid and Negotiating Contracts',
        description: 'Monotonectally leverage existing next-generation schemas whereas fully researched results. Rapidiously architect accurate best practices before visionary human capital. Objectively envisioneer out-of-the-box vortals whereas business internal or "organic" sources. Intrinsicly procrastinate.',
        image: contructionImg1
    },
    {
        title: 'Construction and Field Administration',
        description: 'Monotonectally leverage existing next-generation schemas whereas fully researched results. Rapidiously architect accurate best practices before visionary human capital. Objectively envisioneer out-of-the-box vortals whereas business internal or "organic" sources. Intrinsicly procrastinate.',
        image: contructionImg2
    },
    {
        title: 'Commissioning and Maintenance of Operations ',
        description: 'Monotonectally leverage existing next-generation schemas whereas fully researched results. Rapidiously architect accurate best practices before visionary human capital. Objectively envisioneer out-of-the-box vortals whereas business internal or "organic" sources. Intrinsicly procrastinate.',
        image: contructionImg3
    },
  ]