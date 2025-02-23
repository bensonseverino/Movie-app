import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetails from "./MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: "https://m.media-amazon.com/images/I/71uKM+LdgFL.jpg", // Replace with a valid image URL
      rating: 8.8,
      trailerLink: "https://youtu.be/YoHD9XEInc0?si=PUuTbCmIs25uDocX", // Replace with a valid embed link
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL:
        "https://images-cdn.ubuy.co.in/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg", // Replace with a valid image URL
      rating: 8.6,
      trailerLink: "https://youtu.be/zSWdZVtXT7E?si=Vc2ccLmwIGAN6mPT", // Replace with a valid embed link
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
    <Router>
      <div className="min-h-screen bg-gray-100 ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-3xl font-bold text-center py-6">
                  Movie App
                </h1>
                <Filter
                  onTitleChange={(e) => setTitleFilter(e.target.value)}
                  onRateChange={(e) => setRateFilter(Number(e.target.value))}
                />
                <button
                  onClick={handleAddMovie}
                  className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Add Movie
                </button>
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:title"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
