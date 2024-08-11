const http = require('http');


const server = http.createServer((req,res) =>{
    console.log("server is running on port " + 4000);
    res.setHeader("Content-Type" , 'text/html');
    res.write('<html>');
    res.write('<head><title>Frist Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>')
});
server.listen(4000)