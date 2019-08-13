import LupusDefinition from './views/LupusDefinitionView';
import HomeView from './views/HomeView';
import GesView from './views/GesView';
import AboutUs from './views/AboutUsView';
import Donation from './views/DonationView';
import ContactView from './views/ContactView';
import FrequentQuestions from './views/FrequentQuestionsView';
import LawRicarteView from './views/LawRicarteView';
import React from 'react';
import { BrowserRouter as Router }  from "react-router-dom";
import {  Route,Switch } from 'react-router-dom'






const Routing = ()=>{ 
    return(
     
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
    
      <Route exact path='/' component={HomeView} />
      <Route path='/Que-es-el-lupus' component={LupusDefinition} />
      <Route path='/Ges' component={GesView} />
      <Route path='/law' component={LawRicarteView} />
      <Route path='/Quienes-Somos' component={AboutUs} />
      <Route path='/Donar' component={Donation} />
      <Route path='/Contacto' component={ContactView} />
      <Route path='/Preguntas-Frecuentes' component={FrequentQuestions} />
    
  </Switch>

    )}
  export default Routing;