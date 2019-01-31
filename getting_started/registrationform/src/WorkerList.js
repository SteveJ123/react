import React from 'react';


const WorkerList = (props) => {

    const list =   props.workerData.map(function (data) {
        return <div>
            <h4> {data.name}</h4>
            <h4> {data.mobileno}</h4>
            <h4> {data.salary}</h4>
            <h4> {data.age}</h4>
            <h4> {data.experience}</h4>
            <img alt={data.photo} src={`./${data.profilephoto}.jpeg`} />
          </div>;
            
    }  )

    return <div>
        {list}
        {/* <img alt="photo" src="./photo1.jpeg" /> */}
      </div>;
}


export default WorkerList;