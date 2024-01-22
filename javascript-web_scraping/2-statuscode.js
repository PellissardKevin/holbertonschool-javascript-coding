#!/usr/bin/node
//Write a script that display the status code of a GET request.

const request = require('request');

const url = process.argv[2];

request(url, (error, response) => {
  if (err) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
