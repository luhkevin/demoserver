#!/bin/bash
# install for AWS Ubuntu 14.04.2 LTS (GNU/Linux 3.13.0-44-generic x86_64)
# retrieve and run using these commands…
# wget https://raw.githubusercontent.com/llang629/demoserver/master/install.sh
# bash install.sh

sudo apt-get -y update
sudo apt-get -y upgrade

# install node.js and node package manager
sudo apt-get -y nodejs-legacy
sudo apt-get -y npm

# install git
sudo apt-get -y install git

# install application
git clone https://github.com/llang629/demoserver.git

cd demoserver

# install node packages
npm install sleep express ejs

# start application
screen sudo -E nodejs demoserver.js >>demoserver.log
