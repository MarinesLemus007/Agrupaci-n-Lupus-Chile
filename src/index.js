import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.css';
import FriendView from './views/FriendView';
import AboutUsView from './views/AboutUsView';
// import DefinitionView from './views/DefinitionView';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={AboutUsView} />
      <Route path='/holi' component={FriendView} />

    </div>
  </Router>
)
ReactDOM.render(
    routing, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

