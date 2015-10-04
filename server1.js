var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	var ret = fs.readFileSync('./test.txt');
	res.writeHead(200,{'Content-Type':'text/plain'});
	console.log("Estoy aqui");
	console.log(ret);
	res.end(ret);
}).listen(9000);
