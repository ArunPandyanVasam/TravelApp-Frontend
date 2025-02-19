import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Button } from "react-bootstrap";
import L from "leaflet";
import styles from "./RoutePlanner.module.css";

// Assuming MapComponent is your custom map component
import MapComponent from "../MapComponent/MapComponent";

const RoutePlanner = () => {
  const [waypoints, setWaypoints] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

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

  // Handle removing waypoints
  const handleRemoveWaypoint = (index) => {
    setWaypoints(waypoints.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.routePlanner}>
      <div className={styles.sidebar}>
        <h2>Plan Your Route</h2>
        <Button
          variant="danger"
          onClick={() => setWaypoints([])}
          className={styles.clearButton}
        >
          Clear All Waypoints
        </Button>
        <div className={styles.waypointsList}>
          <h4>Waypoints:</h4>
          {waypoints.map((wp, index) => (
            <div key={index} className={styles.waypointItem}>
              <span>
                {`Waypoint ${index + 1}: ${wp.lat.toFixed(2)}, ${wp.lng.toFixed(2)}`}
              </span>
              <Button
                variant="outline-danger"
                onClick={() => handleRemoveWaypoint(index)}
                className={styles.removeButton}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mapContainer}>
        <MapContainer center={[20, 78]} zoom={5} style={{ height: "500px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <AddWaypoint />
          {waypoints.map((wp, index) => (
            <Marker key={index} position={wp} icon={customIcon}>
              <Popup>
                <div className={styles.popupContent}>
                  <h5>Waypoint {index + 1}</h5>
                  <button onClick={() => handleRemoveWaypoint(index)} className={styles.removeBtn}>Remove Waypoint</button>
                </div>
              </Popup>
            </Marker>
          ))}
          {userLocation && <Marker position={userLocation} icon={customIcon} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default RoutePlanner;
