import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import express from "express";
const app= express();
dotenv.config({path:'./env'});

;(async ()=>{
    try {        
        await mongoose.connect(process.env.MONGODB_URL+'/'+DB_Name)
    } catch (error) {
        console.log(error);
        throw error;
    }
    app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })
})()
