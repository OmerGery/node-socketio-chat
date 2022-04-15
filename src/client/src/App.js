import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");
  const [socket, setSocket] = useState(null)
  const [val, setVal] = useState("");
  useEffect(() => {
    
    const createdSocket = socketIOClient(ENDPOINT);
    setSocket(createdSocket);
  }, []);
  const sendMsg = (msg) => {
    try {
      alert(msg);
    socket.emit('clientMsg', msg);
    } catch (e) {
      alert(e);
    }
    
  }
const onChangeHandler = (event) => {
  setVal(event.target.value);
}
  return (
    <form>
    <input value={val} onChange={onChangeHandler} ></input>
    <button onClick={() => sendMsg(val)}> send msg </button>
    </form>
  );
}

export default App;