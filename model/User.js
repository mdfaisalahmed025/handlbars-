const mongoose =require('mongoose')
const validator =require('validator')



const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please provide name"],
    validate: {
        validator: validator.isEmail,
        message: 'please provide valid email',
    },

    password: {
    type: String,
    required: [true, `Please Provide your valid email`],
  },

  role: {
    type:String,
    enum: ["admin", "user"],
    default: "user",
  },

  },
});