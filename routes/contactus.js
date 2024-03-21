const express = require('express')
const contact = express.Router();
const contactcontroller=require('../controllers/contact-controller')


contact.post('/contact',contactcontroller)


module.exports=contact
