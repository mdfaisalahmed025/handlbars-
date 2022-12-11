require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
require("express-async-errors");
const app = express();
const morgan = require("morgan");
const handlebars =require('express-handlebars')



//middlware
const notFoundMiddleware =require('./middleware/not-found')
const errorHandlerMiddleware =require('./middleware/error-handler')



//routes
const authroute = require("./route/authRouter");
const userroute = require('./route/userRoute')
const blogroute =require('./route/blogRouter')

//use 
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(express.json())

app.use(bodyParser.urlencoded({ extended:false}));
app.use(cookieParser(process.env.JWT_SECRET))

//set
app.set('view engine', 'hbs')
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDIr : `${__dirname}/views/partials`
}));

// app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.get('/', (req,res)=>{
  res.render('main')
})

app.use("/api/v1/auth", authroute);
app.use("/api/v1/user", userroute);
app.use("/api/v1/blog", blogroute);


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)




// app.use(express.static("./public"));

const connectDB = require("./db/connect");


const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}.....`));
  } catch (error) {
    console.log(error);
  }
};

start();
