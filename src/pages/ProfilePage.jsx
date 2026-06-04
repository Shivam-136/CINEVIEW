      import React from "react";
      import { useNavigate } from "react-router-dom";
      import { FaHeart,FaClock,FaFire,FaMoon,FaBell,FaSave,FaFilm,FaGift, FaSignOutAlt,} from "react-icons/fa";

      const ProfilePage = () => {
        const navigate = useNavigate();

        const user = JSON.parse(localStorage.getItem("user"));

        const handleLogout = () => {
          localStorage.removeItem("isLoggedIn");
          navigate("/");
        };

        return (
          <div className="min-h-screen bg-[#020817] text-white pt-10 px-6 pb-10">
            <div className="max-w-6xl mx-auto">

              {/* Header */}
              <div className="  bg-[#071226] border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-linear-to-r from-orange-500 to-red-500 flex items-center justify-center text-4xl font-bold shadow-lg">
                    {user?.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <div>
                    <p className="text-orange-400 uppercase tracking-[5px] text-sm">
                      Welcome Back
                    </p>

                    <h1 className="text-5xl font-bold mt-2">
                      {user?.name}
                    </h1>

                    <p className="text-slate-400">
                      Member since 2026
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="px-8 py-3 rounded-2xl bg-linear-to-r from-pink-500 to-red-500 font-semibold hover:scale-105 transition"
                >
                  Sign Out
                </button>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div className="bg-[#071226] border border-slate-800 rounded-3xl p-6 flex justify-between items-center">
                  <div>
                    <p className="text-slate-400 uppercase tracking-[4px] text-xs">
                      Favorites Saved
                    </p>

                    <h2 className="text-5xl font-bold mt-2">0</h2>

                    <p className="text-slate-400 mt-2">
                      Movies in your collection
                    </p>
                  </div>

                  <FaHeart className="text-pink-500 text-5xl" />
                </div>

                <div className="bg-[#071226] border border-slate-800 rounded-3xl p-6 flex justify-between items-center">
                  <div>
                    <p className="text-slate-400 uppercase tracking-[4px] text-xs">
                      Time Spent
                    </p>

                    <h2 className="text-5xl font-bold mt-2">
                      +4h
                    </h2>

                    <p className="text-slate-400 mt-2">
                      Watching trailers
                    </p>
                  </div>

                  <FaClock className="text-purple-400 text-5xl" />
                </div>

                <div className="bg-[#071226] border border-slate-800 rounded-3xl p-6 flex justify-between items-center">
                  <div>
                    <p className="text-slate-400 uppercase tracking-[4px] text-xs">
                      Streak
                    </p>

                    <h2 className="text-5xl font-bold mt-2">
                      7 Days
                    </h2>

                    <p className="text-slate-400 mt-2">
                      Keep exploring!
                    </p>
                  </div>

                  <FaFire className="text-orange-500 text-5xl" />
                </div>

              </div>

              {/* Info + Preferences */}
              <div className="grid lg:grid-cols-2 gap-8 mt-8">

                {/* Account Info */}
                <div className="bg-[#071226] border border-slate-800 rounded-3xl p-8">
                  <h2 className="text-3xl font-bold mb-8">
                    Account Information
                  </h2>

                  <div className="space-y-5">

                    <div className="bg-[#0b1b36] rounded-2xl p-5">
                      <p className="text-slate-500 uppercase tracking-[4px] text-xs">
                        Full Name
                      </p>

                      <h3 className="text-xl font-semibold mt-3">
                        {user?.name}
                      </h3>
                    </div>

                    <div className="bg-[#0b1b36] rounded-2xl p-5">
                      <p className="text-slate-500 uppercase tracking-[4px] text-xs">
                        Email Address
                      </p>

                      <h3 className="text-xl font-semibold mt-3">
                        {user?.email}
                      </h3>
                    </div>

                    <div className="bg-[#0b1b36] rounded-2xl p-5">
                      <p className="text-slate-500 uppercase tracking-[4px] text-xs">
                        Account Status
                      </p>

                      <span className="inline-block mt-3 px-4 py-2 rounded-full bg-green-500/20 text-green-400">
                        ✓ Active
                      </span>
                    </div>

                  </div>
                </div>

                {/* Preferences */}
                <div className="bg-[#071226] border border-slate-800 rounded-3xl p-8">
                  <h2 className="text-3xl font-bold mb-8">
                    Preferences
                  </h2>

                  <div className="space-y-5">

                    <div className="bg-[#0b1b36] rounded-2xl p-5 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">
                          Dark Mode
                        </h3>

                        <p className="text-slate-400 text-sm">
                          Always enabled
                        </p>
                      </div>

                      <FaMoon className="text-yellow-400 text-2xl" />
                    </div>

                    <div className="bg-[#0b1b36] rounded-2xl p-5 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">
                          Notifications
                        </h3>

                        <p className="text-slate-400 text-sm">
                          New movie recommendations
                        </p>
                      </div>

                      <FaBell className="text-yellow-400 text-2xl" />
                    </div>

                    <div className="bg-[#0b1b36] rounded-2xl p-5 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">
                          Data Storage
                        </h3>

                        <p className="text-slate-400 text-sm">
                          Local browser storage
                        </p>
                      </div>

                      <FaSave className="text-pink-400 text-2xl" />
                    </div>

                  </div>
                </div>

              </div>

              {/* Quick Actions */}
              <div className="mt-8 bg-[#071226] border border-slate-800 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-8">
                  Quick Actions
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">

                  <div
                    onClick={() => navigate("/favorites")}
                    className="bg-[#0b1b36] border border-slate-800 rounded-3xl p-8 text-center cursor-pointer hover:scale-105 transition"
                  >
                    <FaHeart className="text-pink-500 text-5xl mx-auto mb-4" />

                    <h3 className="font-bold">
                      My Favorites
                    </h3>

                    <p className="text-slate-400 text-sm mt-2">
                      0 saved
                    </p>
                  </div>

                  <div
                    onClick={() => navigate("/home")}
                    className="bg-[#0b1b36] border border-slate-800 rounded-3xl p-8 text-center cursor-pointer hover:scale-105 transition"
                  >
                    <FaFilm className="text-purple-400 text-5xl mx-auto mb-4" />

                    <h3 className="font-bold">
                      Explore
                    </h3>

                    <p className="text-slate-400 text-sm mt-2">
                      Browse all movies
                    </p>
                  </div>

                  <div className="bg-[#0b1b36] border border-slate-800 rounded-3xl p-8 text-center cursor-pointer hover:scale-105 transition">
                    <FaGift className="text-yellow-400 text-5xl mx-auto mb-4" />

                    <h3 className="font-bold">
                      Help Center
                    </h3>

                    <p className="text-slate-400 text-sm mt-2">
                      Get support
                    </p>
                  </div>

                  <div
                    onClick={handleLogout}
                    className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8 text-center cursor-pointer hover:bg-red-500/20 transition"
                  >
                    <FaSignOutAlt className="text-red-400 text-5xl mx-auto mb-4" />

                    <h3 className="font-bold text-red-300">
                      Sign Out
                    </h3>

                    <p className="text-red-400 text-sm mt-2">
                      Logout
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        );
      };

      export default ProfilePage;