import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

const App = () => {


const [countries, setcountries] = useState('');
const [search, setsearch] = useState('');
const [filter, setfilter] = useState('');

  useEffect(()=>{
    
      const promise = axios.get('https://restcountries.eu/rest/v2/all')
  
  promise.then(response => {
    
    let result = response.data;
    console.log(result);
    let arrayvalue = [...result];
    setcountries(arrayvalue);
  
    })
  }, []);
  
  const getData = () =>{
    console.log("search", search);
    let result = countries.filter((element)=>{
      return element.name.toLowerCase().includes(search.toLowerCase());      
    });
    console.log(result);
    setfilter(result);
    console.log("filter", filter);
  }

  return (
    <div className="App">
      <div>
        <input type="text" onChange={e=> setsearch(e.target.value)} />
        <button onClick={getData}>click</button>
      </div>
      { countries && filter === '' ?
         <ol>{countries.map(element => <li>{element.name}</li>)}</ol>
         :null}
         { filter ?
         <ol>{filter.map(element => <li>{element.name}</li>)}</ol>
        // <span>test</span>
         :null}
    </div>
  );
};

export default App;
