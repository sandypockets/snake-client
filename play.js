const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');
const conn1 = connect();

setupInput(conn1);