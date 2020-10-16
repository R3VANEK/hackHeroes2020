import React from 'react';
import Navbar from './Navbar';
import LeftPanel from './LeftPanel';
import './Mainholder.css'



const Mainholder = (Component) =>{
        
    return (props) => (
        <div>
            <Navbar/>
            <LeftPanel/>
            <Component {...props} />
        </div>
      );
        
}
 
export default Mainholder;