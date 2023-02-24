import React from 'react';
import './CountryFlag.css';


const CountryFlag = ({element}) =>{

    return(
        <div>
            <img src={element.flag}/>
        </div>
    )
}

export default CountryFlag;