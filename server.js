const express = require("express");

// HTTP server using express.js
const app = express();
const http = require("http").Server(app);

// You can change the port number here
const port = 3008;

// Socket.io server
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

// URL for the socket.io connection
const live = io.of("/live");

// Server the client page
app.get("/client", (req, res) => {
  res.sendFile(__dirname + "/client.html");
});

// Start the http server
http.listen(port, () => console.log("Server started"));

// The sensor section...
const BMP280 = require("node-bmp280");
const sensor = new BMP280();

// Initialize the sensor
sensor.begin((err) => {
  if (err) {
    console.log(err);
  }

  console.log("BMP280 sensor initialized");

  // Start the measuring (update every second)
  setInterval(() => {
    // Read the values
    sensor.readPressureAndTemparature((err, pressure, temperature) => {
      if (err) {
        console.log(err);
      } else {
        // Send the update to all connected clients
        let payload = Math.round(temperature * 10) / 10;
        live.emit("temperature", payload.toFixed(1));
      }
    });
  }, 1000);
});
