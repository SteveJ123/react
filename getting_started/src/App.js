import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {



    constructor() {
        super();
        console.log(this);
    }
    state = { counter: 0 };
    
  handleClick = (incrementValue) => {
      this.setState(prevState => ({ counter: prevState.counter + incrementValue }));
  };

  render() {
    return <div>
        <Buttonclick incrementValue={1} onClickFunction={this.handleClick} />
        <Buttonclick incrementValue={2} onClickFunction={this.handleClick} />
        <Buttonclick incrementValue={5} onClickFunction={this.handleClick} />
        <Buttonclick incrementValue={10} onClickFunction={this.handleClick} />
        <Result counter={this.state.counter} />
      </div>;
  }
}

class Buttonclick extends React.Component {
    handleIncrement = () => {
        this.props.onClickFunction(this.props.incrementValue);
    }
       

    render() {
        return <button onClick={this.handleIncrement}>
            Click {this.props.incrementValue}
          </button>;
    }
}



const Result = (props) => {
    
    return (
        <div>{props.counter}</div>
       );
}

export default App;
