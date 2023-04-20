const mongoose =  require("mongoose")


const SatSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    norad:{
        type:String,
        required:true
    },
    agency:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    launch_date:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    period:{
        type:String,
        required:true
    }
})

const satDetails = mongoose.model("satelliteDetail", SatSchema)
module.exports = satDetails