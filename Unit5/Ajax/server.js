const express = require('express');
const http = require('http');
const url = require('url');
const serve = require('express-static')
const fs = require('fs');
const port = 3000;
const app = express();


app.use(serve('./AJAX_Basics_Project_Files/stage3/video7'));

app.listen(port, function (req, res) {
   console.log(`server is running on port ${port}`); 
});

// http.createServer(function (req, res) {
//     console.log(`server running on port ${port}`);
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//         if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         return res.end("404 Not Found");
//         }  
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();

//     });
// }).listen(port);