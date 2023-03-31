import './App.css';
import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import Welcome from './Welcome';
import Detail from './Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
       <Navigation />      
      <Carousel />
      <h1 className="text-center m-4">Welcome to FLexigan</h1>
      <Welcome />
      <h1 className="text-center m-4">Why chose FLexigan</h1>
      <Detail />
    </div>
  );
}

export default App;
