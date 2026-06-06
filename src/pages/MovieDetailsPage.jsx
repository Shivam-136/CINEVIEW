import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "../moviesJson.js/movies";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(
    (item) => String(item.id) === String(id)
  );

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex justify-center items-center">
        <h1 className="text-4xl font-bold">
          Movie Not Found
        </h1>
      </div>
    );
  }

  return (
<div className="min-h-screen bg-[#020817] text-white py-6 px-4">

  <div className="max-w-5xl mx-auto">

    <button
      onClick={() => navigate(-1)}
      className="mb-6 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
    >
      ← Back
    </button>

    <div className="grid md:grid-cols-2 gap-8 items-start">

      {/* Poster */}
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-65 rounded-2xl shadow-lg"
        />
      </div>

      {/* Details */}
      <div>

        <h1 className="text-4xl font-bold mb-3">
          {movie.title}
        </h1>

        <div className="flex gap-3 mb-5">

          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
            ⭐ {movie.vote_average}
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full text-sm">
            {movie.release_date}
          </span>

        </div>

        <h2 className="text-xl font-semibold mb-2">
          Overview
        </h2>

        <p className="text-slate-300 leading-7 text-sm">
          {movie.overview}
        </p>

      </div>

    </div>

  </div>
</div>
  );
  
};

export default MovieDetailsPage;