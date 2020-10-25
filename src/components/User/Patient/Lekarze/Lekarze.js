import React, { Component } from 'react';
import './Lekarze.css'

import profPicture from '../../../../images/sam.jpeg'

class Lekarze extends Component {

    state = { 

        lekarze: [],

        searchCity : ''
    }

    componentDidMount() {
        fetch(`http://51.68.136.252:8000/get_all_doctors/` , {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
          .then(data => {
            console.log(data);
            let items = []
            data.forEach(item =>{
                items.push({
                    firstName: item["first_name"],
                    lastName: item["last_name"],
                    specialization: item["additional_data"][0]["specialization"],
                    city: item["additional_data"][0]["city"],
                    phoneNumber: item["additional_data"][0]["phoneNumber"],
                    rates: [0, 0]
                })
            })
            this.setState({lekarze: items})
        })
    }

    changeHandler = (event) =>{
        this.setState({searchCity : event.target.value})
    }

    submitHandler = () =>{
        let helpArray = this.state.lekarze.filter((el)=>{
            return el.city == this.state.searchCity
        })
        this.setState({lekarze : helpArray})
    }

    render() { 

        const lekarze_array = this.state.lekarze.map((el)=>{
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