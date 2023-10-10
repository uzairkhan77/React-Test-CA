import React from 'react'
import Navbar from './components/Navbar.js'
import Post from './components/Post.js'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

const App =() => {

 
return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Post />} />
        <Route exact path="/" element={<Post />} />
        {/* <Route exact path="/" element={<News />} /> */}
      </Routes>
    </div>
  </Router>
  )
}

export default App;


