import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.title}`); // Navigate to the movie details page
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-900 font-bold">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
