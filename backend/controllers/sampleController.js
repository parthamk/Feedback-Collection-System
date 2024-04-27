const Sample = require('../models/Sample');

exports.getSample = async (req, res)=>{
    try {
        const sample = await Sample.find();
        res.status(200).json(sample);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.createSample = async (req, res)=>{
    if(!req.body.name || !req.body.description) {
        return res.status(400).json({message: "Name and Description are required"});
    }
    const sample = new Sample({
        name: req.body.name,
        description: req.body.description,
    });
    try {
        const newSample = await sample.save();
        // console.log("Data", newSample);
        res.status(201).json({message: "Data saved", newSample});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};