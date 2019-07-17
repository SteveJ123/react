import React from 'react';
import './Search.css';


const Search = (props) => {
    console.log("search", props);
    return (
        <div className="filter">
        <div >
      <h4>search person</h4>
      <input onChange={props.searchData}></input>
      </div>  
      
      </div>
    )
};

    export default Search;
 