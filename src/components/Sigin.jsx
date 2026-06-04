import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Sigin = ({ setIsLogin }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user?.email === data.email &&
      user?.password === data.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");

      navigate("/profile");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-[#071226] border border-slate-800 rounded-3xl p-8 shadow-2xl">

        <p className="text-orange-400 text-center tracking-[6px] uppercase text-sm">
          Welcome Back
        </p>

        <h2 className="text-white text-5xl font-bold text-center mt-4">
          Sign In
        </h2>

        <p className="text-slate-400 text-center mt-4">
          Access your personalized cinema experience
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="text-white block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full bg-[#0b1b36] border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-white block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full bg-[#0b1b36] border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl text-white font-semibold bg-linear-to-r from-orange-500 to-red-500"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-slate-700"></div>
          <p className="text-slate-400">
            New to CINEVIEW?
          </p>
          <div className="h-px flex-1 bg-slate-700"></div>
        </div>

        <button
          onClick={() => setIsLogin(false)}
          className="w-full py-4 rounded-2xl border border-orange-500 text-orange-400 font-semibold"
        >
          Create Account
        </button>

      </div>
    </div>
  );
};

export default Sigin;