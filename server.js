const http = require("http");
require('dotenv').config();

const myBio = {  
    "slackUsername": "Mofentan Afinotan", 
    "backend": true, 
    "age": 20, 
    "bio": "Mofe is a full-stack web developer and medic, frequently shuttling both worlds to help people lead better lives and businesses." 
}

const server = http.createServer(function(req, res){
    if (req.url === '/stage1' && req.method === 'GET') {
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(myBio));
    }
});

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || 'localhost'

server.listen(PORT, HOST);

if (server.listen) console.log(`Server is listening on ${PORT}`);