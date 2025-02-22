import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div style={styles.list}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default MovieList;
