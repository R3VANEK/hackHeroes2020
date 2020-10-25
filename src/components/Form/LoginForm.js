import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './RegisterForm.css';
import appIcon from '../../icons/healfy.svg.png';

class LoginForm extends Component {


    

    state = { 
        password : '',
        emailAddres : '',
        errorMessage : ''
     }

     handleChange = (event) =>{
         console.log(event.target.name)
         this.setState({
             [event.target.name] : event.target.value
         })
     }

     redirectHome(){
        return this.props.history.push('/welcome')
    }

    login = (event) => {
                fetch(`http://51.68.136.252:8000/user/?email=${this.state.emailAddres}&password=${this.state.password}` , {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(response => response.json())
                  .then(data => {
                    console.log(data)
                    localStorage.setItem('r', data['id'])
                    localStorage.setItem('role', data['groups'][0]['name'])
                    localStorage.setItem('firstName', data['first_name'])
                    localStorage.setItem('lastName', data['last_name'])
                    return this.props.history.push('/welcome');
                })
     }


    render() { 

        
        return ( 
            <div id="formPage">
                
                <section id="register-left-holder">
                    <img src={appIcon} id="register-app-icon"/>
                    <p id="application-title">Healfy</p>
                    <p id="short-description">
                        Już tylko parę kliknięć dzieli Cię od komfortu, 
                        jaki dostarcza nasza aplikacja healfy. Videoporady, zapisane recepty, statystyki użytkownika,
                        wszystko w jednym, łatwo dostępnym miejscu. Przekonaj się sam!
                    </p>

                    <Link to="/register">
                        <button id="login-link-button">
                            Zarejestruj się
                        </button>
                    </Link>
                   
                </section>

                <section id="register-right-holder">

                    

                    
                    <div id="login-form">
                
                    <div id="help-holder">
                        <p id="register-as">Zaloguj się na swoje konto</p>
                    </div>
                    
                    <input type="email" placeholder="Email" name="emailAddres" class="login-inputs" onChange={this.handleChange}/>
                    <input type="password" placeholder="Hasło" name="password" class="login-inputs" onChange={this.handleChange}/><br/>
                    <input type="submit" value="Zaloguj się" id="login-button" onClick={this.login}/>
                    <p id="error-p">{this.state.errorMessage}</p>
                    </div>
                    


                </section>
            </div>
         );
    }
}
 
export default LoginForm;