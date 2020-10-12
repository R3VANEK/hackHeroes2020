import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';


import Mainholder from './components/User/Mainholder';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" component={Mainholder}/>
        
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
