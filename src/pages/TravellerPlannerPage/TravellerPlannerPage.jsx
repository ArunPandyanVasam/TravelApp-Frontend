import React from 'react'
import ItineraryForm from '../../components/ItineraryForm/ItineraryForm'
import SuggestedSpots from '../../components/SuggestedSpots/SuggestedSpots'
import AccommodationList from '../../components/AccommodationList/AccommodationList'

const TravellerPlannerPage = () => {
  return (
    <div>
      <ItineraryForm />
      <SuggestedSpots />
      <AccommodationList />
    </div>
  )
}

export default TravellerPlannerPage
