/* eslint-disable no-undef */
function welcome() {
  process.stdout.write('Welcome to Holberton School, what is your name? \n')
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', data => {
    const userInput = data.toString();
    process.stdout.write(`Your name is: ${userInput.toString()}`);
    process.stdout.write('This important software is now closing\n')
    process.exit();
  });
}

module.exports = welcome;

if (require.main === module) {
  welcome();
}
