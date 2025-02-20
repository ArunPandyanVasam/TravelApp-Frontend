import React, { useState } from "react";
import { Button, Spinner, Alert } from "react-bootstrap";
import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./EmergencyButton.module.css";

const EmergencyButton = () => {
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSOSClick = () => {
    setLoading(true);
    setAlertMessage(null);

    if (!navigator.geolocation) {
      setLoading(false);
      setAlertMessage("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLoading(false);
        setAlertMessage(`SOS Alert Sent! Location: ${latitude}, ${longitude}`);
        
        // TODO: Send the location to emergency services API
        console.log("SOS Alert Sent! User's Location:", { latitude, longitude });
      },
      (error) => {
        setLoading(false);
        setAlertMessage("Failed to get location. Please enable GPS.");
        console.error("Geolocation Error:", error);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className={styles.sosContainer}>
      {alertMessage && <Alert variant="danger">{alertMessage}</Alert>}
      
      <Button className={styles.sosButton} onClick={handleSOSClick} disabled={loading}>
        {loading ? <Spinner animation="border" size="sm" /> : <FaExclamationTriangle size={24} />}
        {loading ? " Sending SOS..." : "Send SOS Alert"}
      </Button>
    </div>
  );
};

export default EmergencyButton;
