#!/usr/bin/node
//Write a script that writes a string to a file

const fs = require('fs');
const path = process.argv[2];
const string = process.argv[3];


fs.writeFile(path, string, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
