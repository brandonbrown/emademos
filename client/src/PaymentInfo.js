import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './Dashboard.css';
import './Subscriptions.css';
import App from './App';

import ScrollFade from './ScrollFade'

class PaymentInfo extends Component {

  render() {
    
    return (
      <div className="app-wrapper">
        <input className="checkbox-off-canvas" type="checkbox" id="menu" />
          <label className="label-off-canvas" for="menu" onclick></label>

          <nav className="nav-off-canvas nav-horizontal" role="off-canvas">
              
              <ul className="primary-nav">
                  <li className="logo">
                  <Link to="/">EMA</Link>
                  </li>
                  
                  <li><a href="#">Add Your Band</a></li>
                  <li><Link to="/explore">Explore Bands</Link></li>
                  <li><Link to="/dashboard" className="avatar">IMG</Link>
                      <ul>
                          <ul>
                              <li><Link to="/dashboard">Dashboard</Link></li>
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
          <div className="wrapper">
          
              <main className="dashboard">
                <div className="dashboard-wrapper">
                  <p>PaymentInfo</p>
                </div>
                
              </main>
              
          </div>
         
        {/* <Route exact path="/" component={App} /> */}
      </div>
    
    );
  }
}

export default PaymentInfo;
