import React, { Component } from 'react';


import './Statystyki.css'
import 'react-calendar/dist/Calendar.css';

import Wykresy from './Wykresy'
import CurrentData from './CurrentData'






class Statystyki extends Component {

    componentDidMount(){
        /*document.getElementsByClassName('date-prev-holder')[5].classList.add('active')*/
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

        Components : {
            CurrentData : CurrentData,
            Wykresy : Wykresy,
        },
        whichToDisplay : Wykresy,
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

                {<this.state.whichToDisplay lastDayData={this.state.lastDaysData}/>}

                {/*<div id="lekarze-left-holder">
                        
                    <div id="date-help-holder">
                        <div class="date-prev-holder" onClick={()=>{this.changeDisplayData(5)}}>{this.state.currentDate.getDate()-5}<br/>{this.state.shortMonths[this.state.currentDate.getMonth()]}</div>
                        <div class="date-prev-holder" onClick={()=>{this.changeDisplayData(4)}}>{this.state.currentDate.getDate()-4}<br/>{this.state.shortMonths[this.state.currentDate.getMonth()]}</div>
                        <div class="date-prev-holder" onClick={()=>{this.changeDisplayData(3)}}>{this.state.currentDate.getDate()-3}<br/>{this.state.shortMonths[this.state.currentDate.getMonth()]}</div>
                        <div class="date-prev-holder" onClick={()=>{this.changeDisplayData(2)}}>{this.state.currentDate.getDate()-2}<br/>{this.state.shortMonths[this.state.currentDate.getMonth()]}</div>
                        <div class="date-prev-holder" onClick={()=>{this.changeDisplayData(1)}}>{this.state.currentDate.getDate()-1}<br/>{this.state.shortMonths[this.state.currentDate.getMonth()]}</div>
                        <div class="date-prev-holder" onClick={()=>{this.changeDisplayData(0)}}>{this.state.currentDate.getDate()}<br/>{this.state.shortMonths[this.state.currentDate.getMonth()]}</div>
                    </div>
                    
                    <div class="stats-holder">
                        <div class="stats-img-holder lime">
                            <img src={MoodIcon} class="stats-icon"/>
                        </div>
                        <div class="stats-name-holder">
                            Samopoczucie<span class="stats-colored lime text"> {this.state.currentDisplayData.mood}/10</span>
                        </div>
                        <input type="range" class="input-range" min="1" max="10" step="1" onChange={(event)=>{this.statsChange(event, 'mood')}}/>
                    </div>

                    <div class="stats-holder">
                        <div class="stats-img-holder red">
                            <img src={TemperatureIcon} class="stats-icon "/>
                        </div>
                        <div class="stats-name-holder">
                            Temperatura<span class="stats-colored red text"> {this.state.currentDisplayData.temperature} &deg; C</span>
                        </div>
                        <input type="range" class="input-range" min="34.8" max="40" step="0.1"  onChange={(event)=>{this.statsChange(event, 'temperature')}}/>
                    </div>
                    
                    <div class="stats-holder">
                        <div class="stats-img-holder purple">
                            <img src={MoonIcon} class="stats-icon "/>
                        </div>
                        <div class="stats-name-holder">
                            Sen<span class="stats-colored purple text"> {this.state.currentDisplayData.sleep} godziny</span>
                        </div>
                        <input type="range" class="input-range" min="1" max="16" step="1" onChange={(event)=>{this.statsChange(event, 'sleep')}}/>
                    </div>

                    <div class="stats-holder">
                        <div class="stats-img-holder blue">
                            <img src={HearthIcon} class="stats-icon "/>
                        </div>
                        <div class="stats-name-holder">
                            Puls<span class="stats-colored blue text"> {this.state.currentDisplayData.pulse} /min</span>
                        </div>
                        <input type="range" class="input-range" min="40" max="200" step="10" onChange={(event)=>{this.statsChange(event, 'pulse')}}/>
                    </div>
                </div>


                <div id="lekarze-right-holder">
                    <Calendar
                        onChange={this.onCalendarChange}
                        value={this.state.date}
                        className="calendar"
                    />

                    <div class="reminder">
                        <div class="date-reminder-holder">19<br/>Sep</div>
                        <div class="name-reminder-holder">Teleporada z dr. Kowalskim</div>
                    </div>

                    <div class="reminder">
                        <div class="date-reminder-holder">20<br/>Sep</div>
                        <div class="name-reminder-holder">Videochat z dr. Gruszką</div>
                    </div>

                    <div class="reminder">
                        <div class="date-reminder-holder">9<br/>Oct</div>
                        <div class="name-reminder-holder">Videochat z dr. Targowskim</div>
                    </div>
                </div> */}
            </main>
         );
    }
}
 
export default Statystyki;