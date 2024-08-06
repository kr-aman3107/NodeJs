const http = require('http');

const server = http.createServer((req,res) =>{
    const url=req.url;
    if(url==='/home'){
        res.write('<body><h1>Welcome Home</h1></body>');
    }
    else if(url==='/about'){
        res.write('<body><h1>Welcome to About Us page</h1></body>');
    }
    else if(url==='/node'){
        res.write('<body><h1>Welcome to my Node Project</h1></body>');
    }
});
server.listen(4000);