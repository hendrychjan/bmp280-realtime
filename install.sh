#!/bin/bash

# Install node.js and npm
echo "[INSTALLER]: ...installing node.js and npm"
sudo apt install nodejs npm

# Install nodejs dependencies
echo "[INSTALLER]: ...installing nodejs dependencies"
npm i

# Edit the client page to match the raspberry pi's IP address
echo "[INSTALLER]: ...editing client page"
echo -n "Tell me the Raspberry Pi's IP address:"
read ip
sed -i "34 i const url = \"http://$ip:3008/live\";" client.html

# The installation is complete
echo "[INSTALLER]: ...installation complete! Start with 'node server.js'"