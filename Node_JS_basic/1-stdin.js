/* eslint-disable no-undef */
function welcome() {
  console.log('Welcome to Holberton School, what is your name?\n');
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString()}`);
    console.log('This important software is now closing\n');
    process.exit();
  });
}

module.exports = welcome;

if (require.main === module) {
  welcome();
}
