const express = require("express");
const router = new express.Router();
const  userDetails = require("../models/userSchema");

router.post("/signup", async (req, res)=>{
    try {
        const {username,password} = req.body;
        const newuser = await new userDetails({
            username: username, password: password
        });
        await newuser.save();
        res.status(200).json({message: "User Saved"});
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/login",async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await userDetails.findOne({username:username});
        // console.log(user);
        if(user.password == password){
            res.status(200).json({data: user});
        }
    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router