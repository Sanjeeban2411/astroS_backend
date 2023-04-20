const mongoose =  require("mongoose")

const UserSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const userDetails = mongoose.model("userDetail", UserSchema)
module.exports = userDetails