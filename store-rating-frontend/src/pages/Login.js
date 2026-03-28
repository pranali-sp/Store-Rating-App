import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      const token = res.data.token;
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);

      if (decoded.role === "admin") navigate("/admin");
      else if (decoded.role === "owner") navigate("/owner");
      else navigate("/user");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2>Login</h2>

        <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
        <br /><br />

        <input type="password" placeholder="Password"
          onChange={(e) => setForm({...form, password: e.target.value})}
        />
        <br /><br />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;