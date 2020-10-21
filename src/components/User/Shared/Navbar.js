import React, { Component } from 'react';
import './Navbar.css';
import appIcon from '../../../icons/healfy.svg.png';
import profPicture from '../../../images/sam.jpeg';

class Navbar extends Component {
    
    render() { 

        const profilePictureSetter = {
            backgroundImage : `url(${profPicture})`
        }


        return ( 
            <nav>
                <div id="nav-left-holder">
                    <img src={appIcon} id="healfyIconNav"/>
                    healfy
                </div>

                <div className="option-link-holder">
                    Strona główna
                </div>

                <div className="option-link-holder">
                    Kontakt
                </div>

                <div className="option-link-holder">
                    O nas
                </div>

                <div id="nav-account-holder">
                    <div id="profile-picture-holder" style={profilePictureSetter}></div>
                    <p id="nav-user-name">John Doe</p>  

                    <div id="nav-account-options-holder">
                        <div className="nav-account-option">Twoje konto</div>
                        <div className="nav-account-option">Wyloguj się</div>

                    </div> 
                </div>

            </nav>
         )
    }
}
 
export default Navbar;