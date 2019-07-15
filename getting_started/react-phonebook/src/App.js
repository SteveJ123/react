import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import './App.css';

function App() {

  const [jsonText, setjsonText] = useState('');
  const [personName, setpersonName] = useState('');
  const [personNumber, setpersonNumber] = useState('');
  const [filterDetails, setfilterDetails] = useState('');

  useEffect(() => {
    const promise = axios.get('http://localhost:3001/persons')

promise.then(response => {
  
  let result = response.data;
  console.log(result);
  let arrayvalue = [...result];
  setjsonText(arrayvalue);

  })
  }, []);

    const inputData1 = (event) =>{
      let name = event.target.value;
      setpersonName(name);
    };
  
    const inputData2 = (event) =>{
      let number = event.target.value;
      setpersonNumber(number);
    };

    const getdata = () =>{
      console.log(personName, personNumber);
      console.log("before", jsonText);
      let result = {name: personName, number: personNumber};
      console.log("after", jsonText);
      setjsonText([...jsonText, result] ); 
    }
  
    const searchData = (event) =>{
      let searchValue = event.target.value;
      let data = [...jsonText];
      let result = data.filter((element) =>{
        return  element.name.toLowerCase().includes(searchValue.toLowerCase());
      } )
      setfilterDetails(result);
     
      console.log("result", result);
    }
  return (
    <div className="App">
     <Search searchData={searchData} />

      <div className="details">
        <div >
      <h4>add person name</h4>
      <input onChange={inputData1}></input>
      </div>
      <div>
      <h4>add phone number</h4>
      <input onChange={inputData2}></input>
      </div>
      <button onClick={getdata} >click</button>
      </div>
    <h1>person names</h1>      
      {jsonText && filterDetails === '' ? <ul>{jsonText.map((element)=>{
        return <li> {element.name} {element.number}</li>
      })}</ul> : null}
      {filterDetails ? <ul>{filterDetails.map((element)=>{
        return <li> {element.name} {element.number}</li>
      })}</ul> : null}     
      
    </div>
  );
}

export default App;
