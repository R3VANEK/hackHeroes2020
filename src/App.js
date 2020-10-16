import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';


import Mainholder from './components/User/Mainholder';
import RegisterForm from './components/Form/RegisterForm';

import Teleporada from './components/User/Teleporada'
import Recepty from './components/User/Recepty'
import Statystyki from './components/User/Statystyki'
import Konto from './components/User/Konto'
import Lekarze from './components/User/Lekarze'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/register" component={RegisterForm}/>

        <Route path="/teleporada" component={Mainholder(Teleporada)}/>
        <Route path="/recepty" component={Mainholder(Recepty)}/>
        <Route path="/statystyki" component={Mainholder(Statystyki)}/>
        <Route path="/konto" component={Mainholder(Konto)}/>
        <Route path="/lekarze" component={Mainholder(Lekarze)}/>
        
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
