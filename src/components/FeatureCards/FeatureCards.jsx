import React from "react";
import { FaMapMarkedAlt, FaLock, FaRegLightbulb } from "react-icons/fa"; // Import icons
import styles from "./FeatureCards.module.css"; // Import CSS for styling
import FeatureCard from "../FeatureCard/FeatureCard"; // Import the FeatureCard component

const FeatureCards = () => {
  const features = [
    {
      icon: <FaMapMarkedAlt size={50} />,
      title: "Navigation",
      description:
        "Get accurate directions and maps for your solo trips to discover new destinations.",
    },
    {
      icon: <FaLock size={50} />,
      title: "Safety",
      description:
        "Access safety tips and emergency contacts to ensure a secure journey.",
    },
    {
      icon: <FaRegLightbulb size={50} />,
      title: "Local Insights",
      description:
        "Learn about local culture, restaurants, and must-see spots during your travels.",
    },
  ];

  return (
    <div className={styles.featureCardsContainer}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureCards;
