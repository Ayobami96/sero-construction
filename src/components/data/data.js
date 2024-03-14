import excellenceIcon from '/public/assets/images/excellence.svg';
import diligenceIcon from '/public/assets/images/diligence.svg';
import integrityIcon from '/public/assets/images/integrity.svg';
import constructionServiceImg from '/public/assets/images/construction-service-img.jpg';
import realEstate from '/public/assets/images/real-estate.jpg';
import architecturalDesignImg from '/public/assets/images/archi-design-img.jpg';
import buildingMaterial from '/public/assets/images/building-material.jpg';
import manFace from '/public/assets/images/man-face.jpeg';
import jessicaPratt from '/public/assets/images/jessica-pratt.jpg';
import contructionImg1 from '/public/assets/images/negotiations-of-two-intelligent-coworkers-success-2022-08-17-00-53-06-utc (1).jpg'
import floorConstructionImg from '/public/assets/images/floor-construction-img.jpeg'
import cpmImg from '/public/assets/images/cpm-img.jpg';
import landAcquitionImg from '/public/assets/images/land-acquisiton-img.jpg';
import projectMgtImg from '/public/assets/images/project-mgt-img.jpg';
import promiseCopy from '/public/assets/images/promise-copy.png';
import tayoCopy from '/public/assets/images/tayo-copy.png';
import courageCopy from '/public/assets/images/courage-copy.png';
import archiConsultImg from '/public/assets/images/architectural-consultation.jpg';
import archiDesignImg from '/public/assets/images/archi-design.jpg';
import brickMakingImg from '/public/assets/images/brick-making.jpg';
import cementSalesImg from '/public/assets/images/cement-sales.jpg';
import customPopDesignImg from '/public/assets/images/custom-pop-design.jpg';

import {
    HomeModernIcon,
    ChartBarIcon,
    BuildingOfficeIcon,
    RectangleGroupIcon
  } from '@heroicons/react/24/outline';


export const coreValuesData = [
    {
        title: 'Trust',
        description:  'At Sero Construction, we have a culture of honesty, psychological safety, and mutual respect which builds the trust our clients has in us.',
        icon: integrityIcon,
        
    },
    {
        title: 'Value',
        description:  'We believe in giving value by making sure all our projects and services are fit for intended use, with reasonable cost.',
        icon: diligenceIcon,
    },
    {
        title: 'Innovation',
        description:  'We think outside the box to provide unique solutions to complex issues and consistently push for better ways to serve our clients, employees and the organization',
        icon: excellenceIcon,
    },
]

export const services = [
    {
        title: 'Construction Services',
        description: 'Our experienced Construction team have the resources to handle both residential and commercial construction projects and build comfortable, affordable, smart, luxury homes with impeccable finesse.',
        image: constructionServiceImg,
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
        image: architecturalDesignImg,
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


export const team = [
    {
      title: 'Leadership',
      people: [
        {
          name: 'Promise Ogungbesan',
          role: 'Founder / CEO',
          image: { src: promiseCopy },
        },
        {
          name: 'Temitayo Odogun',
          role: 'Managing Director',
          image: { src: tayoCopy },
        },
        {
          name: 'Courage Ogungbesan',
          role: 'Chief Operations Officer',
          image: { src: courageCopy },
        },
      ],
    },
    {
      title: 'Associates',
      people: [
        {
            name: 'Promise Ogungbesan',
            role: 'Founder / CEO',
            image: { src: promiseCopy },
          },
          {
            name: 'Temitayo Odogun',
            role: 'Managing Director',
            image: { src: tayoCopy },
          },
          {
            name: 'Courage Ogungbesan',
            role: 'Chief Operations Officer',
            image: { src: courageCopy },
          },
      ],
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
      icon: HomeModernIcon,
    },
    {
      name: 'Real Estate Development',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '/real-estate-development',
      icon: ChartBarIcon,
    },
    { name: 'Architectural Designs', 
      description: "Your customers' data will be safe and secure.", 
      href: '/architectural-design', 
      icon: BuildingOfficeIcon,
     },
    {
      name: 'Building Materials',
      description: "Connect with third-party tools that you're already using.",
      href: '/building-materials',
      icon: RectangleGroupIcon,
    },
    
  ]


  export const constructionExpertise = [
    {
        title: 'Consultation',
        description: "Undestanding what our customers want so as to be able to give qaulity delivery/value is the basis of what we stand for as an organisation. We make sure to understand the perspective, desire, hopes and expectation of our customers in order to ensure compliance to quality requirements, profer professional solutions to technical issues and build a project that's fit for intended use.",
        image: contructionImg1
    },
    {
        title: 'Floor Construction',
        description: 'We provide exceptional services in interlock floor installation, Stamped Concrete floor, 3D floor and wall design, Tiling and Vinyl flooring.',
        image: floorConstructionImg
    },
    {
        title: 'Construction Project Management',
        description: 'We have the talents and resources required to successfully manage residential and commercial constructions. We help in the entire planning and delivery of construction projects.  We ensure that work is completed on time and within budget. We organise logistics, manage contractors and sub-contractors, delegate work and keep track of progress.',
        image: cpmImg
    },
  ]

  export const realEstateExpertise = [
    {
        title: 'Land Acquisition',
        description: "Unlocking Potential, Securing Success: Land acquisition is not just a step it's a strategic move. Securing prime locations for development is our forte. Through strategic negotiations and an in-depth understanding of zoning regulations we acquire land that forms the foundation of successful and impactful real estate projects",
        image: landAcquitionImg,
    },
    {
        title: 'Project Management',
        description: "Seamless Execution, Exceptional Results: Our project management prowess is the heartbeat of our success. From initial planning and design to construction and delivery, we guarantee seamless execution, meeting deadlines and exceeding expectations.",
        image: projectMgtImg
    },
    {
        title: 'Enviromental Sustainability',
        description: "Eco-Friendly Innovations, Sustainable Legacies: With an unwavering commitment to environmental responsibility, we integrate sustainable practices into our developments. From eco-friendly designs to energy-efficient solutions, our projects contribute positively to the environment.",
        image: cpmImg
    },
  ]

  export const architecturalExpertise = [
    {
        title: 'Consultation',
        description: "From Design to completion,  we'll bring your dream to reality.",
        image: archiConsultImg,
    },
    {
        title: 'Design Development',
        description: "We have the talents and softwares required to produce a trendy and high end designs for our clients.",
        image: archiDesignImg
    },
    
  ]

  export const buildingMaterialExpertise = [
    {
        title: '⁠Brick Making',
        description: "Crafting Foundations, Building Futures: Our state-of-the-art brick-making process ensures precision and consistency, delivering bricks that stand the test of time. From conventional red bricks to specialized designs, we cater to the diverse needs of your construction projects.",
        image: brickMakingImg,
    },
    {
        title: '⁠Cement Sales',
        description: "Building Strength, Ensuring Stability: Discover a range of high-grade cements that form the backbone of robust structures. Our cement products are sourced from trusted manufacturers, guaranteeing the strength and durability your projects demand.",
        image: cementSalesImg,
    },
    {
        title: '⁠Custom POP Designs',
        description: "Elevate Aesthetics, Personalize Spaces: Transform spaces with our custom Plaster of Paris (POP) designs. Our expert craftsmen bring your vision to life, creating bespoke ceilings, wall finishes, and architectural elements that add a touch of sophistication to every project.",
        image: customPopDesignImg,
    },
    
  ]