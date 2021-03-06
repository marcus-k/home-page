const express = require("express");
require('dotenv').config();

// Get port
const port = process.env.PORT || 3000;

// Create web application
const app = express();
const index = require("./routes/index.js");
const weather = require("./routes/weather.js");

// Root path 
app.use("/", index);

// Weather path
app.use("/weather", weather);

// Any other path
app.get("/*", (req, res) => {
    res.redirect("/");
});

// Start server
const server = app.listen(port, () => {
    var host = server.address().address;
    console.log("Home page listening at http://%s:%s", host, port);
});

// Watch for termination signal (usually from Docker)
process.on('SIGTERM', () => {
    console.info("Termination signal received.\n");
    process.exit(0);
});