let https = require("http");

https.createServer((req, res) => {
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    
    res.write("<h1>Hello world</h1>");  // write a response
    res.end();                          // end the response
}).listen(8080);                        // listens on 8080 port