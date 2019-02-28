import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkout from './Checkout';

import ScrollFade from './ScrollFade'

class App extends Component {

  render() {
    
    return (

      <div className="app-wrapper">
        <input className="checkbox-off-canvas" type="checkbox" id="menu" />
          <label className="label-off-canvas" for="menu" onclick></label>

          <nav className="nav-off-canvas nav-horizontal" role="off-canvas">
              
              <ul className="primary-nav">
                  <li className="logo">
                    <a href="#">EMA</a>
                  </li>
                  
                  <li><a href="#">Add Your Band</a></li>
                  <li><a href="#">Explore Bands</a></li>
                  <li><a href="#" className="avatar">IMG</a>
                      <ul>
                          <ul>
                              <li><a href="#">Dashboard</a></li>
                              <li><a href="#">Profile</a></li>
                              <li><a href="#">Payment Info</a></li>
                              <li><a href="#">Settings</a></li>
                              <li><a href="#">Sign Out</a></li>
                          </ul>
                      </ul>
                  </li>
                  
                  
              </ul>
          </nav>
          <div className="wrapper">
              <main>
                <nav className="collapsedNav">
                  <ul className="bandInfoCollapsed">
                    <li>
                      <h3 className="bandHeaderTitleCollapsed">Cradle of Filth</h3>
                      <p className="bandEliteFansCollapsed">5432 Elite Fans</p>
                    </li>
                    <li className="bandHeaderImgCollapsed"></li>
                    
                  </ul>
                  <ul className="metaActions">
                 
                      <li><a href="#" className="buttonMetaDark">Share</a></li>
                      <li><a href="#" className="buttonMetaDark">Follow</a></li>
                      <li><a href="#" className="buttonLarge secondHeaderCTA">Get Elite Access</a></li>
                    
                  </ul>
                </nav>
                <p>content</p>
              </main>
          </div>
      </div>
    );
  }
}

export default App;
