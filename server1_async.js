var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	if(req.url=='/' || req.url=='/index.html'){
		var ret = fs.readFile('./public/index.html',function (err,ret){
	
		if (err) console.log("Error");

		else {
			res.writeHead(200,{'Content-Type':'text/html'});
			console.log("Estoy aqui");
			console.log(ret);
			res.end(ret);
		}
		});
	}
	else{
		var ret = fs.readFile('.'+req.url,function (err,ret){
	
		if (err) console.log("Error");

		else {
			res.writeHead(200,{'Content-Type':'text/plain'});
			console.log("Estoy aqui");
			console.log(ret);
			res.end(ret);
		}
		}	
	
		);
	}
	
	
}).listen(9000);
