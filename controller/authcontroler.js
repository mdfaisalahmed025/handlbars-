
const User =require('../model/User')
const {StatusCodes} =require('http-status-codes')
const CustomError =require('../errors')




const Register = async(req, res)=>{
    // const{email} =req.body;
     const user = await User.create(req.body);
     res.status(StatusCodes.CREATED).json({ user });
    
}

const Login =async (req, res) =>{
   
   res.render("index");
}

const Logout =async (req, res) =>{
    res.send('this is logout page')
}

module.exports = {
    Register,
    Login,
    Logout,
}