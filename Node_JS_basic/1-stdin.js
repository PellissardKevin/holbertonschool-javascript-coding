/* eslint-disable no-undef */
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function ask() {
  rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
    rl.write(`Your name is: ${answer}\n`)
    console.log('This important software is now closing');
    process.exit();
  });
}

module.exports = ask;

if (require.main === module) {
  ask();
}
