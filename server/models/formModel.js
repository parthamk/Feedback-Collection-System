const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    reason: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const Form = mongoose.model("From", formSchema);

module.exports = Form;