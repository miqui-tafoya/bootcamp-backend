const express = require("express");
const mongoose = require("mongoose");
const ProjectRoutes = require("./source/routes/projects");
const app = express();


app.use(express.json());
app.use("/projects", ProjectRoutes);

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://taromiqui:12345@cluster0.08li8cc.mongodb.net/?retryWrites=true&w=majority")
    } catch(err){
        console.log("Failed to connect");
    }
}

connectDB();