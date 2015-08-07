###########################################################################
# .profile updates for demoserve.js
#
# set web server TCP port
export DS_PORT=8080

# for each URL route,
# error 503 probability (percentage) and
# maximum added response latency (milliseconds)
# parameters for / [main]
export DS_ERR_MAIN=0
export DS_LAT_MAIN=50

# parameters for /other
export DS_ERR_OTHER=20
export DS_LAT_OTHER=100
export DS_LAT_BASE_OTHER=100

# parameters for /about
export DS_ERR_ABOUT=0
export DS_LAT_ABOUT=80

# for error 503 case, import environment variable or set default for
# extra maximum added response latency (milliseconds)
export DS_LAT_ERR=200

