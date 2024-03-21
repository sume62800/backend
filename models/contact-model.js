const mongoose=require('mongoose')

const contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    message:String
  });

const contactmodel= mongoose.model('contact', contactSchema);

module.exports=contactmodel