import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import './App.css';


import Mainholder from './components/User/Shared/Mainholder';
import RegisterForm from './components/Form/RegisterForm';
import LoginForm from './components/Form/LoginForm';



class  App extends React.Component {


  componentDidMount(){
    this.setState({role : localStorage.getItem('role')})
  }

  state = {
    role : ''
  }

  render(){
    return (
      <BrowserRouter>
        <Switch>

          
          
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={LoginForm}/>
  
          <Route path="/teleporada" 
            render={(props) => (
              <Mainholder path={"Teleporada"} role={this.state.role} />
          )}/>
  
          <Route path="/recepty" 
            render={(props) => (
              <Mainholder path={"Recepty"} role={this.state.role} />
          )}/>

          <Route path="/dodajRecepte" 
            render={(props) => (
              <Mainholder path={"DodajRecepte"} role={this.state.role} />
          )}/>
  
          <Route path="/statystyki" 
            render={(props) => (
              <Mainholder path={"Statystyki"} role={this.state.role} />
          )}/>
  
          <Route path="/konto" 
              render={(props) => (
                <Mainholder path={"Konto"} role={this.state.role} />
          )}/>

          <Route path="/zaufaniLekarze" 
              render={(props) => (
                <Mainholder path={"Zaufani"} role={this.state.role} />
            )}/>  
  
          <Route path="/lekarze" 
            render={(props) => (
              <Mainholder path={"Lekarze"} role={this.state.role} />
          )}/>

          <Route path="/welcome"
            render={(props) =>(
              <Mainholder path={"Welcome"} role={this.state.role} />
            )}/>

          <Route path="/"
            render={(props) =>(
                <Redirect to="/register" />
            )}/>
          
        </Switch>
      </BrowserRouter> 
    );
  }
  
}

export default App;
