import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './styles/homeView.css';
import LupusDefinition from './views/LupusDefinitionView';
import HomeView from './views/HomeView';
import GesView from './views/GesView';
import AboutUs from './views/AboutUs';
import Donation from './views/Donation';
import Submit from './views/Submit';



import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={HomeView} />
      <Route path='/Que-es-el-lupus' component={LupusDefinition} />
      <Route path='/Ges' component={GesView} />
      <Route path='/Quienes-Somos' component={AboutUs} />
      <Route path='/Donar' component={Donation} />
      <Route path='/Suscribete' component={Submit} />



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

