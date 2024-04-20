import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [data,setData]=useState('')

useEffect(()=>{
const ws=new WebSocket('ws://localhost:3100')

ws.onmessage=(e)=>{
  setData(e.data)
};
return ()=>{
  ws.close()
}
},[])


  return (
    <div className="App">
    <h1>Websocket Demo</h1>
    <p>Data from websocket: {data}</p>
    </div>
  );
}

export default App;
