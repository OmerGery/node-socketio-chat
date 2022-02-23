const moment = require('moment-timezone');

const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server);
const PORT = process.env.PORT || 80;
const getTimeNow = () => `[${moment().tz('Asia/Jerusalem').format('HH:mm:ss')}]`;
server.listen(PORT, () => {
   console.log(`Server is running on port: ${PORT}`);
});
app.get('/', (req,res) => {
    res.sendFile('page.html', {root: './src/client'});
})
 
io.on('connection', (socket) => {
 
   socket.on('disconnect', () => {
       console.log(`User disconnected - Username: ${socket.username}`);
   });

 
   socket.on('message to server', ({userName, msg}) => {
       io.local.emit('message from server',`${getTimeNow()} ${userName} : ${msg} `);
   });
 
   socket.on('new user', (userName) => {
       console.log(`User connected ${userName}`);
       io.emit('message from server', `${getTimeNow()} ${userName} Joined the chat 🐿️`);
   });
});