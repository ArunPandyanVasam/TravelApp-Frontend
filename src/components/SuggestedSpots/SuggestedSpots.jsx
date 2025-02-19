import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./SuggestedSpots.module.css";

// Sample data for suggested spots (you can replace this with API data)
const sampleSuggestedSpots = [
  { id: 1, name: "Mount Everest", description: "The highest mountain in the world", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Great Wall of China", description: "An ancient wall stretching across China", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Eiffel Tower", description: "A wrought-iron lattice tower in Paris", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Santorini", description: "A beautiful island in Greece known for its sunsets", image: "https://via.placeholder.com/150" },
];

const SuggestedSpots = () => {
  const [spots, setSpots] = useState([]);

  // Fetch suggested spots from an API (using sample data for now)
  useEffect(() => {
    const fetchSuggestedSpots = async () => {
      // Here, you can replace this with an API call like:
      // const response = await fetch('your-api-url');
      // const data = await response.json();
      setSpots(sampleSuggestedSpots);
    };

    fetchSuggestedSpots();
  }, []);

  return (
    <div className={styles.suggestedSpotsContainer}>
      <h2>Suggested Spots</h2>
      <Row>
        {spots.map((spot) => (
          <Col key={spot.id} md={3} className="mb-4">
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
