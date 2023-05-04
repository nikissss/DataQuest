import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors  from "cors";  
import bodyParser  from "body-parser";
import authRoute from "./routes/auth.js";

const app = express();
const port = process.env.PORT || 5000 ;
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:3001'}));
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


//new Schema banako for user
const userSchema = new mongoose.Schema({
  fullname: String,
  phone: String,
  email: String,
  password: String, 
});

// create a model for the user data
const User = mongoose.model("User", userSchema);

// handle POST requests to /api/signup
app.post("/api/signup", (req, res) => {
  const { fullname, phone, email, password } = req.body;


  // create a new user object
  const newUser = new User({
    fullname,
    phone,
    email,
    password,
  });

  // save the new user object to the database
  newUser.save()
  .then(() => {
    res.send("User saved successfully");
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send("Error saving user");
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // find the user by email and password in the database
  User.findOne({ email, password })
    .then((user) => {
      if (!user) {
        // user not found, return error response
        return res.status(401).send("Invalid email or password");
      }

      // user found, return success response
      res.send(" login vayobabu");
    })
    .catch((err) => {
      console.log(err); 
      res.status(500).send("Error finding user");
    });
});











app.listen(port, () => {
    connect();
    console.log(`connected to backend! ${port}`);
})