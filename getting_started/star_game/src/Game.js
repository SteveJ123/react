import React from "react";

import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";
import Number from "./Number";
import Done from "./Done";

export default class Game extends React.Component {
  state = {
    selectedNumber: [],
    numberOfStars: Math.floor(Math.random() * 9) + 1,
    answerIsCorrect: null,
      usedNumber: [],
    doneStatus: null
  };
  numberClicked = numClicked => {
    if (this.state.selectedNumber.indexOf(numClicked) >= 0) {
      return;
    }
    if (this.state.usedNumber.indexOf(numClicked) >= 0) {
      return;
    }
    this.setState({
      selectedNumber: this.state.selectedNumber.concat(numClicked)
    });
  };
  unselectNumber = numClicked => {
    console.log("unselectedNumber", numClicked);

    this.setState(prevState => ({
      selectedNumber: prevState.selectedNumber.filter(num => num !== numClicked)
    }));
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect:
        prevState.numberOfStars ===
        prevState.selectedNumber.reduce((acc, num) => acc + num, 0)
    }));
    console.log("answer is correct", this.state.answerIsCorrect);
  };
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumber: prevState.usedNumber.concat(this.state.selectedNumber),
      selectedNumber: [],
      answerIsCorrect: null,
      numberOfStars: Math.floor(Math.random() * 9) + 1
    }));
      if (this.state.usedNumber.length === 8) {
          this.doneStatus = true;
          console.log('alert');
          alert("winner")
      }
    // if (
    //   JSON.stringify(this.state.usedNumber.sort()) ===
    //   JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])
    // ) {
    //   alert("winner");
    //   return;
    // } else {
    //     console.log('winner state check', this.state.usedNumber);
    // }
  };

  redraw = () => {
    this.setState({
      numberOfStars: Math.floor(Math.random() * 9) + 1,
      selectedNumber: [],
      answerIsCorrect: null
    });
  };

  render() {
    return (
      <div>
        <div className="GameContainer">
          <Stars numberOfStars={this.state.numberOfStars} />
          <Button
            answerIsCorrect={this.state.answerIsCorrect}
            checkAnswer={this.checkAnswer}
            selectedNumber={this.state.selectedNumber}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
          />
          <Answer
            unselectNumber={this.unselectNumber}
            selectedNumber={this.state.selectedNumber}
          />
        </div>
            <div>
                {this.state.doneStatus ? <Done /> : <Number
                    numberClicked={this.numberClicked}
                    selectedNumber={this.state.selectedNumber}
                    usedNumber={this.state.usedNumber}
                />}
          
          
        </div>
      </div>
    );
  }
}
