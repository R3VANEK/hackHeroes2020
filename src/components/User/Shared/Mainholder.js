import React from 'react';
import './Mainholder.css'

import Navbar from './Navbar';

import LeftPanelPatient from '../Patient/LeftPanel/LeftPanel';
import TeleporadaPatient from '../Patient/Teleporada/Teleporada'
import ReceptyPatient from '../Patient/Recepty/Recepty'
import StatystykiPatient from '../Patient/Statystyki/Statystyki'
import KontoPatient from '../Patient/Konto/Konto'
import LekarzePatient from '../Patient/Lekarze/Lekarze'
import ZaufaniPatient from '../Patient/ZaufaniLekarze/Zaufani'

import Welcome from '../Shared/Welcome'



const Mainholder = ({path, role}) =>{

    const components = {
        TeleporadaPatient : TeleporadaPatient,
        ReceptyPatient : ReceptyPatient,
        StatystykiPatient : StatystykiPatient,
        KontoPatient : KontoPatient,
        LekarzePatient : LekarzePatient,
        ZaufaniPatient : ZaufaniPatient,

        Welcome : Welcome

    }

    if(role == "patient"){
        console.log(path)
        let Component = (path != "Welcome") ? components[path+"Patient"] : components[path]
        console.log(Component)
        return(
            <div>
                <Navbar/>
                <LeftPanelPatient/>
                <Component/>
            </div>
            
        )
    }

    //lekarz
    else{
        return(
            //ułóż to podobne jak powyżej i będzie działać :)
            <div>
               <Navbar/> 
            </div>
        )
    }
    
}

 


/*class Mainholder extends React.Component {

    state = { 

        components : {
            TeleporadaPatient : TeleporadaPatient,
            ReceptyPatient : ReceptyPatient,
            StatystykiPatient : StatystykiPatient,
            KontoPatient : KontoPatient,
            LekarzePatient : LekarzePatient
        }

    }

    render() { 

        if(this.props.role == "patient"){
            let Component = this.state.components[this.props.path+"Patient"]
            return (props) => (
                <div>
                    <Navbar/>
                    <LeftPanelPatient/>
                    <Component {...props} />
                </div>  
            );
        }
        else{
            let Component = this.state.components[this.props.path+"Patient"]
            return (props) => (
                <div>
                    <Navbar/>
                    <LeftPanelPatient/>
                    <Component {...props} />
                </div>  
            );
        }
        
    }
}*/
 
/*const Mainholder = (path, role) =>{

    const components = useState({
        TeleporadaPatient : TeleporadaPatient,
        ReceptyPatient : ReceptyPatient,
        StatystykiPatient : StatystykiPatient,
        KontoPatient : KontoPatient,
        LekarzePatient : LekarzePatient

    })
        
    if(role == 'patient'){
        console.log(path+"Patient")
        let ComponentName = path+"Patient"
        let components = components
        return (props) => (
            <div>
                <Navbar/>
                <LeftPanelPatient/>
                <components[ComponentName] {...props} />
            </div>
          );
    }
    
    //doktor
    else{
        let ComponentName = path+"Doctor"
        return (props) => (
            <div>
                <Navbar/>
                <LeftPanelPatient/>
                <ComponentName {...props} />
            </div>
          );
    }
        
}*/
 
export default Mainholder;