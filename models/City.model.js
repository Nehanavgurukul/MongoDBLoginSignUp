const mongoose = require("mongoose");
require("../../MongoDBLoginSignUp/database/connectionDB");

const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = new mongoose.model("cities", citySchema);
