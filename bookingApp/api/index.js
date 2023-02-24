import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routers/auth.js"

mongoose.set('strictQuery', false);
const app = express();
dotenv.config()

const connect = async() =>{
try{
    await mongoose.connect(process.env.MONGO)
    console.log("connected to backend")
}catch(error){
    handleError(error)
}
}

mongoose.connection.on("connected", ()=>{
    console.log("connected")
} )

mongoose.connection.on("disconnected", ()=>{
    console.log("disconnected")
})

app.use("/auth", authRoute)

app.listen(8800, ()=>{
    console.log(connect())
    console.log("backend")
})