import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip} from 'recharts';
import './Statystyki.css'


class Wykresy extends React.Component {

    componentDidMount(){
        this.setState({
            DaysData : this.props.lastDayData
        })
    }

    state = { 
        DaysData : [],
        showParameter : "mood"
    }

    formatXAxis = (tickItem) =>{
        return tickItem.slice(0,2)
    }
    render() 
    { 
        const data = [
            { date : '20-10-2020', mood : 10, temperature : 36.6, sleep: 8, pulse : 120},
            { date : '19-10-2020', mood : 8, temperature : 37.0, sleep: 10, pulse : 110},
            { date : '18-10-2020', mood : 6, temperature : 37.5, sleep: 6, pulse : 100},
            { date : '17-10-2020', mood : 5, temperature : 38.0, sleep: 5, pulse : 110},
            { date : '16-10-2020', mood : 6, temperature : 37.2, sleep: 8, pulse : 120},
            { date : '15-10-2020', mood : 7, temperature : 36.9, sleep: 9, pulse : 90}
        ]
        
        return (
            <>
                <div id="wykresy-holder">
                    <div id="wykresy-parameter-holder"></div>
                    <div class="arrow-holder">&lt;</div>
                    <div class="arrow-holder second">&gt;</div>
                    <LineChart width={600} height={400} data={data}>
                        <Line type="monotone" dataKey={this.state.showParameter} stroke="#8884d8" strokeWidth={2} />
                        <CartesianGrid stroke="#ccc"  />
                        <XAxis dataKey="date"tickFormatter={this.formatXAxis}/>
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </>
            
        );
    }
}
 
export default Wykresy;