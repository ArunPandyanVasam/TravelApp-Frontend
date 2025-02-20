import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./SuggestedSpots.module.css";

const SuggestedSpots = () => {
  const [spots, setSpots] = useState([]);

  // Fetch suggested spots from the public folder
  useEffect(() => {
    const fetchSuggestedSpots = async () => {
      try {
        const response = await fetch("/data/suggestedSpots.json");
        const data = await response.json();
        setSpots(data);
      } catch (error) {
        console.error("Error fetching spots data:", error);
      }
    };

    fetchSuggestedSpots();
  }, []);

  return (
    <div className={styles.suggestedSpotsContainer}>
      <h2>Suggested Spots</h2>
      <Row>
        {spots.map((spot) => (
          <Col key={spot.id} md={3} sm={6} xs={12} className="mb-4">
            <Card className={styles.spotCard}>
              <Card.Img variant="top" src={spot.image} />
              <Card.Body>
                <Card.Title>{spot.name}</Card.Title>
                <Card.Text>{spot.description}</Card.Text>
                <Button variant="primary" href="#">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SuggestedSpots;
