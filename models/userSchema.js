const mongoose = require("mongoose");
require("../../MongoDBLoginSignUp/database/connectionDB");

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        lowercase : true
    },
    email : {
        type : String,
        required :true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        StorageManager :true
    },
    cityId : {
        type : String,
        required : true
    }
})

module.exports = new mongoose.model("login-sign-ups",UserSchema);
