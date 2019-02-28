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
              <ScrollFade when={-200} actionIn="sendSecondHeader sendSecondHeaderOut" actionOut="sendSecondHeader sendSecondHeaderIn">
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
                </ScrollFade>
                <section className="contentWrapper">
                    <ScrollFade when={0} actionIn="scaleHeroHeader scaleHeroHeaderIn" actionOut="scaleHeroHeader scaleHeroHeaderOut">
                      <section className="heroHeader">
                        <h2 className="bandNameLarge">Cradle of Filth</h2>
                        <a href="#" className="buttonLarge">Get Elite Access</a>
                        <p className="eliteFans">5342 Elite Fans</p>
                        <section className="metaActions">
                          <a href="#" className="buttonMeta">Follow</a>
                          <a href="#" className="buttonMeta">Share</a>
                        </section>
                      </section>
                    </ScrollFade>
                    <ScrollFade when={-200} actionIn="fadeHero fadeHeroIn" actionOut="fadeHero fadeHeroOut">
                        <section className="hero" ref={this.hero}>

                        </section>
                    </ScrollFade>
                    <Checkout
                      name={'Cradle of Filth'}
                      description={'Become an Elite Fan'}
                      amount={1}
                    />
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
                </section>
              </main>
              
          </div>
      </div>
    );
  }
}

export default App;
