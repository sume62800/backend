const contactmodel=require('../models/contact-model')

const contactcontroller=(req,res)=>{
    try {
        const {name,email,message}=req.body
        const contact1= new contactmodel({name,email,message})
        contact1.save()
        res.send({msg:'message has  been sent to admin'})
    } catch (error) {
        console.log(error)
        
    }
}

module.exports=contactcontroller