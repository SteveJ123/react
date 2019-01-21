import React from "react";

import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";
import Number from "./Number";

export default class Game extends React.Component {
  render() {
    return <div>
        <div className="GameContainer">
          <Stars />
          <Button />
          <Answer />
        </div>
        <div>
          <Number />
        </div>
      </div>;
  }
}
