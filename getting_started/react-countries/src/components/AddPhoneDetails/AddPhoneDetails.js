import React, {useState} from 'react';
import './AddPhoneDetails.css';


const AddPhoneDetails = (props) =>{
    // console.log("phonedetails", inputData1);
    const [name, setname] = useState('');
    const [number, setnumber] = useState('');
    const inputData1 = (event) =>{
         let name = event.target.value;
        setname(name);
      };
    
      const inputData2 = (event) =>{
        let number = event.target.value;
        setnumber(number);
      };

      const getdata = () =>{
          props.getdata(name, number);
      };
    return(
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
    )
    };

    export default AddPhoneDetails;

