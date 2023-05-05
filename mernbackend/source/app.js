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

//new Schema for template1
const temp1Schema = new mongoose.Schema({
  name: { type: String, required: true },
  familyMembers: { type: Number, required: true },
  employmentStatus: { type: String, required: true },
  sourceofincome: { type: String, required: true },
  role: { type: String, required: true },
  income: { type: String, required: true },
  changesinincome: { type: String, required: true },
  sacrifice: { type: String, required: true },
  confidence: { type: String, required: true }, 
});

// create a model for the template1 data
const temp1 = mongoose.model("temp1", temp1Schema);

// handle POST requests to /submit-from1
app.post('/submit-form1', async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const newTemp1 = new temp1(formData);
    await newTemp1.save();
    res.send('Data saved successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error while saving data. Please try again later.');
  }
});

//new Schema for template2
const temp2Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type:String, required: true},
  role: { type: String, required: true },
  source: { type: String, required: true },
  preferabletreatment: { type: String, required: true },
  feelingsofsadness: { type: String, required: true },
  changesinappetite: { type: String, required: true },
  panicAttack: { type: String, required: true },
  suicidalthoughts: { type: String, required: true },
  supportSystem: { type: String, required: true }, 
  professionalHelp: { type: String, required: true },
});

// create a model for the template2 data
const temp2 = mongoose.model("temp2", temp2Schema);

// handle POST requests to /submit-from2
app.post('/submit-form2', async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const newTemp2 = new temp2(formData);
    await newTemp2.save();
    res.send('Data saved successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error while saving data. Please try again later.');
  }
});

//new Schema for template3
const temp3Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type:String, required: true},
  role: { type: String, required: true },
  interestedinCoding: { type: String, required: true },
  preferablecodinglanguage: { type: String, required: true },
  uptodateby: { type: String, required: true },
  approachproblem: { type: String, required: true },
  managingtime: { type: String, required: true },
  LikeToSeeImproved: { type: String, required: true },
  advice: { type: String, required: true }, 
});

// create a model for the template3 data
const temp3 = mongoose.model("temp3", temp3Schema);

// handle POST requests to /submit-from1
app.post('/submit-form3', async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const newTemp3 = new temp3(formData);
    await newTemp3.save();
    res.send('Data saved successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error while saving data. Please try again later.');
  }
});

//new Schema for template4
const temp4Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type:String, required: true},
  satisfied: { type: String, required: true },
  recommend: { type: String, required: true },
  rateQuality: { type: String, required: true },
  rateValueofMoney: { type: String, required: true },
  rateOverallCustomerService: { type: String, required: true },
  likelyToPurchaseAgain: { type: String, required: true },
});

// create a model for the template4 data
const temp4 = mongoose.model("temp4", temp4Schema);

// handle POST requests to /submit-from4
app.post('/submit-form4', async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const newTemp4 = new temp4(formData);
    await newTemp4.save();
    res.send('Data saved successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error while saving data. Please try again later.');
  }
});

//new Schema for template5
const temp5Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type:String, required: true},
  education: { type: String, required: true },
  faculty: { type: String, required: true },
  institute: { type: String, required: true },
  receiveFinancialaid: { type: String, required: true },
  totalpay: { type: String, required: true },
  timetakentoComplete: { type: String, required: true },
});

// create a model for the template5 data
const temp5 = mongoose.model("temp5", temp5Schema);

// handle POST requests to /submit-from5
app.post('/submit-form5', async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const newTemp5 = new temp5(formData);
    await newTemp5.save();
    res.send('Data saved successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error while saving data. Please try again later.');
  }
});


app.listen(port, () => {
    connect();
    console.log(`connected to backend! ${port}`);
})