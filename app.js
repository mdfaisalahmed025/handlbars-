require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();



const notFoundMiddleware =require('./middleware/not-found')
const errorHandlerMiddleware =require('./middleware/error-handler')



//routes
const authroute = require("./route/authRouter");


// app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


app.use("/api/auth", authroute);

// app.use(express.static("./public"));

const connectDB = require("./db/connect");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}.....`));
  } catch (error) {
    console.log(error);
  }
};

start();
