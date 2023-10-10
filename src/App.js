import React, { useContext } from "react";
import Post from "./components/Post.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { AuthContext,AuthContextProvider } from "./AuthContext";

const App = () => {
  // eslint-disable-next-line
  const {user} = useContext(AuthContext)

  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/home" element={<Post />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
