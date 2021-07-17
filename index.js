const WebSocket = require('ws');

const parseMentalCommand = (message) => {
  try {
    const { type, magnitude } = message;
    return {
      "com": [ type, magnitude ],
      "sid":
        "e4b35ecc-c9e2-413b-8252-00570bba1704",
      "time": new Date().getTime()
    }
  } catch (error) {
    console.log(`Invalid mental command; please provide a {message} argument with a mental command type and magnitude. Error: ${error}`)
  }
}

const wss = new WebSocket.Server({
  port: 4242
});

console.log('Cortex Mock Web Socket Server instantiated.');

wss.on('connection', function connection(ws){
  console.log('New client connection established.');

  ws.on('message', function incoming(message){
    const output = parseMentalCommand(message);
    console.log(`Received: ${message}.\nOutputting: ${output}`);
  });

  ws.send('Connected.')
});
