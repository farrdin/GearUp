// src/pages/Register.tsx

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", form);
    // Handle register logic here
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gradient-to-br from-blue-100 to-purple-100">
      {/* Left: Register form */}
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Create Account
          </h1>

          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
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
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <Button type="submit" className="w-full text-lg">
            Register
          </Button>

          <p className="text-sm text-center text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>

      {/* Right: Branding/visual */}
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-600 text-white p-10">
        <h2 className="text-5xl font-bold">YourBrand</h2>
        <p className="mt-4 text-lg opacity-80 text-center">
          Join our community and enjoy exclusive services tailored for you.
        </p>
      </div>
    </div>
  );
};

export default Register;
