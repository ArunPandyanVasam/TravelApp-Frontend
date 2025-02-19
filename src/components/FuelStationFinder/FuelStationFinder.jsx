import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "react-bootstrap";
import L from "leaflet";
import styles from "./FuelStationFinder.module.css";

// Assuming the Google Places API is set up with your API key
const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY";

const FuelStationFinder = () => {
  const [stations, setStations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  // Custom marker icon for fuel stations
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Change this to a fuel station icon
    iconSize: [30, 30],
  });

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          fetchFuelStations(latitude, longitude);
        },
        (error) => console.error("Error getting user location:", error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  // Fetch nearby fuel stations using Google Places API
  const fetchFuelStations = async (lat, lng) => {
    const radius = 5000; // Search within 5 km radius
    const type = "gas_station"; // Google Places API type for fuel stations
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${GOOGLE_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setStations(data.results);
      } else {
        console.error("No fuel stations found.");
      }
    } catch (error) {
      console.error("Error fetching fuel stations:", error);
    }
  };

  return (
    <div className={styles.fuelStationFinder}>
      <h2>Nearby Fuel/EV Stations</h2>
      <div className={styles.mapContainer}>
        <MapContainer center={userLocation || [20, 78]} zoom={12} style={{ height: "500px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {userLocation && (
            <Marker position={userLocation} icon={customIcon}>
              <Popup>You are here</Popup>
            </Marker>
          )}
          {stations.map((station, index) => (
            <Marker key={index} position={[station.geometry.location.lat, station.geometry.location.lng]} icon={customIcon}>
              <Popup>
                <strong>{station.name}</strong>
                <br />
                {station.vicinity}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <Button variant="primary" onClick={() => fetchFuelStations(userLocation[0], userLocation[1])}>
        Refresh Stations
      </Button>
    </div>
  );
};

export default FuelStationFinder;
