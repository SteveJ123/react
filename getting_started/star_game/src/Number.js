import React from "react";

const Number = props => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const checkNumberSelected = number => {
        if (props.usedNumber) {
            const result1 = props.usedNumber.includes(number);
            console.log("after green button", result1);
            if (result1) {
              return "selected";
            } else {
              return "notselected";
            }       

        } else {
            

            console.log("selectedNumber in green button", props.selectedNumber);
            const result = props.selectedNumber.includes(number);
            if (result) {
              return "selected";
            } else {
              return "notselected";
            }
        }
        
  };

  return (
    <div className="Number">
      {console.log("list", props)}
      {list.map((number, i) => (
          <span key={i} className={checkNumberSelected(number)}
              onClick={()=>props.numberClicked(number)}>
          {number}
        </span>
      ))}
    </div>
  );
};

export default Number;
