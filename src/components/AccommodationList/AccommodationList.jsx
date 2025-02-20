import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./AccommodationList.module.css";

const AccommodationList = () => {
  const [accommodations, setAccommodations] = useState([]);

  // Fetch accommodation data from the public folder
  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch("/data/accommodations.json");
        const data = await response.json();
        setAccommodations(data);
      } catch (error) {
        console.error("Error fetching accommodations data:", error);
      }
    };

    fetchAccommodations();
  }, []);

  return (
    <div className={styles.accommodationListContainer}>
      <h2>Accommodation Options</h2>
      <Row>
        {accommodations.map((accommodation) => (
          <Col key={accommodation.id} md={3} className="mb-4">
            <Card className={styles.accommodationCard}>
              <Card.Img variant="top" src={accommodation.image} />
              <Card.Body>
                <Card.Title>{accommodation.name}</Card.Title>
                <Card.Text>{accommodation.type}</Card.Text>
                <Card.Text>{accommodation.location}</Card.Text>
                <Card.Text>{accommodation.price}</Card.Text>
                <Button variant="primary" href="#">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AccommodationList;
