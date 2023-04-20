const express = require('express');
require("./mongo/db")
const user = require("./routes/user")

const app = express();

app.get("/", async (req, res)=>{
    res.send("abc")
})
app.use(user)

app.listen(8000, ()=>{
    console.log("Server listening on port 8000")
})