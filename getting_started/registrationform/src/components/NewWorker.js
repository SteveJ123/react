import React from "react";
import WorkerList from "./WorkerList";
import WorkerSearch from "./WorkerSearch";
import WorkerDetails from "../WorkerDetails.json";

class NewWorker extends React.Component {
  constructor() {
    super();
    //   this.workerData = [];
    this.state = {
      fields: {},
        errors: {},
        workerData: [],
        workerDetails:null 
      //   value: 'select'
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
      );
    //   this.filterWorkerDetails = this.filterWorkerDetails.bind(this);
  }

  handleChange(e) {
    let stateFieldUpdate = this.state.fields;
      stateFieldUpdate[e.target.name] = e.target.value;
    this.setState({
        fields: stateFieldUpdate
    });
    console.log("event", e.target.value);
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    // if (this.validateForm()) {
    //   let fields = {};
    //   fields["username"] = "";
    //   fields["emailid"] = "";
    //   fields["mobileno"] = "";
    //   fields["password"] = "";
    //     this.setState({ fields: fields });
    //             // console.log("workerDataupdate", workerDataupdate);
    //     // this.setState({ workerData: workerDataupdate });
    //     console.log('inside validation');
    //   alert("Form submitted");
    //   }
      
      let fieldObject = { ...this.state.fields };      
      console.log("user data", this.state.fields);
    //   this.workerData.push(fieldObject);
      this.setState({ workerData: this.state.workerData.concat(fieldObject) })
      
      console.log("worker data", this.state.workerData);
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    // if (!fields["emailid"]) {
    //   formIsValid = false;
    //   errors["emailid"] = "*Please enter your email-ID.";
    // }

    // if (typeof fields["emailid"] !== "undefined") {
    //   //regular expression for email validation
    //   var pattern = new RegExp(
    //     /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    //   );
    //   if (!pattern.test(fields["emailid"])) {
    //     formIsValid = false;
    //     errors["emailid"] = "*Please enter valid email-ID.";
    //   }
    // }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    // if (!fields["password"]) {
    //   formIsValid = false;
    //   errors["password"] = "*Please enter your password.";
    // }

    // if (typeof fields["password"] !== "undefined") {
    //   if (
    //     !fields["password"].match(
    //       /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
    //     )
    //   ) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

    

    render() {
        { console.log("WorkerSearch", WorkerDetails);}
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3 id="nwregheader">{"Registration page".toUpperCase()}</h3>

          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <label>NAME</label>
            <input
              type="text"
              id="regname"
              name="name"
              onChange={
                this.handleChange //   value={this.state.fields.username}
              }
            />
            <div className="errorMsg">{this.state.errors.name}</div>
            <label>MOBILE</label>
            <input
              type="text"
              id="regmobileno"
              name="mobileno"
              onChange={
                this.handleChange //   value={this.state.fields.mobileno}
              }
            />
            <div className="errorMsg">{this.state.errors.mobileno}</div>
            <label>SALARY</label>
            <input
              type="number"
              id="regsalary"
              name="salary"
              onChange={
                this.handleChange //   value={this.state.fields.salary}
              }
            />
            <div className="errorMsg">{this.state.errors.salary}</div>
            <label>AGE</label>
            <input
              type="number"
              id="regage"
              name="age"
              onChange={
                this.handleChange //   value={this.state.fields.age}
              }
            />
            <div className="errorMsg">{this.state.errors.age}</div>
            <label>EXPERIENCE</label>
            <input
              type="number"
              id="regexperience"
              name="experience"
              onChange={
                this.handleChange //   value={this.state.fields.experience}
              }
            />
            <div className="errorMsg">{this.state.errors.experience}</div>
            <label>PROFILE PHOTO</label>
            <input
              type=""
              id="regprofilephoto"
              name="profilephoto"
              onChange={
                this.handleChange //   value={this.state.fields.profilephoto}
              }
            />
            <div className="errorMsg">{this.state.errors.profilephoto}</div>
            <label>AREA PINCODE</label>
            <input
              type="number"
              id="regareapincode"
              name="areapincode"
              onChange={
                this.handleChange //   value={this.state.fields.areapin}
              }
            />
            <div className="errorMsg">{this.state.errors.areapincode}</div>
            <label>
              <select
                id="regjobs"
                name="jobs"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="select">--select--</option>
                <option value="maid">MAID</option>
                <option value="cook">COOK</option>
                <option value="nanny">NANNY</option>
              </select>
            </label>
                <input type="submit" id="regsubmit" className="button" value="Register" />
          </form>
        </div>
        <WorkerList workerData={this.state.workerData} />
        
      </div>
    );
  }
}

export default NewWorker;
