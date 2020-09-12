// var express = require("express");
// var app = express();
const cors = require('cors'); 
const express = require('express');
const app = express();
app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.post("/make-payment", (req, res, next) => {
  res.json({msg: "Payment succesfully processed.", status: 200});
 });

 app.get("/make-payment", (req, res, next) => {
  res.json("Payment succesfully processed.");
 });
