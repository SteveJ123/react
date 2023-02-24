import express from "express";
import { get } from "mongoose";
import Hotel from "../models/Hotels.js";

const router = express.Router();

// create
router.post("/", async (req, res)=>{
    const newHotel = new Hotel(req.body);
    console.log("req.body", newHotel, req.body)

    try {
        const savedHotel = await newHotel.save();
        console.log("savedHotel", savedHotel)
        res.status(200).json(savedHotel)
        
    } catch (error) {
        res.status(500).json(err)
    }
})
// update
router.put("/:id", async (req, res)=>{
    try {
        const updateHotel = await Hotel.findByIdAndDelete(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateHotel)
    } catch (error) {
        res.status(500).json(err)
    }
})

// delete
router.delete("/:id", async (req, res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(500).json(err)
    }
})
// get
router.get("/:id", async (req, res)=>{
    console.log("req.params.id", req.params.id)
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)    
    } catch (error) {
        res.status(500).json(error)
    }
    
})
// getall
router.get("/", async(req, res)=>{
    try {
        const hotel = await Hotel.find();
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router