const express = require('express');
// require("./mongo/db")
const user = require("./routes/user")
const satellites = require("./routes/satellites");
var cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());


app.use("/",user);
app.use("/sat",satellites);

app.listen(8000, ()=>{
    console.log("Server listening on port 8000")
})