const router = require("express").Router();
const satDetails = require("../models/satSchema");

router.get("/findSats", async (req, res) => {
    try {
      const { username } = req.body;
      const foundUsers = await satDetails.find({ username: username });
  
      if (foundUsers.length > 0) {
        res.status(200).json({ message: "Users Found", users: foundUsers });
      } else {
        res.status(404).json({ message: "No Users Found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  });

  router.post("/findSatbyid", async (req, res) => {
    try {
      const { norad } = req.body;
      const foundSatellites = await satDetails.find({ norad: norad });
      if (foundSatellites.length > 0) {
        res.status(200).json({ message: "Satellites Found", satellites: foundSatellites });
      } else {
        res.status(404).json({ message: "No Satellites Found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  });


  
  
module.exports = router