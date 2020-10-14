import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';


import Mainholder from './components/User/Mainholder';
import RegisterForm from './components/Form/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/register" component={RegisterForm}/>
        <Route path="/" component={Mainholder}/>
        
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
