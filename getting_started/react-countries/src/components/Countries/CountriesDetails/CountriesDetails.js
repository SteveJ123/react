import React from 'react';


const CountriesDetails = ({element}) => {
    
        return (
            <div>
                <div>
              country: {element.name}
              <p><strong>capital:</strong>{element.capital}</p>
              <h1>languages</h1>
              <ul>{
                element.languages.map(x =>  <li>{x.name}</li> )
              }</ul>
              </div>
                
            </div>
        )
    
}

export default CountriesDetails
