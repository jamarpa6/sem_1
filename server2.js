var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
	var ret = fs.readFileSync('.'+req.url);
	res.writeHead(200,{'Content-Type':'text/plain'});
	console.log("Estoy aqui");
	console.log(ret);
	res.end(ret);
}).listen(9000);