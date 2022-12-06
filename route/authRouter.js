const express =require('express')
const router = express.Router()

const {Register, Login, Logout} =require('../controller/authcontroler')

router.get('/register', Register)
router.post('/login', Login)
router.get('/logout', Logout)

module.exports = router;