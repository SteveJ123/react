import React from 'react';
import './PersonDetails.css';

const PersonDetails = ({jsonText, filterDetails }) => {
    return (
        <div>
            {jsonText && filterDetails === '' ? <ul>{jsonText.map((element)=>{
        return <li> {element.name} {element.number}</li>
      })}</ul> : null}
      {filterDetails ? <ul>{filterDetails.map((element)=>{
        return <li> {element.name} {element.number}</li>
      })}</ul> : null}     
        </div>
    )
    };


export default PersonDetails;
