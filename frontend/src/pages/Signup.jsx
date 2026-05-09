import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios.js";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", { username, email, password });
      alert("Account created successfully")

      const user = response.data.user;
      if (user?.role === "admin" || user?.role === "superadmin") {
        navigate("/admin-dashboard")
      } else {
        navigate("/")
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an id?
        <Link to="/login">Login</Link>
      </p>
    </div>
  )
}