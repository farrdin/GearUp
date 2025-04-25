/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginUser] = useLoginMutation();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInfo = {
      email: form.email,
      password: form.password,
    };
    try {
      const res = await loginUser(userInfo).unwrap();
      if (!res.success) {
        toast.error(res.message || "Login failed");
        return;
      }
      const token = res?.token;
      if (!token) {
        throw new Error("Token is missing from the response.");
      }
      const user = verifyToken(token);
      if (!user) {
        throw new Error("Invalid or expired token.");
      }
      localStorage.setItem("token", token);
      dispatch(setUser({ token, user }));
      if (res?.success) {
        toast.success("Logged in Successfully");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "An error occurred while logging in");
    }
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
