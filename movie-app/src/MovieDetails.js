import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { title } = useParams(); // Get the movie title from the URL
  const navigate = useNavigate(); // Hook for navigation

  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Back to Home
      </button>
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full md:w-1/3 h-auto rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{movie.description}</p>
          <p className="text-gray-900 font-bold mb-4">Rating: {movie.rating}</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={movie.trailerLink}
              title={movie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
