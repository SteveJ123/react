import React, { component } from 'react';


const Card = props => (
  // zpao paul jordwalke 
  <div style={{ backgroundColor: "white", display: "flex" }}>
    {console.log("props in card", props)}    
    <img width="75" height="75" alt={props.name} src={props.avatar_url} />
    <div style={{ display: "inline-block", marginLeft: 10 }}>
      <div style={{ fontWeight: "bold" }}>{props.name}</div>
      <div>{props.company}</div>
    </div>
  </div>
);

export default Card;