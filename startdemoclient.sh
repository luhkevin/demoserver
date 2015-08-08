#!/bin/bash
nohup sudo -E ./democlient.sh >> democlient.log | ts -i &
