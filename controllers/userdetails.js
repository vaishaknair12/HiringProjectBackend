const express = require("express");
const userDetails = require("../models/userDetails");

exports.addUser = async (req,res) => {
    const {firstName,lastName,address,mobileNumber} = req.body
    try {
        const data = await userDetails.insertOne(req.body)
        if(data)
        {
            return res.status(200).json({"message": "Data Successfully inserted."})
        }
    } catch (error) {
        res.status(200).json({"message": "Data Successfully Failed."})  
    }
}


exports.getUser = async (req, res) => {
    try {
        const data = await userDetails.find();
        if(data !=null)
        {
            return res.status(200).json(data)
        }
    } catch (error) {
        res.status(200).json({"message": "Data Successfully Failed."})  
    }
}



exports.getUserById = async (req, res) => {
    try {
        const {address} = req.body
        const data = await userDetails.find(req.body);
        if(data !=null)
        {
            return res.status(200).json(data)
        }
    } catch (error) {
        res.status(200).json({"message": "Data Successfully Failed."})  
    }
}