var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	if(req.url=='/' || req.url=='/index.html'){
		var ret = fs.readFile('./public/index.html',function (err,ret){
	
		if (err) {
			res.writeHead(404,{'Content-Type':'text/html'});
			res.end("<html><h1>Error 404 File not found</h1></html>");
			console.log("Error capturado");
		}
		else {	try{
				res.writeHead(200,{'Content-Type':'text/html'});
				res.end(ret);
			} catch(e){
				res.writeHead(500,{'Content-Type':'text/html'});
				res.end("<html><h1>Error 500 Internal server error</h1></html>");
			}
		}
		});
	}
	else{
		var ret = fs.readFile('.'+req.url,function (err,ret){
	
		if (err) {
			res.writeHead(404,{'Content-Type':'text/html'});
			res.end("<html><h1>Error 404 File not found</h1></html>");
			console.log("Error capturado");
		}

		else {	try{
				res.writeHead(200,{'Content-Type':'text/plain'});
				res.end(ret);
			} catch(e){
				res.writeHead(500,{'Content-Type':'text/html'});
				res.end("<html><h1>Error 500 Internal server error</h1></html>");				
			}
		}
		}	
	
		);
	}
	
	
}).listen(9000);
