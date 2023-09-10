// import express from "express"
// import dotenv from "dotenv";
const express = require("express");
const cors = require("cors");
const path = require("path");
const { db } = require("./connect.js");

const surveyRoutes = require("./routes/survey.js");
const resultsRoutes = require("./routes/results.js");

const app = express();

require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./build")));

app.use("/survey", surveyRoutes);
app.use("/results", resultsRoutes);

app.get("/try", (req, res) => {
  res.send(process.env.VARIABLE);
});

app.get("/trial", (req, res) => {
  const q = 'INSERT INTO name(`roll`) VALUES ("Hello")';

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    console.log("Success");
    // return res.status(200).json("Sociodemographic Survey has been sent succesfully");
  });
  res.send(" Hello");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(5000, () => {
  console.log("Server running at 5000");
});
