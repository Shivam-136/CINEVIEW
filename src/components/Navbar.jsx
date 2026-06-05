import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020817]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div
          onClick={() => navigate("/home")}
          className="cursor-pointer flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-linear-to-r  from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
            🎬
          </div>
                                       
          <div>
            <h1 className="text-white font-bold text-xl">
              CINEVIEW
            </h1>
            <p className="text-slate-400 text-xs">
              Movie Explorer
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <NavLink to="/home">Home</NavLink>

          <NavLink to="/favorites">
            Favorites
          </NavLink>

          <button
            onClick={handleProfile}
            className="hover:text-orange-400 transition"
          >
            Profile
          </button>
        </div>

        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-xl bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
