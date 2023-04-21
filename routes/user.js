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

router.post("/login",async(req,res)=>{
    try {
        const username = req.body.username;
        const password = req.body.password;
        console.log(req.body)
        const user = await userDetails.findOne({ username: username });
        console.log(user)
        if (!user) {
            res.status(200).json({ data: "No User Found" });
        } else {
            if (user.password == password) {
                res.status(200).json({ data: user });
            } else {
                res.status(200).json({ data: "Incorrect password" });
            }
        }
    } catch (error) {
        res.status(400).send(error);
    }

})

module.exports = router