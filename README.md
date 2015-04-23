# demoserver
A demonstration web server that injects possible service-unavailable errors
and random latency.

For each URL route, environment variables adjust parameters from defaults.
Parameters include error 503 probability (percentage) 
and maximum added response latency (milliseconds).

Environment variable can adjust web server TCP port from default 8080.
To start with TCP port 80, use sudo -E.
