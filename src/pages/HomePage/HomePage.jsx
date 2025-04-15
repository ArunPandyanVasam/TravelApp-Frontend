import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeatureCards from '../../components/FeatureCards/FeatureCards'
import MapComponent from '../../components/MapComponent/MapComponent'
import VanHostDashboard from '../../components/VanHostDashboard/VanHostDashboard'
import OurClientReviews from '../../components/OurClientReviews/OurClientReviews'
import VehicleCard from '../../components/VehicleCard/VehicleCard'




const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureCards />
      <VanHostDashboard />
      <OurClientReviews />
      {/* <MapComponent /> */}
      <VehicleCard />
    </div>
  )
}

export default HomePage
