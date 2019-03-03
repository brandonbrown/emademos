import React, { Component } from 'react';

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
