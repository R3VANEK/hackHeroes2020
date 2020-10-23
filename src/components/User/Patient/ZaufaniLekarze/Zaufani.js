import React, { Component } from 'react';
import '../Lekarze/Lekarze.css'

import profPicture from '../../../../images/sam.jpeg'
import Xicon from '../../../../icons/xicon2.png'

import DeleteDiv from './DeleteDiv'

class ZaufaniLekarze extends Component {

    state = { 

        DUMMY_DATA_LEKARZE : [
            { id : 0, firstName: 'Łukasz', lastName : 'Kowalski', specialization : 'lekarz rodzinny', city : 'Toruń', phoneNumber : '567 890 123', rates : [80,4] },
            { id : 1, firstName: 'Adrian', lastName : 'Skalski', specialization : 'pediatra', city : 'Toruń', phoneNumber : '567 850 123', rates : [78,2] },
            
        ],  

        renderDeleteDiv : true,
        dataDelete :  {}
    }

    deleteDoctor = (id) =>{
        document.getElementsByClassName('blur')[0].classList.add('activeBlur')
        
        let doctorsArray = this.state.DUMMY_DATA_LEKARZE
        let doctorToDelete = doctorsArray.find((el)=>{
            return el.id == id
        })
       
        this.setState({dataDelete : doctorToDelete},()=>{
            this.setState({renderDeleteDiv : true},()=>{
                document.getElementById('ZaufaniLekarze-delete-flying-holder').style.display = "block"
            })
        })
        
        
    }

    closeDeleteDiv = () =>{
        document.getElementById('ZaufaniLekarze-delete-flying-holder').style.display = "none"
        document.getElementsByClassName('blur')[0].classList.remove('activeBlur')
        this.setState({renderDeleteDiv : false})
    }

    acceptDelete = () =>{
        //do stuff usuwaj użytkownika po id w dataDelete a potem czyść dataDelete z statea
    }

    render() { 

        const deleteDiv = (this.state.renderDeleteDiv) ? <DeleteDiv doctor={this.state.dataDelete} closeDeleteDiv={this.closeDeleteDiv}/> : null

        const lekarze_array = this.state.DUMMY_DATA_LEKARZE.map((el)=>{
            return(
                <div class="lekarz-holder">
                    <div class="lekarze-img-holder"></div>
                    <div class="lekarze-name">
                        {el.firstName+' '+el.lastName}<br/>
                        {el.specialization}
                    </div>
                    <div class="lekarze-name">
                        {el.city}<br/>
                        {el.phoneNumber}
                    </div>
                    <div class="lekarze-name">
                        <span style={{color:'rgb(59, 195, 4'}}>Pozytywne opinie : {el.rates[0]}</span><br/>
                        <span style={{color:'red'}}>Negatywne opinie : {el.rates[1]}</span>
                    </div>

                    <div class="zaufaniLekarze-delete-holder" onClick={()=>{this.deleteDoctor(el.id)}}>
                        <img src={Xicon} class="zaufaniLekarze-delete-img"/>
                    </div>
                </div>
            )
        })
        return ( 
            <main>

                {deleteDiv}

                <div id="subpage-holder">
                    <div id="zaufaniLekarze-description-holder">
                        Na tej liście znajdują się lekarze, którym zaufałeś. Mają oni dostęp do twoich personalnych danych aby w razie choroby jak najlepiej służyć Ci pomocą.
                        Gdybyś przestał korzystać z usług któregoś z lekarzy albo ten nadurzył twojego zaufania możesz usunąć go z tej listy
                    </div>
                    {lekarze_array}
                </div>
            </main>
         );
    }
}
 
export default ZaufaniLekarze;