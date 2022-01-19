const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true
    },
    lastname: {
        type: String,
        maxlength:30,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, { timestamps: true } );

module.exports = mongoose.model("Csv", csvSchema);