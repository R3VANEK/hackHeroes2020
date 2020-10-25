import React from 'react'
import './DodajRecepte.css'
import ReceptIcon from '../../../../icons/recept.svg'

class DodajRecepte extends React.Component{

    state = {

        email : "",
        dataToTransfer : [{
            name : "", injection : "", dates : [ {hour : "", minute : ""}]
        }]
    }

    addRecipe = (event) => {
        fetch('http://51.68.136.252:7000/medicaments/' , {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                    "user_id":localStorage.getItem('user_id'),
                    "patient_email":this.state.email,
                    "medicaments": [
                        {"medicament":this.state.dataToTransfer[0].name, "injection":this.state.dataToTransfer[0].injection, "dates": [
                            {"hour":this.state.dataToTransfer[0].dates[0].hour, "minute":this.state.dataToTransfer[0].dates[0].minute}
                        ]}
                    ]
                
            }),
        }).then(response => response.json())
          .then(data => {
           return alert("Poprawnie dodano nową receptę!")
        })
    }

    handleChange = (event) =>{
        let parameter = event.target.name

        switch(parameter){

            case "email":
                this.setState({email : event.target.value})
                break;

            case "name":
            case "injection":
                let prev = this.state.dataToTransfer
                prev[0][parameter] = event.target.value
                this.setState({dataToTransfer : prev})
                break;
            
            case "hour":
            case "minute":
                let prev1 = this.state.dataToTransfer
                prev1[0]["dates"][0][parameter] = event.target.value
                this.setState({dataToTransfer : prev1})
                break;

                
        }  
    }

    render(){
        return(
            <main>
                <div id="dodajRecepte-holder">
                    <div class="recept-upper-holder">
                        <div class="recept-img-holder">
                            <img src={ReceptIcon} class="recept-img"/>
                        </div>

                        <p class="recept-title">Wypisz recepte</p>
                    </div>
                    <div class="down-holder">
                        <input type="email" name="email" placeholder="Wpisz email pacjenta" class="dodaj-recepte-input" onChange={this.handleChange}/><br/>
                        <input type="text" name="name" placeholder="Wpisz nazwę leku" class="dodaj-recepte-input" onChange={this.handleChange}/><br/>
                        <input type="text" name="injection" placeholder="Wpisz dawkowanie leku" class="dodaj-recepte-input" onChange={this.handleChange}/>
                    </div>

                    <div class="down-holder">
                        <input type="text" name="hour" class="dodaj-recepte-input" placeholder="Godzina podania leku" onChange={this.handleChange}/>
                        <input type="text" name="minute" class="dodaj-recepte-input" placeholder="Minuty podania leku" onChange={this.handleChange}/><br/>

                        <div id="dodaj-recepte-submit-button" onClick={this.addRecipe}>Wypisz</div>
                    </div>
                    
                </div>
            </main>
        )
    }
}

export default DodajRecepte