var http = require('http');
var text = require('upper-case');

// http.createServer(function(req, res){
//     res.write(text.upperCase("Hello World"));
//     res.end();
// }).listen(8080);

const server = http.createServer((req, res) => {
    res.write(text.upperCase("Hello World"));
    res.end();
})
server.listen(8080);