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
      
        if (event.target.value === "") {
            alert(`input ${event.target.name} is empty`);
            return false;  
        } 
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("event", event.target);
      var username = event.target.username.value;
      var email = event.target.email.value;
      var mobile = event.target.mobile.value;
      //input box is empty
      if (
        username === "" ||
        email === "" ||
        mobile === "" ||
        event.target.password.value === ""
      ) {
        alert(`input is empty`);
        //   return false;
      }

      function userNameValidation(username){
          var regexp = new RegExp("^[a-zA-Z]+$");
          if (username.match(regexp)) {
              alert("name entered is correct");
              //   return true;
          } else {
              alert("enter the correct name");
              //   return false;
          }
      }
      


      function emailValidation(email) {
          var emailvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (email.match(emailvalid)) {
              alert("Email Validation: Successful.");
                // return true;
          } else {
              alert("check email entered");
                // return false;
          }

      }

      function mobileValidation(mobile){
          var phoneno = /^\d{10}$/;
          if(mobile.match(phoneno)) {
              alert("mobile number is correct");
            //   return true;
          }
          else {
              alert("check mobile number");
            //   return false;
          }
      }

      //input box all text entered or number typed with name - user name
      if (username) {
          userNameValidation(username);
      }

      if (email) {
          emailValidation(email);
          
      }

      if (mobile) {
          mobileValidation(mobile);
      }
      

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
            type="password"
          />

          <input type="submit" id="register" value="REGISTER" />
        </form>
      </div>
    );
  }
}

export default FillForm;
