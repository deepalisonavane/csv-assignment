const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 30,
        trim: true
    },
    age: {
        type: Number,
        maxlength: 30,
        trim: true
    },
    address: {
        type: String,
        maxlength:30,
        trim: true
    }
}, { timestamps: true } );

module.exports = mongoose.model("Csv", csvSchema);
