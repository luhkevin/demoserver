#!/bin/bash
# repeatedly runs democlient at random intervals up to MAXSLEEP seconds

MAXSLEEP=1
DELAY=0.01

while true; do
    #TZ='America/Los_Angeles' date
    node democlient.js #or nodejs democlient.js depending on environment
    #sleep $(( $RANDOM % $MAXSLEEP ))
    sleep $(DELAY)
done
