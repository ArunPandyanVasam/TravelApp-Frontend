import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureCards from '../../components/FeatureCards/FeatureCards'
import Footer from '../../components/Footer/Footer'
import MapComponent from '../../components/MapComponent/MapComponent'
import RoutePlanner from '../../components/RoutePlanner/RoutePlanner'




const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      {/* <MapComponent /> */}
      <RoutePlanner />
      <Footer />
    </div>
  )
}

export default HomePage
