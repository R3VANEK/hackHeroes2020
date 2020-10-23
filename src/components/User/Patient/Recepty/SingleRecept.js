import React from 'react'
import ReceptIcon from '../../../../icons/recept.svg'

const SingleRecept = ({recepta}) =>{
    return(
        <div class="recepta-holder">
            <div class="recept-upper-holder">
                <div class="recept-img-holder">
                    <img src={ReceptIcon} class="recept-img"/>
                </div>

                <p class="recept-title">{recepta.type}</p>
            </div>
            

            <p class="recept-data">Dawka : {recepta.injection}</p>
            <p class="recept-data">Godziny podania : {recepta.hours + ":" + recepta.minutes}</p>
            <p class="recept-data">Wystawił : {recepta.doctor}</p>
        </div>
    )
}

export default SingleRecept