const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Auth = require("../models/authModel");

exports.register = async (req, res)=> {
    try {
        if(!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingAdmin = await Auth.findOne({email: req.body.email});
        if(existingAdmin) {
            return res.status(400).json({message: "Email already exist, please login."});
        }

        // hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);//abcd123

        const admin = new Auth({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })

        const saveAdmin = await admin.save();

        res.status(201).json({message:"Admin created", saveAdmin})
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

exports.login = async (req, res)=> {
    try {
        const admin = await Auth.findOne({email: req.body.email});
        if(!admin) {
            return res.status(401).json({message:"Invalid credentials"});
        }
        const adminName = admin.name;
        const passwordMatch = await bcrypt.compare(req.body.password, admin.password);
        if(!passwordMatch) {
            return res.status(401).json({message: "Invalid credentials"});
        }

        // generate web token
        const token = jwt.sign({userId: admin._id, name: admin.name}, process.env.JWT_SECRET, {expiresIn: "1h"});
        // console.log("Token from login:", token);
        res.status(200).json({message: "Admin Logged in Successfully", token, adminName})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getAllAdmins = async (req, res) => {
    try {
        const adminData = await Auth.find();
        console.log("Admins Data", adminData);

        res.status(200).json({ adminData });
    } catch (error) {
        // console.error("Error fetching form data", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};