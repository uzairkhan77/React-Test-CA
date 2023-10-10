import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Import the AuthContext

const NavBar = (props) => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext); // Access the user state and dispatch function from AuthContext

  useEffect(() => {
    // This effect will run whenever the user state changes
    console.log('User state changed:', user);
  }, [user]);

  const handleLogoutClick = () => {
    dispatch({ type: 'LOGOUT' }); // Dispatch the LOGOUT action to reset the user state
    navigate('/login');
    alert('You are logged out');

    // Log the user state to the console after logout
    console.log('User after logout:', user);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 2 }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Post App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0">
            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogoutClick}>Logout</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
