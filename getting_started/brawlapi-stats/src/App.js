import React, { Component } from "react";

import axios from "axios";

import "./App.css";

class App extends Component {
    constructor() { //  this is test
        super();
        this.state = { data: null };
        axios
            .get("https://b78eeec1.ngrok.io/api/players/UQL0Y2CC/")
            .then(response => {
                this.setState({ data: response.data });
            });
    }

    render() {
        if (this.state.data === null) {
            return (
                <div className="App">
                    <h3>Loading data...</h3>
                </div>
            );
        }
        return (
            <div className="App" style={{ display: "flex"}}>
                <div className="Container" style={{ display: "inline-block" } } >
                    <div>
                        <img alt="Avatar" src={this.state.data.avatarUrl} />
                        <span className="Name">{this.state.data.name}</span>
                    </div>
                    <span>
                        Tag: <b>{this.state.data.tag}</b>
                    </span>
                    <div className="Brawlers">Brawlers</div>
                </div>
                  
    </div>
        );
    }
          
}
          export default App;
