import React from 'react'
import HeroSection from '../Components/HeroSection'
import ServicesSection from '../Components/ServicesSection'
import AboutSection from '../Components/AboutSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import ProcessAndFaq from '../Components/ProcessAndFaq'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <ProcessAndFaq/>
    </div>
  )
}

export default Home