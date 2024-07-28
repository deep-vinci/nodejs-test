let https = require("http");
let url = require("url");

https.createServer((req, res) => {
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    // let q = url.parse(req.url, true).query;
    // console.log(q.)
    res.end(JSON.stringify(url.parse(req.url, true).query))

}).listen(8080);                        // listens on 8080 port