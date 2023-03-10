import express from "express";
import { get } from "mongoose";
import Hotel from "../models/Hotels.js";
import { deleteHotel, getAllHotels, getALlHotels, getHotelById, updateHotel } from "../controllers/hotels.js";

const router = express.Router();

// create
router.post("/", getALlHotels)
// update
router.put("/:id", updateHotel)

// delete
router.delete("/:id", deleteHotel)
// get
router.get("/:id", getHotelById)
// getall
router.get("/", getAllHotels)

export default router