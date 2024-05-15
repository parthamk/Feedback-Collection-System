const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const fromRoute = require("./routes/formRoute");
const authRoutes = require("./routes/authRoutes");
const updatePasswordRoute = require("./routes/updatePasswordRoute");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("Connected to MongoDB"))
    .catch(err=>console.error("Error connecting to MongoDB",err));

// Route
app.use('/api', fromRoute); // http://localhost:8000/api/submit
app.use("/auth", authRoutes); // http://localhost:8000/auth/register or login
app.use("/admin", updatePasswordRoute); // http://localhost:8000/updatePassword

// Start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});