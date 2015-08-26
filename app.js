var express = require('express');
var app = express();
var boots = require('bootstrap');

app.use(express.static(__dirname + '/resume'));
app.use(express.static(__dirname + '/bootstrap/js/*.js'));

app.get('/', function (req, res){
    res.writeHead(200);
    res.write('hello world \n');
    res.end();
}).listen(process.env.PORT || 3000);

