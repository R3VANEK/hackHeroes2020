import React, { Component } from 'react';
import './Statystyki.css'
import Mainholder from '../Mainholder';

class Statystyki extends Component {
    state = {  }
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

                <div id="lekarze-left-holder"></div>
                <div id="lekarze-right-holder"></div>
            </main>
         );
    }
}
 
export default Statystyki;