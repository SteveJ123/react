import React, {useState} from 'react';
import './Countries.css';
import CountryFlag from '../CountryFlag/CountryFlag';
import CountriesDetails from './CountriesDetails/CountriesDetails';


const Countries = ({countries, filter, onClick, result, selectedCountry }) =>{
  const [test, settest] = useState('');
  
    return(
        <div>         

            { countries && filter === '' ?
         <ol>{countries.map(element => <li>{element.name}</li>)}</ol>
         :null}
         { filter ?
         filter && filter.length<10 ? filter && filter.length === 1 ?
          <div>{filter.map(element =>{
            return (
              <div>
              <CountriesDetails element={element} />              
              
              <CountryFlag element={element} />
              </div>
            )
          }
          
          )
         } 
         
         </div>:
         <div>
           {/* result ? <p>button clicked</p>: */}
         <ol>{result ? <div>
           <CountriesDetails element={selectedCountry}  />
          <CountryFlag element={selectedCountry} />
          </div>
         : filter.map((element, i) => <li>{element.name}
          <button className="displayoff" key={i} id={i}  onClick={onClick}>click here</button></li>)}</ol>
         </div>        
         :<span>greater than 10</span>:null }
        </div>
    )
}

export default Countries;