const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = (url) => {
  return mongoose.connect(url,{
    UseNewUrlParser: true,
    UseUnifiedTopology: true,
  });
};

module.exports = connectDB;
