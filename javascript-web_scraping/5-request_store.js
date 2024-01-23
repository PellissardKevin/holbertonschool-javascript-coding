#!/usr/bin/node
/* eslint-disable no-undef */

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request.get(url, (error, response, body) => {
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
