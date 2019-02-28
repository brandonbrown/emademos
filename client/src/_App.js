import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkout from './Checkout';

import ScrollFade from './ScrollFade'

class App extends Component {

  render() {
    
    return (
      <section className="wrapper">
        <input class="checkbox-off-canvas" type="checkbox" id="menu" />
        <label class="label-off-canvas" for="menu" onclick></label>

        <nav class="nav-off-canvas nav-horizontal" role="off-canvas">
            <ul>
                <li><a href="#">Never</a>
                    <ul>
                        <li><a href="#">Gonna</a>
                            <ul>
                                <li><a href="#">Run</a></li>
                                <li><a href="#">Around</a></li>
                                <li><a href="#">And</a></li>
                                <li><a href="#">Desert</a></li>
                                <li><a href="#">You</a></li>
                            </ul>
                        </li>
                        <li><a href="#">let</a></li>
                        <li><a href="#">You</a></li>
                        <li><a href="#">Down</a></li>
                    </ul>
                </li>
                <li><a href="#">Gonna</a></li>
                <li><a href="#">Give</a></li>
                <li><a href="#">You</a></li>
                <li><a href="#">Up</a></li>
            </ul>
        </nav>
        <div className="App">
        <section className="sidebar"><p>sidebar</p></section>
          <header>
            <div className="logo">EMA</div>
            <nav>
              <a href="#">Add Your Band</a>
              <a href="#">Explore Bands</a>
            </nav>

            <nav>
              <a href="#">Log In</a>
              <a href="#">Sign Up</a>
            </nav>

          </header>
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
          <ScrollFade when={200} actionIn="sendSecondHeader sendSecondHeaderIn" actionOut="sendSecondHeader sendSecondHeaderOut">
            <section className="secondHeader">
              <div className="secondBandInfo">
                <p className="eliteFansDark">5342 Elite Fans</p>
                <h2 className="secondHeaderTitle">Cradle of Filth</h2>
              </div>
              <section className="metaActionsDark">
                <a href="#" className="buttonMetaDark">Follow</a>
                <a href="#" className="buttonMetaDark">Share</a>
                <a href="#" className="buttonLarge secondHeaderCTA">Get Elite Access</a>
              </section>
            </section>
          </ScrollFade>
          <main>
          
            <ScrollFade when={300} actionIn="fadeHero fadeHeroIn" actionOut="fadeHero fadeHeroOut">
                <section className="hero" ref={this.hero}>

                </section>
            </ScrollFade>
            <div className="TESTBG">
            <Checkout
              name={'Cradle of Filth'}
              description={'Become an Elite Fan'}
              amount={1}
            />
            </div>
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
          </main>
          <footer>footer</footer>
        </div>
      </section>
    );
  }
}

export default App;
