const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
    firstName: String,
    lastName : String,
    address : String,
    mobileNumber : String
})

module.exports = mongoose.model("userDetails", userDetailsSchema)