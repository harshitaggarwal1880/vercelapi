// import express from "express"
// import dotenv from "dotenv";
const express = require("express");
const path = require("path");


const app = express();

require("dotenv").config();
app.use(express.static(path.join(__dirname, "./build")));

app.get("/try", (req, res) => {
  res.send(process.env.VARIABLE);
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(5000, () => {
  console.log("Server running at 5000");
});
