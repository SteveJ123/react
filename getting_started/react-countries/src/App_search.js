import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Mesfin Tegegne" }]);

  //The newName state is meant
  //for controlling the form input element.
  const [newName, setNewName] = useState("");
  const [nameexists, setnameexists] = useState(false); //added
  //Submit name

  const handleSubmit = event => {
    event.preventDefault();
    var test = false;    

        for (let person in persons) {      
      if (persons[person].name === newName) {
        alert(`${newName} is already added to phonebook`);
         test = true;
        break;
    }    
  }
  if(test === false){
    // setNewName(newName);
    console.log("entered");
    let addname = persons.concat({ name: newName });
    setPersons(addname);
  }
      
    
  };
  const personArray = persons.map((i, index) => <li key={index}>{i.name}</li>);

  return (
    <div className="App">
      <h1>Phonebook</h1>

      <form onSubmit={handleSubmit}>
        name:
        <input
          type="text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {personArray}
    </div>
  );
};

export default App;
