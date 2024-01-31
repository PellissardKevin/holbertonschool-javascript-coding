/* eslint-disable no-undef */
console.log('Welcome to Holberton School, what is your name?');

const readline = require('readline');

const inputRead = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inputRead.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  process.stdin.on("keypress", function (chunk, key) {
    process.stdin.setRawMode(true);
    if (key && key.name === "c" && key.ctrl) {
      console.log('This important software is now closing');
      inputRead.close();
    }
  });

});

module.exports = inputRead;

