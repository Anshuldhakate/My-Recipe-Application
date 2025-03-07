import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError(""); // Clear previous errors
      await axios.post(`https://recipe-backend-fy1o.onrender.com/api/auth/register`, form);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error registering", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
