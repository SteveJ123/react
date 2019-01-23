import React from "react";

import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";
import Number from "./Number";

export default class Game extends React.Component {
    state = {
        selectedNumber: [2, 4],
        numberOfStars: Math.floor(Math.random() * 9) + 1}
    numberClicked = (numClicked) => {
        if (this.state.selectedNumber.indexOf(numClicked) >= 0) { return };
        this.setState({
            selectedNumber: this.state.selectedNumber.concat(numClicked)
        })
    }
    unselectNumber = (numClicked) => {
        console.log("unselectedNumber", numClicked);
        this.setState(prevState => ({ selectedNumber: prevState.selectedNumber.filter(num=>num!==numClicked)}))
            }
  render() {
    return <div>
        <div className="GameContainer">
          <Stars numberOfStars={this.state.numberOfStars} />
          <Button />
          <Answer unselectNumber={this.unselectNumber} selectedNumber={this.state.selectedNumber} />
        </div>
        <div>
          <Number numberClicked={this.numberClicked} selectedNumber={this.state.selectedNumber} />
        </div>
      </div>;
  }
}
