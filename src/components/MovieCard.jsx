import React from "react";

const MovieCard = ({ movie, addToFavorites }) => {
  return (
    <div className="bg-[#071226] border border-slate-800 rounded-3xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[380px] object-cover"
      />

      <div className="p-4">

        <h2 className="text-lg font-bold">
          {movie.title}
        </h2>

        <p className="text-slate-400 mt-2">
          ⭐ {movie.vote_average}
        </p>

        <p className="text-slate-500 text-sm mt-1">
          {movie.release_date}
        </p>

        <button
          onClick={() => addToFavorites(movie)}
          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold"
        >
          Add To Favorites
        </button>

      </div>
    </div>
  );
};

export default MovieCard;