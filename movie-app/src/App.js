import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: "https://m.media-amazon.com/images/I/71uKM+LdgFL.jpg", // Replace with a valid image URL
      rating: 8.8,
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL:
        "https://images-cdn.ubuy.co.in/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg", // Replace with a valid image URL
      rating: 8.6,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const handleAddMovie = () => {
    const newMovie = {
      title: "New Movie",
      description: "This is a new movie added by the user.",
      posterURL: "https://example.com/new-movie.jpg", // Replace with a valid image URL
      rating: 7.5,
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Movie App</h1>
      <Filter
        onTitleChange={(e) => setTitleFilter(e.target.value)}
        onRateChange={(e) => setRateFilter(Number(e.target.value))}
      />
      <button onClick={handleAddMovie} style={styles.button}>
        Add Movie
      </button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

const styles = {
  app: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    marginBottom: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default App;
