const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citizenSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required:true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    }


})

const Citizen = mongoose.model("citizens", citizenSchema);

module.exports = Citizen;