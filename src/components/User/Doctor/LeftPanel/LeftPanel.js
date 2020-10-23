import React from 'react'
import {NavLink} from 'react-router-dom'
import './LeftPanel.css'

import videoIcon from '../../../../icons/video-white.svg';
import receiptIcon from '../../../../icons/receipt-white.svg';
import graphIcon from '../../../../icons/graph-white.svg';
import accountIcon from '../../../../icons/account-white.svg';
import doctorIcon from '../../../../icons/doctor-white.svg';



const LeftPanelDoctor = () =>{

    

    return(
        <aside>
            <p class="aside-title-span">Zakładki</p>

            <NavLink to="/teleporada" class="nav-links">
                <div class="aside-option-div">
                    <img src={videoIcon} class="option-img"/> Teleporada
                </div>
            </NavLink>
            

            <NavLink to="/recepty" class="nav-links">
                <div class="aside-option-div">
                    <img src={receiptIcon} class="option-img"/> Wypisane recepty
                </div>
            </NavLink>
            

            <NavLink to="/statystyki" class="nav-links">
                <div class="aside-option-div">
                    <img src={graphIcon} class="option-img"/> Statystyki pacjentów
                </div>
            </NavLink>
            

            <NavLink to="/konto" class="nav-links">
                <div class="aside-option-div">
                    <img src={accountIcon} class="option-img"/> Twoje konto
                </div>
            </NavLink>
            
            

            <p class="aside-title-span">Ostatnie spotkania</p>
             
            <div class="aside-last-call-holder">
                <div className="aside-doctor-picture-holder"></div>
                <p className="aside-doctor-user-name">Jan Kowalski</p>   
            </div>

            <div class="aside-last-call-holder">
                <div className="aside-doctor-picture-holder"></div>
                <p className="aside-doctor-user-name">Grażyna Nowak</p>   
            </div>

            <div class="aside-last-call-holder">
                <div className="aside-doctor-picture-holder"></div>
                <p className="aside-doctor-user-name">Janusz Pacjent</p>   
            </div>


        </aside>
    )
}

export default LeftPanelDoctor;