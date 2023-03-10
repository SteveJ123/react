import  React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Pets";
import { useLocation } from "react-router-dom";
import "../css/form.css"
import { useNavigate } from 'react-router-dom';

const form = () => {
    const [userData, setUserData] = useState({
        image: "Beck"
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('The Form Was Submitted: ',  userData);
        localStorage.setItem("dogInfo", JSON.stringify(userData))
        navigate('/')
    }
    const handleChange = (e) => {
        let target = e.target; // the element that initiated the event
        let value = target.value; // its value
        let name = target.name; // its name

        setUserData(userData => {
           return {...userData, [name]: value}; 
        });
    }

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <h2>Add Pet Details</h2>
    <label> Full Name:
        <input type="text" name="name" onChange={handleChange} />
    </label>
    </div>
    <div>
    <label> Description:
        <input type="text" name="description" onChange={handleChange} />
    </label>
    </div>
    <div>
    <label> Found By:
        <input type="text" name="foundBy" onChange={handleChange} />
    </label>
    </div>
    <div>
    <label> Breed:
        <input type="text" name="breed" onChange={handleChange} />
    </label>
    </div>
    <div>
    <label> Found On:
        <input type="text" name="foundOn" onChange={handleChange} />
    </label>
    </div>
    <div>
    <label> Contact Number:
        <input type="text" name="contactNumber" onChange={handleChange} />
    </label>
    </div>
    <button type="submit">Submit</button>
    </form>
  );
};

export default form;

