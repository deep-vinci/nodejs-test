let fs = require("fs");
let http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    fs.readFile("index.html", "utf-8", (err, data) => {
        res.end(data)
    })
}).listen(8000)
