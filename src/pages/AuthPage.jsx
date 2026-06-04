import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CreateAccount from "../components/CreateAccount";
import Sigin from "../components/Sigin";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] px-6 pt-24">
        <div className="max-w-7xl mx-auto min-h-[85vh] grid lg:grid-cols-2 gap-16 items-center">

          {isLogin ? (
            <>
              {/* Left Side Login */}
              <div className="space-y-8">
                <div className="inline-block px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  🎬 CINEVIEW
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Welcome to Your
                  <br />
                  Cinema Hub
                </h1>

                <p className="text-slate-400 text-xl leading-relaxed">
                  Discover blockbuster trailers, save your favorite
                  movies, and build your ultimate watchlist.
                </p>
              </div>

              {/* Right Side Login Form */}
              <Sigin setIsLogin={setIsLogin} />
            </>
          ) : (
            <>
              {/* Left Side Register */}
              <div className="space-y-8">
                <div className="inline-block px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  🍿 JOIN CINEVIEW
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Join the
                  <br />
                  Cinema Community
                </h1>

                <p className="text-slate-400 text-xl leading-relaxed">
                  Create your account to unlock personalized
                  recommendations, track your favorite movies,
                  and connect with fellow film enthusiasts.
                </p>
              </div>

              {/* Right Side Register Form */}
              <CreateAccount setIsLogin={setIsLogin} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthPage;