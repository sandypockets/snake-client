const cannedMessages = require('./constants')

// Keyboard inputs
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('You exited the game.');
    process.exit();
  } else if (key === 'w') {
    conn.write("Move: up");
  } else if (key === 'a') {
    conn.write("Move: left");
  } else if (key === 's') {
    conn.write("Move: down");
  } else if (key === 'd') {
    conn.write("Move: right");
  } else if (key === 'h') {
    conn.write(`Say: ${cannedMessages[0]}`);
  } else if (key === 'y') {
    conn.write(`Say: ${cannedMessages[1]}`);
  } else if (key === 'n') {
    conn.write(`Say: ${cannedMessages[2]}`);
  } else if (key === 'c') {
    conn.write(`Say: ${cannedMessages[3]}`);
  }
};

// Stores the active TCP connection object
let connection;
// Setup interface - handles user input with stdin
const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setupInput;