import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import AddPhoneDetails from './components/AddPhoneDetails/AddPhoneDetails';
import PersonDetails from './components/PersonDetails/PersonDetails';
import './App.css';

function App() {

let persons = [
  { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
  },
  { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
  },
  { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
  },
  { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
  }
]



  const [jsonText, setjsonText] = useState([...persons]);
  // const [personName, setpersonName] = useState('');
  // const [personNumber, setpersonNumber] = useState('');
  const [filterDetails, setfilterDetails] = useState('');
  const [result, setresult] = useState('');

//   useEffect(() => {
//     const promise = axios.get('http://localhost:3001/persons')

// promise.then(response => {
  
//   let result = response.data;
//   console.log(result);
//   let arrayvalue = [...result];
//   setjsonText(arrayvalue);

//   })
//   }, []);

    

    const getdata = (name, number) =>{
      console.log(name, number);
      console.log("before", jsonText);
      let result = {name: name, number: number};
      console.log("after", jsonText);
      setjsonText([...jsonText, result] ); 
    }
  
    const searchData = (event) =>{
      let searchValue = event.target.value;
      let data = [...jsonText];
      let result = data.filter(element => {
        return element.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setfilterDetails(result);
     
      console.log("result", result);
    }


      const showButton = (event) =>{

    // event.target.className = "displayon";
    console.log("button clicked", event.target.id);
    console.log("filter",filterDetails);
    setresult("on");
  
              // console.log(event);
    // console.log(event.target.innerHTML = "change");
    
  } 

  return (
    <div className="App">
      
      <Search searchData={searchData} />
      <AddPhoneDetails getdata={getdata} />
      <h1>person names</h1>      
      <PersonDetails jsonText={jsonText} filterDetails={filterDetails} onClick={showButton} />
      
    </div>
  );
  }

export default App;
