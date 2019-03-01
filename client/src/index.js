import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import Subscriptions from './Subscriptions';
import Explore from './Explore';
import Settings from './Settings';
import Profile from './Profile';
import AddBand from './AddBand';
import Band from './Band';
import Help from './Help';

import * as serviceWorker from './serviceWorker';
import PaymentInfo from './PaymentInfo';

const routing = (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/subscriptions" component={Subscriptions} />
        <Route path="/explore" component={Explore} />
        <Route path="/add-band" component={AddBand} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
        <Route path="/payment" component={PaymentInfo} />
        <Route path="/help" component={Help} />
        <Route path="/band" component={Band} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
