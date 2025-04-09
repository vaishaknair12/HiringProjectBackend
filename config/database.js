const mongoose = require("mongoose");
require("dotenv").config();


const Db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected To Db")
    } catch (error) {
        console.error("❌ Database Connection Failed:", error);
        process.exit(1);
    }
}


module.exports = Db;