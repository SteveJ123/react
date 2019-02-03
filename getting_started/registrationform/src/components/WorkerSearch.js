import React, { Component } from "react";
import WorkerDetails from "../WorkerDetails.json";
import WorkerList from "./WorkerList";

class WorkerSearch extends Component{

    constructor(props) {
        super(props);
        this.state = {
            enteredText: null,
            result: []
        }
        this.changeText = this.changeText.bind(this);
        this.testText = this.testText.bind(this);
    }

    
    changeText(e) {
        var update = e.target.value;
        this.setState({
            
            enteredText: update
        })
        
    }


     testText() {
         console.log('enteredtext', this.state.enteredText);
         var text = this.state.enteredText;
       var result = WorkerDetails.filter(function (workerDetail) {
           return workerDetail.areapincode === text;
        });
         var update = result;
         console.log("result", result);
         this.setState({
            result: update
        })
    }

    
    render() {
        return (
            <div id="wsdiv">
                <h1>{"search worker with pincode".toUpperCase()}</h1>
            
            <input
              type="number"
              id="workersearchinput"
              placeholder="Enter Pincode"
              onChange={this.changeText}
            />
            <select name="jobs" value="">
              {" "}
              <option value="select"> --select--</option>
              <option value="maid">MAID</option>
              <option value="cook">COOK</option>
              <option value="nanny">NANNY</option>
            </select>
            <button onClick={this.testText}>Find</button>
                <WorkerList workerData={this.state.result}/>
          </div>
        );       
    }
  
}

export default WorkerSearch;
