// Tests demoserver running at hostName by sending a request to a random route
// (c)2015 Larry Lang

hostName  = process.env.DS_HOST;
spinMin   = process.env.VERSION == "slow" ? 0 : 8;
spinMax   = process.env.VERSION == "slow" ? 7 : 8;

var randomNumber = function(lower_bound, upper_bound)
{
    //returns random integer between lower and upper bound
    return Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
}


spin = randomNumber(spinMin,spinMax);
console.log("spin is",spin);

switch(spin) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        urlPath = "/"
        break;
    case 7:
        urlPath = "/about"
        break;
    case 8:
        urlPath = "/other"
        break;
    case 9:
        urlPath = "/bogus"
        break;
    default:
        urlPath = "/"
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
