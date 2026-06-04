import React from "react";
import { useForm } from "react-hook-form";

const CreateAccount = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Registration Successful");
    setIsLogin(true);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-[#071226] border border-slate-800 rounded-3xl p-8 shadow-2xl">

        <p className="text-orange-400 text-center tracking-[6px] uppercase text-sm">
          Get Started
        </p>

        <h2 className="text-white text-5xl font-bold text-center mt-4">
          Create Account
        </h2>

        <p className="text-slate-400 text-center mt-4">
          Join thousands of movie enthusiasts
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5"
        >
          <div>
            <label className="text-white block mb-2">
              Full Name
            </label>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Your name"
              className="w-full bg-[#0b1b36] border border-slate-700 rounded-2xl px-5 py-4 text-white"
            />

            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-white block mb-2">
              Email Address
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="you@example.com"
              className="w-full bg-[#0b1b36] border border-slate-700 rounded-2xl px-5 py-4 text-white"
            />

            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              placeholder="Create a strong password"
              className="w-full bg-[#0b1b36] border border-slate-700 rounded-2xl px-5 py-4 text-white"
            />

            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl text-white font-semibold bg-linear-to-r from-orange-500 to-red-500"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-slate-700"></div>
          <p className="text-slate-400">
            Already a member?
          </p>
          <div className="h-px flex-1 bg-slate-700"></div>
        </div>

        <button
          onClick={() => setIsLogin(true)}
          className="w-full py-4 rounded-2xl border border-orange-500 text-orange-400 font-semibold"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
