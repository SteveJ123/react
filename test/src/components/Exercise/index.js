import React from "react";
import ExerciseItem from "../ExerciseItem";

export default class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.ExerciseType} Exercise</h1>
        {this.props.ExerciseItems.map((item) => (
          <ExerciseItem {...item} />
        ))}<p></p>
      </div>
    );
  }
}