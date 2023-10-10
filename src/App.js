import React from 'react'
import Navbar from './components/Navbar.js'
import Post from './components/Post.js'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Register from './components/Register.js';
import Login from './components/Login.js';
import { AuthContextProvider } from './AuthContext';

const App =() => {


 
return (<AuthContextProvider>
    <Router>

    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/home" element={<Post />} />
        <Route exact path="/" element={<Post />} />
      </Routes>
    </div>
  </Router></AuthContextProvider>
  )
}

export default App;


