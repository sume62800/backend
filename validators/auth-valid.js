const {z} =require('zod')

const signupSchema=z.object({
    name: z.string({ required_error: "Name is required"}).trim().min(3,{message:"Name  must be less than 3 characters "}),
    username:z.string({ required_error: "username is required"}).trim().min(4),
    password:z.string({ required_error: "Password is required"})
})

module.exports=signupSchema