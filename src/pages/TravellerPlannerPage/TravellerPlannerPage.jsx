import React from 'react'
import ItineraryForm from '../../components/ItineraryForm/ItineraryForm'
import SuggestedSpots from '../../components/SuggestedSpots/SuggestedSpots'
import AccommodationList from '../../components/AccommodationList/AccommodationList'
import FoodRecommendations from '../../components/FoodRecommendations/FoodRecommendations'
import FuelStationFinder from '../../components/FuelStationFinder/FuelStationFinder'

const TravellerPlannerPage = () => {
  return (
    <div>
      <ItineraryForm />
      <SuggestedSpots />
      <AccommodationList />
      <FoodRecommendations />
      <FuelStationFinder />
    </div>
  )
}

export default TravellerPlannerPage
