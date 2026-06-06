import React from "react";
import movies from "../moviesJson.js/movies";
import MovieCard from "../components/MovieCard";

const HomePage = () => {

  const addToFavorites = (movie) => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find(
      (item) => item.id === movie.id
    );

    if (!exists) {
      favorites.push(movie);

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      alert("Added To Favorites");
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white px-6 py-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-end mb-8">

          <div>
            <h2 className="text-3xl font-bold">
              Trending Movies
            </h2>

            <p className="text-slate-400 mt-2">
              Browse the movies people are watching around the globe.
            </p>
          </div>

          <p className="text-slate-500 text-sm">
            Updated Daily
          </p>

        </div>

        {/* Movies Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
              addToFavorites={addToFavorites}
            />
            
          ))}

        </div>

      </div>
    </div>
  );
};

export default HomePage;