import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import logo from './assets/img/emalogo.png'

class PrimaryHeader extends Component {

  render() {
    
    return (
        <nav className="nav-off-canvas nav-horizontal" role="off-canvas">
              
          <ul className="primary-nav">
              <li className="logo">
              <Link to="/"><img className="logoimg" src={logo} /></Link>
              </li>           
              <li><a href="#">Add Your Band</a></li>
              <li><Link to="/explore">Explore Bands</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Sign Up</Link></li>
              <li><Link to="/user" className="avatar">IMG</Link>
                  <ul>
                      <ul>
                          <li><Link to="/user">Dashboard</Link></li>
                          <li><Link to="/profile">Profile</Link></li>
                          <li><Link to="/payment">Payment Info</Link></li>
                          <li><Link to="/settings">Settings</Link></li>
                          <li><Link to="/help">Help</Link></li>
                          <li><a href="#">Sign Out</a></li>
                      </ul>
                  </ul>
              </li> 
          </ul>
        </nav>
    );
  }
}

export default PrimaryHeader;
