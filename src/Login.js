import React, { useState } from "react";
import { useGlobalContext } from "./context";

const Login = () => {
  const { login } = useGlobalContext();
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      login();
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="login-container">
      <h1>INDIA NEWS WEBSITE</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
