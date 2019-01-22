import React from "react";

import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";
import Number from "./Number";

export default class Game extends React.Component {
    state = {selectedNumber:[2, 4]}
  render() {
    return <div>
        <div className="GameContainer">
          <Stars />
          <Button />
          <Answer selectedNumber={this.state.selectedNumber} />
        </div>
        <div>
            <Number selectedNumber={this.state.selectedNumber}/>
        </div>
      </div>;
  }
}
