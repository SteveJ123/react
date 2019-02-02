import React from 'react';


const WorkerList = (props) => {

    const list =   props.workerData.map(function (data) {
        return (
          <div id="workerlist">
            <div id="workerdetails">
                    <h4>NAME: {data.name}</h4>
                    <h4>MOBILE: {data.mobileno}</h4>
                    <h4>SALARY: {data.salary}</h4>
                    <h4>AGE: {data.age}</h4>
                    <h4>EXPERIENCE: {data.experience}</h4>
            </div>
            <div>
              <img id="workerimage"
                alt={data.photo}
                src={`./${data.profilephoto}.jpeg`}
              />
            </div>
          </div>
        );
            
    }  )

    return <div>
        {list}
        {/* <img alt="photo" src="./photo1.jpeg" /> */}
      </div>;
}


export default WorkerList;