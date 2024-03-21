const jwt=require('jsonwebtoken')
const user=require('../models/auth-model')

const authmiddleware= async (req,res,next)=>{
    const skey="thinkagainbeforeyoutakethis"
    const token =req.header('Authorization')
    if(!token){
        res.send({msg:'unauthorized token'})
    }
    else{
        const isverified=jwt.verify(token,skey)
        const usermodel= await user.findOne({username:isverified.username}).select({password:0})

        req.user=usermodel;
        req.token=token
        next()
    }

}

module.exports=authmiddleware