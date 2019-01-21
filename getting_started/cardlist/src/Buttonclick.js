import React, { Component } from "react";


class Buttonclick extends React.Component {
    handleIncrement() {
        console.log("buttonclick", this);
        this.props.onClickFunction(this.props.incrementValue);
    }


    render() {
        return (
          <button onClick={this.handleIncrement.bind(this)}>
                Click
            {' '}
            {this.props.incrementValue}
          </button>
        );
    }
}


export default Buttonclick;
