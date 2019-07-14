import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cleave from 'cleave.js/react';
import './App.css';
import './Dashboard.css';
import './Register.css';
import PrimaryHeader from './PrimaryHeader'

class Register extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            remember: false,
            // numberOfGuests: 2
          };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onCreditCardChange = this.onCreditCardChange.bind(this);
        this.onCreditCardFocus = this.onCreditCardFocus.bind(this);
    }

    onCreditCardChange(event) {
        // formatted pretty value
        console.log(event.target.value);

        // raw value
        console.log(event.target.rawValue);
    }

    onCreditCardFocus(event) {
        // update some state
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("CHECK: ", this.state.remember)
        this.setState({
          [name]: value
        });

        
      }
  render() {
    console.log("CHECK: ", this.state.remember)
    return (
      <div className="app-wrapper">
        <input className="checkbox-off-canvas" type="checkbox" id="menu" />
          <label className="label-off-canvas" htmlFor="menu" onclick></label>

          <PrimaryHeader />
          <div className="wrapper">
          
              <main className="content-wrapper">
                <div className="content">
                    <section className="auth-container">
                        <h2>Create Your Elite Music Access Account</h2>
                        <div className="form-container">
                            <Cleave placeholder="Full Name"
                                options={{creditCard: false}}
                                onFocus={this.onCreditCardFocus}
                                onChange={this.onCreditCardChange} />
                            <Cleave placeholder="Email"
                                options={{creditCard: false}}
                                onFocus={this.onCreditCardFocus}
                                onChange={this.onCreditCardChange} />
                            <Cleave placeholder="Password"
                                options={{creditCard: false}}
                                onFocus={this.onCreditCardFocus}
                                onChange={this.onCreditCardChange} />
                            <Cleave placeholder="Confirm Password"
                                options={{creditCard: false}}
                                onFocus={this.onCreditCardFocus}
                                onChange={this.onCreditCardChange} />
                        </div>
                        <div className="form-actions-container">
                            <div className="form-remember">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    value="remember"
                                    onChange={this.handleInputChange}
                                    checked={this.state.remember}
                                    
                                    />
                                <label htmlFor="remember">I agree to the EMA Terms of Service</label>
                            </div>
                            
                            <input className="form-submit" type="submit" value="Submit" />
                        </div>
                        <Link to="/" className="form-help">Already have an account? Sign In Here.</Link>
                    </section>
                </div>
                
              </main>
              
          </div>
         
        {/* <Route exact path="/" component={App} /> */}
      </div>
    
    );
  }
}

export default Register;
