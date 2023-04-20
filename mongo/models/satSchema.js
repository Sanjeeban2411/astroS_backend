const mongoose =  require("mongoose")

const SatSchema = new mongoose.Schema({
    name:{
        type:String
    },
    norad:{
        type:String
    },
    agency:{
        type:String
    },
    user_name:{
        type:String
    },
    launch_date:{
        type:String
    },
    weight:{
        type:String
    },
    period:{
        type:String
    }
})

const satDetails = mongoose.model("satelliteDetail", SatSchema)
module.exports = satDetails