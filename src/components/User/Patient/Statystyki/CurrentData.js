import React from 'react'
import Calendar from 'react-calendar';

import MoodIcon from '../../../../icons/mood.svg'
import TemperatureIcon from '../../../../icons/temperature.svg'
import MoonIcon from '../../../../icons/moon.svg'
import HearthIcon from '../../../../icons/hearth.svg'

class CurrentData extends React.Component {

    componentDidMount(){
        document.getElementsByClassName('date-prev-holder')[5].classList.add('activeStats')
        this.setState({
            lastDaysData : this.props.lastDayData,
            currentDisplayData : this.props.currentDisplayData
        })
    }

    state = { 
        shortMonths : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        currentDisplayData :[],
        currentDate : new Date(Date.now()),
        lastDaysData : []
    }


    changeDisplayData = (id) =>{
        for(let i = 0; i<6;i++){
            document.getElementsByClassName('date-prev-holder')[i].classList.remove('activeStats')
        }
        document.getElementsByClassName('date-prev-holder')[5-id].classList.add('activeStats')

        
        this.setState({
            currentDisplayData : {
                ...this.state.lastDaysData[id]
            }
        })
    }

    onCalendarChange = (date) => {
        this.setState({ date })
    }

    statsChange = (event, parameter) =>{
        let date = this.state.currentDisplayData.date
        let copyState = this.state.lastDaysData
        console.log(copyState[0].date, new Date(Date.now()))
        let index = copyState.findIndex((el)=>{
            console.log(el.date.getTime(), date.getTime())
            return el.date.getTime() === date.getTime()
        })
        console.log(copyState, index)
        let element = copyState[index]
        console.log(element)
        element[parameter] = event.target.value
        copyState[index] = element
        let prevCurrent = this.state.currentDisplayData
        this.setState({lastDaysData : [...copyState]})
        this.setState({currentDisplayData : {
                ...prevCurrent,
                [parameter] : event.target.value
            }
        })
    }

    render() { 
        return (  
        <>
            <div id="lekarze-left-holder">
                        
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
            </div>
        </>);
    }
}
 
export default CurrentData;