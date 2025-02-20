import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./FoodRecommendations.module.css";

// Sample data for food recommendations (replace with API data later)
const sampleFoodRecommendations = [
  { id: 1, name: "La Petite Boucherie", type: "French", location: "Paris, France", rating: 4.5, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Sushi Paradise", type: "Japanese", location: "Tokyo, Japan", rating: 4.8, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Taco Haven", type: "Mexican", location: "Los Angeles, USA", rating: 4.3, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Bella Italia", type: "Italian", location: "Rome, Italy", rating: 4.6, image: "https://via.placeholder.com/150" },
];

const FoodRecommendations = () => {
  const [foodRecommendations, setFoodRecommendations] = useState([]);

  // Fetch food recommendation data (using sample data for now)
  useEffect(() => {
    const fetchFoodRecommendations = async () => {
      // Replace with actual API call:
      // const response = await fetch('your-api-url');
      // const data = await response.json();
      setFoodRecommendations(sampleFoodRecommendations);
    };

    fetchFoodRecommendations();
  }, []);

  return (
    <div className={styles.foodRecommendationsContainer}>
      <h2>Food Recommendations</h2>
      <Row>
        {foodRecommendations.map((food) => (
          <Col key={food.id} md={3} className="mb-4">
            <Card className={styles.foodCard}>
              <Card.Img variant="top" src={food.image} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.type}</Card.Text>
                <Card.Text>{food.location}</Card.Text>
                <Card.Text>Rating: {food.rating}</Card.Text>
                <Button variant="primary" href="#">See More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FoodRecommendations;
