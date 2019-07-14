import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import './Dashboard.css';
import './Subscriptions.css';
import PrimaryHeader from './PrimaryHeader'

class Subscriptions extends Component {

  render() {

    
    return (
      <div className="app-wrapper">
        <input className="checkbox-off-canvas" type="checkbox" id="menu" />
          <label className="label-off-canvas" for="menu" onclick></label>

          <PrimaryHeader />
          <div className="wrapper">
          
              <main className="dashboard">
                <div className="dashboard-wrapper">
                    <nav>
                        <Link to="/user">Updates</Link>
                        <Link to="/subscriptions">Subscriptions</Link>
                        <ul>
                            <li><Link to="/band">Cradle of Filth</Link></li>
                            <li><Link to="/band">Wednesday 13</Link></li>
                            <li><Link to="/subscriptions">Manage subscriptions</Link></li>
                        </ul>
                        <Link to="/profile">Profile</Link>
                        <Link to="/payment">Payment Info</Link>
                        <Link to="/settings">Settings</Link>
                    </nav>
                    <div className="dashboard-content">
                    
                        <section className="feed">
                            <article>
                            <div className="contentContainer notSubscribed">
                                <h3>You are not subscribed to any Elite Access Content yet!</h3>
                                <Link to="/explore" className="buttonLarge">Find a Band To Subscribe To</Link>
                            </div>
                            </article>
                        </section>
  
                    </div>
                </div>
                
              </main>
              
          </div>
         
          {/* <Route path={`/subscriptions`} component={Subscriptions}/> */}
      </div>
    
    );
  }
}

export default Subscriptions;
