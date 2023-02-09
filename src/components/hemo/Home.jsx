import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from "./HAbout"
import Test from "./testionmonal/Test"
import Hero from './hero/Hero'
import Hblog from './Hblog'
import Hprice from './Hprice'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
