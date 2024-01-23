#!/usr/bin/node
/* eslint-disable no-undef */

const request = require('request');

const url = process.argv[2];

request(url, (err, response) => {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log('code:', response.statusCode);
  }
});
