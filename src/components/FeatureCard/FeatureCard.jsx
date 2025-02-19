import React from "react";
import styles from "./FeatureCard.module.css"; // Import the CSS module

// FeatureCard component that accepts props (icon, title, description)
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
