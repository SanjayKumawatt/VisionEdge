import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutHero from '../Components/AboutHero'
import WhoWeAre from '../Components/WhoWeAre'
import PersonalizedApproach from '../Components/PersonalizedApproach'
import SupplyChainSection from '../Components/SupplyChainSection'

const About = () => {
  return (
    <div>
        <AboutHero/>
        <WhoWeAre/>
        <PersonalizedApproach/>
        <SupplyChainSection/>
    </div>
  )
}

export default About