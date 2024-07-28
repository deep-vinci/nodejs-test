const http = require("http");
const myDateTime = require("./date-time");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Hello World</h1>}`);
    console.log("Request inbound")
  }).listen(8080);