import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert('Login successful!');
      // Redirect to the dashboard or any other protected route after successful login.
      navigate('/');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container" style={{ marginTop: '70px' }}>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
