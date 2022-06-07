//dependencies
const http = require('http');
const {reqResponseHandler} = require('./helper/reqResponseHandler')

//module wrapper
const app = {};

//config
app.config = {
    port:5000
}

//create server
app.createServer = ()=>{
    const server = http.createServer(reqResponseHandler)
    server.listen(app.config.port,()=>{
        console.log('Server running successfully on port:' + app.config.port);
    })
}

//initialize server
app.createServer()