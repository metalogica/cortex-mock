var WebSocket = require('ws');

var wss = new WebSocket.Server({
  port: 4242
});

wss.on('connection', function connection(ws){
  ws.on('message', function incoming(message){
    console.log(`Received: ${message}.`);
  });

  ws.send('Connected.')
});
