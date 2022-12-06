require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const hbs  = require('hbs')

// const html = require("html");

const userRoute = require("./route/userRouter");
const authroute = require("./route/authRouter");

// hbs.registerPartials(__dirname + 'views/partials')

//set det
// app.set('public', path.join(__dirname, '/views'))
// app.set('view engine', 'hbs')
// // app.set("view engine", "html");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", userRoute);
app.use("/auth", authroute);
// app.use(express.static("./public"));

const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("hello there");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

//
const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}.....`));
  } catch (error) {
    console.log(error);
  }
};

start();
