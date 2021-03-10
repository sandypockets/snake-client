// Keyboard inputs
const handleUserInput = (key)=> {
  if (key === '\u0003') {
    console.log('You exited the game.');
    process.exit();
  } else if (key === 'w') {
      setInterval(() => {
        conn.write("Move: up");
      }, 600);
    } else if (key === 'a') {
      setInterval(() => {
        conn.write("Move: left");
      }, 600);
    } else if (key === 's') {
      setInterval(() => {
        conn.write("Move: down");
      }, 600);
    } else if (key === 'd') {
      setInterval(() => {
        conn.write("Move: right");
      }, 600);
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