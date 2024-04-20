const express=require("express")
const http=require("http")
const WebSocket=require("ws")

const app=express()
const server=http.createServer(app);
const wss=new WebSocket.Server({server})


const port=3100

wss.on('connection',(ws)=>{
    //will use later for real tuime functionality
// ws.on('message',(message)=>{
//     console.log('received: %s',message);
// });
setInterval(()=>{
    const data=Math.random().toString()
    ws.send(data)
},1000)
})

server.listen(port,()=>{
    console.log(`Server live at ${port}`);
})