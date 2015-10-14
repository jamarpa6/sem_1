var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	if(req.url=='/' || req.url=='/index.html'){
		var ret;
		try{
			ret = fs.readFileSync('./public/index.html');
		} catch(e){
			res.writeHead(404,{'Content-Type':'text/html'});
			res.end("<html><h1>Error 404 File not found</h1></html>");
			console.log("Error capturado");
		}
		try{
			res.writeHead(200,{'Content-Type':'text/html'});
			res.end(ret);
		} catch(e){
			res.writeHead(500,{'Content-Type':'text/html'});
			res.end("<html><h1>Error 500 Internal server error</h1></html>");		
		}
	}

	else{	var ret;
		try{
		 	ret = fs.readFileSync('.'+req.url);
		} catch(e){
			res.writeHead(404,{'Content-Type':'text/html'});
			res.end("<html><h1>Error 404 File not found</h1></html>");
		}
		try{
			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end(ret);
		} catch(e){
			res.writeHead(500,{'Content-Type':'text/html'});
			res.end("<html><h1>Error 500 Internal server error</h1></html>");

		}
	}
}).listen(9000);
