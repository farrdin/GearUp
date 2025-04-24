// src/pages/Login.tsx

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", form);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gradient-to-br from-blue-100 to-purple-100">
      {/* Left: Branding section */}
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-600 text-white p-10">
        <h2 className="text-5xl font-bold">YourBrand</h2>
        <p className="mt-4 text-lg opacity-80 text-center">
          Unlock your personalized experience with just one login.
        </p>
      </div>

      {/* Right: Login Form */}
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-600 text-center">
            Login to continue to your dashboard
          </p>

          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
          />

          <div className="text-right">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button type="submit" className="w-full text-lg">
            Login
          </Button>

          <p className="text-sm text-center text-gray-700">
            Don’t have an account?{" "}
            <a href="/register" className="text-indigo-600 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
