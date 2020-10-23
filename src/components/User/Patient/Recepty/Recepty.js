import React, { Component } from 'react';
import './Recepty.css'

import SingleRecept from './SingleRecept'

class Recepty extends Component {
    state = { 

        recepty : [
            { type : 'Rutinoscorbin', injection : '500mg', doctor : 'Jan Kowalski', hours : '18', minutes : '30'},
            { type : 'Paracetamol', injection : '1 łyżka', doctor : 'Mikołaj Kowalski', hours : '12', minutes : '10'},
            { type : 'Berberil', injection : '500mg', doctor : 'Agata Ukońska', hours : '11', minutes : '30'},
        ]

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