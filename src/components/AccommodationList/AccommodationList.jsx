import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./AccommodationList.module.css";

// Sample data for accommodations (replace with API data later)
const sampleAccommodations = [
  { id: 1, name: "Hotel Sunrise", type: "Hotel", location: "Paris, France", price: "$120 per night", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Mountain View Hostel", type: "Hostel", location: "Swiss Alps, Switzerland", price: "$40 per night", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Eco Camping", type: "Camping", location: "Yosemite National Park, USA", price: "$30 per night", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Beachside Resort", type: "Hotel", location: "Bali, Indonesia", price: "$150 per night", image: "https://via.placeholder.com/150" },
];

const AccommodationList = () => {
  const [accommodations, setAccommodations] = useState([]);

  // Fetch accommodation data (using sample data for now)
  useEffect(() => {
    const fetchAccommodations = async () => {
      // Replace with actual API call:
      // const response = await fetch('your-api-url');
      // const data = await response.json();
      setAccommodations(sampleAccommodations);
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
