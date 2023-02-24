import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("rooms data from backend")
})

export default router