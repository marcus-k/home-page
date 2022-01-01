const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();
require('dotenv').config();

// Collect the environment variables
const API_KEY = process.env.API_KEY
const lat = process.env.LATITUDE
const lon = process.env.LONGITUDE

router.get("/", (req, res) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`

    // Call OpenWeatherMap API
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    });
});

module.exports = router;