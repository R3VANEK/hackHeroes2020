import React, { Component } from 'react';
import './Recepty.css'

import SingleRecept from './SingleRecept'

class Recepty extends Component {
    state = { 
        
        recepty : [

        ]

     }

    componentDidMount () {
        fetch(`http://51.68.136.252:7000/medicaments/?user_id=${localStorage.getItem('user_id')}` , {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
          .then(data => {
            let items = []
            data.forEach(item =>{
                items.push({
                    type: item['medicament'],
                    injection: item['injection'],
                    doctor: item['doctor']['first_name'] + " " + item['doctor']['last_name'],
                    hours: item['medicament_date'][0]['hour'],
                    minutes: item['medicament_date'][0]['minute']
                })
            })
            this.setState({recepty: items})
        })
    }


    render() { 
        let receptyDivs = this.state.recepty.map((recepta)=>{
            return <SingleRecept recepta={recepta}/>
        })

        return ( 
            <main>
                <div id="subpage-holder">
                    {receptyDivs}
                </div>
            </main>
         );
    }
}
 
export default Recepty;