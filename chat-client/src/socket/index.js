const io = require("socket.io-client");
const clientSocket = io(`${process.env.PORT || 3000}`);
let name = 'omer';
const messageServer = (msg) => clientSocket.emit('message to server' , msg);

clientSocket.on('message from server', (msg) => {
    if(msg.userName !== name){
        const outputMessage = msg.userName ? `${msg.userName} : ${msg.text}` : msg;
        console.log(outputMessage);
    }
    messageServer({userName : name ,text : 'placeHolder'});
});

clientSocket.on('connect' , () => {
    clientSocket.emit('new user', 'omer');
})

const sendMsg = () => console.log('here');
module.exports = sendMsg;