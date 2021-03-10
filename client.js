const net = require('net');
const { IP, PORT } = require('./constants');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to the game server.');
    conn.write("Name: Zac");
  });

  conn.on('data', (data) => {
    console.log('Message from connection: ', data);
  });
  return conn;
};

module.exports = connect;