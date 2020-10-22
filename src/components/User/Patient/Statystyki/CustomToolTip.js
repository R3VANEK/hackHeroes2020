import React from 'react'

const CustomToolTip = ({payload, label, active}) =>{

    //label to dane o dniu roku
    

    if(active && payload[0]){
        
        console.log(payload, label, active)
        
        let dataType = payload[0].name
        let dataDisplayValue = ""
        switch(dataType){

            case "mood":
                dataType = "samopoczucie"
                dataDisplayValue = payload[0].value +"/10"
                break;
            
            case "temperature":
                dataType = "temperatura"
                dataDisplayValue = payload[0].value + " \u00B0 C"
                break;
            
            case "sleep":
                dataType = "godziny snu"
                dataDisplayValue = payload[0].value
                break;
            
            case "pulse":
                dataType = "puls"
                dataDisplayValue = payload[0].value + "/min"
                break;
        }

        return(
        <div className="customToolTip">
            <p class="label">{dataType+ " : " + dataDisplayValue}</p>
            <p class="label">{label}</p>
        </div>)
    }
    else{
        return null
    }
    
}

export default CustomToolTip