import React, { Component } from 'react';
import './RegisterForm.css';
import appIcon from '../../icons/healfy.svg.png';

class RegisterForm extends Component {


    state = {  }


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

                    <button id="login-link-button">
                        Zaloguj się
                    </button>
                </section>

                <section id="register-right-holder">

                    <div id="role-changer-holder">
                        <div className="role-changer">Pacjent</div>
                        <div className="role-changer">Doktor</div>
                    </div>

                </section>
            </div>
         );
    }
}
 
export default RegisterForm;