import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", { email, password });

      const user = response.data.user;
      const token = response.data.token; 

      localStorage.setItem("token", token);

      localStorage.setItem("user", JSON.stringify(user));

      if (user?.role === "admin" || user?.role === "superadmin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white border border-zinc-200 rounded-2xl shadow-sm p-8">

        <h1 className="text-2xl font-semibold text-zinc-900 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-zinc-600 text-center mt-2">
          Log in to your account
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-zinc-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Create one
          </Link>
        </p>

      </div>
    </div>
  );
}