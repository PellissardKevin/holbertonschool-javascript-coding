/* eslint-disable no-undef */
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((result) => {
        res.write(`${result.totalNumber}\n`);
        res.write(`${result.CS}\n`);
        res.write(`${result.SWE}`);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
}).listen(1245);
module.exports = app;
