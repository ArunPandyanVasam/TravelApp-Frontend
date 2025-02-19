import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulating fetching images (you can replace this with your API/JSON)
    const imageData = [
      { src: "assets/hero/soloTravel1.jpg", alt: "Adventure in the mountains" },
      { src: "assets/hero/soloTravel2.jpg", alt: "Exploring the beach" },
      { src: "assets/hero/soloTravel3.jpg", alt: "City exploration" },
    ];
    setImages(imageData);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <Carousel fade interval={5000} controls={false} indicators={false}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              style={{ height: "100vh", objectFit: "cover" }}
              loading="lazy" // Lazy loading for better performance
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Hero Content Overlay */}
      <div className={styles.heroContent}>
        <h1>Explore the World, One Trip at a Time</h1>
        <p>Your solo adventure awaits</p>
        <Button variant="warning" className={styles.ctaButton}>
          Start Your Journey
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
