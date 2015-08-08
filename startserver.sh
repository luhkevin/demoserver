#!/bin/bash
nohup sudo -E nodejs demoserver.js >> demoserver.log | ts -i &

