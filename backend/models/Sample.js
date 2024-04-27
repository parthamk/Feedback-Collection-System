const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

const Sample = mongoose.model("Sample", sampleSchema);
module.exports = Sample;