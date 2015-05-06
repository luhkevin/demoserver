// Tests demoserver running at hostName by sending a request to a random route
// (c)2015 Larry Lang

hostName  = process.env.DS_HOST;
spinMax   = process.env.SPINMAX || 9;

var randomNumber = function(lower_bound, upper_bound)
{
    //returns random integer between lower and upper bound
    return Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
}


spin = randomNumber(0,spinMax);

switch(spin) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    default:
        urlPath = "/"
        break;
    case 5:
    case 6:
    case 7:
        urlPath = "/other"
        break;
    case 8:
        urlPath = "/about"
        break;
    case 9:
        urlPath = "/bogus"
        break;
}

var http = require('http');   //npm install http

var options =
{
host: hostName,
path: urlPath,
method: 'GET',
port: 8080,
headers: {
    'User-Agent': 'democlient Agent/1.0'
}
};

var callback = function(response) {
    console.log("democlient: HTTP status code " + response.statusCode);
    var str = '';
    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
                str += chunk;
                });
    //the whole response has been received, so we just print it out here
    response.on('end', function () {
                // uncomment to send full HTTP response to console
                // console.log(str);
                });
}

http.request(options, callback).end();
