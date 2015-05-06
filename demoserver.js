// A demonstration web server that injects possible service-unavailable errors and random latency
// (c)2015 Larry Lang

var servPort = process.env.DS_PORT || 8080; // default TCP port 8080

// for each URL route, import environment variables or set defaults for
// error 503 probability (percentage) and maximum added response latency (milliseconds)
//
// parameters for / [main]
var errorProb_main   = process.env.DS_ERR_MAIN  || 10;
var latencyMax_main  = process.env.DS_LAT_MAIN  || 1000;

// parameters for /other
var errorProb_other  = process.env.DS_ERR_OTHER || 20;
var latencyMax_other = process.env.DS_LAT_OTHER || 2000;
var latencyBase_other = process.env.DS_LAT_BASE_OTHER || 2000;	     

// parameters for /about
var errorProb_about  = process.env.DS_ERR_ABOUT || 50;
var latencyMax_about = process.env.DS_LAT_ABOUT || 0;

// for error 503 case, import environment variable or set default for
// extra maximum added response latency (milliseconds)
var latencyMax_err   = process.env.DS_LAT_ERR   || 3000;

// version assembled from parameters
var metaVersion =
    "m"+errorProb_main+","+latencyMax_main+
    "o"+errorProb_other+","+latencyMax_other+
    "a"+errorProb_about+","+latencyMax_about+
    "e"+latencyMax_err;

console.log("Starting Version "+metaVersion);

var sleep = require('sleep'); //npm install sleep
var express = require('express'); //npm install express

var app = express();
app.set('view engine', 'ejs'); // set the view engine to ejs


// Logger 
function logger(request) {
        console.log("Client",request.connection.remoteAddress, request.headers['user-agent']);
        console.log("Version",metaVersion,"Route:", request.path);
}

// renders the response
function renderResponse(response, viewparams, errorProb, latencyMax, latencyBase) {
        if(Math.random()*100 <= errorProb) {
        	// respond with simulated overload
        	var snooze = Math.round(latencyBase + Math.random()*latencyMax) + Math.round(Math.random()*latencyMax_err); //basic latency plus error latency
	        sleep.usleep(snooze*1000);
       		console.log("Responding with 503 error after added latency of  "+snooze+" milliseconds");
	        sleep.usleep(snooze*1000);
        	response.status(503);
		response.render('pages/error', {
				metaVersion: metaVersion,
				snooze: snooze
			});
        } else {
        	// respond normally
        	var snooze = Math.round(latencyBase + Math.random()*latencyMax);
        	console.log("Responding with normal page after added latency of "+snooze+" milliseconds");
        	sleep.usleep(snooze*1000);
		response.render('pages/normal', {
				metaVersion: metaVersion,
				snooze: snooze,
				greeting: viewparams.greeting,
				tagline: viewparams.tagline,
				imageURL: viewparams.imageURL
				});
		}
}

//Regular 
app.get('/', function (request, response) {
	logger(request);
	viewparams = {
			greeting: 'Welcome', 
			tagline: 'You\'ve come to the right place', 
			imageURL: 'http://gencoresystems.com/wp-content/uploads/2014/09/logo.png'
	}
	renderResponse(response, viewparams, errorProb_main, latencyMax_main, 0)
});

//Really slow
app.get('/other', function (request, response) {
	logger(request);
	viewparams = {
                        greeting: 'Surprise!',
                        tagline: 'Something completely different',
                        imageURL: 'http://lorempixel.com/200/200/'
	}
	renderResponse(response, viewparams, errorProb_other, latencyMax_other, latencyBase_other)
});

//Fast
//Never returns 503
app.get('/about', function (request, response) {
	logger(request);
	viewparams = {
                        greeting: 'Cheers!',
                        tagline: 'Everyone likes instant gratification',
                        imageURL: 'http://larrylang.net/images/LarryLangBeer.jpg'
	}
	renderResponse(response, viewparams, errorProb_about, latencyMax_about, 0)
});

var server = app.listen(servPort, function () {
                        var host = server.address().address;
                        var port = server.address().port;
                        console.log('Server listening at http://%s:%s', host, port);
                        });
