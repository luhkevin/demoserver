#!/bin/bash
# repeatedly runs democlient at random intervals up to MAXSLEEP seconds

MAXSLEEP=10

while true; do
    TZ='America/Los_Angeles' date
    node democlient.js | tee democlient.log #or nodejs democlient.js depending on environmen
    sleep $(( $RANDOM % $MAXSLEEP ))
done
