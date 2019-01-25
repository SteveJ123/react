import React from "react";

const Button = props => {
  let button;
    console.log('props.answerIsCorrect', props.answerIsCorrect);
  switch (props.answerIsCorrect) {
    case true:
      button = (
          <button className="btn btn-success" onClick={props.acceptAnswer}>
              <i className="fa fa-check"></i>
          </button>
      );
      break;
      case false:
          button = (
              <button className="btn btn-danger" onClick={props.checkAnswer}>
                  <i className="fa fa-times"></i>
              </button>
          );
      break;
    default:
      button = (
        <button
          className="Button"
          onClick={props.checkAnswer}
          disabled={props.selectedNumber.length === 0}
        >=</button>
      );
  }
    return <div>
        {button}
        <button className="btn btn-warning btn-sm" onClick={props.redraw}>
          <i className="fa fa-refresh" />
        </button>
      </div>;
};

export default Button;
