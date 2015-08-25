var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.writeHead(200);
    res.write('hello world \n');
    res.end();
}).listen(process.env.PORT || 3000);

app.use(express.static('resuem'));