import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import appIcon from '../../../icons/healfy.svg.png';
import profPicture from '../../../images/sam.jpeg';

class Navbar extends Component {
    componentDidMount () {
        this.setState({username: localStorage.getItem('firstName')+" "+localStorage.getItem('lastName')})
    }

    state = {
        username: "",
    }


    logout = () => {
        localStorage.clear();
    }

    render() { 
        const profilePictureSetter = {
            backgroundImage : `url(${profPicture})`
        }

        let name = localStorage.getItem('firstName') +" "+ localStorage.getItem('lastName');


        return (
            <nav>
                <div id="nav-left-holder">
                    <img src={appIcon} id="healfyIconNav"/>
                    healfy
                </div>

                <div className="option-link-holder">
                    Strona główna
                </div>


                <div id="nav-account-holder">
                    <div id="profile-picture-holder" style={profilePictureSetter}></div>
                    <p id="nav-user-name">{name}</p>  

                    <div id="nav-account-options-holder">
                        <div className="nav-account-option">Twoje konto</div>
                        <Link to="/login"><div className="nav-account-option" onClick={this.logout}>Wyloguj się</div></Link>

                    </div> 
                </div>

            </nav>
         )
    }
}
 
export default Navbar;