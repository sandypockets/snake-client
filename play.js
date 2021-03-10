const connect = require('./client');
console.log('Connecting ...');
connect();

// Setup interface, so we can handle user input with stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

setupInput();