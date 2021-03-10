const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // Unsure if this conn.on is the correct thing.
  conn.on('data', (data) => {
    console.log('Message from connection: ', data)
  });

  return conn;
};

module.exports = connect;