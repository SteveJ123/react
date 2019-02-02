import React, { Component } from "react";
import "./App.css";


import { BrowserRouter, Route, Switch } from 'react-router-dom';



// import MyForm from "./MyForm";
// import Test from "./MyForm";
// import FillForm from "./FillForm";
import FillForm from "./components/FillForm";
import NewWorker from "./components/NewWorker";
import WorkerSearch from "./components/WorkerSearch";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Home from './components/Home';
// import WorkerDetails from "./WorkerDetails";
// import createBrowserHistory from "history/createBrowserHistory";

// const newHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      //   <div className="App">

      //         <NewWorker />

      //   </div>

      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/newworker" component={NewWorker} />
            <Route path="/workersearch" component={WorkerSearch} />
            <Route path="/fillform" component={FillForm} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
