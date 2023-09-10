import express from "express"
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req,res)=>{
    res.send(process.env.VARIABLE)
})

app.listen(5000, ()=>{
    console.log("Server running at 5000");
})