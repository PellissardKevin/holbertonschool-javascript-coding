/* eslint-disable no-undef */
// Enter any texts ( User input)
process.stdout.write('Welcome to Holberton School, what is your name? \n')
process.stdin.on('data', data => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.stdout.write('This important software is now closing\n')
  process.exit();
});
