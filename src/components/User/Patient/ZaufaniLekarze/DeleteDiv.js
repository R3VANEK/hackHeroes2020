import React from 'react'

const DeleteDiv = ({doctor, closeDeleteDiv}) =>{
    return(
        <div id="ZaufaniLekarze-delete-flying-holder">
                <div id="ZaufaniLekarze-delete-top-holder"></div>
                <p>Czy na pewno usunąć doktora {doctor.firstName + " " + doctor.lastName} z listy zaufanych lekarzy?</p>

                <div class="ZaufaniLekarze-button" onClick={closeDeleteDiv}>Nie</div>
                <div class="ZaufaniLekarze-button">Tak</div>
        </div>
    )
}

export default DeleteDiv