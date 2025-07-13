import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold text-primary">
          SpeedyShaq
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
          aria-controls="navbarcontents"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/foodlanding" className="nav-link">
                Food & Beverages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fashionlanding" className="nav-link">
                Fashion
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/medlanding" className="nav-link">
                Meds
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/chat" className="btn btn-outline-primary btn-sm">
              Chat Speedy
            </Link>
            <Link to="/about" className="btn btn-outline-secondary btn-sm">
              About Us
            </Link>
            <Link to="/signin" className="btn btn-outline-success btn-sm">
              Log In
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
