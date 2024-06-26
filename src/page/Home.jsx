import React, { useEffect } from 'react'
import Hero from './Hero'
import AboutCard from '../component/AboutCard'
import ServiceComp from '../component/ServiceComp'
import OurSevice from './OurSevice'
import MoreAbout from './MoreAbout'
import Client from './Client'
import OurAchieve from './OurAcieve'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Hero />
      <AboutCard />
      <OurSevice />
      <MoreAbout />
      {/* <OurAchieve /> */}
      <Client />
    </div>
  )
}

export default Home
