const From = require("../models/formModel");

exports.submitForm = async (req, res)=>{
    // if(!req.body.name || !req.body.email) {
    //     return res.status(400).json({message: "Name and Email are required"});
    // }

    try {
        const {name, email, rating, reason} = req.body;
        //Check email exist
        const existingForm = await From.findOne({email});
        if(existingForm){
            return res.status(400).json({message:"Email already exists"})
        }
        const newForm = new From({name, email, rating, reason});
        const saveData = await newForm.save();
        res.status(201).json({message:"From Submitted Successfully", saveData});
    } catch (error) {
        // console.error("Error Submitting from data",error);
        res.status(500).json({message:'Internal server error'})
    }
};

exports.getAllForms = async (req, res) => {
    try {
        const forms = await From.find();
        // console.log("From Data", forms);
        const totalForms = forms.length;
        
        // Calculate average rating
        const totalRatings = forms.reduce((sum, form) => sum + form.rating, 0);
        const averageRating = totalForms > 0 ? totalRatings / totalForms : 0;

        res.status(200).json({ forms, totalForms, averageRating });
    } catch (error) {
        // console.error("Error fetching form data", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};