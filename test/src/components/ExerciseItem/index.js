import React from "react"

export default class ExerciseItem extends React.Component {
	
	constructor(props){
		super(props);			
		this.state ={
			timeLaps: []
		}	
	}	
	
	Increment = () => {
		this.props.itemDuration = this.props.itemDuration + 1;
		window.location.reload();
	}
	
	Decrement = () => {
		if(this.props.itemDuration > 0)
		this.props.itemDuration = this.props.itemDuration - 1;
		window.location.reload();
	}
	Start = () => {		
		console.log("this is start method");
	}
	
	Reset = () => {
		if(this.props.itemDuration > 0)
		this.props.itemDuration = this.props.itemOriginalDuration;
		window.location.reload();
	}

	handleLap = () => {	
		let currentTime = new Date().getTime().toLocaleString("us-US");	
		const newArray = [...this.state.timeLaps]; // create a copy of the array 16,77,17,35,63,157
    	newArray.push(currentTime); // add a new item to the copy
    	this.setState({ timeLaps: newArray});		
	}
	
 render() {	
 return (
  <div class="exercise-item" id="`{this.props.itemId}`">

 <h2>{this.props.itemName}</h2>
	 <button  onClick={this.Increment}>+</button>&nbsp;
	 <button  onClick={this.Decrement}>-</button>&nbsp;
	 { !(this.props.itemName == "Squats" || this.props.itemName == "Lunges" || this.props.itemName == "High Jump") ?
	 <button  onClick={this.Start}>Start</button>: null
	}
	 <button  onClick={this.Reset}>Reset</button>&nbsp;&nbsp;
	 { this.props.itemName == "Sprint" ?
		<button onClick={this.handleLap}>Record Laps</button> : null
	 }
	 {this.props.itemName == "Sprint" ?
		<ul style={{'listStyle': 'none'}}> <h4>Laps:</h4>
		{this.state.timeLaps.map((item, index) => (
		  <li key={index}>{item}</li>
		))}
	  </ul> : null
	 }
	 { this.props.itemName !== "Sprint" &&
		<span>{this.props.itemDuration}</span>
	 }
	  
 </div>
 );
 }
}





