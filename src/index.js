import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LupusDefinition from './views/LupusDefinitionView';
import HomeView from './views/HomeView';
import GesView from './views/GesView';
import AboutUs from './views/AboutUsView';
import Donation from './views/DonationView';
import ContactView from './views/ContactView';
import FrequentQuestions from './views/FrequentQuestionsView';
import * as serviceWorker from './serviceWorker';
import LawRicarteView from './views/LawRicarteView';

const routing = (
    <Router>
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={HomeView} />
      <Route path='/Que-es-el-lupus' component={LupusDefinition} />
      <Route path='/Ges' component={GesView} />
      <Route path='/Law' component={LawRicarteView} />
      <Route path='/Quienes-Somos' component={AboutUs} />
      <Route path='/Donar' component={Donation} />
      <Route path='/Contacto' component={ContactView} />
      <Route path='/Preguntas-Frecuentes' component={FrequentQuestions} />
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

