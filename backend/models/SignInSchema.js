const mongoose = require("mongoose");

const signSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        uniqure : true,
    },
    password:{
        type : String,
        require : true,
        minlength : 8,
    }
}, { timestamps: true })

module.exports = mongoose.model("Sign In ",signSchema);