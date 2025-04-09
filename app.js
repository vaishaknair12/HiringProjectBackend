const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const connectDB = require("./config/database")
require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI);
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/demo',(req,res) => {
    res.status(200).json({"message":"Done"})
})

connectDB();
app.use("/api/auth", require("./routes/user.routes"));
app.use("/api/auth", require("./routes/userDetails.routes"));

app.listen(3000, () => console.log(`🚀 Server running on port 3000`));