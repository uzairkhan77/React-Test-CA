import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const NavBar = (props)=> {

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`} style={{position:'fixed',top:0,width: '100%',zIndex:2}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to= "/">Post App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
}
NavBar.defaultProps = {
  mode : 'light'
}
NavBar.propTypes= {
  mode: PropTypes.string
}

export default NavBar