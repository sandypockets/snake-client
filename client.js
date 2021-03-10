const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to the game server.')
    conn.write("Name: Zac");
  });

  // Unsure if this section is correct
  conn.on('data', (data) => {
    console.log('Message from connection: ', data)
  });
  return conn;
};

module.exports = connect;