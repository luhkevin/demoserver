# demoserver
A demonstration web server that injects random latency and possible service-unavailable errors

Use environment variables to adjust server parameters, with defaults

Web server TCP port [sudo -E required for TCP port 80]
>DS_PORT=8080

For each URL route,  
error 503 probability (percentage) and  
maximum added response latency (milliseconds)

Parameters for / [main]
>DS_ERR_MAIN=10  
>DS_LAT_MAIN=1000

Parameters for /alt
>DS_ERR_ALT=20  
>DS_LAT_ALT=2000 

Parameters for /author
>DS_ERR_ALT=50  
>DS_LAT_ALT=0

For error 503 case, 
extra maximum added response latency (milliseconds)
>DS_LAT_ERR=3000

Example custom version header
>DS_META_VER="1.20(3)"
