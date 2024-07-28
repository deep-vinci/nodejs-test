let https = require("http");
let url = require("url");

https.createServer((req, res) => {
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end(req.url)
    // res.write("<h1>Hello world</h1>");  // write a response
    // res.end();                          // end the response
}).listen(8080);                        // listens on 8080 port