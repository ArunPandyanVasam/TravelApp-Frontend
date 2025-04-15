import React, { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";
import styles from "./VehicleCard.module.css";

// Component to display each vehicle's card
const VehicleCard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the vehicles data from vehiclesLand.json using useEffect
  useEffect(() => {
    fetch("/data/vehiclesLand.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div className={styles.vehicleList}>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className={styles.vehicleCard}>
          <img src={vehicle.image} alt={vehicle.name} />
          <div className={styles.vehicleCardBody}>
            <h3 className={styles.vehicleCardTitle}>{vehicle.name}</h3>
            <p className={styles.vehicleCardDescription}>{vehicle.description}</p>
            <div className={styles.vehicleCardFooter}>
              <a href="#">More Details</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleCard;
