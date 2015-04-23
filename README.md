# demoserver
A demonstration web server that injects random latency and possible service-unavailable errors

Use environment variables to adjust server parameters, with defaults

Web server TCP port [sudo -E required for TCP port 80]
>DS_PORT=8080

For each URL route,  
maximum added response latency (milliseconds) and  
error 503 probability (percentage)

Parameters for / [main]
>DS_LAT_MAIN=1000  
>DS_ERR_MAIN=10

Parameters for /alt
>DS_LAT_ALT=2000  
>DS_ERR_ALT=20

For error 503 case, 
extra maximum added response latency (milliseconds)
>DS_LAT_ERR=3000

Example custom version header
>DS_META_VER="1.20(3)"

