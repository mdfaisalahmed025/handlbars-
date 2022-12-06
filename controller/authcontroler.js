
const Register = async(req, res)=>{
    // res.render("index", { tittle: "registartion" });
    
}

const Login =async (req, res) =>{
   const username = req.body.username;
   const password = req.body.password;
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