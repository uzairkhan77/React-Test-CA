import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // Import the AuthContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext); // Access the dispatch function from AuthContext

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: user });

      // Log the user state to the console
      console.log("Logged in user:", user);

      alert("Login successful!");
      // Redirect to the dashboard or any other protected route after successful login.
      navigate("/home");
    } else {
      dispatch({ type: "LOGIN_FAILURE", payload: "Invalid email or password" });

      alert("Invalid email or password. Please try again.");
    }
  };

  const handleRegister = ()=>{
    navigate("/register")
    alert("Register new user")
  }

  return (
    <div className="container" style={{ marginTop: "100px" }}>
        <h1 style={{textAlign:"center"}}> Login</h1>
      {/* Your login form JSX */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <label htmlFor="inputPassword5" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-describedby="passwordHelpBlock"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div style={{ display: "flex", alignItems: "center" }}>
  <button style={{ marginTop: "15px" }} onClick={handleLogin}>
    Login
  </button>
  <p className="mx-3">OR</p>
  <button style={{ marginTop: "15px" }} onClick={handleRegister}>
    Register
  </button>
</div>

    </div>
  );
};

export default Login;
