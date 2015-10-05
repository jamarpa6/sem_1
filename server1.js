var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	if(req.url=='/' || req.url=='/index.html'){
		var ret = fs.readFileSync('./public/index.html');
		res.writeHead(200,{'Content-Type':'text/html'});
		console.log("Estoy aqui");
		console.log(ret);
		res.end(ret);
	}
	else{
		var ret = fs.readFileSync('.'+req.url);
		res.writeHead(200,{'Content-Type':'text/plain'});
		console.log("Estoy aqui");
		console.log(ret);
<<<<<<< HEAD
		res.end(ret);
	}
=======
		res.end(ret);	
	}

>>>>>>> tag_04
}).listen(9000);
