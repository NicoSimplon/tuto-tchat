const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get("/", (req, resp) => resp.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => { 

    console.log('a user is connected');

    socket.on('disconnect', () => console.log('a user is disconnect'));

    socket.on('chat message', (msg) => {
        console.log('message recup : ' + msg);
        io.emit('chat message', msg);
    });

});

http.listen(3000, () => console.log("Server running on 3000"));