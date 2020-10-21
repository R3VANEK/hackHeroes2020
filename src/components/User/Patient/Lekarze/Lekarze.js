import React, { Component } from 'react';
import './Lekarze.css'

import profPicture from '../../../../images/sam.jpeg'

class Lekarze extends Component {

    state = { 

        DUMMY_DATA_LEKARZE : [
            { firstName: 'Łukasz', lastName : 'Kowalski', specialization : 'lekarz rodzinny', city : 'Toruń', phoneNumber : '567 890 123', rates : [80,4] },
            { firstName: 'Adrian', lastName : 'Skalski', specialization : 'pediatra', city : 'Toruń', phoneNumber : '567 850 123', rates : [78,2] },
            { firstName: 'Jan', lastName : 'Wąsowski', specialization : 'urolog', city : 'Wrocław', phoneNumber : '517 480 723', rates : [120,15] },
            { firstName: 'Aneta', lastName : 'Targowska', specialization : 'psycholog', city : 'Poznań', phoneNumber : '510 480 723', rates : [40,1] }
        ],
        SORTED_DUMMY_DATA_LEKARZE : [
            { firstName: 'Łukasz', lastName : 'Kowalski', specialization : 'lekarz rodzinny', city : 'Toruń', phoneNumber : '567 890 123', rates : [80,4] },
            { firstName: 'Adrian', lastName : 'Skalski', specialization : 'pediatra', city : 'Toruń', phoneNumber : '567 850 123', rates : [78,2] },
            { firstName: 'Jan', lastName : 'Wąsowski', specialization : 'urolog', city : 'Wrocław', phoneNumber : '517 480 723', rates : [120,15] },
            { firstName: 'Aneta', lastName : 'Targowska', specialization : 'psycholog', city : 'Poznań', phoneNumber : '510 480 723', rates : [40,1] }
        ],

        searchCity : ''
    }

    changeHandler = (event) =>{
        this.setState({searchCity : event.target.value})
    }

    submitHandler = () =>{
        let helpArray = this.state.DUMMY_DATA_LEKARZE.filter((el)=>{
            return el.city == this.state.searchCity
        })
        this.setState({SORTED_DUMMY_DATA_LEKARZE : helpArray})
    }

    render() { 

        const lekarze_array = this.state.SORTED_DUMMY_DATA_LEKARZE.map((el)=>{
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
                </div>
            )
        })
        return ( 
            <main>
                <div id="subpage-holder">
                    <div id="city-input-holder">
                        <input type="text" placeholder="Podaj miasto" id="city-input" onChange={this.changeHandler}/>
                        <input type="submit" id="city-submit" value="Szukaj lekarzy" onClick={this.submitHandler}/>
                    </div>
                    {lekarze_array}
                </div>
            </main>
         );
    }
}
 
export default Lekarze;