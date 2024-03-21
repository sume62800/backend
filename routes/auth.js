const express = require('express')
const router = express.Router();
const {home,register,login,userdata}= require('../controllers/auth-controller')
const signupSchema =require('../validators/auth-valid')
const validate= require('../middleware/valid-middleware')
const authmiddleware= require('../middleware/auth-middleware')

router.get('/',home)
router.post('/register',validate(signupSchema),register)
router.post('/login', login)
router.get('/user', authmiddleware, userdata)

module.exports= router