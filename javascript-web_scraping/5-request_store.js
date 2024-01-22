#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];


request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  fs.writeFile(path, body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    }
  });
});
