import React from 'react'
import SuggestedSpots from '../../components/SuggestedSpots/SuggestedSpots'
import AccommodationList from '../../components/AccommodationList/AccommodationList'
import FoodRecommendations from '../../components/FoodRecommendations/FoodRecommendations'
import FuelStationFinder from '../../components/FuelStationFinder/FuelStationFinder'

const TravellerPlannerPage = () => {
  return (
    <div>
      <SuggestedSpots />
      <AccommodationList />
      <FoodRecommendations />
      <FuelStationFinder />
    </div>
  )
}

export default TravellerPlannerPage
