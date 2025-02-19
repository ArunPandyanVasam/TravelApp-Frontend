import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaTimes } from "react-icons/fa";  // To use for the "Remove Waypoint" button
import styles from "./MapComponent.module.css";

const MapComponent = () => {
  const [waypoints, setWaypoints] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [route, setRoute] = useState(null);

  // Custom marker icon to fix Leaflet's default icon issue
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
  });

  // Function to add waypoints on map click
  const AddWaypoint = () => {
    useMapEvents({
      click(e) {
        setWaypoints([...waypoints, e.latlng]);
      },
    });
    return null;
  };

  // Get real-time user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => console.error("Geolocation error:", error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  // Fetch optimized route from Google Maps API
  useEffect(() => {
    const fetchRoute = async () => {
      if (waypoints.length < 2) return;

      const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual API key
      const origin = `${waypoints[0].lat},${waypoints[0].lng}`;
      const destination = `${waypoints[waypoints.length - 1].lat},${waypoints[waypoints.length - 1].lng}`;
      const waypointsStr = waypoints.slice(1, -1).map(wp => `${wp.lat},${wp.lng}`).join("|");

      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&waypoints=${waypointsStr}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.routes.length > 0) {
          const points = data.routes[0].legs.flatMap(leg => leg.steps.map(step => ({
            lat: step.end_location.lat,
            lng: step.end_location.lng,
          })));
          setRoute(points);
        } else {
          console.error("No route found.");
          alert("No route found. Please adjust the waypoints.");
        }
      } catch (error) {
        console.error("Error fetching route:", error);
        alert("Error fetching the route. Please try again later.");
      }
    };
    fetchRoute();
  }, [waypoints]);

  // Handle removing waypoints
  const handleRemoveWaypoint = (index) => {
    setWaypoints(waypoints.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={[20, 78]} zoom={5} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddWaypoint />
        {waypoints.map((wp, index) => (
          <Marker key={index} position={wp} icon={customIcon}>
            <Popup>
              <div className={styles.popupContent}>
                <p>Waypoint {index + 1}</p>
                <button onClick={() => handleRemoveWaypoint(index)} className={styles.removeBtn}>
                  <FaTimes />
                  Remove Waypoint
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
        {userLocation && <Marker position={userLocation} icon={customIcon} />}
        {route && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
