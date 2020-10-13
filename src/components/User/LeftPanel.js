import React from 'react'
import './LeftPanel.css'
import videoIcon from '../../icons/video-white.svg';
import receiptIcon from '../../icons/receipt-white.svg';
import graphIcon from '../../icons/graph-white.svg';
import accountIcon from '../../icons/account-white.svg';
import doctorIcon from '../../icons/doctor-white.svg';



const LeftPanel = () =>{

    

    return(
        <aside>
            <p class="aside-title-span">Zakładki</p>

            <div class="aside-option-div">
                <img src={videoIcon} class="option-img"/>Teleporada
            </div>

            
            <div class="aside-option-div">
                <img src={receiptIcon} class="option-img"/> Twoje recepty
            </div>

            <div class="aside-option-div">
                <img src={graphIcon} class="option-img"/> Twoje statystyki
            </div>

            <div class="aside-option-div">
                <img src={accountIcon} class="option-img"/> Twoje konto
            </div>

            <div class="aside-option-div">
                <img src={doctorIcon} class="option-img"/> Dostępni lekarze
            </div>

            <p class="aside-title-span">Ostatnie spotkania</p>
             
            <div class="aside-last-call-holder">
                <div className="aside-doctor-picture-holder"></div>
                <p className="aside-doctor-user-name">Dr James Watson</p>   
            </div>

            <div class="aside-last-call-holder">
                <div className="aside-doctor-picture-holder"></div>
                <p className="aside-doctor-user-name">Dr Johny Sins</p>   
            </div>

            <div class="aside-last-call-holder">
                <div className="aside-doctor-picture-holder"></div>
                <p className="aside-doctor-user-name">Dr Dree</p>   
            </div>


        </aside>
    )
}

export default LeftPanel 