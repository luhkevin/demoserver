#!/bin/bash
# install for AWS Ubuntu 14.04.2 LTS (GNU/Linux 3.13.0-44-generic x86_64)
# retrieve and run using these commands…
# wget https://raw.githubusercontent.com/llang629/demoserver/master/installdemoclient.sh
# bash installdemoclient.sh

sudo apt-get -y update
sudo apt-get -y upgrade

# install node.js and node package manager
sudo apt-get -y nodejs-legacy
sudo apt-get -y npm

# install javascript and Bash shell
wget https://raw.githubusercontent.com/llang629/demoserver/master/democlient.sh
wget https://raw.githubusercontent.com/llang629/demoserver/master/democlient.js

# install node packages
npm install http

# start application
nohup bash democlient.sh >> democlient.log &