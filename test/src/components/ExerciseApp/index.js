import "../../App.css"
import React from "react"
import Exercise from "../Exercise"

function ExerciseApp() {
  return (
    <div className="App">
      <Exercise
        ExerciseType="Repetition"
        ExerciseItems={[
          {
            itemId: 1,
            itemDuration: "20",
			itemOriginalDuration: "20",
            itemName: "Squats",
          },
		 {
          itemId: 2,
          itemDuration: "10",
		  itemOriginalDuration: "10",
          itemName: "Lunges",
        },
        {
          itemId: 3,
          itemDuration: "14",
		  itemOriginalDuration: "14",
          itemName: "High Jump",
        },

        ]}
      ></Exercise>
	  <Exercise 
      ExerciseType="Duration"
      ExerciseItems={[
        {
          itemId: 45,
          itemDuration: "10",
		  itemOriginalDuration: "10",
          itemName: "Treadmill",
        },
        {
          itemId: 47,
          itemDuration: "25",
		  itemOriginalDuration: "25",
          itemName: "Jogging",
        },
        {
          itemId: 49,
          itemDuration: "5",
		  itemOriginalDuration: "5",
          itemName: "Jumping Jacks",
        },
        {
          itemId: 50,
          itemDuration: "5",
		  itemOriginalDuration: "5",
          itemName: "Downward Dog",
        },
      ]}
      ></Exercise>
      <Exercise
        ExerciseType="Running"
        ExerciseItems={[
          {
            itemId: 1,
            itemDuration: "20",
			itemOriginalDuration: "20",
            itemName: "Sprint",
          },
		//  {
    //       itemId: 2,
    //       itemDuration: "10",
		//   itemOriginalDuration: "10",
    //       itemName: "Lunges",
    //     },
    //     {
    //       itemId: 3,
    //       itemDuration: "14",
		//   itemOriginalDuration: "14",
    //       itemName: "High Jump",
    //     },

        ]}
      ></Exercise>
    </div>
  )
}
export default ExerciseApp
