import React from "react";
import "./Button.css";
import { isTSTypeOperator } from "@babel/types";


// const isOperator = val =>{
//     return !NaN(val) || val === "." || val === "=";
// }
//{`button-wrapper ${isOperator(props.children) ? null:"operator"}`}

const Button = props => <div className="button-wrapper">{props.children}</div>

export default Button;