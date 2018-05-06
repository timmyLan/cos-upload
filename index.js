var http = require('http');
var path  = require('path');
var fs = require('fs');

// 启动简单的静态文件服务
http.createServer(function(req, res){
    if(req.url === '/'){
            let filePath = path.join('./index.html');
            fs.readFile(filePath,function(err,data){
                if(err){
                    res.end("<h1>500</h1>服务器内部错误！");
                }else{
                   res.writeHead(200,{'content-type':"text/html"});
                   res.end(data.toString());
                }
            });
    }else if(req.url === '/cos-js-sdk-v5.min.js'){
        let filePath = path.join('./cos-js-sdk-v5.min.js');
        fs.readFile(filePath,function(err,data){
            if(err){
                res.end("<h1>500</h1>服务器内部错误！");
            }else{
               res.writeHead(200,{'content-type':"text/javascript"});
               res.end(data.toString());
            }
        });
    }else {
        res.writeHead(404);
        res.write('404 Not Found');
        res.end();
    }
}).listen(3000);
console.log('app is listening at http://127.0.0.1:3000');
