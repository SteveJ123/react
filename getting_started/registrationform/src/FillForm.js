import React from "react";

class FillForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("/api/form-submit-url", {
      method: "POST",
      body: data
    });
  }

  render() {
    return <div>
        <form className="container" onSubmit={this.handleSubmit}>
            <h1>USER</h1>
          <input id="username" name="username" placeholder="Name" type="text" />

          <input id="email" name="email" placeholder="EMAIL" type="email" />

          <input id="mobile" name="mobile" placeholder="Mobile" type="text" />

          <input id="password" name="password" placeholder="Password" type="text" />

            <button id="register">REGISTER</button>
        </form>
      </div>;
  }
}

export default FillForm;
