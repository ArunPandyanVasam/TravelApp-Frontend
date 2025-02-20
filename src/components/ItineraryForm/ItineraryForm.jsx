import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import styles from "./ItineraryForm.module.css";

const ItineraryForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      destination,
      startDate,
      endDate,
    };
    console.log("Form submitted with data:", formData);
    // You can add your save logic or further processing here
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create Your Itinerary</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="destination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className={styles.submitBtn}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ItineraryForm;
