/**
 * Created by yinchuanjiang on 2018/2/28.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function (request,response) {
    response.sendFile(__dirname+'/index.html')
})

io.on('connection',function (socket) {
    //console.log('a user connect');
    socket.on('message.chat',function (message) {
        io.emit('message.chat',message);
    })
});

http.listen(3000,function () {
    console.log('Server start');
})