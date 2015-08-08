#!/bin/bash
# install for AWS Ubuntu 14.04.2 LTS (GNU/Linux 3.13.0-44-generic x86_64)
# retrieve and run using these commands…
# wget https://raw.githubusercontent.com/llang629/demoserver/master/installdemoclient.sh
# bash installdemoclient.sh

sudo apt-get -y update
sudo apt-get -y upgrade

# install node.js and node package manager
sudo apt-get install -y nodejs-legacy
sudo apt-get install -y npm

# install node packages
npm install http
echo "Installed node http module"

# source fast profile (for throughput testing)
source fast.profile
echo "Sourced fast profile"

# start application
nohup sudo -E ./democlient.sh | ts -i >> democlient.log
echo "Application started"
