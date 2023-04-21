const router = require("express").Router();
const puppeteer = require('puppeteer')
const satDetails = require("../models/satSchema");

router.get("/findSats", async (req, res) => {
  try {
    const { username } = req.query; 
    const foundSatellites = await satDetails.find({ username: username });

    if (foundSatellites.length > 0) {
      res.status(200).json({ message: 'Satellites Found', satellites: foundSatellites });
    } else {
      res.status(404).json({ message: 'No Satellites Found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

router.post("/findSatbyid", async (req, res) => {
  try {
    const { norad } = req.body;
    const foundSatellites = await satDetails.findOne({ norad: norad });
    if (foundSatellites) {
      res
        .status(200)
        .json({ message: "Satellites Found", satellites: foundSatellites });
    } else {
      res.status(404).json({ message: "No Satellites Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.post("/satLocation", async (req, res) => {
  try {
    const { norad } = req.body;
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`https://www.n2yo.com/?s=${norad}`, {
    // await page.goto(`https://www.n2yo.com/?s=56147`, {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });

    page.waitForSelector('#trackinginfo #satname a')
    .then(async() => {

    

    const nameNode = await page.$("#trackinginfo #satname a");
    const noradNode = await page.$("#noradid");
    const utcNode = await page.$("#utctime");
    const latNode = await page.$("#satlat");
    const longNode = await page.$("#satlng");
    const altNode = await page.$("#sataltkm");
    const speedNode = await page.$("#satspdkm");
    const rightAscNode = await page.$("#satra");
    const declinationNode = await page.$("#satdec");

    const name = await page.evaluate((el) => el.innerText, nameNode);
    const noradId = await page.evaluate((el) => el.innerText, noradNode);
    const utc = await page.evaluate((el) => el.innerText, utcNode);
    const lat = await page.evaluate((el) => el.innerText, latNode);
    const long = await page.evaluate((el) => el.innerText, longNode);
    const alt = await page.evaluate((el) => el.innerText, altNode);
    const speed = await page.evaluate((el) => el.innerText, speedNode);
    const rightAscension = await page.evaluate(
      (el) => el.innerText,
      rightAscNode
    );
    const declination = await page.evaluate(
      (el) => el.innerText,
      declinationNode
    );

    const data = {
      name,
      noradId,
      utc,
      lat,
      long,
      alt,
      speed,
      rightAscension,
      declination,
    };

    // await page.close()

    await browser.close()
    res.status(200).json(data)
    
  });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
