import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './Dashboard.css';

import PrimaryHeader from './PrimaryHeader'

class Dashboard extends Component {

  render() {
    const { match } = this.props
    console.log("match: ", match.url)
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
                            <li><Link to={`${match.url}/subscriptions`}>Manage subscriptions</Link></li>
                        </ul>
                        <Link to={`${match.url}/profile`}>Profile</Link>
                        <Link to={`${match.url}/payment`}>Payment Info</Link>
                        <Link to={`${match.url}/settings`}>Settings</Link>

                    </nav>
                    <div className="dashboard-content">
                    
                    <section className="feed">
                      <nav>
                        <a href="#">All Content</a>
                        <a href="#">Elite Fan Content</a>
                        <a href="#">Tour Updates</a>
                      </nav>
                      <article>
                        <div className="imgContainer">

                        </div>
                        <div className="contentContainer">
                        
                          <h3>Back On The Road</h3>
                          <section className="articleMeta">
                            <p>Elite Fan Exclusive</p>
                            <p>6:56PM February 14, 2019</p>
                          </section>
                          <p>Becoming an Elite Fan unlocks exclusive content, merchandise, tour announcements, and more from Cradle of Filth. Show your dedication to your favorite musicians with monthly memberships starting at $5.55.</p>
                        </div>
                        <div className="interactions">
                          <p>756 Likes</p>
                          <p>135 Comments</p>
                        </div>
                      </article>
                      <article>
                        <div className="imgContainer">

                        </div>
                        <div className="contentContainer">
                          <h3>Back On The Road</h3>
                          <section className="articleMeta">
                            <p>Elite Fan Exclusive</p>
                            <p>6:56PM February 14, 2019</p>
                          </section>
                          <p>Becoming an Elite Fan unlocks exclusive content, merchandise, tour announcements, and more from Cradle of Filth. Show your dedication to your favorite musicians with monthly memberships starting at $5.55.</p>
                        </div>
                        <div className="interactions">
                          <p>756 Likes</p>
                          <p>135 Comments</p>
                        </div>
                      </article>
                      <article>
                        <div className="imgContainer">

                        </div>
                        <div className="contentContainer">
                          <h3>Back On The Road</h3>
                          <section className="articleMeta">
                            <p>Elite Fan Exclusive</p>
                            <p>6:56PM February 14, 2019</p>
                          </section>
                          <p>Becoming an Elite Fan unlocks exclusive content, merchandise, tour announcements, and more from Cradle of Filth. Show your dedication to your favorite musicians with monthly memberships starting at $5.55.</p>
                        </div>
                        <div className="interactions">
                          <p>756 Likes</p>
                          <p>135 Comments</p>
                        </div>
                      </article>
                    </section>
  
                    </div>
                </div>
                
              </main>
              
          </div>
         
        {/* <Route exact path="/" component={App} /> */}
      </div>
    
    );
  }
}

export default Dashboard;
