import React from "react";

class FillForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: ",",
      email: "",
      mobile: "",
      password: ""
    };
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("event", event.target);

    console.log("event", this.state);
  }

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <h1>USER</h1>
          <input
            id="username"
            name="username"
            placeholder="Name"
                    onChange={this.handleChange}
            type="text"
          />

          <input
            id="email"
            name="email"
            placeholder="EMAIL"
                    onChange={this.handleChange}
            type="email"
          />

          <input
            id="mobile"
            name="mobile"
            placeholder="Mobile"
                    onChange={this.handleChange}
            type="text"
          />

          <input
            id="password"
            name="password"
            placeholder="Password"
                    onChange={this.handleChange}
            type="text"
          />

          <input type="submit" id="register" value="REGISTER" />
        </form>
      </div>
    );
  }
}

export default FillForm;
