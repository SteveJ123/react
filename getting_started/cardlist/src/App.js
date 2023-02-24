import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import Buttonclick from "./Buttonclick";
import Result from "./Result";
import Card from "./Card";
import Cardlist from './Cardlist';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      cards: []
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
  
  // resp.data cardInfo = resp.data cards = [] {zpao}
    addNewCard = (cardInfo) => {// wait
        console.log("cardInfo", cardInfo);// are you able to see my screen
        // this.setState(prevState => ({ cards: prevState.cards.concat(cardInfo) }));
        const newCards = this.state.cards;
        newCards.push(cardInfo);
        this.setState({ cards: newCards });
        // this.setState({
        //     cards: this.state.cards.push(cardInfo)
        // });
  }

    render() {
        console.log('Render time cards: ' + JSON.stringify(this.state.cards, null, 2));
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
    )            
      
  }
}




export default App;
