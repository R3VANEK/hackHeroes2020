import React, { Component } from 'react';
import Navbar from './Navbar';
import LeftPanel from './LeftPanel';
import './Mainholder.css'

class Mainholder extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Navbar/>
            <LeftPanel/>
            <main>
                
            </main>
        </div> )
    }
}
 
export default Mainholder;