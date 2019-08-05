import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './indexNew.css';
import LupusDefinition from './views/LupusDefinition';
import HomeView from './views/HomeView';

import * as serviceWorker from './serviceWorker';



const routing = (
    <Router>
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={HomeView} />
      <Route path='/Que-es-el-lupus' component={LupusDefinition} />

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

