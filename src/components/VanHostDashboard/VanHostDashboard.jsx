import React, { useState, useEffect } from 'react';
import styles from './VanHostDashboard.module.css';

const VanHostDashboard = () => {
  const [vans, setVans] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/VanHostDashboard.json'); // Fetching data from the public folder
        if (!response.ok) {
          throw new Error('Data fetch failed');
        }
        const data = await response.json();
        setVans(data.vans);
        setReviews(data.reviews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateStats = (reviews) => {
    const totalReviews = reviews.length;
    const averageRating =
      totalReviews > 0 ? (reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(1) : 0;
    const positiveReviews = reviews.filter((review) => review.rating >= 4).length;
    const positiveFeedbackPercentage = totalReviews > 0 ? ((positiveReviews / totalReviews) * 100).toFixed(1) : 0;

    return { totalReviews, averageRating, positiveFeedbackPercentage };
  };

  const { totalReviews, averageRating, positiveFeedbackPercentage } = calculateStats(reviews);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Host Your Own Vehicle</h2>

      <div className={styles.contentWrapper}>
        {/* Left-side content */}
        <div className={styles.content}>
          <h3>Income</h3>
          <p>
            Dive into a comprehensive overview of your earnings, presented in visually stunning charts and graphs that provide insightful breakdowns of your revenue streams.
          </p>

          <div className={styles.vans}>
            <h3>Vehicles</h3>
            <p>
              Host multiple vehicles on our platform, offering users an unparalleled opportunity to embark on unforgettable journeys.
            </p>
            <ul>
              {vans.map((van) => (
                <li key={van.id}>
                  <span className={styles.vanName}>{van.name}</span>
                  <span className={styles.vanStatus}>{van.status}</span>
                  <span className={styles.vanPrice}>${van.price} / day</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.reviewsContent}>
            <h3>Reviews</h3>
            <p>
              Gain valuable insights into your van rental experience by accessing and exploring your reviews from users.
            </p>
          </div>
        </div>

        {/* Right-side card for Review Ratings */}
        <div className={styles.reviewCard}>
          <h4>Review Ratings</h4>
          <div className={styles.ratingCard}>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className={styles.ratingItem}>
                  <div>
                    <strong>{review.customer}</strong> (Rating: {review.rating} ⭐)
                  </div>
                  <p>{review.review}</p>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>

          <div className={styles.stats}>
            <h5>Statistics</h5>
            <div className={styles.statItem}>
              <strong>Total Reviews: </strong>{totalReviews}
            </div>
            <div className={styles.statItem}>
              <strong>Average Rating: </strong>{averageRating} ⭐
            </div>
            <div className={styles.statItem}>
              <strong>Positive Feedback: </strong>{positiveFeedbackPercentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanHostDashboard;
