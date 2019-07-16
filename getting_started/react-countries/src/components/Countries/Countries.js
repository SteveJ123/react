import React from 'react';
import './Countries.css';
import CountryFlag from '../CountryFlag/CountryFlag';


const Countries = ({countries, filter}) =>{

    return(
        <div>
            { countries && filter === '' ?
         <ol>{countries.map(element => <li>{element.name}</li>)}</ol>
         :null}
         { filter  ?
         filter && filter.length<10 ? filter && filter.length === 1 ?
          <div>{filter.map(element =>{
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
              <CountryFlag element={element} />
              </div>
            )
          }
          
          )
         } 
         
         </div>:
         <ol>{filter.map(element => <li>{element.name}</li>)}</ol>
        // <span>test</span>
         :<span>greater than 10</span>:null }
        </div>
    )
}

export default Countries;