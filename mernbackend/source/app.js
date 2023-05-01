import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.")
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnection", () => {
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!")
})

// app.get("/", (req,res) => {
//     res.send("Hello First Request")
// })

//middleware
app.use("/auth", authRoute);

app.listen(port, () => {
    connect();
    console.log(`connected to backend! ${port}`);
})