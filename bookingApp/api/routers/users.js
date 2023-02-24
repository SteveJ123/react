import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("users data from backend")
})

export default router