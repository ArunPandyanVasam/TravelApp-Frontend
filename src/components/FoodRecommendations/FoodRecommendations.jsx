import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./FoodRecommendations.module.css";

const FoodRecommendations = () => {
  const [foodRecommendations, setFoodRecommendations] = useState([]);

  // Fetch food recommendation data from the JSON file
  useEffect(() => {
    const fetchFoodRecommendations = async () => {
      try {
        const response = await fetch("/data/foodRecommendations.json");
        const data = await response.json();
        setFoodRecommendations(data);
      } catch (error) {
        console.error("Error fetching food recommendations data:", error);
      }
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
