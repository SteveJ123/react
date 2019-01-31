import React, { Component } from "react";
import "./App.css";

// import MyForm from "./MyForm";
// import Test from "./MyForm";
// import FillForm from "./FillForm";
import NewWorker from "./NewWorker";
class App extends Component {
  render() {
    return (
      <div className="App">
            {/* <FillForm /> */}
            <NewWorker/>
      </div>
    );
  }
}

export default App;
