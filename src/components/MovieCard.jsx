import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, addToFavorites }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="bg-[#071226] border border-slate-800 rounded-2xl overflow-hidden hover:scale-105 duration-300 cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-65 object-cover"
      />

      <div className="p-3">
        <h2 className="text-sm font-bold line-clamp-2 min-h-10">
          {movie.title}
        </h2>

        <p className="text-yellow-400 text-sm mt-2">
          ⭐ {movie.vote_average}
        </p>

        <p className="text-slate-500 text-xs mt-1">
          {movie.release_date}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation(); // card click ko rokega
            addToFavorites(movie);
          }}
          className="w-full mt-3 py-2 rounded-lg bg-linear-to-r from-orange-500 to-red-500 text-white text-sm font-semibold hover:opacity-90"
        >
          Add To Favorites
        </button>
      </div>
    </div>
  );
};

export default MovieCard;