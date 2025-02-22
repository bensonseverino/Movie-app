import React from "react";

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div style={styles.card}>
      <img src={posterURL} alt={title} style={styles.image} />
      <div style={styles.details}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
        <p style={styles.rating}>Rating: {rating}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    width: "300px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  details: {
    padding: "10px",
  },
  title: {
    fontSize: "20px",
    margin: "0 0 10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  rating: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default MovieCard;
