const user=require('../models/auth-model')
const bcrypt = require('bcrypt');

const home=(req,res)=>{
    res.send("controller is working ")
}

const  register= async (req,res)=>{
    const {name,username,password}=req.body
    // const cond = await bcrypt.compareSync(password, hash)
   
    const userexist= await user.findOne({username: username})
    if (userexist){
        res.send({message:"user already exist"})

    }
    else{
        const hash= await bcrypt.hash(password, 10);
        const user1 = new user({ name: name, username: username,password:hash});
       

        res.send({token: await user1.gt()})

        user1.save();
    }

  
   
}

const login=  async (req,res)=>{

    try{
        const {username,password}=req.body
        data= await user.findOne({username})
        if (data){
            // let ver= await data.ab(password,data)
            ver= await bcrypt.compare(password,data.password)
        
            if (ver){
                res.send({
                    msg:"login successfully",
                    token: await data.gt()
                })
            }
            else{
                res.send({message:"credentials are wrong!"})
            }
            // res.send(data.password)

        }else{
            res.send({message:"credentials are wrong!"})
        }


    }catch(error){
        res.send("internal server issue")
    }

}

const userdata=(req,res)=>{
    try {
        const userdata=req.user;
        res.send({msg:userdata})
        console.log(userdata)
        
    } catch (error) {
        console.log('error from user route',error)
    }
}
module.exports={home,register, login, userdata}