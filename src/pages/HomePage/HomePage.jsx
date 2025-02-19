import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureCards from '../../components/FeatureCards/FeatureCards'
import Footer from '../../components/Footer/Footer'




const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <Footer />
    </div>
  )
}

export default HomePage
