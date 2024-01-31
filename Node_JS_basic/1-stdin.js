/* eslint-disable no-undef */
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function ask() {
  rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
    process.stdin.setRawMode(true);
    process.stdin.on("keypress", function(chunk, key) {
      if(key && key.name === "c" && key.ctrl) {
        console.log('This important software is now closing');
        process.exit();
      }
    });
    rl.write(`Your name is: ${answer}\n`)
  })
}

module.exports = ask;

if (require.main === module) {
  ask();
}
