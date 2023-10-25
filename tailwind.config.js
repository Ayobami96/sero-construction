module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        heroBanner: "url('/assets/images/hero-banner.png')",
        aboutHero: "url('/assets/images/about-hero.jpeg')",
        ourGoal: "url('/assets/images/our-goal.jpg')",
        ourMission: "url('/assets/images/our-vision.jpeg')",
        contactHero: "url('/assets/images/contact-hero.jpeg')",
        constructionHero: "url('/assets/images/construction-hero.jpeg')",
        realEstateHero: "url('/assets/images/real-estate-hero.jpeg')",
        architecturalHero: "url('/assets/images/architecture-hero.jpeg')",
        buildingMaterialHero: "url('/assets/images/building-materials.jpeg')",
        circleBg: "url('/assets/images/circle-bg.svg')",
        patternBg: "url('/assets/images/footer-bg-pattern.svg')",
      },
      colors: {
        seroBlue: '#1A1A51',
      },
    },
  },
  plugins: [],
}
