import React, { Component } from 'react';
import axios from 'axios';



class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = event => {
    console.log("form", this.state.userName);
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        console.log(resp);
        console.log(resp.data);
        this.props.onSubmit(resp.data);
      });
  };
  //onSubmit={this.handleSubmit}
  render() {
    return (
    //   <form>
    <div>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
        />
            <button type="submit" onClick={this.handleSubmit} >Click me</button>
            </div>
    //</form>
    );
  }
}
export default Form;