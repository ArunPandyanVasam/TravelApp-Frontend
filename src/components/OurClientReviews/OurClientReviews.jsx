import React, { useState, useEffect } from 'react';
import styles from './OurClientReviews.module.css';

const OurClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/data/reviews.json'); // Fetching data from the public folder
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.reviewsWrapper}>
      <h2 className={styles.title}>Our Client Reviews</h2>
      <div className={styles.cardsContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <h4 className={styles.clientName}>{review.name}</h4>
              <div className={styles.rating}>Rating: {review.rating} ⭐</div>
            </div>
            <div className={styles.reviewContent}>
              <div className={styles.reviewLikes}>
                <strong>What They Liked:</strong>
                <p>{review.likes}</p>
              </div>
              <div className={styles.reviewImprovements}>
                <strong>What Needs Improvement:</strong>
                <p>{review.improvement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClientReviews;
