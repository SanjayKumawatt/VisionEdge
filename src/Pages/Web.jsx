import React from 'react'
import WebDevHero from '../Components/WebDevHero'
import WebDevServicesAndProcess from '../Components/WebDevServicesAndProcess'
import WhoWeAre from '../Components/WhoWeAre'
import WebDevCompanySection from '../Components/WebDevCompanySection'

const Web = () => {
  return (
    <div>
        <WebDevHero/>
        <WebDevCompanySection/>
        <WebDevServicesAndProcess/>
        <WhoWeAre/>
    </div>
  )
}

export default Web