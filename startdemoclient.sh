#!/bin/bash
nohup sudo -E ./democlient.sh | ts -i >> democlient.log2 &
nohup sudo -E ./democlient.sh | ts -i >> democlient.log3 &
nohup sudo -E ./democlient.sh | ts -i >> democlient.log4 &
nohup sudo -E ./democlient.sh | ts -i >> democlient.log5 &
