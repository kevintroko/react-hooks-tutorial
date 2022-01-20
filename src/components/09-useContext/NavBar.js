import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const NavBar = () => {
  return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">useContext</Link>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink to="About" className="nav-link" aria-current="page">About</NavLink>
                  <NavLink to="Login" className="nav-link">Login</NavLink>
                </div>
              </div>
            </div>
          </nav>
  )
};
