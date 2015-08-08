#!/bin/bash
nohup sudo -E ./democlient.sh | ts -i >> democlient.log2 &
