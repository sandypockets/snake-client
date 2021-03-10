const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to the game server.')
  });

  conn.on('connect', () => {
    conn.write("Name: Zac");
  });

/* conn.on('data', () => {
    conn.write("Move: up");
    conn.write("Move: down");
    conn.write("Move: left");
    conn.write("Move: right");
  }); */

  // Unsure if this conn.on is the correct thing.
  conn.on('data', (data) => {
    console.log('Message from connection: ', data)
  });

  // Creating another event handler so the client knows when they are successfully connected to the server.

  return conn;
};

module.exports = connect;