import React, { useState } from "react";
import "./App.css";

const App = () => {
  let data = [
    { name: "Mesfin Tegegne ",number: '045-123456' },
    { name: "Timiro Ali ",number: '046-234567' },
    { name: "Nathan Mesfin ",number: '044-123000' },
    { name: "Hidaya Baba ",number: '049-096456' }
  
  ];
  const [persons, setPersons] = useState([...data]);


  //The newName state is meant
  //for controlling the form input element.
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState('0000');
  //Submit name

  const handleSubmit = event => {
    event.preventDefault();

    const existing = persons.find(
      x => x.name.toUpperCase().trim() === newName.toUpperCase().trim()
    );

    if (!existing) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      //setNewNumber(newNumber);
    } else {
      alert(`${newName} is already added to phonebook`);
    }

    setNewName(" ");
  };
  const personArray = persons.map((i, index) => (
    <li key={index}>
      {i.name} {i.number}
    </li>
  ));

  return (
    <div className="App">
      <h1 className="phonebook">Phonebook</h1>

      <form onSubmit={handleSubmit}>
        name:
        <input
          className="inputName"
          type="text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <br />
        number:
        <input
          className="inputNumber"
          type="text"
          value={newNumber}
          onChange={e => setNewNumber(e.target.value)}
        />
        <br />
        <button type="submit" className="add">
          Add
        </button>
      </form>
      <div className="list">
        <h2>Numbers</h2>
        {personArray}
      </div>
    </div>
  );
};

export default App;
