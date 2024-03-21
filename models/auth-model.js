const mongoose=require('mongoose')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const skey="thinkagainbeforeyoutakethis"
    const userSchema = new mongoose.Schema({
        name: String,
        username:String,
        password:String
      });

    // userSchema.pre('save',async function(next){
    //     const userit= this
    //     if (!password.isModified()){
    //         next()
    //     }
    //     else{
    //         const hash= await bcrypt.hash(userit.password, 10);
    //     }
    // })

    userSchema.methods.gt = async function(){

      try{
        return jwt.sign(
          {
          
            username:this.username,
            password:this.password,
            name:this.name
          },
          skey,
          {
            expiresIn:"30d"
          }
        )

      }catch(error){

        console.log(error)
      }

    }

    // userSchema.methods.ab= async function(password,data){
    //   ver= await  bcrypt.compare(password,data.password)
    //   console.log(ver)
    // }

    const user = mongoose.model('user', userSchema);

   


module.exports=user