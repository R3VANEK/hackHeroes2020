import React, { Component } from 'react';

import Mainholder from '../Mainholder';
import Calendar from 'react-calendar';

import './Statystyki.css'
import 'react-calendar/dist/Calendar.css';

import MoodIcon from '../../../icons/mood.svg'
import TemperatureIcon from '../../../icons/temperature.svg'
import MoonIcon from '../../../icons/moon.svg'
import HearthIcon from '../../../icons/hearth.svg'




class Statystyki extends Component {
    state = { 
        date: new Date(),
        mood : 10,
        temperature : 36.6,
        sleep : 8,
        pulse : 120
    }

    onChange = date => this.setState({ date })

    statsChange = (event, parameter) =>{
        this.setState({[parameter] : event.target.value})
    }

    render() { 
        return ( 
            <main>
                <div id="lekarze-top-holder">
                    <div class="lekarze-subpage-link">
                        Dzisiejsze dane
                    </div>

                    <div class="lekarze-subpage-link">
                        Wykresy
                    </div>
                </div>

                <div id="lekarze-left-holder">
                    <div id="date-help-holder">
                        <div class="date-prev-holder">14 <br/>Sep</div>
                        <div class="date-prev-holder">15 <br/>Sep</div>
                        <div class="date-prev-holder">16 <br/>Sep</div>
                        <div class="date-prev-holder">17 <br/>Sep</div>
                        <div class="date-prev-holder">18 <br/>Sep</div>
                        <div class="date-prev-holder">19 <br/>Sep</div>
                    </div>
                    
                    <div class="stats-holder">
                        <div class="stats-img-holder lime">
                            <img src={MoodIcon} class="stats-icon"/>
                        </div>
                        <div class="stats-name-holder">
                            Samopoczucie<span class="stats-colored lime text"> {this.state.mood}/10</span>
                        </div>
                        <input type="range" class="input-range" min="1" max="10" step="1" onChange={(event)=>{this.statsChange(event, 'mood')}}/>
                    </div>

                    <div class="stats-holder">
                        <div class="stats-img-holder red">
                            <img src={TemperatureIcon} class="stats-icon "/>
                        </div>
                        <div class="stats-name-holder">
                            Temperatura<span class="stats-colored red text"> {this.state.temperature} &deg; C</span>
                        </div>
                        <input type="range" class="input-range" min="34.8" max="40" step="0.1"  onChange={(event)=>{this.statsChange(event, 'temperature')}}/>
                    </div>
                    
                    <div class="stats-holder">
                        <div class="stats-img-holder purple">
                            <img src={MoonIcon} class="stats-icon "/>
                        </div>
                        <div class="stats-name-holder">
                            Sen<span class="stats-colored purple text"> {this.state.sleep} godziny</span>
                        </div>
                        <input type="range" class="input-range" min="1" max="16" step="1" onChange={(event)=>{this.statsChange(event, 'sleep')}}/>
                    </div>

                    <div class="stats-holder">
                        <div class="stats-img-holder blue">
                            <img src={HearthIcon} class="stats-icon "/>
                        </div>
                        <div class="stats-name-holder">
                            Puls<span class="stats-colored blue text"> {this.state.pulse} /min</span>
                        </div>
                        <input type="range" class="input-range" min="40" max="200" step="10" onChange={(event)=>{this.statsChange(event, 'pulse')}}/>
                    </div>
                </div>


                <div id="lekarze-right-holder">
                    <Calendar
                        onChange={this.onChange}
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
                </div>
            </main>
         );
    }
}
 
export default Statystyki;