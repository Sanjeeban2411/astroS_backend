const mongoose =  require("mongoose")

const SatSchema = new mongoose.Schema({
    name:{
        type:String
    },
    norad:{
        type:Number
    },
    agency:{
        type:String
    },
    username:{
        type:String
    },
    launch_date:{
        type:String
    },
    weight:{
        type:Number
    },
    period:{
        type:Number
    }
})

const satDetails = mongoose.model("satelliteDetail", SatSchema)
module.exports = satDetails