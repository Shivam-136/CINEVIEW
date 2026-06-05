import React from "react";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020817] text-white pt-5 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="bg-[#071226] border border-slate-800 rounded-[35px] p-10 flex items-center justify-between">

          <div>
            <p className="text-orange-400 tracking-[8px] uppercase text-sm mb-4">
              My Collection
            </p>

            <h1 className="text-3xl font-bold mb-3">
              Your Favorites
            </h1>

            <p className="text-slate-400 ">
              A cinematic shelf of the movies you love.
            </p>
          </div>

          <button
            className="px-8 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
          >
            Discover More
          </button>

        </div>

        {/* Empty State */}
        <div className="mt-10 bg-[#071226] border border-slate-800 rounded-[35px] min-h-50 flex flex-col items-center justify-center">

          <h2 className=" mb-3 font-bold ">
            Your list is empty.
          </h2>

          <p className="text-slate-400  mb-8 text-center">
            Browse trailers and add movies to Favorites
            so they are easy to revisit.
          </p>

          <button
            onClick={() => navigate("/home")}
            className="px-5 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
          >
            Explore Movies
          </button>

        </div>

      </div>
    </div>
  );
};

export default FavoritesPage;