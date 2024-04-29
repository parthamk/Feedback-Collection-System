const From = require("../models/formModel");

exports.submitForm = async (req, res)=>{
    // if(!req.body.name || !req.body.email) {
    //     return res.status(400).json({message: "Name and Email are required"});
    // }

    try {
        const {name, email, rating, reason} = req.body;
        const newForm = new From({name, email, rating, reason});
        const saveData = await newForm.save();
        res.status(201).json({message:"From Submitted Successfully", saveData});
    } catch (error) {
        // console.error("Error Submitting from data",error);
        res.status(500).json({message:'Internal server error'})
    }

};