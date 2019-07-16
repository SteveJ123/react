import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Countries from './components/Countries/Countries';

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
    if(search === ''){
      alert("enter value");
      return;
    }
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
        find countries:<input type="text" onChange={e=> setsearch(e.target.value)} />
        <button onClick={getData}>click</button>
      </div>
      <Countries countries={countries} filter={filter} />
    </div>
  );
};

export default App;
