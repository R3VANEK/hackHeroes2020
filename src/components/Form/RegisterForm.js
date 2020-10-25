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

    redirectHome(){
        return this.props.history.push('/welcome')
    }


    state = { 
        role : '',
        firstName : '',
        lastName : '',
        password : '',
        checkPassword : '',
        phoneNumber : '',
        emailAddres : '',
        homeCity : '',
        specialization : '',
        errorMessage : '',
     }

     handleChange = (event) =>{
         console.log(event.target.name)
         this.setState({
             [event.target.name] : event.target.value
         })
     }

     register = (event) => {
        if(this.state.checkPassword === this.state.password) {
            if(this.state.role == "Doktor") {
                fetch('http://51.68.136.252:8000/user/' , {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        email: this.state.emailAddres,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        phoneNumber: this.state.phoneNumber,
                        city: this.state.homeCity,
                        specialization: this.state.specialization,
                        password: this.state.password,
                        role: "doctor"
                    }),
                }).then(response => response.json())
                  .then(data => {
                    localStorage.setItem('user_id', data['id'])
                    localStorage.setItem('role', data['groups'][0]['name'])
                    localStorage.setItem('firstName', data['first_name'])
                    localStorage.setItem('lastName', data['last_name'])
                    return this.redirectHome();
                })
        } else {
            fetch('http://51.68.136.252:8000/user/' , {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    "email": this.state.emailAddres,
                    "firstName": this.state.firstName,
                    "lastName": this.state.lastName,
                    "phoneNumber": this.state.phoneNumber,
                    "city": "",
                    "specialization": "",
                    "password": this.state.password,
                    "role": "patient"
                }),
            }).then(response => response.json())
              .then(data => {
                localStorage.setItem('user_id', data['id'])
                localStorage.setItem('role', data['groups'][0]['name'])
                localStorage.setItem('firstName', data['first_name'])
                localStorage.setItem('lastName', data['last_name'])
                return this.redirectHome();
            })
        }
     }
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

        let additionalInputs = (this.state.role == 'Doktor') ? <div><input type="text" placeholder="Miasto" name="homeCity" class="register-inputs" onChange={this.handleChange}/>
        <input type="text" placeholder="Specjalizacja" name="specialization" class="register-inputs" onChange={this.handleChange}/></div> : null
        
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

                        {additionalInputs}
                        <button type="submit" id="register-button" onClick={this.register} >Zarejestruj się</button>

                        <p id="error-p">{this.state.errorMessage}</p>
                    </div>

                    
                </section>
            </div>
         );
    }
}
 
export default RegisterForm;