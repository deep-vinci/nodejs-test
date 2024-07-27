const http = require("http");
const fs = require("fs");

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>Hello World</h1>');
//     console.log("Request inbound")
//   }).listen(8080);
  
fs.rename('README.mdx', 'README.md', err => {
    if (err) {
        return console.error(err)
    }
})