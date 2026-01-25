import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', ()=>{
        console.log("Connected successfully to Databse")
    });

    mongoose.connection.on('error',(err)=>{
        console.log("Error in connecting to database.",err)
    })
    
    await mongoose.connect(config.database as string);

    
  } catch (error) {
    console.error("Failed to connect Database!!", error);
    process.exit(1);
  }
};


export default connectDB;