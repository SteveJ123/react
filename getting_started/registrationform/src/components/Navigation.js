import React from "react";

import { NavLink } from 'react-router-dom';

const Navigation = props => {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/fillform">FillForm</NavLink>
        <NavLink to="/newworker">NewWorker</NavLink>
        <NavLink to="/workersearch">WorkerSearch</NavLink>
      </div>
    );
};

export default Navigation;