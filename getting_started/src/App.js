import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import Buttonclick from "./Buttonclick";
import Result from "./Result";
// import Card from "./Card";
import Cardlist from './Cardlist';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      cards: [ ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef();
    console.log("myRef", this.myRef);
  }

  handleClick(incrementValue) {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  }
  // state = { counter: 0 };

  //   handleClick = (incrementValue) => {
  //       this.setState(prevState => ({ counter: prevState.counter + incrementValue }));
  //   };
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({ cards: prevState.cards.concat(cardInfo) }));
  }

  render() {
    return (
      <div>
        <Buttonclick incrementValue={1} onClickFunction={this.handleClick} />
        <Buttonclick incrementValue={2} onClickFunction={this.handleClick} />
        <Buttonclick incrementValue={5} onClickFunction={this.handleClick} />
        <Buttonclick incrementValue={10} onClickFunction={this.handleClick} />
        <Result counting={this.state.counter} />
        <Form onSubmit={this.addNewCard} />
        <Cardlist list={this.state.cards} />        
      </div>
    );
  }
}


// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
