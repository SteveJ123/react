import React from "react";

const Stars = props => {
  // const numberOfStars = Math.floor(Math.random() * 9) + 1;
  // const nostars = [<span>this is test</span>];
  function generateStars() {
    let nostars = [];
    for (let i = 0; i < props.numberOfStars; i++) {
      nostars.push(
        <span key={i}>
          <i key={i} className="fa fa-star" />
        </span>
      );
    }
    return nostars;
  }
  return <div className="Stars">{generateStars()}</div>;
};

export default Stars;
