const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

//Route
const sampleRoutes = require("./routes/sampleRoutes");
app.use("/api", sampleRoutes);

// MongoDb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("MongoDB Connected"))
    .catch(err=>console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server is running at port ${PORT}`));