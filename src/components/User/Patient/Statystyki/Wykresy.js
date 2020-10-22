import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip} from 'recharts';
import './Statystyki.css'
import CustomToolTip from './CustomToolTip'

import MoodIcon from '../../../../icons/mood.svg'
import TemperatureIcon from '../../../../icons/temperature.svg'
import MoonIcon from '../../../../icons/moon.svg'
import HearthIcon from '../../../../icons/hearth.svg'


class Wykresy extends React.Component {

    componentDidMount(){
        this.setState({
            DaysData : this.props.lastDayData
        })
    }

    state = { 
        DaysData : [],

        showParameters : [
            {referenceName : "mood", name : "samopoczucie", color : "rgb(95, 221, 95)", icon : MoodIcon},
            {referenceName : "temperature", name : "temperatura", color : "rgb(221, 95, 95)", icon : TemperatureIcon},
            {referenceName : "sleep", name : "godziny snu", color : "rgb(171, 95, 221)", icon : MoonIcon},
            {referenceName : "pulse", name : "puls", color : "#006edc", icon : HearthIcon}
        ],

        iterate : 0
    }

    formatXAxis = () =>{
        return ""
    }

    changeIterate = (action) =>{
        let setValue = this.state.iterate
        
        setValue=setValue+=1
        if(action == "+"){
            setValue = (setValue == 4) ? setValue = 0 : setValue
        }
        else{
            setValue = (setValue == -1) ? setValue = 3 : setValue
        }
        this.setState({iterate : setValue})
        
    }

    render() 
    { 
        const data = [
            { date : '20-10-2020', mood : 10, temperature : 36.6, sleep: 8, pulse : 120},
            { date : '19-10-2020', mood : 8, temperature : 37.0, sleep: 10, pulse : 110},
            { date : '18-10-2020', mood : 6, temperature : 37.2, sleep: 6, pulse : 100},
            { date : '17-10-2020', mood : 5, temperature : 38.0, sleep: 5, pulse : 110},
            { date : '16-10-2020', mood : 6, temperature : 37.2, sleep: 8, pulse : 120},
            { date : '15-10-2020', mood : 7, temperature : 36.9, sleep: 9, pulse : 90}
        ]
        
        return (
            <>
                <div id="wykresy-holder">
                    <div id="wykresy-parameter-holder" style={{backgroundColor : this.state.showParameters[this.state.iterate].color}}>
                        <img src={this.state.showParameters[this.state.iterate].icon}/>
                        <p>{this.state.showParameters[this.state.iterate].name}</p>
                    </div>
                    <div class="arrow-holder" onClick={()=>{this.changeIterate("-")}}>&lt;</div>
                    <div class="arrow-holder second" onClick={()=>{this.changeIterate("+")}}>&gt;</div>
                    <LineChart width={600} height={400} data={data}>
                        <Line type="monotone" dataKey={this.state.showParameters[this.state.iterate].referenceName} stroke={this.state.showParameters[this.state.iterate].color} strokeWidth={2} />
                        <CartesianGrid stroke="#ccc"  />
                        <XAxis dataKey="date"tickFormatter={this.formatXAxis}/>
                        <YAxis />
                        <Tooltip content={<CustomToolTip/>}/>
                    </LineChart>
                </div>
            </>
            
        );
    }
}
 
export default Wykresy;