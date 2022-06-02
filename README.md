# bmp280-realtime

View the temperature from a bmp280 realtime in web.

Whole thing is a simple node.js server with express.js and socket.io. That server reads data from the BMP280 sensor and broadcasts it to all connected clients.

## Installation

A simple installation script is provided - give it exec permissions and run it to install all necessary dependencies:

> Note: DO NOT RUN THE SCRIPT AS ROOT!!!

**Clone the repository:**

```
git clone https://github.com/hendrychjan/bmp280-realtime.git && cd bmp280-realtime
```

**Make the install script executable:**

```
chmod +x ./install.sh
```

During the installation process, you will be asked for your Raspberry Pi's IP address - make sure you know it before you run the install.sh script (you can get the IP via `ifconfig` for instance)

**Run the installation script:**

```
./install.sh
```

**Start the server with node:**

```
node server.js
```

## Usage

When the server is running, go to `http://raspberry_ip_address:3008/client` and view the temperature realtime.

You can access the page from different computers on your network.

> The url could look like this: `http://192.168.1.24:3008/client`
