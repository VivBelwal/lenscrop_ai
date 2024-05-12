import React from 'react'
import AboutUs from '../../componets/AboutUs'
import Hero from './Home_Components/Hero'
import Service from '../../componets/Service'
import TruAI from './Home_Components/TruAI'
import BytheNumbers from './Home_Components/BytheNumbers'
import RightsReserved from '../../componets/RightsReserved'
import AmazingClients from './Home_Components/AmazingClients'
import Footer from '../../componets/Footer'
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Service />
      <TruAI />
      <AmazingClients />
      <BytheNumbers />
      <Footer />
      <RightsReserved />
    </div>
  )
}

export default Home
