import React from 'react'
import './LeftPanel.css'

const LeftPanel = () =>{
    return(
        <aside>
            <p class="aside-title-span">Zakładki</p>

            <div class="aside-option-div">Teleporada</div>
            <div class="aside-option-div">Twoje recepty</div>
            <div class="aside-option-div">Twoje statystyki</div>
            <div class="aside-option-div">Twoje konto</div>
            <div class="aside-option-div">Dostępni lekarze</div>

            <p class="aside-title-span">Ostatnie spotkania</p>

        </aside>
    )
}

export default LeftPanel 