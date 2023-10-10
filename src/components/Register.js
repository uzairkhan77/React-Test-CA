import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext); // Use the useContext hook to access AuthContext
  const navigate = useNavigate();

  const handleRegistration = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (!name || !email || !password) {
      alert("All fields are required.");
    } else if (existingUser) {
      alert("Email already exists. Please choose a different email.");
    } else {
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Dispatch a REGISTER_SUCCESS action
      authContext.dispatch({ type: "REGISTER_SUCCESS" }); // Use authContext.dispatch to dispatch actions

      console.log("Dispatched REGISTER_SUCCESS action"); // Log a message to the console

      alert("Registration successful!");

      // Redirect to the login page after successful registration
      navigate("/login");
    }
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          aria-label="default input example"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
      {/* <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </div> */}
      <button className="my-3" onClick={handleRegistration}>
        Register
      </button>
    </div>
  );
};

export default Register;
