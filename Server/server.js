const http = require('http');
const PORT = 6500

;

const app = require('./app');



const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log('Server UP')
});
