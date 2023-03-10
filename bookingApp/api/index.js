import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routers/auth.js"
import usersRoute from "./routers/users.js"
import hotelsRoute from "./routers/hotels.js"
import roomsRoute from "./routers/rooms.js"

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

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})
app.listen(8800, ()=>{
    console.log(connect())
    console.log("backend")
})