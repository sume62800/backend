const validate=(schema)=> async (req,res,next)=>{
    try {
        const parsebody=await schema.parseAsync(req.body);
        req.body=parsebody
        next()
    } catch (err) {
        next(err.errors[0].message)
        
        
    }
}


module.exports=validate