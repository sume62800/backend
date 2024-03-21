const express =require("express");
const app = express();
const router=require("./routes/auth")
const contact=require('./routes/contactus')
const mongoose=require('mongoose');
const errormiddleware = require("./middleware/error-middleware");
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/mernapp')

app.use(cors())
app.use(express.json())
app.use(router)
app.use(contact)
app.use(errormiddleware)
  





app.listen(8000,(req,res)=>{
    console.log("it is working")
})