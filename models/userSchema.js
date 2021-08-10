const mongoose = require("mongoose");

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
    }
})

module.exports = new mongoose.model("login-sign-ups",UserSchema);
