const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { json } = require("express");


exports.register = async (req, res) => {
    console.log("Received Request Body:", req.body);  
    try {
        const {name, email, password} = req.body

         let user = await User.findOne({email});
         console.log("user" , user)
         if(user) {
            return res.status(400).json({ message: "User already exists" });
         }
        else{
         const salt = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hash(password,salt);

         user = new User({name, email,password:hashPassword});
         await user.save();

         res.status(201).json({"message":"Registeration Succesfully"});
        }

    } catch (error) {
        res.status(500).json({"message":"Server Error"})
    }

}

exports.login = async(req, res) => {
    console.log("Received Request Body:", req.body);  
    try {
    const {email, password} = req.body
    let user = await User.findOne({email});
    if(!user)
    {
        return res.status(400).json({ message: "Invalid Credentials" });
    }
    let compare = await bcrypt.compare(password, user.password)
    if(!compare)
    {
        return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log("token", token); 
    res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
        res.status(500).json({"message":"Server Error"})
    }
}
