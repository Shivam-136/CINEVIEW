import React from "react";
import movies from "../moviesJson.js/movies"
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

        {/* Hero */}

        <div className="bg-[#071226] border border-slate-800 rounded-[35px] p-12">

          <p className="text-orange-400 uppercase tracking-[8px] text-sm">
            Featured Collection
          </p>

          <h1 className="text-6xl font-black mt-6">
            CINEMATIC STORIES,
            <br />
            LIVE NOW
          </h1>

          <p className="text-slate-400 text-xl mt-6">
            Explore trending movies and save
            your favorites.
          </p>

        </div>

        {/* Movies */}

        <div className="mt-12 mb-6">
          <h2 className="text-4xl font-bold">
            Trending Movies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

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