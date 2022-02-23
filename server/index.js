
const app = require('express')();
const server = require('http').createServer(application)
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send(`__dirname/chat-client/src/App.js`)
  })
server.listen(PORT, () => {
   console.log('Server is running on port: ' + PORT);
});
 
io.on('connection', (socket) => {
 
   socket.on('disconnect', () => {
       console.log(`User disconnected - Username: ${socket.username}`);
   });
 
   socket.on('message to server', (msg) => {
       console.log(msg);
       io.local.emit('message from server', msg);
   });
 
   socket.on('new user', (userName) => {
       console.log(`User connected ${userName}`);
       io.emit('message from server', `new user : hello to ${userName}!`);
   });
});