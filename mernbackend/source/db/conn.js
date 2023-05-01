const express = require ("express");
const mongoose =require('mongoose');
const app = express();
const connectDB =async () =>{
     mongoose.connect("mongodb://localhost:27017/users");
     const productSchema = new mongoose.Schema({});
     const product = mongoose.model("products",productSchema);
     const data = await product.find();
     console.warn(data);
}
connectDB();
// const mongoose = require("mongoose");


// mongoose.connect("mongodb+srv://nikkik1435:<#nikki123>@cluster0.2wbbt.mongodb.net/?retryWrites=true&w=majority", {
//      // useNewUrlParser:true,
//      // useUnifiedTopology: true,
//      // useCreateIndex:true
// }).then(() => {
//      console.log(`connection successful`);
// }).catch((e) => {
//      console.log(`no connection`);
//  })

// // const url="mongodb+srv://nikkik1435:<#nikki123>@cluster0.2wbbt.mongodb.net/Cluster0";
// //    async function connect(){
// //     try{
// //         await mongoose.connect(url);
// //         console.log("mongodb connected");
// //     }
// //     catch(error){
// //         console.log(error);
// //     }
// //    }
// //    connect();
// /*const { MongoClient } = require("mongodb");
// const uri = 'mongodb://localhost:27017';  // mongodb://localhost - will fail

// (async function() {
//   try {

//     const client = await MongoClient.connect(uri,{ useNewUrlParser: true });
//     // ... anything

//     client.close();
//   } catch(e) {
//     console.error(e)
//   }

// })()*/



// const express = require("express");
// // import dotenv from "dotenv"
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// import authRoute from "./routes/auth.js"
// import usersRoute from "./routes/users.js"
// import  hotelRoute from "./routes/hotels.js"
// import roomRoute from "./routes/room.js"
// import cookieParser from "cookie-parser"

// const app = express()
// dotenv.config()

// const connect =  async() =>
// {
// try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("connected to mongodb.")
//   } catch (error) {
//     throw error
//   }
// }
// mongoose.connection.on("disconnected",()=>
// {
//   console.log("mongodb is diconnected.")

// })