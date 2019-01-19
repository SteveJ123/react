import React, { Component } from 'react';
import Card from './Card';




const Cardlist =(props)=>(
  <div>
    {console.log("props", props)}
;
    {props.list.map(ar => <Card {...ar} key={ar.id} />)}
 
  </div>
);
    


export default Cardlist;