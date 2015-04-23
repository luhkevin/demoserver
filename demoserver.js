var servPort = process.env.DS_PORT || 8080; // default TCP port 8080

// for each URL route, import environment variable or set default for
// maximum added response latency (milliseconds) and error 503 probability (percentage)
//
// parameters for / [main]
var latencyMax_main = process.env.DS_LAT_MAIN || 1000;
var errorProb_main  = process.env.DS_ERR_MAIN || 10;
// parameters for /alt
var latencyMax_alt  = process.env.DS_LAT_ALT  || 2000;
var errorProb_alt   = process.env.DS_ERR_ALT  || 20;

// for error 503 case, import environment variable or set default for
// extra maximum added response latency (milliseconds)
var latencyMax_err  = process.env.DS_LAT_ERR  || 3000;

// example custom header
var metaVersion = process.env.DS_META_VER || "1.20(3)";

var sleep = require('sleep'); //npm install sleep
var express = require('express'); //npm install express
var app = express();

app.get('/', function (request, response) {
        console.log("Route / (main)")
        var basicSnooze = Math.round(Math.random()*latencyMax_main);
        console.log("Adding basic response latency of  "+basicSnooze+" milliseconds");
        sleep.usleep(basicSnooze*1000);
        // respond with simulated overload
        if(Math.random()*100 <= errorProb_main) {
        var errorSnooze = Math.round(Math.random()*latencyMax_err);
        sleep.usleep(errorSnooze*1000);
        console.log("Adding error response latency of  "+errorSnooze+" milliseconds");
        console.log("Responding with 503 error");
        var totalSnooze = basicSnooze+errorSnooze;
        response.writeHead(503, {"Content-Type": "text/plain"});
        response.write("503 Service Unavailable\n\nAdded response latency "+totalSnooze+" milliseconds\n");
        response.end();
        // respond normally
        } else {
        console.log("Responding with normal page");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<!DOCTYPE html><html><head>");
        response.write("<title>Demo Server Main</title>");
        response.write("<meta version=\""+metaVersion+"\">");
        response.write("</head>");
        response.write("<body><center>");
        response.write("<b>Surprise!</b><br>Something completely different<br>");
        if (basicSnooze>0) {response.write("but you had to wait an extra "+basicSnooze+" milliseconds<br><br>"); }
        response.write("<img src=http://lorempixel.com/200/200/>");
        response.write("<br><br><i>Comments to <A HREF=mailto:demoserver@larrylang.net>Larry Lang<A></i>");
        response.write("</body></html>");
        response.end();
        }});

app.get('/alt', function (request, response) {
        console.log("Route /alt")
        var basicSnooze = Math.round(Math.random()*latencyMax_alt);
        console.log("Adding basic response latency of  "+basicSnooze+" milliseconds");
        sleep.usleep(basicSnooze*1000);
        // respond with simulated overload
        if(Math.random()*100 <= errorProb_alt) {
        var errorSnooze = Math.round(Math.random()*latencyMax_err);
        sleep.usleep(errorSnooze*1000);
        console.log("Adding error response latency of  "+errorSnooze+" milliseconds");
        console.log("Responding with 503 error");
        var totalSnooze = basicSnooze+errorSnooze;
        response.writeHead(503, {"Content-Type": "text/plain"});
        response.write("503 Service Unavailable\n\nAdded response latency "+totalSnooze+" milliseconds\n");
        response.end();
        // respond normally
        } else {
        console.log("Responding with normal page");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<!DOCTYPE html><html><head>");
        response.write("<title>Demo Server Alt</title>");
        response.write("<meta version=\""+metaVersion+"\">");
        response.write("</head>");
        response.write("<body><center>");
        response.write("<b>Cheers!</b><br>Everyone loves instant gratification<br>");
        if (basicSnooze>0) {response.write("but you had to wait an extra "+basicSnooze+" milliseconds<br><br>"); }
        response.write("<img src=http://larrylang.net/images/LarryLangBeer.jpg>");
        response.write("<br><br><i>Comments to <A HREF=mailto:demoserver@larrylang.net>Larry Lang<A></i>");
        response.write("</body></html>");
        response.end();
        }});

var server = app.listen(servPort, function () {
                        var host = server.address().address;
                        var port = server.address().port;
                        console.log('Demo server listening at http://%s:%s', host, port);
                        });
