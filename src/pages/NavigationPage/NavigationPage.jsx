import React from 'react'
import OfflineMapToggle from '../../components/OfflineMapToggle/OfflineMapToggle'
import MapComponent from '../../components/MapComponent/MapComponent'
import RoutePlanner from '../../components/RoutePlanner/RoutePlanner'
import FuelStationFinder from '../../components/FuelStationFinder/FuelStationFinder'

const NavigationPage = () => {
  return (
    <div>
      <MapComponent />
      <RoutePlanner />
      <FuelStationFinder />
      <OfflineMapToggle />
    </div>
  )
}

export default NavigationPage
