import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureCards from '../../components/FeatureCards/FeatureCards'
import Footer from '../../components/Footer/Footer'
import MapComponent from '../../components/MapComponent/MapComponent'
import RoutePlanner from '../../components/RoutePlanner/RoutePlanner'
import FuelStationFinder from '../../components/FuelStationFinder/FuelStationFinder'




const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <MapComponent />
      <RoutePlanner />
      <FuelStationFinder />
      <Footer />
    </div>
  )
}

export default HomePage
