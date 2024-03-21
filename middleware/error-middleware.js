const errormiddleware =(err,req,res,next)=>{
    console.log(err)
    return res.send(err)


}

module.exports=errormiddleware