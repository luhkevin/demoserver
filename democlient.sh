#!/bin/bash
# repeatedly runs democlient at random intervals up to MAXSLEEP seconds

MAXSLEEP=2

while true; do
    #TZ='America/Los_Angeles' date
    node democlient.js #or nodejs democlient.js depending on environment
    sleep $(( $RANDOM % $MAXSLEEP ))
done
