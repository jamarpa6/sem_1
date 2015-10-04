var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	var ret = fs.readFile('./test.txt',function(err,ret){
	if (err) console.log("Error");
	else {
		res.writeHead(200,{'Content-Type':'text/plain'});
		console.log("Estoy aqui");
		console.log(ret);
		res.end(ret);
	}
});
	
}).listen(9000);
