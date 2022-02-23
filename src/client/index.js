// const io = require("socket.io-client");
// const clientSocket = io(`${process.env.PORT || 80}`);
// let name = 'omer';
// const messageServer = (msg) => {
//     alert('hi'); 
//     alert(clientSocket.port); 
//     clientSocket.emit('message to server' , msg);
// };

// clientSocket.on('message from server', (msg) => {
//     if(msg.userName !== name){
//         const outputMessage = msg.userName ? `${msg.userName} : ${msg.text}` : msg;
//         console.log(outputMessage);
//     }
//     messageServer({userName : name ,text : 'placeHolder'});
// });

// clientSocket.on('connect' , () => {
//     clientSocket.emit('new user', 'omer');
// })

function sendMsg () { alert('bla');}