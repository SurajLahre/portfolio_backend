import mongoose from "mongoose"
import DB_NAME from "./constants";
import express from "express"


const app = express();


const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected  FAILED !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {

    }
}

export default connectDB