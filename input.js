
const handleUserInput = (key)=> {
  if (key === '\u0003') {
    console.log('You exited the game.');
    process.exit();
  }
};

  // Setup interface, so we can handle user input with stdin
  const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  };

  module.exports = setupInput;