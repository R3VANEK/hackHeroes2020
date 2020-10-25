import React, { Component } from 'react';


import './Statystyki.css'
import 'react-calendar/dist/Calendar.css';

import Wykresy from './Wykresy'
import CurrentData from './CurrentData'






class Statystyki extends Component {

    componentDidMount(){
        let id = localStorage.getItem('user_id')
        fetch(`http://51.68.136.252:4000//getByUser/${id}`,{
            method : "GET",
            headers : {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            res = res.json()
        }).then((data)=>{
            console.log(data)
        })
    }


    state = { 
    
        lastDaysData : [
            { date : new Date(Date.now()), mood : 10, temperature : 36.6, sleep: 8, pulse : 120},
            { date : new Date(new Date().setDate(new Date().getDate()-1)), mood : 8, temperature : 37.0, sleep: 10, pulse : 110},
            { date : new Date(new Date().setDate(new Date().getDate()-2)), mood : 6, temperature : 37.5, sleep: 6, pulse : 100},
            { date : new Date(new Date().setDate(new Date().getDate()-3)), mood : 5, temperature : 38.0, sleep: 5, pulse : 110},
            { date : new Date(new Date().setDate(new Date().getDate()-4)), mood : 6, temperature : 37.2, sleep: 8, pulse : 120},
            { date : new Date(new Date().setDate(new Date().getDate()-5)), mood : 7, temperature : 36.9, sleep: 9, pulse : 90}
        ],
        currentDisplayData : {date : new Date(Date.now()), mood : 10, temperature : 36.6, sleep: 8, pulse : 120},

        Components : {
            CurrentData : CurrentData,
            Wykresy : Wykresy,
        },
        whichToDisplay : CurrentData,
    }

    changeDiv = (Component) =>{
        this.setState({whichToDisplay : this.state.Components[Component]})
    }



    render() { 

        return ( 
            <main>
                <div id="lekarze-top-holder">
                    <div class="lekarze-subpage-link" onClick={()=>{this.changeDiv("CurrentData")}}>
                        Dzisiejsze dane
                    </div>

                    <div class="lekarze-subpage-link" onClick={()=>{this.changeDiv("Wykresy")}}>
                        Wykresy
                    </div>
                </div>

                {<this.state.whichToDisplay lastDayData={this.state.lastDaysData} currentDisplayData={this.state.currentDisplayData}/>}
            </main>
         );
    }
}
 
export default Statystyki;