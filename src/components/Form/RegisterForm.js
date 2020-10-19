import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './RegisterForm.css';
import appIcon from '../../icons/healfy.svg.png';

class RegisterForm extends Component {


    constructor(props){
        super(props)
        this.patientRef = React.createRef()
        this.doctorRef = React.createRef()
    }
    componentDidMount(){
        this.patientRef.current.style.backgroundColor = 'white'
        this.patientRef.current.style.color = '#5772f0'
    }

    state = { 
        role : 'Pacjent',
        firstName : '',
        lastName : '',
        password : '',
        checkPassword : '',
        phoneNumber : '',
        emailAddres : '',

        errorMessage : ''
     }

     handleChange = (event) =>{
         console.log(event.target.name)
         this.setState({
             [event.target.name] : event.target.value
         })
     }


     changeRole = (id) =>{
            if(id == 0){
               
                this.doctorRef.current.style.backgroundColor = '#5772f0'
                this.doctorRef.current.style.color = 'white'
                this.patientRef.current.style.backgroundColor = 'white'
                this.patientRef.current.style.color = '#5772f0'
                this.setState({
                    role : 'Pacjent'
                })
            }
            else{
                this.patientRef.current.style.backgroundColor = '#5772f0'
                this.patientRef.current.style.color = 'white'
                this.doctorRef.current.style.backgroundColor = 'white'
                this.doctorRef.current.style.color = '#5772f0'
                this.setState({
                    role : 'Doktor'
                })
            }
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

                    <Link to="/login">
                        <button id="login-link-button">
                            Zaloguj się
                        </button>
                    </Link>
                    
                </section>

                <section id="register-right-holder">

                    <div id="role-changer-holder">
                        <div className="role-changer" 
                            ref={this.patientRef} 
                            onClick={()=>{this.changeRole(0)}}>
                            Pacjent
                        </div>

                        <div className="role-changer" 
                            ref={this.doctorRef} 
                            onClick={()=>{this.changeRole(1)}}>
                            Doktor
                        </div>
                    </div>

                    
                    <form>
                
                    <div id="help-holder">
                        <p id="register-as">Zarejestruj się jako {this.state.role}</p>
                    </div>
                    <div class="section-inputs">
                        <input type="text" placeholder="Imię" name="firstName" class="register-inputs" onChange={this.handleChange}/>
                        <input type="text" placeholder="Nazwisko" name="lastName" class="register-inputs" onChange={this.handleChange}/>
                        <input type="password" placeholder="Hasło" name="password"class="register-inputs" onChange={this.handleChange}/>
                        <input type="password" placeholder="Powtórz hasło" name="checkPassword" class="register-inputs" onChange={this.handleChange}/>
                    </div>
                    <div class="section-inputs">
                        <input type="text" placeholder="Telefon" name="phoneNumber" class="register-inputs" onChange={this.handleChange}/>
                        <input type="email" placeholder="Email" name="emailAddres" class="register-inputs" onChange={this.handleChange}/>
                        <input type="submit" value="Zarejestruj się" id="register-button"/>

                        <p id="error-p">{this.state.errorMessage}</p>
                    </div>

                    </form>
                    


                </section>
            </div>
         );
    }
}
 
export default RegisterForm;