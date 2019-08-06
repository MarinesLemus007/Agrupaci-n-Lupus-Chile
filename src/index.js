import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
<<<<<<< HEAD
import './index.css';
import AboutUs from './views/AboutUs.js';
// import DefinitionView from './views/DefinitionView';
=======
import './styles/homeView.css';
import LupusDefinition from './views/LupusDefinitionView';
import HomeView from './views/HomeView';
import GesView from './views/GesView';

>>>>>>> ec5e21d281b3e313e6e98d3ddbdb3ec628f3f35e
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={HomeView} />
<<<<<<< HEAD
     
=======
      <Route path='/Que-es-el-lupus' component={LupusDefinition} />
      <Route path='/Ges' component={GesView} />
>>>>>>> ec5e21d281b3e313e6e98d3ddbdb3ec628f3f35e

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

