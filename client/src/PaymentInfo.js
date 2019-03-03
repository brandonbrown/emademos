import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cleave from 'cleave.js/react';

import './App.css';
import './Dashboard.css';
import './Subscriptions.css';
import PrimaryHeader from './PrimaryHeader'

class PaymentInfo extends Component {

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
                    <Link to="/dashboard">Updates</Link>
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
                  <div className="form-container">
                    <h3>Current Information</h3>
                    <h3>Your Name</h3>
                    <Cleave placeholder="Name"
                          options={{creditCard: false}}
                          onFocus={this.onCreditCardFocus}
                          onChange={this.onCreditCardChange} />
                    <h3>Card</h3>
                    <Cleave placeholder="4242424242424242"
                        options={{creditCard: true}}
                        onFocus={this.onCreditCardFocus}
                        onChange={this.onCreditCardChange} />
                    
                      </div>
                </div>
                </div>
                
              </main>
              
          </div>
         
        {/* <Route exact path="/" component={App} /> */}
      </div>
    
    );
  }
}

export default PaymentInfo;
